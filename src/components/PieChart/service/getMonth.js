import { months } from '../../Graphic/constants';

const getMonth = (monthNumber) => (months[monthNumber - 1]);

export default getMonth;
