import { media, salario, somar } from "../services/exercicios.js"

export const exercicio1Get = (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const result = somar(num1, num2)
    res.status(200).send({ num1, num2, result })
}

export const exercicio1Post = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const result = somar(num1, num2)
    res.status(200).send({
        msg: "O resultado é "+result,
        data: result,
        error: null
    })
}

export const exercicio2 = (req, res) => {
    // const valorHora = req.params.valorHora
    // const qtdeHoras = req.params.qtdeHoras
    const { valorHora, qtdeHoras } = req.params
    
    const result = salario(valorHora, qtdeHoras)

    res.status(200).send({
        result
    })
}

export const exercicio3 = (req, res) => {
    // const valorHora = req.params.valorHora
    // const qtdeHoras = req.params.qtdeHoras
    const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5} = req.params
    
    const result = media(Number(pessoa1), Number(pessoa2), Number(pessoa3), Number(pessoa4), Number(pessoa5))

    res.status(200).send({
        result: result / 5
    })
}