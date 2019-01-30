/**
 * PagamentoResource
 */
module.exports = function(module) {

    'use strict';

    module.factory('PagamentoResources', PagamentoResources);

    /*@ngInject*/
    function PagamentoResources(Restangular){

        function init() {
            console.log("[INFO] PagamentoResource.init()");
        }
        init();

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
