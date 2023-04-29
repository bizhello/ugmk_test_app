import React from 'react';

import FILTER_ENUM from './enums';

function ProductFilter({ filterValue, changeFilterValue }) {
  const changeFilter = (value) => {
    changeFilterValue(value);
    localStorage.setItem(FILTER_ENUM.KEY_CURRENT_FILTER, value);
  };

  return (
    <div className="filter">
      <label className="filter__container">
        <p className="container__textLabel">{FILTER_ENUM.TITLE}</p>
        <select className="container__select" value={filterValue} onChange={(e) => changeFilter(e.target.value)}>
          <option disabled>{FILTER_ENUM.PRODUCT_DISABLED}</option>
          <option value={FILTER_ENUM.PRODUCT_ALL}>{FILTER_ENUM.PRODUCT_ALL}</option>
          <option value={FILTER_ENUM.PRODUCT_ONE}>{FILTER_ENUM.PRODUCT_ONE}</option>
          <option value={FILTER_ENUM.PRODUCT_TWO}>{FILTER_ENUM.PRODUCT_TWO}</option>
        </select>
      </label>
    </div>
  );
}

export default ProductFilter;
