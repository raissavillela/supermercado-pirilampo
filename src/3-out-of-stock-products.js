const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
    let outOfStockProducts = [];

    for (let index = 0; index < stockProducts.length; index += 1) {
        if (stockProducts[index].quantityInStock === 0) {
            outOfStockProducts.push(stockProducts[index].productName);
        }
    }
    return outOfStockProducts;
}
module.exports = { getOutOfStockProducts };
