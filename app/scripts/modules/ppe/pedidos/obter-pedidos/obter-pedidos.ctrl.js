/**
 * =======================
 * ObterPedidosControllers
 * =======================
 * @author COINT
 */
module.exports = function(module) {

    'use strict';

    module.controller('ObterPedidosController', ObterPedidosController);

    function ObterPedidosController(PedidosResource, growl, mask) {
        
        var vm = this;

        // Funções
        vm.obterPedidos            = obterPedidos;
        vm.reset                   = reset;
        vm.exibirCriterioPesquisa  = exibirCriterioPesquisa;
        vm.ocultarCriterioPesquisa = ocultarCriterioPesquisa;
        
        // Variáveis / Objetos
        vm.isCriterioPesquisa  = undefined;        
        vm.obterPedidosRequest = {};
        vm.listaStatusPedido   = [];

        function init() {
            PedidosResource.consultarStatusPedido().getList().then(function (response) {
                vm.listaStatusPedido = response.data;
            });
            mask.add('guid', '********-****-****-****-************');
            mask.add("inteiro5", "99999");
        }
        init();

        function obterPedidos() {

            if (!Util.isUndefinedOuNull(vm.obterPedidosRequest.dateInicio) || !Util.isUndefinedOuNull(vm.obterPedidosRequest.dateFim)) {
                //Valida de acordo com as regras de filtro de data do sistema
                var isDatasValidas = Util.validaDatas(vm.obterPedidosRequest.dateInicio, vm.obterPedidosRequest.dateFim, growl);
                if (!isDatasValidas) {
                    //sobe a mensagem de erro
                    return;
                }
            }

            vm.obterPedidosRequest.dataInicio = Util.dateToString(vm.obterPedidosRequest.dateInicio, 'dd/mm/yy');
            vm.obterPedidosRequest.dataFim    = Util.dateToString(vm.obterPedidosRequest.dateFim,    'dd/mm/yy');

            PedidosResource.obterPedidos().get(vm.obterPedidosRequest)
                .then(function(response) {
                    if(response.status != 200) {
                        growl.error(response.data.message.message);
                    } else {
                        growl.success("Pedidos importados com sucesso.");
                    }
                }).catch(function(error) {
                    growl.error(error.data.message.message)
                });
        }

        function exibirCriterioPesquisa() {
            vm.isCriterioPesquisa = true;
        }

        function ocultarCriterioPesquisa() {
            vm.isCriterioPesquisa = false;
        }

        function reset() {
            vm.obterPedidosRequest = {};
        }
    }
}