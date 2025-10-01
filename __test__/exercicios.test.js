import {describe, it , expect } from '@jest/globals'
import { somar } from '../services/exercicios'


describe('testando função somar', () => {
    it('somando dois numeros positivos', () => {
        const resultado = somar(1, 2)
        expect(resultado).toBe(3);
    })

     it('somando dois numeros negativos', () => {
        const resultado = somar(-1, -2)
        expect(resultado).toBe(-3);
    })
     it('somando dois numeros com casa decimal', () => {
        const resultado = somar(1.1, 2.1)
        expect(resultado).toBe(3.2);
    })
     it('somando um numero com zero', () => {
        const resultado = somar(1, 0)
        expect(resultado).toBe(1);
    })
     it('somando zero com um numero', () => {
        const resultado = somar(0, 2)
        expect(resultado).toBe(2);
    })
})