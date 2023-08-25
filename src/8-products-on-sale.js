const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let productList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {};
    if (stockProducts[index].onSale === true) {
      product.description = `${stockProducts[index].description}`;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      product.onSale = stockProducts[index].onSale;
      productList.push(product);
    }
  }
  return productList;
}
module.exports = { getProductsOnSale };
