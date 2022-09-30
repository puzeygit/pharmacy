import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  const [val, setVal] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setVal(data));
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <button type="button" className="btn btn-primary backButton mt-2" onClick={() => navigate('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>

      <div className="row d-flex align-items-stretch">
        <div className="col">
          <img src={`${val.img}`} className="card-img-top productPageImg" alt="image" />
        </div>
        <div className="col d-flex align-items-end justify-content-center flex-column mb-3">
          <h5 className="fs-1">{val.price}</h5>
          <div className="fs-1">рублей</div>
        </div>
        <div className="card-body">
          <h5 className="card-title fs-3">{val.title}</h5>
          <p className="card-text"><small className="text-muted">{val.body}</small></p>
        </div>
        <div className="d-flex justify-content-end mb-2">
          <button type="button" className="btn btn-primary rounded-pill px-5 py-2 fs-3">Купить</button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
