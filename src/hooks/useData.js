import {
  useEffect, useCallback, useState, useContext,
} from 'react';

import CurrentFactoryOnMonthContext from '../utils/contexts/CurrentFactoryOnMonthContext';

import FILTER_ENUM from '../components/ProductFilter/enums/index';

const useData = (products, filterValue = FILTER_ENUM.PRODUCT_ALL) => {
  const { CurrentFactoryOnMonth, setCurrentFactoryOnMonth } = useContext(CurrentFactoryOnMonthContext);

  const [mainDataA, setMainDateA] = useState([]);
  const [mainDataB, setMainDateB] = useState([]);

  const [factoryA, setFactoryA] = useState([]);
  const [factoryB, setFactoryB] = useState([]);

  const [factoryAMonths, setFactoryAMonths] = useState([]);
  const [factoryBMonths, setFactoryBMonths] = useState([]);

  const [countFactoryAMonths, setCountFactoryAMonths] = useState([]);
  const [countFactoryBMonths, setCountFactoryBMonths] = useState([]);

  const [countFactoryAMonthsProductOne, setCountFactoryAMonthsProductOne] = useState([]);
  const [countFactoryBMonthsProductOne, setCountFactoryBMonthsProductOne] = useState([]);

  const [countFactoryAMonthsProductTwo, setCountFactoryAMonthsProductTwo] = useState([]);
  const [countFactoryBMonthsProductTwo, setCountFactoryBMonthsProductTwo] = useState([]);

  const filterProductsForFactory = useCallback(() => {
    const fA = [];
    const fB = [];
    products.forEach((item) => (item.factory_id === 1 ? fA.push(item) : fB.push(item)));
    setFactoryA(fA);
    setFactoryB(fB);
  }, [products]);

  const filterProductsForMonths = useCallback(() => {
    const fAMonths = [[], [], [], [], [], [], [], [], [], [], [], []];
    const fBMonths = [[], [], [], [], [], [], [], [], [], [], [], []];

    if (factoryA.length > 0) {
      factoryA.forEach((item) => {
        if (item.date) {
          const dateParts = item.date.split('/');
          const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
          const month = dateObject.getMonth();

          fAMonths[month].push(item);
        }
      });

      setFactoryAMonths(fAMonths);
    }

    if (factoryB.length > 0) {
      factoryB.forEach((item) => {
        if (item.date) {
          const dateParts = item.date.split('/');
          const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
          const month = dateObject.getMonth();

          fBMonths[month].push(item);
        }
      });

      setFactoryBMonths(fBMonths);
    }
  }, [factoryA, factoryB]);

  const filterCountProductsForMonths = useCallback(() => {
    const fAC = [];
    const fACOne = [];
    const fACTwo = [];
    const fBC = [];
    const fBCOne = [];
    const fBCTwo = [];

    if (factoryAMonths.length > 0) {
      factoryAMonths.forEach((item) => {
        const initialValue = 0;
        const count = item.reduce(
          (accumulator, currentValue) => accumulator + currentValue.product1 + currentValue.product2 + currentValue.product3,
          initialValue,
        );
        const countOne = item.reduce((accumulator, currentValue) => accumulator + currentValue.product1, initialValue);
        const countTwo = item.reduce((accumulator, currentValue) => accumulator + currentValue.product2, initialValue);

        fAC.push(count * 0.001);
        fACOne.push(countOne * 0.001);
        fACTwo.push(countTwo * 0.001);
      });

      setCountFactoryAMonths(fAC);
      setCountFactoryAMonthsProductOne(fACOne);
      setCountFactoryAMonthsProductTwo(fACTwo);
    }
    if (factoryBMonths.length > 0) {
      factoryBMonths.forEach((item) => {
        const initialValue = 0;
        const count = item.reduce(
          (accumulator, currentValue) => accumulator + currentValue.product1 + currentValue.product2 + currentValue.product3,
          initialValue,
        );

        const countOne = item.reduce((accumulator, currentValue) => accumulator + currentValue.product1, initialValue);
        const countTwo = item.reduce((accumulator, currentValue) => accumulator + currentValue.product2, initialValue);

        fBC.push(count * 0.001);
        fBCOne.push(countOne * 0.001);
        fBCTwo.push(countTwo * 0.001);
      });
      setCountFactoryBMonths(fBC);
      setCountFactoryBMonthsProductOne(fBCOne);
      setCountFactoryBMonthsProductTwo(fBCTwo);
    }
  }, [factoryAMonths, factoryBMonths]);

  useEffect(() => {
    filterProductsForFactory();
  }, [filterProductsForFactory]);

  useEffect(() => {
    filterProductsForMonths();
  }, [filterProductsForMonths]);

  useEffect(() => {
    filterCountProductsForMonths();
  }, [filterCountProductsForMonths]);

  useEffect(() => {
    switch (filterValue) {
      case FILTER_ENUM.PRODUCT_ONE:
        setMainDateA(countFactoryAMonthsProductOne);
        setMainDateB(countFactoryBMonthsProductOne);
        break;
      case FILTER_ENUM.PRODUCT_TWO:
        setMainDateA(countFactoryAMonthsProductTwo);
        setMainDateB(countFactoryBMonthsProductTwo);
        break;
      default:
        setMainDateA(countFactoryAMonths);
        setMainDateB(countFactoryBMonths);
    }
  }, [
    filterValue,
    countFactoryAMonths,
    countFactoryAMonthsProductOne,
    countFactoryAMonthsProductTwo,
    countFactoryBMonths,
    countFactoryBMonthsProductOne,
    countFactoryBMonthsProductTwo,
  ]);

  useEffect(() => {
    setCurrentFactoryOnMonth({
      countFactoryAMonthsProductOne,
      countFactoryAMonthsProductTwo,
      countFactoryBMonthsProductOne,
      countFactoryBMonthsProductTwo,
    });
  }, [
    countFactoryAMonthsProductOne,
    countFactoryAMonthsProductTwo,
    countFactoryBMonthsProductOne,
    countFactoryBMonthsProductTwo,
    setCurrentFactoryOnMonth,
  ]);

  return {
    mainDataA,
    mainDataB,
    CurrentFactoryOnMonth,
  };
};

export default useData;
