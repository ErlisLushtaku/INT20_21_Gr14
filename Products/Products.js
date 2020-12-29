const getProducts = async () => {
    const res = await fetch("Products.json");
    const data = await res.json();
    const products = data.products;
    return products;
};

// Display Product
const displayProducts = (products, center) => {
    let display = products.map(
        ({ title, image, price}) =>
        `<div class="product">
            <div class="product-header">
              <img src=${image} alt="product">
            </div>
            <div class="product-footer">
              <h3>${title}</h3>
              <h4>$${price}</h4>
            </div>
        </div>`
    );

    display = display.join("");
    center.innerHTML = display;
};

const filterArray = async type => {
    const products = await getProducts();
    return products.filter(product => product.category === type);
  };

const art = document.querySelector(".art");

window.addEventListener("DOMContentLoaded", async () => {
    const products = await getProducts();
    /* const artProducts = await filterArray("Art");
    const foodProducts = await filterArray("Food");
    const textileProducts = await filterArray("Textile"); */

    displayProducts(products, art);
  });