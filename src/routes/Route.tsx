import React from 'react';
import { Route, Routes } from 'react-router-dom';
import First from '../pages/First/First';
import Second from '../pages/Second/Second';

const RouteComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<First />} />
      <Route path='/second' element={<Second />} />
    </Routes>
  );
};

export default RouteComponent;
