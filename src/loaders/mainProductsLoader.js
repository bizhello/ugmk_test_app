import mainApi from '../services/mainService';

const mainProductsLoader = async () => {
  try {
    return await mainApi.getProducts();
  } catch (e) {
    throw new Error('Не удалось загрузить продукты');
  }
};

export default mainProductsLoader;
