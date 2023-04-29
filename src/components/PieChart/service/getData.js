import { useMemo } from 'react';

import { labels } from '../constants';

const getData = (factoryId, CurrentFactoryOnMonth, monthNumber) => {
  const getValueCount = useMemo(() => {
    if (factoryId === '1') {
      return [
        Math.floor(CurrentFactoryOnMonth.countFactoryAMonthsProductOne[monthNumber - 1]),
        Math.floor(CurrentFactoryOnMonth.countFactoryAMonthsProductTwo[monthNumber - 1]),
      ];
    }
    return [
      Math.floor(CurrentFactoryOnMonth.countFactoryBMonthsProductOne[monthNumber - 1]),
      Math.floor(CurrentFactoryOnMonth.countFactoryBMonthsProductTwo[monthNumber - 1]),
    ];
  }, [CurrentFactoryOnMonth, factoryId, monthNumber]);

  return {
    labels,
    datasets: [
      {
        data: getValueCount,
        color: ['rgba(0, 255, 0, 0.2)', 'rgba(255, 165, 0, 0.2)'],
        backgroundColor: ['rgb(39,161,2)', 'rgb(255, 165, 0)'],
        borderWidth: 1,
      },
    ],
  };
};

export default getData;
