// Array of product data
const products = [
    {
      name: "Alique Furniture",
      price: "$3500",
      imageUrl: "./indoor-plants/service-1.jpg",
    },
    {
      name: "Commdo Furniture",
      price: "$3500",
      imageUrl: "./indoor-plants/service-2.jpg",
    },
    {
      name: "Commdo Furniture",
      price: "$3500",
      imageUrl: "./indoor-plants/service-3.jpg",
    },
    {
      name: "Commdo Furniture",
      price: "$3500",
      imageUrl: "./indoor-plants/service-4.jpg",
    },
    {
      name: "American Marigold",
      price: "$3500",
      imageUrl: "./indoor-plants/service-5.jpg",
    },
    {
      name: "Ornaments",
      price: "$3500",
      imageUrl: "./indoor-plants/service-6.jpg",
    },
    {
      name: "Ornaments",
      price: "$3500",
      imageUrl: "./indoor-plants/service-7.jpg",
    },
    {
        name: "Ornaments",
        price: "$3500",
        imageUrl: "./indoor-plants/service-8.jpg",
      },
  ];
  
  // Function to generate product elements dynamically
  function generateProducts() {
    const container = document.getElementById('product-container'); // Your container where products will be inserted
  
    // Create the HTML string dynamically
    let productHTML = '';
  
    products.forEach(product => {
      productHTML += `
        <div class="col-md-3">
          <div class="product-box">
            <div class="pr-img"><img src="${product.imageUrl}" alt="${product.name}"></div>
            <div class="pr-icon">
              <ul>
                <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                <li><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
                <li><a href=""><i class="fa-regular fa-eye"></i></a></li>
              </ul>
            </div>
            <div class="pr-txt">
              <h5>${product.name}</h5>
              <span class="price">${product.price}</span>
            </div>
          </div>
        </div>
      `;
    });
  
    // Insert the generated HTML into the container
    container.innerHTML = productHTML;
  }
  
  // Call the function to generate products when the page loads
  window.onload = generateProducts;
  