import React from 'react';
import { Link } from 'react-router-dom';

function PrevCard({ dataItem, getPrice }) {
  return (
    <div className="col px-2">
      <div className="card h-100 px-1">
        <img src={`${dataItem.img}`} className="card-img-top" alt={`${dataItem.title}`} />
        <div className="card-body">
          <h5 className="card-title">{dataItem.title}</h5>
          <p className="subtitle">{dataItem.subtitle}</p>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <Link to={`/page/${dataItem.id}`}>
            <button type="button" className="btn $blue-100 rounded-pill customButtonColor">
              Подробнее
            </button>
          </Link>
          <button type="button" className="btn btn-primary rounded-pill" onClick={() => getPrice(dataItem)}>Купить</button>
        </div>
      </div>

    </div>
  );
}

export default PrevCard;
