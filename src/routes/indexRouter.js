import express from 'express';
import {Treatment} from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Treatment.findAll();
  const treatments = JSON.parse(JSON.stringify(data))
  const datas  = treatments.map(item => ({
    id: item.id,
    title: item.title.split(' ')[0],
    subtitle: item.title,
    img: item.img,
    price: item.price,
    body: item.body.split('\n')
    .map((item) => item.trim())
    .filter((item) => item !== '')
  }))
  
  for (let j = 0; j < datas.length; j += 1){
    const arr1 = []
    const arr2 = []
    let counter = 1
    while(datas[j].body[counter] !== 'Способ применения и дозы'){
    arr1.push(datas[j].body[counter])
    counter += 1
  }
  // console.log(arr1)

  // const index = datas[j].body.findIndexOf(el => el === 'Способ применения и дозы')
  let index = 0
    for (let k =0; k < datas[j].body.length; k += 1) {
      if (datas[j].body[k] === 'Способ применения и дозы' ) {
        index = k
      }
    }

  for(let i = index + 1 ; i < datas[j].body.length; i += 1){
    arr2.push(datas[j].body[i])
  }
  
  datas[j].body = {[datas[j].body[0]]: arr1, [datas[j].body[index]]: arr2}
  }

 
  // {body[0]: arr1, body[index]: arr2}
  console.log(datas);
  res.render('Layout', {datas});
});

export default router;
