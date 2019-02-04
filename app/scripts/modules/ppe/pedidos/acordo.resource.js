/**
 * ========================
 * AcordoResource
 * ========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';
    
    module.factory('AcordoResource', AcordoResource);
    
    AcordoResource.$inject = ['Restangular'];

    /*@ngInject*/
    function AcordoResource(Restangular){

        function init() {
            
        }
        init();

        var resource = '/acordo';
        
        return {
            cadastrarResultadoAnalisePedido     : cadastrarResultadoAnalisePedido,
            informarDocumento                   : informarDocumento,
            adicionarArquivoComRessalva         : adicionarArquivoComRessalva,
            negar                               : negar,
            recuperarPagamentos                 : recuperarPagamentos,
            adicionarPagamento                  : adicionarPagamento,
            removerPagamento                    : removerPagamento
        }
        
        function getResource() {
            return resource;
        }

        function cadastrarResultadoAnalisePedido() {
            return Restangular.all(getResource() + "/cadastrarResultadoAnalisePedido");
        }

        function informarDocumento() {
            return Restangular.all(getResource() + "/informarDocumento");
        }

        function adicionarArquivoComRessalva() {
            return Restangular.all(getResource() + "/adicionararquivoressalva");
        }

        function negar() {
            return Restangular.all(getResource() + "/negar");
        }
        
        function recuperarPagamentos(guidPedido) {
            return Restangular.all(getResource() + "/recuperarpagamentos/" + guidPedido);
        }

        function adicionarPagamento() {
            console.log("informando pagamento...");
            return Restangular.all(getResource() + "/informarPagamento");
        }

        function removerPagamento(idPagamento) {
            return Restangular.all(getResource() + "/pagamento/" + idPagamento);
        }
    }
}
