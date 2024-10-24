//Exemplo de itens no carrinho
const itens = [{nome:"Produto A", quantidade:2, preco:30.00},
    {nome:"Produto B", quantidade:1, preco:50.00},
    
];
functionatualizarCarrinho(){
    const body = document.getElementById('itensCarrinho');
    let total = 0;
    itens.forEach(item => {const tr = document.createElement('tr');
        const totalItem = item.quantidade*item.preco;
        total += totalItem;
        tr.innerHTML = `${item.nome}${item.quantidade} R$ ${item.preco.toFixed(2)} R$ ${totalItem.toFixed(2)}`;
        body.appendChild(tr);
    })
}