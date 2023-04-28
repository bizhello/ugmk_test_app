import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import React, { useMemo } from 'react'
import { Pie } from 'react-chartjs-2'

import { labels, options } from './constants'

import { months } from '../Graphic/constants/index'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ CurrentFactoryOnMonth, factoryId, monthNumber }) => {
  let factory = factoryId == 1 ? 'А' : 'Б'
  let month = months[monthNumber - 1]

  const valueCount = useMemo(() => {
    if (factoryId == 1) {
      return [
        Math.floor(CurrentFactoryOnMonth.countFactoryAMonthsProductOne[monthNumber - 1]),
        Math.floor(CurrentFactoryOnMonth.countFactoryAMonthsProductTwo[monthNumber - 1]),
      ]
    } else {
      return [
        Math.floor(CurrentFactoryOnMonth.countFactoryBMonthsProductOne[monthNumber - 1]),
        Math.floor(CurrentFactoryOnMonth.countFactoryBMonthsProductTwo[monthNumber - 1]),
      ]
    }
  }, [CurrentFactoryOnMonth, factoryId, monthNumber])

  const data = {
    labels,
    datasets: [
      {
        data: valueCount,
        color: ['rgba(0, 255, 0, 0.2)', 'rgba(255, 165, 0, 0.2)'],
        backgroundColor: ['rgb(39,161,2)', 'rgb(255, 165, 0)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <figure className='pie'>
      <h2 className='pie__title'>{`Статистика по продукции фабрики ${factory} за ${month}`}</h2>
      <Pie data={data} options={options} plugins={[ChartDataLabels]} />
    </figure>
  )
}

export default PieChart
