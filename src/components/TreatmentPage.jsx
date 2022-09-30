import React, { useEffect, useState } from 'react';
import PrevCard from './PrevCard';

function TreatmentPage({ data }) {
  const [currTreatments, setCurrTreatments] = useState(data || []);
  const getPrice = (obj) => {
    const cartObj = obj;
    cartObj.amount = 1;
    const cart = localStorage.getItem('cart');
    if (cart) {
      const parsedCart = JSON.parse(cart);
      const item = parsedCart.find((el) => el.title === cartObj.title);
      if (item) {
        item.amount += 1;
      } else {
        parsedCart.push(cartObj);
      }
      localStorage.setItem('cart', JSON.stringify(parsedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([cartObj]));
    }
  };
  return (
    <div>
      <div className="row row-cols-1 row-cols-xl-5 row-cols-md-3  row-cols-sm-2 row-cols-xs-1 g-3 mb-3 mt-3">
        {data?.map((item) => <PrevCard key={item.id} dataItem={item} getPrice={getPrice}/>)}
      </div>

    </div>
  );
}

export default TreatmentPage;
