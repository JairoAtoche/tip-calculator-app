import React from 'react';

const CardTip = () => {
  return(
    <div className='card'>
      <div className='card__calculator'>

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