// import MyCalendar from 'color-calendar';
import React, { useState } from 'react';
import TreatmentPage from './TreatmentPage';

function MainPage({data}) {


  return (
    <div>
      <TreatmentPage data={data}/>
    </div>
  );
}

export default MainPage;
