async function loadProducts() {
    try {
        const response = await fetch('http://localhost:3000/produtos');
        const products = await response.json();

        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="placeholder.jpg" alt="${product.nome}">
                <h3>${product.nome}</h3>
                <p>R$ ${product.preco.toFixed(2)}</p>
                <button>Adicionar ao Carrinho</button>
            `;
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

loadProducts();

