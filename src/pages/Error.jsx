import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error'>
      <h2 className='error__title'>404</h2>
      <h3 className='error__text'>Страница не найдена</h3>
      <div>
        <NavLink className='error__back' to='/'>
          На главную страницу
        </NavLink>
      </div>
    </section>
  )
}

export default Error
