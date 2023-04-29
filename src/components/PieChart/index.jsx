import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react';
import { Pie } from 'react-chartjs-2';

import { options } from './constants';

import getFactory from './service/getFactory';
import getMonth from './service/getMonth';
import getData from './service/getData';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ CurrentFactoryOnMonth, factoryId, monthNumber }) {
  const factory = getFactory(factoryId);
  const month = getMonth(monthNumber);
  const data = getData(factoryId, CurrentFactoryOnMonth, monthNumber);

  return (
    <figure className="pie">
      <h2 className="pie__title">{`Статистика по продукции фабрики ${factory} за ${month}`}</h2>
      <Pie data={data} options={options} plugins={[ChartDataLabels]} />
    </figure>
  );
}

export default PieChart;
