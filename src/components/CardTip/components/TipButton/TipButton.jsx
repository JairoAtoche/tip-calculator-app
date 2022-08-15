import React from 'react';
import './tipbutton.scss';

const TipButton = ({ tipPercentage }) => {
  return(
    <button className='button-tip'>
      {tipPercentage}
    </button>
  );
};

export default TipButton;