// Desafio 01
console.log("Desafio 01 - Inicio")

// Criar um objeto funcionario com:
// - Array de strings com os nomes dos supervisores
// - Função de bater ponto que recebe a hora(numero) e retorna uma string
//     -> Ponto normal(<= 8)
//     -> Fora do horário(> 8)

let funcionarios: {
  supervisores: string[],
  batidaPonto: (x: number) => string
} = {
  supervisores: ['Maria', 'Paula', 'Lori'],
  batidaPonto(horario: number): string {
    return horario <= 8 ? 'Ponto Normal' : 'Fora do Horário'
  }
}

console.log(funcionarios.batidaPonto(10))
console.log(funcionarios.supervisores)
console.log("Desafio 01 - Fim")

// Desafio 02
console.log("Desafio 02 - Inicio")

// Transformar Código JS em TS

// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//       this.saldo += valor
//   }
// }

// let correntista = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number): void {
     this.saldo += valor
  }
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)

console.log("Desafio 02 - Fim")