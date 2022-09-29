import React from 'react';

const PrevCard = ({data}) => {
 const addHandler = () => {
  localStorage.setItem()
 }

  return (
    <div className="col px-2">
      <div className="card h-100 px-1">
        <img src={`${data.img}`} className="card-img-top" alt={`${data.title}`} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="subtitle">{data.subtitle}</p>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <button type="button" className="btn $blue-100 rounded-pill">Подробнее</button>
          <button type="button" className="btn btn-primary rounded-pill" onClick={() => addHandler()}>Купить</button>
        </div>
      </div>

    </div>
  );
}

export default PrevCard;
