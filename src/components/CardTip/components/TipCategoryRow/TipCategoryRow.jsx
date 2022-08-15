import React from 'react';
import './tipcategoryrow.scss';

const TipCategoryRow = ({ category }) => {
  return(
    <p className="tip-category">{category}</p>
  );
};

export default TipCategoryRow;