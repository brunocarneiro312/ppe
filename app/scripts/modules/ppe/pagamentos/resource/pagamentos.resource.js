/**
 * PagamentoResource
 */
module.exports = function(module) {

    'use strict';

    module.factory('PagamentosResources', PagamentosResources);

    /*@ngInject*/
    function PagamentosResources(Restangular){

        var resource = '/pagamentos';

        return {
            listarPagamentos:                     listarPagamentos,
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao,
            removerPagamento:                     removerPagamento
        }

        function getResource() {
            return resource;
        }

        function listarPagamentos() {
            return Restangular.all(getResource());
        }

        function listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao) {
            return Restangular.all(getResource() + '/' + pedidoHabilitacao);
        }

        function removerPagamento(sqPagamento) {
            return Restangular.one(getResource() + '/pagamento', sqPagamento).remove();
        }
    }
}
