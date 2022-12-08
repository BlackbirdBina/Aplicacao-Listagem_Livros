import { Livro } from "./livro";

// Array de livros
export class Livros {

    private _livros: Array<Livro> = [];

    public adicionar(livro: Livro): void{
        if (this._livros.find(livroinformado => 
            livroinformado.titulo === livro.titulo &&
            livroinformado.autor === livro.autor &&
            livroinformado.editora === livro.editora &&
            livroinformado.ano === livro.ano)) {

            alert("Livro já cadastrado");
            
        } else {
            this._livros.push(livro);
        }
    }

    public exibirOsLivros(): Livro[]{
        return this._livros;
    }

    public retirar(livro: Livro): void{
        
        let livros2 = this._livros.filter(livroinformado => 
            livroinformado.titulo !== livro.titulo ||
            livroinformado.autor !== livro.autor ||
            livroinformado.editora !== livro.editora ||
            livroinformado.ano !== livro.ano);
        if (this._livros.length === livros2.length) {
            alert("Não foi possível remover o livro, pois ele não se encontra cadastrado na lista")
        } else {
            this._livros = livros2;
            alert("Livro removido");
        }
    }
}