/**
 * ---------------------
 * Recurso de pagamentos
 * ---------------------
 * @author COINT
 * @since 01/2019
 */
module.exports = function(module) {

    'use strict';

    module.factory('PagamentosResources', PagamentosResources);

    /*@ngInject*/
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
            return Restangular.one(_getResource() + "/")
        }

        /**
         * -------
         * remover
         * -------
         */
        function remover(pagamento) {
            return Restangular.one(_getResource() + '/pagamento', pagamento.sqPagamento).remove();
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

        }

        /**
         * ------------------------------------
         * listarPagamentosPorPedidoHabilitacao
         * ------------------------------------
         */
        function listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao) {
            return Restangular.all(_getResource() + '/' + pedidoHabilitacao);
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
