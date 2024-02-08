class Pessoa{
    constructor(nome,sobrenome)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

/*
  Split - O split()método de String valores pega um padrão e divide 
  essa string em uma lista ordenada de substrings, pesquisando o padrão, 
  coloca essas substrings em um array e 
  retorna o array.

  Shift - O método shift remove o elemento de índice zero,
  diminui em 1 os indices dos demais valores e retorna o valor removido

  Join - O join()método de Array instâncias cria e retorna uma nova string concatenando 
  todos os elementos deste array, separados por vírgulas ou por uma string separadora 
  especificada. Se a matriz tiver apenas um item, esse item será retornado sem usar o separador
*/ 
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Pedro','Carvalho');
p1.nomeCompleto = 'Pedro Henrique Pereira Carvalho'
console.log(p1.nomeCompleto)
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1)
