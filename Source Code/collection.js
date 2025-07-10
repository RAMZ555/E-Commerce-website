document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products");
  const search = document.getElementById("Search");

  if (search) {
    const productList = productContainer.querySelectorAll(".products-box");
    search.addEventListener("keyup", function (event) {
      const enteredValue = event.target.value.toUpperCase();

      for (let i = 0; i < productList.length; i++) {
        const productName = productList[i].querySelector("p").textContent;
        productList[i].style.display =
          productName.toUpperCase().includes(enteredValue) ? "block" : "none";
      }
    });
  }
});

function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`🛒 "${productName}" added to cart!`);
  window.location.href = "cart.html";
}
