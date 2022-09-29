import React from 'react';
import PrevCard from './PrevCard';


const TreatmentPage = ({data}) => {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {data?.map((item)=> <PrevCard data={item}/>)}
    </div>
  );
}

export default TreatmentPage;
