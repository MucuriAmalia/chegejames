document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const totalPriceEl = document.getElementById('total-price');

    // Update total price
    const updateTotalPrice = () => {
        let total = 0;
        products.forEach(product => {
            const price = parseFloat(product.dataset.price);
            const quantity = parseInt(product.querySelector('.quantity').value, 10);
            total += price * quantity;
        });
        totalPriceEl.textContent = `$${total.toFixed(2)}`;
    };

    // Attach event listeners to each product
    products.forEach(product => {
        const minusBtn = product.querySelector('.minus-btn');
        const plusBtn = product.querySelector('.plus-btn');
        const quantityInput = product.querySelector('.quantity');
        const deleteBtn = product.querySelector('.delete-btn');
        const likeBtn = product.querySelector('.like-btn');

        // Adjust quantity with "+" and "-" buttons
        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value, 10);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateTotalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value, 10);
            quantity++;
            quantityInput.value = quantity;
            updateTotalPrice();
        });

        // Delete item from the cart
        deleteBtn.addEventListener('click', () => {
            product.remove();
            updateTotalPrice();
        });

        // Like/Unlike item
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    // Initial calculation
    updateTotalPrice();
});
