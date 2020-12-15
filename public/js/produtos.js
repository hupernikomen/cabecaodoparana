produtos = []

const url = 'https://cabecaodoparana.com.br/produtos'
fetch(url)
.then((res) => res.json())
.then((json) => {
    produtos.push(json)
})

console.log(produtos)