import express from "express"
import { exercicio1, exercicio2 } from "./services/exercicio.js"

const app = express() //inicializando api com express

//req = request , res = response
// app.get('/api/pessoa/:id', (req, res) => {
//     //query 
//     //
//     //params inicializa na URL dps do ?
//     //?nome=joao       ?idade=10
//     //& separa os parametros ?nome=joao&idade=10

//     const nome = req.query.nome

//     res.status(200).send("Hello "+ nome)
// })



// localhost:3000/exercicio1?num1=30&num2=45
app.get('/exercicio1', exercicio1)
// localhost:3000/exercicio2/30/45
app.get('/exercicio2/:valorHora/:qtdeHoras', exercicio2)


app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})

