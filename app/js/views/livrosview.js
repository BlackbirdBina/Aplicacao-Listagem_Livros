System.register([], function (exports_1, context_1) {
    "use strict";
    var LivrosView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LivrosView = class LivrosView {
                constructor(seletor) {
                    this._elemento = document.querySelector(seletor);
                }
                update(modelo) {
                    this._elemento.innerHTML = this.templateHTML(modelo);
                }
                templateHTML(modelo) {
                    return `
        <table>

            <tr>

                <th>Título</th>
                <th>Autor</th>
                <th>Editora</th>
                <th>Ano</th>

            </tr>

            ${modelo.exibirOsLivros().map(livro => {
                        return `
                    <tr>
                        <td>${livro.titulo}</td>
                        <td>${livro.autor}</td>
                        <td>${livro.editora}</td>
                        <td>${livro.ano}</td>
                    </tr>
                `;
                    }).join('')}

        </table>
        `;
                }
            };
            exports_1("LivrosView", LivrosView);
        }
    };
});
