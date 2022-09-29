import express from 'express'
// import { Treatment } from '../../db/models';
import Order from '../components/Order';


const orderRouter = express.Router();

orderRouter.post('/:id', async (req, res) => {
    const {id} = req.params
    console.log(req.session.user.id);
    console.log('----');
    const currUser = req.session.user.id
    // const {userId} = req.session.user.id
    const order = await Order.create({ user_id: currUser, treatment_id: id})
    console.log(order)
    res.sendStatus(200)

  })
 
export default orderRouter