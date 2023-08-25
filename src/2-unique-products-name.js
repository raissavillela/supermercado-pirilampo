const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let uniqueProductsName = [];
  for (let index = 0; index < stockProducts.length; index+=1) {
    uniqueProductsName.push(stockProducts[index].productName);
  }
  return uniqueProductsName;
};

module.exports = { getUniqueProductsName };

