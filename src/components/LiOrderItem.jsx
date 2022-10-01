import React from 'react';

function LiOrderItem({ el, decreaseHandler, increaseHandler }) {
  return (
    <li key={el.id} className="list-group-item d-flex justify-content-between">
      {el.title}
      <div className="button-wrapper d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-decr" onClick={() => decreaseHandler(el)} />
        {el.amount}
        <button type="button" className="btn btn-primary btn-incr" onClick={() => increaseHandler(el)} />
      </div>
    </li>
  );
}

export default LiOrderItem;
