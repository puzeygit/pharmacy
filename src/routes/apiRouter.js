import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const apiRouter = express.Router();

apiRouter.route('/edit')
  .patch(async (req, res) => {
    await User.update(req.body, { where: {id: req}})
  })

  apiRouter.route('/new')
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    console.log(req.body)
    if (name && password && email) {
      try {
        const user = await User.create({
          ...req.body, password: await bcrypt.hash(password, 10),
        });
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      } catch {
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(401);
    }
  });

  apiRouter.route('/auth')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });
  apiRouter.route('/logout')
  .get((req, res) => {
    console.log(req.session);
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

export default apiRouter;
