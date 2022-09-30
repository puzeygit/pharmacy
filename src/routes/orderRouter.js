import express from 'express';
import Order from '../components/Order';

const orderRouter = express.Router();

orderRouter.post('/:id', async (req, res) => {
  const { id } = req.params;
  const currUser = req.session.user.id;
  // const {userId} = req.session.user.id
  const order = await Order.create({ user_id: currUser, treatment_id: id });
  res.sendStatus(200);
});

export default orderRouter;
