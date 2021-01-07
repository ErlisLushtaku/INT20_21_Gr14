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
    $("<a>")
      .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
      .append($("<div>")
        .attr("class", "product")
        .append($("<div>")
          .attr("class", "product-header")
          .append($("<img>")
            .attr("src", item.image)))
        .append($("<div>")
          .attr("class", "product-footer")
          .append($("<h3>").text(item.title))
          .append($("<h4>").text(item.price))
        )
      )
  );
});

$.each(food.products, function (index, item) {
  // Create and append HTML tags filled out with the data
  $("#food-container").append(
    $("<a>")
      .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
      .append($("<div>")
        .attr("class", "product")
        .append($("<div>")
          .attr("class", "product-header")
          .append($("<img>")
            .attr("src", item.image)))
        .append($("<div>")
          .attr("class", "product-footer")
          .append($("<h3>").text(item.title))
          .append($("<h4>").text(item.price))
        )
      )
  );
});

$.each(textile.products, function (index, item) {
  // Create and append HTML tags filled out with the data
  $("#textile-container").append(
    $("<a>")
      .attr("href", "SingleProduct.html?" + item.title + "|" + item.price + "|" + item.image + "|" + item.producer + "|" + item.category + "|" + item.city)
      .append($("<div>")
        .attr("class", "product")
        .append($("<div>")
          .attr("class", "product-header")
          .append($("<img>")
            .attr("src", item.image)))
        .append($("<div>")
          .attr("class", "product-footer")
          .append($("<h3>").text(item.title))
          .append($("<h4>").text(item.price))
        )
      )
  );
});

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