import express from 'express';
import {Treatment } from '../../db/models'

const router = express.Router();

router.get('/',  async(req, res) => {
  const treatment = await Treatment.findAll()
  res.render('Layout', {treatment});
});

export default router;
