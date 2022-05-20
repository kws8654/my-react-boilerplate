import React from 'react';
import NavigateButton from '../../components/NavigateButton/NavigateButton';

const Second = () => {
  const toPage: string = '';
  return (
    <div>
      <NavigateButton toPage={toPage}>children</NavigateButton>
    </div>
  );
};

export default Second;
