System.register(["../models/livro", "../models/Livros", "../views/livrosview"], function (exports_1, context_1) {
    "use strict";
    var livro_1, Livros_1, livrosview_1, LivroController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livro_1_1) {
                livro_1 = livro_1_1;
            },
            function (Livros_1_1) {
                Livros_1 = Livros_1_1;
            },
            function (livrosview_1_1) {
                livrosview_1 = livrosview_1_1;
            }
        ],
        execute: function () {
            // Realizando a comunicação entre os inputs e a construção dos objetos localmente
            LivroController = class LivroController {
                constructor() {
                    this._inputTitulo = document.querySelector("#titulo");
                    this._inputAutor = document.querySelector("#autor");
                    this._inputEditora = document.querySelector("#editora");
                    this._inputAno = document.querySelector("#ano");
                    this._livros = new Livros_1.Livros;
                    this._livrosView = new livrosview_1.LivrosView("#livrosview");
                    this._livrosView.update(this._livros);
                }
                cadastrar(event) {
                    // Cancelando evento padrão
                    event.preventDefault();
                    let livro = new livro_1.Livro(this._inputTitulo.value, this._inputAutor.value, this._inputEditora.value, parseInt(this._inputAno.value), 0);
                    // Testando o funcionamento:
                    // console.log(livro);
                    // this._livros.exibirOsLivros().forEach(livro => console.log(livro));
                    this._livros.adicionar(livro);
                    this._livrosView.update(this._livros);
                }
                excluir(event) {
                    event.preventDefault();
                    let livro = new livro_1.Livro(this._inputTitulo.value, this._inputAutor.value, this._inputEditora.value, parseInt(this._inputAno.value), 0);
                    this._livros.retirar(livro);
                    this._livrosView.update(this._livros);
                }
            };
            exports_1("LivroController", LivroController);
        }
    };
});
