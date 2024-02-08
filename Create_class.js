// Criação da Classe Pessoa para gerar Objetos
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
    console.log(`${this.nome} está falando. `)
    }

    comer(){
    console.log(`${this.nome} está comendo. `)

    }
    beber(){
    console.log(`${this.nome} está bebendo. `)
    }
}

const p1 = new Pessoa('Pedro','Carvalho');
console.log(p1)


////////////////////////////
//Criação da Function Pessoa, para a criação de objetos 
function Pessoa2(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando. `)
}

const p2 = new Pessoa2('Ana','Fidelis');
console.log(p2);