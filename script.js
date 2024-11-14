document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartModal =
    document.getElementById("cart-modal");
    const cartBtn = document.getElementById("cart-btn");
    const closeCartBtn = document.getElementById("close-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalAmountElement = document.getElementById("total-amount");
    const checkoutBtn = document.getElementById("checkout-btn");

    cartBtn.addEventListener("click", () => {
        cartModal.style.display = "flex";
        renderCart();
    });
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });
    document.querySelectorAll(".add-to-cart").forEach((btn,index) => {
        btn.addEventListener("click", () => {
            const product = {
                id: index,
                name: btn.parentElement.querySelector("h2").textContent,
                price: parseFloat(btn.parentElement.querySelector("p").textContent.replace("R$ ", "")),
                qty: parseInt(btn.parentElement.querySelector(".qty").textContent)
            };
            addToCart(product);
        });
    });
    function addToCart(product) {
        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.qty += product.qty;
        } else {
            cart.push(product);
        }
        renderCart();
    }
    function renderCart() {
        cartItemsContainer.innerHTML = "";
        cart.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `<span>R${product.name} - R$ $ {product.price.toFixed(2)} x ${product.qty}</span>
            <button class="remove" data-id="$ {product.id}"><i class="fas fa-trash"></i></button>`;
            item.querySelector(".remove").addEventListener("click", () => {
                removeFromCart(product.id);
            });
            cartItemsContainer.appendChild(item);
        });
        updateTotal();
    }
    function updateTotal() {
        let total = cart.reduce((sum, product) => sum + (product.price * product.qty), 0);
        totalAmountElement.textContent = total.toFixed(2);
    }
    function removeFromCart(id) {
    const index = cart.findIndex(p => p.id === id);
    if (index > -1) {
        cart.splice(index, 1);
    }
    renderCart();
    }
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert ("Seu carrinho está vazio!");
        } else {
            alert(`Compra finalizada! Total: R$ $ {total.AmountElement.textContent}`);
            cart.length = 0;
            renderCart();
            cartModal.style.display = "none";
        }
    });
    document.querySelectorAll(".minus, .plus").forEach(button => {
        button.addEventListener("click", () => {
            const qtyElement = button.parentElement.querySelector(".qty");
            let qty = parseInt(qtyElement.textContent);
            qty = button.classList.contains("plus") ? qty + 1 : Math.max(1, qty - 1);
            qtyElement.textContent = qty;
        });
    });
});