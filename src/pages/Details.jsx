import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

import useData from '../components/Graphic/hooks/useData'
import PieChart from '../components/PieChart'
import FILTER_ENUM from '../components/ProductFilter/enums'

const Details = () => {
  const products = useLoaderData()
  let filterValue = localStorage.getItem(FILTER_ENUM.KEY_CURRENT_FILTER) || FILTER_ENUM.PRODUCT_ALL
  const { factoryId, monthNumber } = useParams()
  const { CurrentFactoryOnMonth } = useData(products, filterValue)

  return (
    <div className='details'>
      {Object.keys(CurrentFactoryOnMonth).length > 0 && (
        <PieChart CurrentFactoryOnMonth={CurrentFactoryOnMonth} factoryId={factoryId} monthNumber={monthNumber} />
      )}
    </div>
  )
}

export default Details
