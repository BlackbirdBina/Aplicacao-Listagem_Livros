// import { Livro } from "./models/livro";
System.register(["./controllers/livrocontroller"], function (exports_1, context_1) {
    "use strict";
    var _a, _b, livrocontroller_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (livrocontroller_1_1) {
                livrocontroller_1 = livrocontroller_1_1;
            }
        ],
        execute: function () {
            // let livro = new Livro("Meu livro", "Sabrina", "UFRN", 2022);
            // console.log(livro);
            controller = new livrocontroller_1.LivroController();
            (_a = document.querySelector('.form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', controller.cadastrar.bind(controller));
            (_b = document.querySelector('.form')) === null || _b === void 0 ? void 0 : _b.addEventListener('reset', controller.excluir.bind(controller));
        }
    };
});
