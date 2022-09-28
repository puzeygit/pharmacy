import express from 'express';
import { User } from '../db/models'

const apiRouter = express.Router();

apiRouter.route('/new')
  .post(async (req, res) => {
    // const {name, email, pass} = req.body
    const user = await User.create({...req.body })
    // const user = await User.create({ name: name})
    res.sendStatus(200)
  })

// apiRouter.get('/', (req, res) => {

// })

export default apiRouter;
