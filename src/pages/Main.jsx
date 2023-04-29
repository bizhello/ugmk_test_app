import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Graphic from '../components/Graphic';
import ProductFilter from '../components/ProductFilter';
import FILTER_ENUM from '../components/ProductFilter/enums';

function Main() {
  const products = useLoaderData();

  const [filterValue, setFilterValue] = useState(
    localStorage.getItem(FILTER_ENUM.KEY_CURRENT_FILTER) || FILTER_ENUM.PRODUCT_ALL,
  );
  const changeFilterValue = (value) => setFilterValue(value);

  return (
    <div className="main">
      <ProductFilter filterValue={filterValue} changeFilterValue={changeFilterValue} />
      <Graphic products={products} filterValue={filterValue} />
    </div>
  );
}

export default Main;
