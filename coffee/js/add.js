let carts = document.querySelectorAll(".addCart");
let products = [

    {
        name: "Duo Coffee Steeper"
        , tag: "product1"
        , price: 99.00
        , inCart: 0
  }
    , {
        name: "Dukune Rwanda Coffee"
        , tag: "product2"
        , price: 9.00
        , inCart: 0
  }
    , {
        name: "Premium Le Mans Coffee"
        , tag: "product3"
        , price: 20.00
        , inCart: 0
  }
    , {
        name: "Keto French Vanilla"
        , tag: "product4"
        , price: 10.00
        , inCart: 0
  }
    , {
        name: "Lion Black Coffee"
        , tag: "product5"
        , price: 16.00
        , inCart: 0
  }
    , {
        name: "Nossa Familia Black Coffee"
        , tag: "product6"
        , price: 11.00
        , inCart: 0
  }
    , {
        name: "Casa Brazil Coffee"
        , tag: "product7"
        , price: 13.00
        , inCart: 0
  }
    , {
        name: "De Longhi Coffee Maker"
        , tag: "product8"
        , price: 190.00
        , inCart: 0
  }
];
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cartUpdate span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".cartUpdate span").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cartUpdate span").textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {...cartItems, [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
              [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="product">

        <div class="description"><i class="fa fa-times"></i>
        <img src="./images/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        <div class="itemPrice">
        <span>$${item.price}.00</span>
        </div>
        <div class="itemQuantity">
        <i class='fas fa-minus minusCart'></i>
        <span>${item.inCart}</span>
        <i class='fas fa-plus plusCart'></i>
        </div>
        <div class="itemSubtotal">
        <span>$${item.inCart * item.price}.00</span>
        </div>

        `
        });
    }
    let totalContainer = document.querySelector(".cartTotal");
    totalContainer.innerHTML += `
    <div class="allTotal">
    <table class="table cartCostTable">
     <tr>
        <td>Subtotal</td>
        <td>$${cartCost}.00</td>
     </tr>
     <tr>
        <td>Shipping</td>
        <td>Free</td>
     </tr>
     <tr>
     <td>Total</td>
     <td>$${cartCost}.00</td>
     </tr>
    </table>
    </div>
    `
}
onLoadCartNumbers();
displayCart();