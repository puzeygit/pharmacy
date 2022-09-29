import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();

  const [val, setVal] = useState('');

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setVal(data));
  }, []);

  return (
    <div>
      {val?.title}
    </div>
  );
}

export default ProductPage;
