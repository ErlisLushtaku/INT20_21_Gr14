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
// Loop through each JSON item
$.each(art.products, function (index, item) {
  // Create and append HTML tags filled out with the data
  $("#art-container").append(
    $("<div>")
      .attr("class", "product")
      .append(
        $("<div>")
          .attr("class", "product-header")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<img>")
              .attr("src", item.image)
            )
          ),
        $("<div>")
          .attr("class", "product-footer")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<h3>").text(item.title))
          )
          .append($("<h4>").text(item.price))
          .append($("<button>").text("ADD TO CART")
            .attr("onclick", addItem(item.title, item.price))
          )
      )
  );
});

$.each(food.products, function (index, item) {
  // Create and append HTML tags filled out with the data
  $("#food-container").append(
    $("<div>")
      .attr("class", "product")
      .append(
        $("<div>")
          .attr("class", "product-header")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<img>")
              .attr("src", item.image)
            )
          ),
        $("<div>")
          .attr("class", "product-footer")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<h3>").text(item.title))
          )
          .append($("<h4>").text(item.price))
          .append($("<button>").text("ADD TO CART")
            .attr("onclick", addItem(item.title, item.price))
          )
      )
  );
});

$.each(textile.products, function (index, item) {
  // Create and append HTML tags filled out with the data
  $("#textile-container").append(
    $("<div>")
      .attr("class", "product")
      .append(
        $("<div>")
          .attr("class", "product-header")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<img>")
              .attr("src", item.image)
            )
          ),
        $("<div>")
          .attr("class", "product-footer")
          .append($("<a>")
            .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
            .append($("<h3>").text(item.title))
          )
          .append($("<h4>").text(item.price))
          .append(
            $("<button>").text("ADD TO CART")
              .attr("onclick", addItem(item.title, item.price))
          )
      )
  );
});


function addItem(title, price) {
  $("#cartList").append(
    $("<li>").text(title + " - " + price)
  )
}

var cartList = document.getElementById("cartList").getElementsByTagName("li");
var total = 0;

for(let i = 0; i < cartList.length; i++) {
  total += parseFloat(cartList[i].innerHTML.split(" - ")[1])
}

document.getElementById("totalPrice").innerHTML += total + "$"

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