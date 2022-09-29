import React from 'react';

function Item({ data }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {data.title}
      <div className="button-wrapper d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-decr" />
        1
        <button type="button" className="btn btn-primary btn-incr" />
      </div>
    </li>
  );
}

export default Item;
