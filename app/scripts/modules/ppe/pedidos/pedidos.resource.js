/**
 * ========================
 * ConsultarPedidosResource
 * ========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';
    
    module.factory('PedidosResource', PedidosResource);
    
    PedidosResource.$inject = ['Restangular'];

    /*@ngInject*/
    function PedidosResource(Restangular){

        function init() {
            
        }
        init();

        var resource = '/pedido';
        
        return {
            one:                      one,
            all:                      all,
            consultar:                consultar,
            getResource:              getResource,
            consultarStatusPedido:    consultarStatusPedido,
            obterArquivo:             obterArquivo,
            obterComprovante:         obterComprovante,
            obterPedidos:             obterPedidos,
            consultarMotivoRecusa:    consultarMotivoRecusa,
            consultarSubmotivoRecusa: consultarSubmotivoRecusa,
            consultarSituacaoPedido:  consultarSituacaoPedido
        }
        
        function getResource() {
            return resource;
        }
        
        function all() {
            return Restangular.all(resource);
        }
        
        function one(pedido) {
            return Restangular.one(resource, pedido);
        }

        function consultar() {
            return Restangular.all(resource);
        }

        function consultarStatusPedido() {
            return Restangular.all('tabeladominio/statuspedido');
        }

        function obterArquivo(guidPedido, codigoArquivo) {
            return Restangular.one('documento/obterarquivo/'+ guidPedido +"/"+ codigoArquivo);
        }

        function obterPedidos() {
            return Restangular.one('pedido/obterpedido');
        }

        function consultarMotivoRecusa() {
            return Restangular.all('tabeladominio/motivorecusa');
        }

        function consultarSubmotivoRecusa() {
            return Restangular.all('tabeladominio/submotivorecusa');
        }

        function consultarSituacaoPedido() {
            return Restangular.all('tabeladominio/situacaopedido');
        }

        function obterComprovante(codigoComprovante) {
            return Restangular.one('arquivos/arquivo/' + codigoComprovante);
        }
    }
}
