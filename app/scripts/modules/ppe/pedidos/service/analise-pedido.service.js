/**
 * -------------------------------
 * AnalisePedidoHabilitacaoService
 * -------------------------------
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.service(AnalisePedidoHabilitacaoService, 'AnalisePedidoHabilitacaoService');

    function AnalisePedidoHabilitacaoService(AnalisePedidoHabilitacaoResource) {

        return {
            buscar:              buscar,
            listar:              listar,
            buscarPorGuidPedido: buscarPorGuidPedido
        }

        /**
         * ------
         * buscar
         * ------
         */
        function buscar(sqPedidoHabilitacao) {
            return AnalisePedidoHabilitacaoResource.buscar(sqPedidoHabilitacao);
        }

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return AnalisePedidoHabilitacaoResource.listar();
        }

        /**
         * -------------------
         * buscarPorGuidPedido
         * -------------------
         */
        function buscarPorGuidPedido(guidPedido) {
            return AnalisePedidoHabilitacaoResource.buscarPorGuidPedido(guidPedido);
        }
    }
}