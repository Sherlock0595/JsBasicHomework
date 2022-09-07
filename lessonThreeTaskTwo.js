'use strict'

let basket = [

    {
        name: "jacket",
        price: 100
    },
    {
        name: "short",
        price: 50
    },
    {
        name: "jeens",
        price: 120
    },
    {
        name: "shoes",
        price: 10
    }

];


function countBasketPrice(basket) {
    let BasketPrice = 0;

    basket.forEach(function(product) {
        BasketPrice += product.price
    });

    return BasketPrice;
};

console.log(countBasketPrice(basket));
