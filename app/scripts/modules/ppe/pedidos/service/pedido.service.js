/**
 * Serviço de pedidos
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.service("PedidoService", PedidoService);

    function PedidoService(PedidoResource) {

        return {
            consultarPedidos:           consultarPedidos,
            consultarPedido:            consultarPedido,
            buscarAnalisePedidoPorGuid: buscarAnalisePedidoPorGuid,
            buscarProposta:             buscarProposta
        }

        /**
         * -----------------------------------------------------
         * Chama resource que lista todos os pedidos cadastrados
         * -----------------------------------------------------
         */
        function consultarPedidos(limit, params) {
            return PedidoResource.consultarPedidos(limit, params);
        }

        /**
         * --------------------------------------------
         * Chama resource que lista um pedido pelo guid
         * --------------------------------------------
         */
        function consultarPedido(guidPedido) {
            return PedidoResource.consultarPedido(guidPedido);
        }

        /**
         * --------------------------
         * buscarAnalisePedidoPorGuid
         * --------------------------
         */
        function buscarAnalisePedidoPorGuid(guidPedido) {
            return PedidoResource.buscarAnalisePedidoPorGuid(guidPedido);
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {
            return PedidoResource.buscarProposta(sqProposta);
        }
    }
}