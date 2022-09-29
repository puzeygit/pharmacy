import React from 'react';
import PrevCard from './PrevCard';


const TreatmentPage = ({data}) => {
 
  return (
    <div>
      <div className="row row-cols-1 row-cols-xl-5 row-cols-md-3  row-cols-sm-2 row-cols-xs-1 g-3 mb-3 mt-3">
        {data?.map((item, index)=> <PrevCard key={item.id}   data={item}/>)}
      </div>

    </div>
  );
}

export default TreatmentPage;
