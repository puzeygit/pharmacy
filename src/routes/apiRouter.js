import express from 'express';
import bcrypt from 'bcrypt';
import { User, Treatment } from '../../db/models';

const nodemailer = require('nodemailer');

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
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASS,
      },
    });
    const { name, password, email } = req.body;
    if (name && password && email) {
      try {
        const user = await User.create({
          ...req.body, password: await bcrypt.hash(password, 10),
        });
        const currUser = { id: user.id, name: user.name, email: user.email };

        const mailOptions = {
          from: 'socialpharmacyelbrus@gmail.com',

          to: req.body.email,
          subject: 'Регистрация на сайте',
          text: 'Поздравляем с регистрацией на сайте аптеки',
        };

        transporter.sendMail(mailOptions);

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

// apiRouter.get('/treatments', async (req, res) => {
//   const treatments = await Treatment.findAll();
//   res.json(treatments);
// });

apiRouter.get('/:id', async (req, response) => {
  const { id } = req.params;
  const rowQuery = await Treatment.findByPk(id);
  const dataItem = JSON.parse(JSON.stringify(rowQuery));
  // const dataItem = Object.keys(data).map((key) => ({ [key]: data[key] }));
  // console.log('data', data);
  // console.log('dataItem', dataItem);
  response.json(dataItem);
});

export default apiRouter;
