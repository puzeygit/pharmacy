import React from 'react';

const Item = ({data}) => {
  return (
      <li className="list-group-item d-flex justify-content-between">
        {data.title}
        <div className='button-wrapper d-flex justify-content-end'>
          <button type="button" className="btn btn-primary btn-decr"></button>
            1
          <button type="button" className="btn btn-primary btn-incr"></button>
        </div>
      </li>
  );
}

export default Item;
