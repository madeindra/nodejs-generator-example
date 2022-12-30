// create mock database
const db = {
  getProduct: () => Promise.resolve(Array.from({
    length: 1000
  }, (v, i) => `item-${i}`)),
};

// create server api
const productURL = 'http://localhost:3001/products';
const cartURL = 'http://localhost:3002/cart';

async function processData() {
  const products = await db.getProduct();
  const res = [];

  for (const product of products) {
    const productInfo = await (await fetch(`${productURL}?name=${product}`)).json();
    res.push(productInfo);
  }

  return res;
}

console.table(await processData())