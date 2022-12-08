import { Livro } from "../models/livro";
import { Livros } from "../models/Livros";
import { LivrosView } from "../views/livrosview";
// Realizando a comunicação entre os inputs e a construção dos objetos localmente
export class LivroController {

    private _inputTitulo: HTMLInputElement;
    private _inputAutor: HTMLInputElement;
    private _inputEditora: HTMLInputElement;
    private _inputAno: HTMLInputElement;

    private _livros: Livros;

    private _livrosView: LivrosView;

    constructor() {
        this._inputTitulo = <HTMLInputElement>document.querySelector("#titulo");
        this._inputAutor = <HTMLInputElement>document.querySelector("#autor");
        this._inputEditora = <HTMLInputElement>document.querySelector("#editora");
        this._inputAno = <HTMLInputElement>document.querySelector("#ano");
    
        this._livros = new Livros;

        this._livrosView = new LivrosView("#livrosview");
        this._livrosView.update(this._livros);

    }

    public cadastrar(event: Event){
        // Cancelando evento padrão
        event.preventDefault()

        let livro = new Livro(
            this._inputTitulo.value,
            this._inputAutor.value,
            this._inputEditora.value,
            parseInt(this._inputAno.value),
            0
        );
        // Testando o funcionamento:
        // console.log(livro);
        // this._livros.exibirOsLivros().forEach(livro => console.log(livro));
        
        this._livros.adicionar(livro);
        
        this._livrosView.update(this._livros);
    
    }

    public excluir(event: Event){

        event.preventDefault()

        let livro = new Livro(
            this._inputTitulo.value,
            this._inputAutor.value,
            this._inputEditora.value,
            parseInt(this._inputAno.value),
            0
        );
        
        this._livros.retirar(livro);

        this._livrosView.update(this._livros);
    }
}