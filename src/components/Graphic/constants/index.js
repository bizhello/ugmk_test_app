import { OPTIONS_ENUM } from '../enums'

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: OPTIONS_ENUM.POSITION,
    },
  },
}

export { months, options }
