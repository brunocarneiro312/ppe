/**
 * PagamentoResource
 */
module.exports = function(module) {

    'use strict';

    module.factory('PagamentoResource', PagamentoResource);

    PagamentoResource.$inject = ['Restangular'];

    /*@ngInject*/
    function PagamentoResource(Restangular){

        function init() {

        }
        init();

        var resource = '/pag';

        return {
            listarPagamentos:                     listarPagamentos,
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao,
            removerPagamento:                     removerPagamento,
            verificarPagamentoDeParcela:          verificarPagamentoDeParcela
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

        function verificarPagamentoDeParcela(sqParcela) {
            return Restangular.one(getResource() + '/parcelas/pagas/' + sqParcela).get();
        }

    }
}
