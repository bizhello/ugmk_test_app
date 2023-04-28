import React, { useMemo, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import mainProductsLoader from './loaders/mainProductsLoader'
import Details from './pages/Details'
import Error from './pages/Error'
import Main from './pages/Main'
import CurrentFactoryOnMonthContext from './utils/contexts/CurrentFactoryOnMonthContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainProductsLoader,
    errorElement: <Error />,
  },
  {
    path: '/details/:factoryId/:monthNumber',
    element: <Details />,
    loader: mainProductsLoader,
    errorElement: <Error />,
  },
])

const App = () => {
  const [CurrentFactoryOnMonth, setCurrentFactoryOnMonth] = useState({})
  const valueCurrentFactoryOnMonth = useMemo(
    () => ({ CurrentFactoryOnMonth, setCurrentFactoryOnMonth }),
    [CurrentFactoryOnMonth],
  )

  return (
    <div className='app'>
      <CurrentFactoryOnMonthContext.Provider value={valueCurrentFactoryOnMonth}>
        <RouterProvider router={router} />
      </CurrentFactoryOnMonthContext.Provider>
    </div>
  )
}

export default App
