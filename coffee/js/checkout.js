let carts = document.querySelectorAll(".addCart");
let products = [
    {
        name: "Caffe Americano - Tall"
        , tag: "caffeAmericanoTall"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Caffe Americano - Venti"
        , tag: "caffeAmericanoVenti"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Caffe Americano - Grande"
        , tag: "caffeAmericanoGrande"
        , price: 7.00
        , inCart: 0
  }
    , {
        name: "Caffe Latte - Tall"
        , tag: "caffeLatteTall"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Caffe Latte - Venti"
        , tag: "caffeLatteVenti"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Caffe Latte - Grande"
        , tag: "caffeLatteGrande"
        , price: 7.00
        , inCart: 0
  }
    , {
        name: "Cappuccino - Tall"
        , tag: "cappuccinoTall"
        , price: 3.00
        , inCart: 0
  }
    , {
        name: "Cappuccino - Venti"
        , tag: "cappuccinoVenti"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Cappuccino - Grande"
        , tag: "cappuccinoGrande"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Caffe Mocha - Tall"
        , tag: "caffemochaTall"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Caffe Mocha - Venti"
        , tag: "caffemochaVenti"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Caffe Mocha - Grande"
        , tag: "caffemochaGrande"
        , price: 7.00
        , inCart: 0
  }
    , {
        name: "Caramel Macchiato - Tall"
        , tag: "caramelmacchiatoTall"
        , price: 3.00
        , inCart: 0
  }
    , {
        name: "Caramel Macchiato - Venti"
        , tag: "caramelmacchiatoVenti"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Caramel Macchiato - Grande"
        , tag: "caramelmacchiatoGrande"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Raspberry White - Tall"
        , tag: "raspberrywhiteTall"
        , price: 3.00
        , inCart: 0
  }
    , {
        name: "Raspberry White - Venti"
        , tag: "raspberrywhiteVenti"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Raspberry White - Grande"
        , tag: "raspberrywhiteGrande"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Dolce De Late - Tall"
        , tag: "dolcedelateTall"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Dolce De Late - Venti"
        , tag: "dolcedelateVenti"
        , price: 7.00
        , inCart: 0
  }
    , {
        name: "Dolce De Late - Grande"
        , tag: "dolcedelateGrande"
        , price: 8.00
        , inCart: 0
  }
    , {
        name: "Espresso - Single"
        , tag: "espressoSingle"
        , price: 3.00
        , inCart: 0
  }
    , {
        name: "Espresso - Double"
        , tag: "espressoDouble"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Espresso Macchiato - Single"
        , tag: "espressomacchiatoSingle"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Espresso Macchiato - Double"
        , tag: "espressomacchiatoDouble"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Espresso Macchiato - Single"
        , tag: "espressoconpannaSingle"
        , price: 3.00
        , inCart: 0
  }
    , {
        name: "Espresso Con Panna - Double"
        , tag: "espressoconpannaDouble"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Caffe Tradizionale - Tall"
        , tag: "caffetradizionaleTall"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Caffe Tradizionale - Venti"
        , tag: "caffetradizionaleVenti"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Caffe Tradizionale - Grande"
        , tag: "caffetradizionaleGrande"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Shot In The Dark - Tall"
        , tag: "shotinthedarkTall"
        , price: 4.00
        , inCart: 0
  }
    , {
        name: "Shot In The Dark - Venti"
        , tag: "shotinthedarkVenti"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Shot In The Dark - Grande"
        , tag: "shotinthedarkGrande"
        , price: 7.00
        , inCart: 0
  }
    , {
        name: "Croissant"
        , tag: "croissant"
        , price: 5.00
        , inCart: 0
  }
    , {
        name: "Pain au Chocolat"
        , tag: "painauChocolat"
        , price: 6.00
        , inCart: 0
  }
    , {
        name: "Yogurt & Granola Parfait"
        , tag: "yogurtgranolaparfait"
        , price: 7.00
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
    let tableorder = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && tableorder) {
        tableorder.innerHTML = '';
        Object.values(cartItems).map(item => {
            tableorder.innerHTML += `
        <div class="orderdetails">
        <table class="orderplace">
        <tbody>
        <tr>
        <td>${item.name} <i class="fa fa-times qtyitems"></i> ${item.inCart}</td>
        <td style="text-align:right">
        <span style="font-weight:bold">$${item.inCart * item.price}.00</span>
        </td> 
        </tr>
        </tbody>
        <table>
      
        <div>
        `
        });
    }
    let tabletotal = document.querySelector(".finalTotal");
    tabletotal.innerHTML += `
    <div class="allTotal">
    <table>
    <tbody>
     <tr>
        <td><strong>Subtotal</strong></td>
        <td style="text-align:right"><strong>$${cartCost}.00</strong></td>
     </tr>
     <tr>
        <td><strong>Shipping</strong></td>
        <td style="text-align:right"><strike>$5</strike> Free</td>
     </tr>
     <tr>
     <td><strong>Total</strong></td>
     <td style="text-align:right"><strong>$${cartCost}.00</strong></td>
     </tr>
     </tbody>
    </table>
    </div>
    `
}
onLoadCartNumbers();
displayCart();