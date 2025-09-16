import express from "express"

const app = express() //inicializando api com express

//req = request , res = response
app.get('/api/pessoa/:id', (req, res) => {
    //query 
    //
    //params inicializa na URL dps do ?
    //?nome=joao       ?idade=10
    //& separa os parametros ?nome=joao&idade=10

    const nome = req.query.nome

    res.status(200).send("Hello "+ nome)
})



app.get('exercicio1/:id', (req, res) => {
    
    const num1 = req.params.num1
    const num2 = req.params.num2

    console.log(req.params)
    res.status(200).send(`resultado  ${num1 + num2}`)
})
app.get('/api/pessoa/:id', (req, res) => {
   

    const nome = req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+ nome)
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})

