let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

// Adiciona produto ao carrinho
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} foi adicionado ao carrinho!`);
}

// Atualiza o carrinho na página de Carrinho
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  
  if (!cartItems) return;

  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${item.name} - R$ ${item.price.toFixed(2)}</span>
                     <button onclick="removeFromCart(${index})">Remover</button>`;
    cartItems.appendChild(div);
  });

  totalElement.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
}

// Remove produto do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

// Limpa o carrinho
function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCart();
}

// Atualiza a página do carrinho ao carregá-la
document.addEventListener('DOMContentLoaded', updateCart);