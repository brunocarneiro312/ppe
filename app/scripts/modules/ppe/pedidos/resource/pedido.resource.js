module.exports = function(module) {
    'use strict';

    module.factory("PedidoResource", PedidoResource);

    function PedidoResource(Restangular) {

        var resource = "/pedido";

        return {
            consultarPedidos:           consultarPedidos,
            consultarPedido:            consultarPedido,
            buscarAnalisePedidoPorGuid: buscarAnalisePedidoPorGuid,
            buscarProposta:             buscarProposta
        }

        /**
         * ----------------
         * consultarPedidos
         * ----------------
         */
        function consultarPedidos(limit, params) {

            // Se não for informado o limite, seta igual a 10000
            limit = limit || 10000;

            // Se não houver parametros, seta com ""
            params = params || "";

            return Restangular.all(resource).customGET("", {
                limit:          limit,
                guidPedido:     params.guidPedido,
                protocolo:      params.protocolo,
                processo:       params.processo,
                cpfPoupador:    params.cpfPoupador,
                status:         params.status,
                anoOficio:      params.anoOficio,
                origemProcesso: params.origemProcesso,
                dataCadastro:   params.dataCadastro,
                situacaoInternaPedido: params.situacaoInternaPedido
            });

        }

        /**
         * ---------------
         * consultarPedido
         * ---------------
         */
        function consultarPedido(guidPedido) {
            return Restangular.one(resource, guidPedido).get();
        }

        /**
         * -------------------
         * buscarAnalisePedido
         * -------------------
         */
        function buscarAnalisePedidoPorGuid(guidPedido) {
            return Restangular.one('/analise-pedido-habilitacao/guid', guidPedido).get();
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {
            return Restangular.one('/proposta-acordo', sqProposta).get();
        }
    }
}