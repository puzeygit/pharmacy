import React from 'react';

function OrderResult({ result, checkHandler, deleteHandler }) {
  return (
    <>
      <div className="row d-flex justify-content-between">
        <div className="col fs-3">
          Сумма Вашего заказа:
        </div>
        <div className="col text-end pb-4">
          <div className="fs-2">
            {result}
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

export default OrderResult;
