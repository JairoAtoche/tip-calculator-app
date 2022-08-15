import React from 'react';
import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg';
import './cardtip.scss';
import TipCategoryRow from './components/TipCategoryRow';
import TipButton from './components/TipButton';
import TipInput from './components/TipInput/TipInput';


const CardTip = () => {
  return(
    <div className='card'>
      <div className='card__calculator'>
        <div className="calculator__container">
          <TipCategoryRow category='Bill' />
          <TipInput icon={iconDollar} placeholder='0'/>
        </div>
        <div className="calculator__container select">
          <TipCategoryRow category='Select Tip %' />
          <div className="calculator__grid-container">
            <TipButton tipPercentage='5%'/>
            <TipButton tipPercentage='10%'/>
            <TipButton tipPercentage='15%'/>
            <TipButton tipPercentage='25%'/>
            <TipButton tipPercentage='50%'/>
            <TipInput placeholder='Custom'/> 
          </div>
        </div>
        <div className="calculator__container">
          <TipCategoryRow category='Number of People' />
          <TipInput icon={iconPerson} placeholder='0'/> 
        </div>
      </div>
      <div className='card__result'>
        <div className="card__tip-amount">
          <p className="tip-amount__p">Tip Amount</p>
          <p className="tip-amount__tip">$4.27</p>
        </div>
        <div className="card__total">
          <p className="total__p">Total</p>
          <p className="total__tip">$32.79</p>
        </div>
        <button className='card__button'>RESET</button>
      </div>
    </div>
  );
};

export default CardTip;