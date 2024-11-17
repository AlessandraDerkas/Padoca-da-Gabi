let cart = [];
let total = 0;

function addToCart(name, price) {
  // Adiciona o item ao array do carrinho
  cart.push({ name, price });
  // Atualiza o total
  total += price;
  // Atualiza a interface
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Limpa a exibição anterior
  cartItems.innerHTML = '';

  // Recria a lista de itens no carrinho
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})">Remover</button>
    `;
    cartItems.appendChild(cartItem);
  });

  // Atualiza o total
  totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  // Remove o item do carrinho
  total -= cart[index].price;
  cart.splice(index, 1);
  // Atualiza a interface
  updateCart();
}