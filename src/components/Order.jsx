import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LiOrderItem from './LiOrderItem';
import OrderResult from './OrderResult';

function Order({ currUser }) {
  const [count, setCount] = useState([]);
  const [result, setResult] = useState(0);
  const [bucket, setBucket] = useState([]);

  useEffect(() => {
    const myStorage = JSON.parse(localStorage.getItem('cart')).flat();
    setBucket(myStorage);
  }, []);

  const orderArr = JSON.parse(localStorage.getItem('cart'));
  useEffect(() => {
    const res = orderArr.reduce((acc, el) => acc += el.price * el.amount, 0);
    setResult(res);
  });
  const increaseHandler = (countObj) => {
    const arr = JSON.parse(localStorage.getItem('cart'));
    const obj = arr.find((el) => el.id === countObj.id);
    obj.amount += 1;
    const newArr = arr.map((el) => (el.id === obj.id ? { ...el, amount: obj.amount } : el));
    localStorage.setItem('cart', JSON.stringify(newArr));
    setCount(newArr);
  };

  const decreaseHandler = (countObj) => {
    const arr = JSON.parse(localStorage.getItem('cart'));
    const obj = arr.find((el) => el.id === countObj.id);
    if (obj.amount > 1) { obj.amount -= 1; }
    const newArr = arr.map((el) => (el.id === obj.id ? { ...el, amount: obj.amount } : el));
    localStorage.setItem('cart', JSON.stringify(newArr));
    setCount(newArr);
  };

  const navigateToMain = useNavigate();
  const deleteHandler = () => {
    localStorage.clear();
    navigateToMain('/');
  };
  const checkHandler = () => {
    let resText = '';
    const text = `Здравствуйте, уважемый(ая) ${currUser.name}!\nВаш заказ:\n`;
    const data = JSON.parse(localStorage.getItem('cart'));
    const newData = data.reduce((acc, item, index) => acc += `${index + 1}. ${item.title} в количестве ${item.amount} шт.\n`, '');
    resText = `${text + newData}\nОбщая сумма вашего заказа ${result}`;
  };

  return (
    <div>
      <div>
        <ul className="list-group mb-5 mt-5">
          {orderArr?.map((el) => (<LiOrderItem key={el.id} el={el} decreaseHandler={decreaseHandler} increaseHandler={increaseHandler} />))}
        </ul>
        <OrderResult result={result} checkHandler={checkHandler} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}

export default Order;
