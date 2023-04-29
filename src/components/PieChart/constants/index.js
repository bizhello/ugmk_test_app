import { OPTIONS_ENUM } from '../enums';

const labels = ['Продукт 1', 'Продукт 2'];

const options = {
  plugins: {
    legend: {
      position: OPTIONS_ENUM.POSITION,
    },
    datalabels: {
      color(context) {
        return context.dataset.backgroundColor;
      },
      display: OPTIONS_ENUM.DISPLAY,
      borderRadius: OPTIONS_ENUM.RADIUS,
      font: {
        weight: OPTIONS_ENUM.WEIGHT,
      },
      anchor: OPTIONS_ENUM.ANCHOR,
      align: OPTIONS_ENUM.ALIGN,
      offset: OPTIONS_ENUM.OFFSET,
    },
  },
};

export { labels, options };
