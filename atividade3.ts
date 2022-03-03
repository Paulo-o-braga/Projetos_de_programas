//Criando classes
class Aluno {
    public readonly nome: string; //atributo_1
    public turma: string; //atributo_2
    public numero: Number; //atributo_3
    
    constructor(nome: string, turma: string, numero: number){
        this.nome = nome;
        this.turma = turma;
        this.numero = numero;
    }
}

class Professor {
    public readonly nome: string; //atributo_1
    public disciplina: string; //atributo_2
    public qtd_turmas: Number; //atributo_3
    
    constructor(nome: string, disciplina: string, qtd_turmas: number){
        this.nome = nome;
        this.disciplina = disciplina;
        this.qtd_turmas = qtd_turmas;
    }
}

class Carro {
    public readonly modelo: string; //atributo_1
    public fabricante: string; //atributo_2
    public cor: string; //atributo_3
    
    constructor(modelo: string, fabricante: string, cor: string){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.cor = cor;
    }
}