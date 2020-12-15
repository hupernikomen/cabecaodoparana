const url = 'https://www.cabecaodoparana.com.br/produtos'
fetch(url)
.then((res) => res.json())
.then((json) => {
    console.log(json)
})