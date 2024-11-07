//Exemplo de itens no carrinho
const itens = [
    {nome:"Produto A", quantidade:2, preco:30.00},
    {nome:"Produto B", quantidade:1, preco:50.00},
];
function atualizarCarrinho() {
    const body = document.getElementById('itensCarrinho');
    let total = 0;

    itens.forEach(item => {
        const tr = document.createElement('tr');
        const totalItem = item.quantidade*item.preco;
        total += totalItem;

        tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.quantidade}</td>
        <td>R$ ${item.preco.toFixed(2)}</td>
        <td>R$ ${totalItem.toFixed(2)}</td>
        `;
        body.appendChild(tr);
    });

    document.getElementById('totalCarrinho').innerText = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    alert("Compra finaliza!");
}

// Atualiza o carrinho ao carregar a página window.onload = atualizarCarrinho;