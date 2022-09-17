'use strict'

let basket = {
    closes: [
      {
        id_product: 123,
        name: "jacket",
        price: 100,
        quantity: 1
      },
      {
        id_product: 456,
        name: "short",
        price: 50,
        quantity: 1
      },
      {
        id_product: 324,
        name: "jeens",
        price: 120,
        quantity: 1
      },
      {
        id_product: 334,
        name: "shoes",
        price: 100,
        quantity: 1
      }

    ],
    countBasketPrice() {
      return this.closes.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
  };

  console.log(basket.countBasketPrice());