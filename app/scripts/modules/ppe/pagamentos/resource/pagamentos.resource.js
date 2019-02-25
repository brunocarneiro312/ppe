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
            listarParcelas:                       listarParcelas,
            listarParcelasPorGuidPedido:          listarParcelasPorGuidPedido,
            informarPagamento:                    informarPagamento,
            verificarPagamentoDeParcela:          verificarPagamentoDeParcela
        }

        /**
         * ------
         * salvar
         * ------
         */
        function salvar(pagamento) {
            return Restangular.all("/acordo/informarPagamento").post(pagamento);
        }

        function informarPagamento(pagamento) {
            return Restangular.all("/pagamentos/informar").post(pagamento);
        }

        /**
         * -------
         * remover
         * -------
         */
        function remover(codigoDoPagamento) {
            return Restangular.one(_getResource() + "/pagamento/", codigoDoPagamento).remove();
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
         * --------------
         * listarParcelas
         * --------------
         */
        function listarParcelas(sqProposta) {
            return Restangular.all('/parcela/' + sqProposta).getList();
        }

        /**
         * ---------------------------
         * listarParcelasPorGuidPedido
         * ---------------------------
         */
        function listarParcelasPorGuidPedido(guidPedido) {
            return Restangular.all('/parcela/guid/' + guidPedido).getList();
        }

        /**
         * ---------------------------
         * verificarPagamentoDeParcela
         * ---------------------------
         */
        function verificarPagamentoDeParcela(sqParcela) {
            return Restangular.one('/pagamentos/parcelas/pagas/' + sqParcela).get();
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
