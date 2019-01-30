/**
 * ---------------------
 * Recurso de pagamentos
 * ---------------------
 * @author COINT
 * @since 01/2019
 */
module.exports = function(module) {

    "use strict";

    module.factory("PagamentosResources", PagamentosResources);

    function PagamentosResources(Restangular){

        var resource = '/pagamentos';

        return {
            salvar:                               salvar,
            remover:                              remover,
            listar:                               listar,
            buscar:                               buscar,
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao,
        }

        /**
         * ------
         * salvar
         * ------
         */
        function salvar(pagamento) {
            return Restangular.all("/acordo/informarPagamento").post(pagamento);
        }

        /**
         * -------
         * remover
         * -------
         */
        function remover(pagamento) {
            return Restangular.one(_getResource() + "/pagamento", pagamento.sqPagamento).remove();
        }

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return Restangular.all(_getResource());
        }

        /**
         * ------
         * buscar
         * ------
         */
        function buscar(codigoDoPagamento) {
            return Restangular.one(_getResource() + "/pagamento/" + codigoDoPagamento).get();
        }

        /**
         * ------------------------------------
         * listarPagamentosPorPedidoHabilitacao
         * ------------------------------------
         */
        function listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao) {
            return Restangular.all(_getResource() + "/" + pedidoHabilitacao).getList();
        }

        /**
         * ------------
         * _getResource
         * ------------
         */
        function _getResource() {
            return resource;
        }
    }
}
