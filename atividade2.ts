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