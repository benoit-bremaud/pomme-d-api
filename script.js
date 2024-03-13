/**
 * Fetches product information from Open Food Facts API using a barcode.
 * Displays the product name, brand(s), and image (if available) on the webpage.
 * @param {string} barcode - The barcode of the product.
 */
const getProductInfo = (barcode) => {
  const url = `https://world.openfoodfacts.net/api/v2/product/${barcode}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Réseau ou réponse non ok');
      }
      return response.json();
    })
    .then(data => {
      const resultElement = document.getElementById('result');
      if (data && data.product) {
        const productName = data.product.product_name_fr; // Nom du produit
        const brands = data.product.brands; // Marque(s) du produit
        const image = data.product.image_front_url; // URL de l'image du produit
        const servingSize = data.product.serving_size; // Serving size of the product
        const energy = data.product.nutriments.energy; // Energy value of the product
        const fat = data.product.nutriments.fat; // Fat content of the product
        const carbohydrates = data.product.nutriments.carbohydrates; // Carbohydrates content of the product
        const protein = data.product.nutriments.protein; // Protein content of the product
        const url = data.product.url; // URL of the product on Open Food Facts
        const barcode = data.product.code; // Barcode of the product

        // Display product name and brand(s)
        resultElement.innerHTML = `<h2>${productName}</h2><p>Marque(s) : ${brands}</p>`;
        resultElement.innerHTML += `<p>Taille de portion : ${servingSize}</p>`;
        resultElement.innerHTML += `<p>Valeur énergétique : ${energy} kJ</p>`;
        resultElement.innerHTML += `<p>Matières grasses : ${fat} g</p>`;
        resultElement.innerHTML += `<p>Glucides : ${carbohydrates} g</p>`;
        resultElement.innerHTML += `<p>Protéines : ${protein} g</p>`;
        resultElement.innerHTML += `<p>Barcode : ${barcode}</p>`;
        resultElement.innerHTML += `<p>URL : ${url}</p>`;
        

        if (image) {
          // Display product image
          resultElement.innerHTML += `<img src="${image}" alt="${productName}" style="max-width: 100px; max-height: 100px;" />`;
        }
      } else {
        // Display "Produit non trouvé" if product information is not available
        resultElement.innerHTML = '<p>Produit non trouvé.</p>';
      }
    })
    .catch(error => {
      // Display error message if there is an error during the API request
      document.getElementById('result').innerHTML = `<p>Erreur : ${error.message}</p>`;
    });
};

// Replace {barcode} with the actual barcode of the product
const barcode = '3664346300780';

// Call the getProductInfo function with the barcode
getProductInfo(barcode);

// Path: index.html