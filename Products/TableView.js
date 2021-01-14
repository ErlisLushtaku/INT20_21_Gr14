var art = {
    "products": [
        {
            "title": "Vizatimi 1",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Erlis Lushtaku",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Vizatimi 2",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Vizatimi 3",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/1.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        }
    ]
}

var food = {
    "products": [
        {
            "title": "Pite",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Fli",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Makarona",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/2.jfif",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        }
    ]
}

var textile = {
    "products": [
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "featured",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        },
        {
            "title": "Men Casual Shoe",
            "price": "2000.99",
            "image": "ProductsImages/3.jpg",
            "producer": "Ngjyra",
            "category": "trend",
            "city": "Prishtina"
        }
    ]
}

$.each(art.products, function (index, item) {
    $("#art-container").append(
        $("<tr>").append(
            $("<a>")
                .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
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
                            $("<dd>").text(item.price)
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
                .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
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
                            $("<dd>").text(item.price)
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
                .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
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
                            $("<dd>").text(item.price)
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

function removeItem(elementId) {
    var element = document.getElementById(elementId);
    element.nextElementSibling.remove();
    element.nextElementSibling.remove();
    element.nextElementSibling.remove();
    element.remove();
    calcTotal();
  }
  
  function calcQuantity(title, price) {
    var cartList = document.getElementById("cartList").getElementsByTagName("dt");
  
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].innerHTML == title) {
  
        let quantity = cartList[i].nextElementSibling;
        quantity.innerHTML = 'x' + (parseInt(cartList[i].nextElementSibling.innerHTML.substring(1)) + 1).toString();
  
        let newPrice = quantity.nextElementSibling;
        newPrice.innerHTML = (parseFloat(price) * parseInt(quantity.innerHTML.substring(1))).toFixed(2);
  
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
        total += parseFloat(cartList[i].innerHTML)
      }
    }
  
    document.getElementById("totalPrice").innerHTML = total.toFixed(2).toString() + "$"
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