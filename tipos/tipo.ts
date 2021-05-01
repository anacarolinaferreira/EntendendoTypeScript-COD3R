// String
let nome: string = 'João'
// nome = 50 (não é possível)
console.log(nome)


// Numbers
let idade: number = 27
// idade = 'Ana' (não é possível)
idade = 27.6
console.log(idade)

// Boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 (não é possível)
console.log(possuiHobbies)


// TIPOS EXPLICITOS
let minhaidade: number

minhaidade = 27
console.log(typeof minhaidade)
// minhaidade = 'idade é 27'
// console.log(typeof minhaidade)

// ARRAY
let hobbies: string[] = ["Cozinhar", "Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

// TUPLA
let endereco: [string, number, number] = ["Av Principal", 99, 123]
console.log(endereco)

// ENUMS
enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul = 2,   //2
  Laranja,
  Amarelo
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Amarelo)

// ANY
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2021 }
console.log(carro)

// FUNÇÕES
function retornMeuNome(): string {
  return nome
  // return minhaCor (o tipo de retorno não é valido)
}
console.log(retornMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}
console.log(multiplicar(10.5, 20))

// Funções como Tipos
let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5, 6))

// Objetos
let usuario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}
console.log(usuario)

// Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
}

const colaborador: Funcionario = {
  supervisores: ['Maria', 'Marcelo'],
  baterPonto(x: number): string {
    return x <= 8 ? 'Ponto Normal' : 'Fora do horario'
  }
}

console.log(`colaborador: ${colaborador.supervisores}`)
console.log(`colaborador: ${colaborador.baterPonto(9)}`)

const colaborador2: Funcionario = {
  supervisores: ['Paula', 'Luis'],
  baterPonto(y: number): string {
    return y <= 8 ? 'Ponto Normal' : 'Fora do Horário'
  }
}

console.log(`colaborador2: ${colaborador2.supervisores}`)
console.log(`colaborador2: ${colaborador2.baterPonto(5)}`)


// Múltiplos Tipos com Union Types

let nota: number | string;

nota = 10;
console.log(nota);

nota = '10';
console.log(nota);

// Never
function falha(msg: string): never {
  throw new Error(msg)
}

let produto = {
  nome: 'Sabão',
  preco: 1,
  validaProduto() {
    if (!produto.nome || produto.nome.trim().length == 0) {
      falha('Produto precisa de um nome')
    }
    if (produto.preco <= 0) {
      falha('Produto necessita de um preço maior que 0')
    }
  }
}
produto.validaProduto()

// Null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: number,
  tel2: null | number
}

const contato1: Contato = {
  nome: 'Carol',
  tel1:99999999,
  tel2: null
}
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)