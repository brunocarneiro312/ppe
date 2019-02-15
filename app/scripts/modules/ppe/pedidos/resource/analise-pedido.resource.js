/**
 * --------------------------------
 * AnalisePedidoHabilitacaoResource
 * --------------------------------
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.factory(AnalisePedidoHabilitacaoResouce, 'AnalisePedidoHabilitacaoResouce');

    function AnalisePedidoHabilitacaoResouce(Restangular) {

        return {
            listar:              listar,
            buscar:              buscar,
            buscarPorGuidPedido: buscarPorGuidPedido
        }

        var resource = '/analise-pedido-habilitacao';

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return Restangular.all(resource).getList();
        }

        /**
         * ------
         * buscar
         * ------
         * @param sqPedidoHabilitacao
         * @returns {*}
         */
        function buscar(sqPedidoHabilitacao) {
            return Restangular.one(resource, sqPedidoHabilitacao).get();
        }

        /**
         * -------------------
         * buscarPorGuidPedido
         * -------------------
         * @param guidPedido
         * @returns {*}
         */
        function buscarPorGuidPedido(guidPedido) {
            return Restangular.one(resource, guidPedido).get();
        }
    }
}