import React from 'react';
import './tipinput.scss';

const TipInput = ({ icon, placeholder }) => {
  return(
    <>
      <img src={icon} alt='' className='tip-input__img'/>
      <input type="text" placeholder={placeholder} className="tip-input__input" />
    </>
  );
};

export default TipInput;