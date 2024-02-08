class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' Está ligado')
            return;
        } 
        this.ligado = true;   
     }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' Está desligado')
            return;
        } 
        this.ligado = false;   
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Metodo ligar, alterado')
    }

    enviarMenssagem(){
        console.log('Mensagem enviada')
    }
}


const t1 = new Tablet('tabletu');
const d1 = new DispositivoEletronico('Dispositivo1');
t1.ligar();
console.log(t1.ligado);
t1.enviarMenssagem();
d1.enviarMenssagem();