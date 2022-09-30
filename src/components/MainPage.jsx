// import MyCalendar from 'color-calendar';
import React, { useState } from 'react';
import TreatmentPage from './TreatmentPage';

function MainPage({ data, searchInput }) {
  return (
      <div>
        <TreatmentPage data={data} searchInput={searchInput}/>
      </div>
  );
}

export default MainPage;
