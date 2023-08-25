const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let productList = [];

  if (brand === null) {
    return productList;
  }
  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {};
    if (brand === stockProducts[index].brand) {
      product.description = `${stockProducts[index].description}`;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      productList.push(product);
    }
  }
  return productList;
};


module.exports = { searchProductsByBrand };
