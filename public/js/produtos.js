const url = 'https://cabecaodoparana.com.br/produtos'
fetch(url)
.then((res) => res.json())
.then((json) => {
    console.log(json)
})