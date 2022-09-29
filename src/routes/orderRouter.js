import express from 'express'
import { Treatment } from '../../db/models';


const orderRouter = express.Router();

orderRouter.get('/:id', async (req, res) => {
    const treatment = await Treatment.findByPk({ where: { id: req.params.id } });
    res.render('Layout', { treatment });
  })
 
export default orderRouter