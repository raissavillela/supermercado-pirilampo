const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let getUniqueProductsAmount = 0;
  uniqueProductsAmount = stockProducts.lenght;
  return uniqueProductsAmount;
}

module.exports = { getUniqueProductsAmount };
