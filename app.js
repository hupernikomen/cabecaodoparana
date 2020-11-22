const express = require('express')

const app = express()

app.use((req, res, next) => { 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`);
    else  
        next(); 
});
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/html/manutencao.html')
})
app.get('/home', (req, res)=> {
    res.sendFile(__dirname + '/html/index.html')
})

app.listen(3000, ()=>{
    console.log('Rodando 3000')
})