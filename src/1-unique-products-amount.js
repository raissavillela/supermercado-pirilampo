const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let uniqueProductsAmount = stockProducts.lenght;

  return uniqueProductsAmount;
}

module.exports = { getUniqueProductsAmount };
