System.register([], function (exports_1, context_1) {
    "use strict";
    var Livros;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // Array de livros
            Livros = class Livros {
                constructor() {
                    this._livros = [];
                }
                adicionar(livro) {
                    if (this._livros.find(livroinformado => livroinformado.titulo === livro.titulo &&
                        livroinformado.autor === livro.autor &&
                        livroinformado.editora === livro.editora &&
                        livroinformado.ano === livro.ano)) {
                        alert("Livro já cadastrado");
                    }
                    else {
                        this._livros.push(livro);
                    }
                }
                exibirOsLivros() {
                    return this._livros;
                }
                retirar(livro) {
                    let livros2 = this._livros.filter(livroinformado => livroinformado.titulo !== livro.titulo ||
                        livroinformado.autor !== livro.autor ||
                        livroinformado.editora !== livro.editora ||
                        livroinformado.ano !== livro.ano);
                    if (this._livros.length === livros2.length) {
                        alert("Não foi possível remover o livro, pois ele não se encontra cadastrado na lista");
                    }
                    else {
                        this._livros = livros2;
                        alert("Livro removido");
                    }
                }
            };
            exports_1("Livros", Livros);
        }
    };
});
