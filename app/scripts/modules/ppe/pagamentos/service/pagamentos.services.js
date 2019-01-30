module.exports = function(module) {

    'use strict';

    module.service('PagamentosService', PagamentosService);

    function PagamentosService() {

        return {
            salvar:  salvar,
            remover: remover,
            listar:  listar,
            buscar:  buscar
        }

        function init() {
            console.log("[INFO] PagamentosService.init()");
        }
        init();

        /**
         * Solicita recurso para salvar pagamento
         */
        function salvar(pagamento) {
            console.log("salvando pagamento...");
            console.log(pagamento);
        }

        /**
         * Solicita recurso para remover pagamento
         */
        function remover(pagamento) {
            console.log("removendo pagamento...");
            console.log(pagamento)
        }

        /**
         * Solicita recurso para listar pagamento
         */
        function listar() {
            console.log("listando pagamento...");
        }

        /**
         * Solicita recurso para buscar pagamento
         */
        function buscar(codigoDoPagamento) {
            console.log("buscando pagamento...");
            console.log(codigoDoPagamento);
        }
    }
}