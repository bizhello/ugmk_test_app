import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import React, { useRef } from 'react'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'

import { months, options } from './constants'
import { DATA_ENUM } from './enums'

import useData from './hooks/useData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Graphic = ({ products, filterValue }) => {
  const navigate = useNavigate()
  const chartRef = useRef()
  const { mainDataA, mainDataB } = useData(products, filterValue)

  let data = {
    labels: months,
    datasets: [
      {
        label: DATA_ENUM.LABEL_A,
        data: months.map((_, index) => Math.floor(mainDataA[index])),
        backgroundColor: DATA_ENUM.COLOR_A,
      },
      {
        label: DATA_ENUM.LABEL_B,
        data: months.map((_, index) => Math.floor(mainDataB[index])),
        backgroundColor: DATA_ENUM.COLOR_B,
      },
    ],
  }

  const onClick = (event) => {
    const element = getElementAtEvent(chartRef.current, event)

    if (element.length > 0) {
      const { datasetIndex, index } = element[0]
      navigate(`/details/${datasetIndex + 1}/${index + 1}`)
    }
  }

  return (
    <figure className='graphic'>
      <Bar ref={chartRef} options={options} data={data} onClick={onClick} />;
    </figure>
  )
}

export default Graphic
