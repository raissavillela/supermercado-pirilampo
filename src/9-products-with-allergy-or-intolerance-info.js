const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {

  let productList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {};
    product.description = `${stockProducts[index].description}`;
    product.formattedPrice = `R$ ${stockProducts[index].price}`;
    if (stockProducts[index].allergyOrIntolerance) {
      let risk = stockProducts[index].allergyOrIntolerance;
      product.allergyOrIntoleranceMessage = `Pode conter: ${Object.values(risk).join(' ')}`;
    }
    productList.push(product);
  }
  return productList;
}
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
