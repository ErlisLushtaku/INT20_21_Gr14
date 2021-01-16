function Product(title, price, image, producer, category, city) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.producer = producer;
    this.category = category;
    this.city = city;
}

var art = {
    "products": [
        new Product("Vizatimi 1", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 2", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 3", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 4", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 5", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 6", "50$", "ProductsImages/1.jpg", "Ngjyra", "trend", "Prishtina")
    ]
}

var food = {
    "products": [
        new Product("Pite", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina"),
        new Product("Fli", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina"),
        new Product("Mjalte", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/2.jfif", "Ngjyra", "trend", "Prishtina")
    ]
}

var textile = {
    "products": [
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina"),
        new Product("Vizatimi 1", "50$", "ProductsImages/3.jpg", "Ngjyra", "trend", "Prishtina")
    ]
}

$.each(art.products, function (index, item) {
    $("#art-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

$.each(food.products, function (index, item) {
    $("#food-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

$.each(textile.products, function (index, item) {
    $("#textile-container").append(
        $("<tr>").append(
            $("<a>")
                .click(function () {
                    localStorage.setItem('prod', JSON.stringify(item));
                })
                .attr("href", "SingleProduct.html")
                .append(
                    $("<td>").text(item.title)),
            $("<td>").text(item.price),
            $("<td>").text(item.producer),
            $("<td>").text(item.category),
            $("<td>").text(item.city),
            $("<button>", {
                text: "+",
                click: function () {
                    if (!exists(item.title)) {
                        $("#cartList").append(
                            $("<button>")
                                .attr("id", "btn" + index)
                                .click(function () { removeItem("btn" + index) })
                                .append($("<i>").attr("class", "fas fa-times")),
                            $("<dt>").text(item.title),
                            $("<dd>").text('x1').attr('class', 'inline'),
                            $("<dd>").text(parseFloat(item.price.slice(0, -1)).toFixed(2) + '$')
                        )
                    }
                    else {
                        calcQuantity(item.title, item.price)
                    }
                    calcTotal()
                }
            })
        )
    )
});

function CartProd(title, quantity, price) {
    Product.call(this, title, price);
    this.quantity = quantity;
}

var cart = JSON.parse(sessionStorage.getItem('cart'));

$.each(cart, function (index, item) {
    $("#cartList").append(
        $("<button>")
            .attr("id", "btn" + index)
            .click(function () { removeItem("btn" + index) })
            .append($("<i>").attr("class", "fas fa-times")),
        $("<dt>").text(item.title),
        $("<dd>").text(item.quantity).attr('class', 'inline'),
        $("<dd>").text(item.price)
    )
});
calcTotal();

function passCart() {
    const cart = []

    var cartList = document.getElementById("cartList");
    var titles = cartList.getElementsByTagName("dt");
    var quantities_prices = cartList.getElementsByTagName("dd");

    var ddIndex = 0;
    for (let i = 0; i < titles.length; i++) {
        var product = new CartProd(titles[i].innerHTML, quantities_prices[ddIndex].innerHTML, quantities_prices[ddIndex + 1].innerHTML);
        cart.push(product);
        ddIndex += 2;
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(elementId) {
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).next().remove();
    $("#" + elementId).remove();
    calcTotal();
}

function calcQuantity(title, price) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");

    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].innerHTML == title) {

            let quantity = cartList[i].nextElementSibling;
            quantity.innerHTML = 'x' + (parseInt(quantity.innerHTML.substring(1)) + 1).toString();

            let newPrice = quantity.nextElementSibling;
            newPrice.innerHTML = (parseFloat(price.slice(0, -1)) * parseInt(quantity.innerHTML.substring(1))).toFixed(2) + '$';

            break;
        }
    }
};

function exists(title) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");

    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].innerHTML == title) {
            return true;
        }
    }

    return false;
};

function calcTotal() {
    var cartList = document.getElementById("cartList").getElementsByTagName("dd");
    var total = 0;

    for (let i = 0; i < cartList.length; i++) {
        if (i % 2 == 1) {
            total += parseFloat(cartList[i].innerHTML.slice(0, -1))
        }
    }

    document.getElementById("totalPrice").innerHTML = total.toFixed(2).toString() + "$"
};

window.onbeforeunload = function () {
    passCart();
};

{/* <table>
      <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Producer</th>
          <th>Category</th>
          <th>City</th>
      </tr>
      <tr>
          <td></td>
      </tr>
  </table> */}

{/* 
    <div id="art-container">
        <div class="product">
            <div class="product-header">
                <img src=${image} alt="product"></img>
            </div>
            <div class="product-footer">
                <h3>${title}</h3>
                <h4>${price}</h4>
            </div>
        </div> 
    </div>
    */}