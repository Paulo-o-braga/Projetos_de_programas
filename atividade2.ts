//Criando classes
class Aluno {
    public readonly nome: string; //atributos
    public turma: string;
    public numero: Number;
    
    constructor(nome: string, turma: string, numero: number){
        this.nome = nome;
        this.turma = turma;
        this.numero = numero;
    }
}