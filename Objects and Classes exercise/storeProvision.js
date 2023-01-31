function store(store, order) {

  let obj = {};
  let inStore = refill(store, obj);
  let inOrder = refill(order, inStore);

  for (let product in inOrder) {
    console.log(`${product} -> ${inOrder[product]}`)
  }

  function refill(arr, obj) {
    while (arr.length !== 0) {
        let [product, qty] = [arr.shift(), arr.shift()];
        if (!obj.hasOwnProperty(product)) {
            obj[product] = Number(qty);
        } else {
            obj[product] += Number(qty);
        }
    }
    return obj;
  }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])