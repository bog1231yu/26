let productNumber = 1; 

document.getElementById('fetchProduct').addEventListener('click', () => {
    const apiURL = `https://fakestoreapi.com/products/${productNumber}`;
    
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('productName').textContent = `Product Name: ${data.title}`;
            document.getElementById('productPrice').textContent = `Product Price: $${data.price}`;
            
            productNumber++;
        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
});
