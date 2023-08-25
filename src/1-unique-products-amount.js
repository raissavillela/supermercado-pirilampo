const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let uniqueProductsAmount = stockProducts.length;

  return uniqueProductsAmount;
}
module.exports = { getUniqueProductsAmount };