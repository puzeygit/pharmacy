import React, {useState, useEffect} from 'react';

import Item from './Item';

const Order = ({data}) => {
  const [result, setResult] = useState(0);
  useEffect(()=> {
    const res = data.reduce((acc, el)=>{
      return acc += el.price;
    }, 0)
  setResult(res);
  })

  return (
    <>
    <ul className="list-group">
      {data?.map((value)=> <Item key={value.id} data={value}/>)}
    </ul>
    <hr className='predict' size="5"/>
    <div className='row d-flex justify-content-between'>
      <div className="col fs-3">
        Сумма Вашего заказа: 
      </div>
      <div className="col text-end pb-4">
        <div className='fs-2'>{result} рублей</div>
      </div>
    </div>
    </> 
  );
}

export default Order;
