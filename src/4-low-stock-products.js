const stockProducts = require('./data.json');

const getLowStockProducts = (stockProducts) => {
  let lowStockProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock <= 10 && stockProducts[index].quantityInStock > 0) {
      lowStockProducts.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
    }
  }
  console.log (lowStockProducts);
  return lowStockProducts;
};
getLowStockProducts(stockProducts)

module.exports = { getLowStockProducts };
