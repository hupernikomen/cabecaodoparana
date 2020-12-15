const express = require('express')
const cors = require('cors')

const app = express()

app.use((req, res, next) => { 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
    res.redirect(`https://${req.headers.host}${req.url}`);
    else  
    next(); 
});

app.use(express.static('public'))
app.use(express.json())
app.use(cors())


const produtos = [
    {
        id: 1,
        produto: "Sistema com 1 Caixa Dágua",
        descricao: "Sistema contendo 1 caixa dagua e algumas bombonas e um sump"
    },
    {
        id: 2,
        produto: "Sistema com 2 Caixa Dágua",
        descricao: "Sistema contendo 2 caixa dagua e algumas bombonas e um sump"
    }
]


app.get('/', (req, res)=> {
    return res.sendFile(__dirname + '/html/index.html')
})

app.get('/produtos', (req, res) => {
    return res.json(produtos)
})

app.get('/produto/:id', (req, res)=> {
    const {id} = req.params
    return res.json(produtos[id])
})

app.listen(3000, ()=>{
    console.log('Rodando 3000')
})