import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import React, { useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

import { options } from './constants';
import useData from '../../hooks/useData';
import getData from './service/data.service';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Graphic({ products, filterValue }) {
  const navigate = useNavigate();
  const chartRef = useRef();
  const { mainDataA, mainDataB } = useData(products, filterValue);
  const data = getData(mainDataA, mainDataB);

  const onClick = (event) => {
    const element = getElementAtEvent(chartRef.current, event);
    if (element.length > 0) {
      const { datasetIndex, index } = element[0];
      navigate(`/details/${datasetIndex + 1}/${index + 1}`);
    }
  };

  return (
    <figure className="graphic">
      <Bar ref={chartRef} options={options} data={data} onClick={onClick} />
      ;
    </figure>
  );
}

export default Graphic;
