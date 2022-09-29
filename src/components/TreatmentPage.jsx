import React from 'react';
import PrevCard from './PrevCard';

function TreatmentPage({ data }) {
  return (
    <div>
      <div className="row row-cols-1 row-cols-xl-5 row-cols-md-3  row-cols-sm-2 row-cols-xs-1 g-3 mb-3 mt-3">
        {data?.map((item) => <PrevCard key={item.id} dataItem={item} />)}
      </div>

    </div>
  );
}

export default TreatmentPage;
