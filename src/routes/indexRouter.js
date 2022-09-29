import express from 'express';

import { Treatment } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const rowData = await Treatment.findAll();
  // console.log('------',JSON.parse(JSON.stringify(rowData)), )

  const treatments = JSON.parse(JSON.stringify(rowData))
  const data  = treatments.map(item => ({
    id: item.id,
    title: item.title.split(' ')[0],
    subtitle: item.title,
    img: item.img,
    price: item.price,
    body: item.body.split('\n')
    .map((item) => item.trim())
    .filter((item) => item !== '')
  }))
//  console.log(data);
  for (let j = 0; j < data.length; j += 1){
    const arr1 = []
    const arr2 = []
    let counter = 1
    console.log({kkk:data[j].body[counter]});
    while(data[j].body[counter] !== 'Способ применения и дозы'){
    arr1.push(data[j].body[counter])
    counter += 1
  }
  // console.log();



  // const index = data[j].body.findIndexOf(el => el === 'Способ применения и дозы')

  let index = 0
    for (let k =0; k < data[j].body.length; k += 1) {
      if (data[j].body[k] === 'Способ применения и дозы' ) {

        index = k
      }
    }
console.log(data[j].body[k]);
  // for(let i = index + 1 ; i < data[j].body.length; i += 1){
  //   arr2.push(data[j].body[i])
  // }
  

  // data[j].body = {[data[j].body[0]]: arr1, [data[j].body[index]]: arr2}

  }
// console.log(data)
  res.render('Layout', {data});
});

export default router;
