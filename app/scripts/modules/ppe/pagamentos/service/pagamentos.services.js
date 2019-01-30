module.exports = function(module) {

    'use strict';

    module.service('PagamentosService', PagamentosService);

    function PagamentosService(PagamentosResources) {

        return {
            salvar:  salvar,
            remover: remover,
            listar:  listar,
            buscar:  buscar
        }

        /**
         * Solicita recurso para salvar pagamento
         */
        function salvar(pagamento) {
            PagamentosResources.salvar(pagamento);
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