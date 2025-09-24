export const exercicio1 = (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const result = num1 + num2
    res.status(200).send({ num1, num2, result })
}
export const exercicio2 = (req, res) => {
    // const valorHora = req.params.valorHora
    // const qtdeHoras = req.params.qtdeHoras
    const { valorHora, qtdeHoras } = req.params
    
    res.status(200).send({
        result: Number(valorHora) * Number(qtdeHoras)
    })
}