export function somar(num1, num2) {
    const num1Inteiro = num1*100
    const num2Inteiro = num2*100
    const result = num1Inteiro + num2Inteiro

    return result/100;
}

export function salario(valorHora, qtdeHora) {
    return valorHora * qtdeHora;
}

export function media(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5) {
    const result = pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5

    return result/5;
}