import express from 'express';
import bcrypt from 'bcrypt';
import { User, Treatment } from '../../db/models';

const apiRouter = express.Router();

apiRouter.route('/edit')
  .patch(async (req, res) => {
    await User.update(req.body, { where: { id: req.session.user.id } });
    // const user = await User.findOne({ where: { id: req.session.user.id } });
    res.sendStatus(200);
  })
  .get(async (req, res) => {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.json(user);
  });

apiRouter.route('/new')
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    if (name && password && email) {
      try {
        const user = await User.create({
          ...req.body, password: await bcrypt.hash(password, 10),
        });
        const currUser = { id: user.id, name: user.name, email: user.email };
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
        const currUser = { id: user.id, name: user.name, email: user.email };
        req.session.user = currUser;
        return res.json(currUser);
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });
apiRouter.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

apiRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const dataItem = await Treatment.findByPk(id);
  res.json(dataItem);
});

export default apiRouter;
