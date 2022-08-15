import React from 'react';
import './tipinput.scss';

const TipInput = ({ icon, placeholder }) => {
  return(
    <div className='tip-input'>
      <img src={icon} alt='' className='tip-input__img'/>
      <input type="text" placeholder={placeholder} className={icon ? "tip-input__input" : "tip-input__input tip-input__input--modifier"} />
    </div>
  );
};

export default TipInput;