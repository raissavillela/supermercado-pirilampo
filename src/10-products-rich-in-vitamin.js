const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let productList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {};
    if (stockProducts[index].nutritionalInfo.vitamins) {
      let vitamins = Object.entries(stockProducts[index].nutritionalInfo.vitamins);
      product.description = `${stockProducts[index].description}`;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      product.vitaminsInformation = vitamins.map(([vitamin, quantity]) => `${vitamin} - ${quantity}`);
      productList.push(product);
    }
  } 
  return productList;
};
module.exports = { getProductsRichInVitamin };
