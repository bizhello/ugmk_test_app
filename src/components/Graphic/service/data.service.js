import { months } from '../constants';
import { DATA_ENUM } from '../enums';

const getData = (mainDataA, mainDataB) => ({
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
});

export default getData;
