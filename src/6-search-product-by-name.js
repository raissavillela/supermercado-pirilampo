const stockProducts = require('./data.json');

const searchProductByName = (productName) => {
    let product = {};
    let message = null;
    if (productName === null) {
        return null;
    }
    for (let index = 0; index < stockProducts.length; index += 1) {
        if (productName === stockProducts[index].productName) {
            product.description = `${stockProducts[index].description}`;
            product.formattedPrice = `R$ ${stockProducts[index].price}`;
            message = product;
            break;
        }
    }
    return message;
}
module.exports = { searchProductByName };
