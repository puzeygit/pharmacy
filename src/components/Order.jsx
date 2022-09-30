import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Order({ currUser }) {
  const navigate = useNavigate();
  const [count, setCount] = useState([]);
  const [result, setResult] = useState(0);

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
    console.log(resText);
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resText }),
    });
    navigate('/');
  };
  return (
    <>
      <ul className="list-group mb-5 mt-5">
        { <div>"У Вас нет товаров в корзине"</div>
        && orderArr?.map((el) => (
          <li key={el.id} className="list-group-item d-flex justify-content-between">
            {el.title}
            <div className="button-wrapper d-flex justify-content-end">
              <button type="button" className="btn btn-primary btn-decr" onClick={() => decreaseHandler(el)} />
              {el.amount}
              <button type="button" className="btn btn-primary btn-incr" onClick={() => increaseHandler(el)} />
            </div>
          </li>
        ),

        // <Item key={value.id} data={value} />
        )}
      </ul>
      <hr className="predict" size="5" />
      <div className="row d-flex justify-content-between">
        <div className="col fs-3">
          Сумма Вашего заказа:
        </div>
        <div className="col text-end pb-4">
          <div className="fs-2">
            {result}
            {' '}
            рублей
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <button type="button" className="btn $blue-100 rounded-pill customButtonColor" onClick={checkHandler}>
          Оформить заказ
        </button>
        <button type="button" className="btn btn-primary rounded-pill" onClick={deleteHandler}>
          Очистить корзину
        </button>
      </div>
    </>
  );
}

export default Order;
