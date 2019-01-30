module.exports = function(module) {

    'use strict';

    module.controller('SandboxController', SandboxController);

    function SandboxController(NgTableParams) {

        var vm = this;

        function init() {

            // carregando tabela de pedidos
            _carregarTabelaPedidos();
        }
        init();

        function _carregarTabelaPedidos() {
            vm.tablePedidos = new NgTableParams({

            }, {
                dataset: [{
                    name: 'teste1',
                    description: 'desc1'
                }, {
                    name: 'teste2',
                    description: 'desc2',
                }, {
                    name: 'teste3',
                    description: 'desc3'
                }, {
                    name: 'teste4',
                    description: 'desc4'
                }, {
                    name: 'teste5',
                    description: 'desc5'
                }, {
                    name: 'teste6',
                    description: 'desc6'
                }, {
                    name: 'teste7',
                    description: 'desc7'
                }, {
                    name: 'teste8',
                    description: 'desc8'
                }, {
                    name: 'teste9',
                    description: 'desc9'
                }, {
                    name: 'teste10',
                    description: 'desc10'
                }, {
                    name: 'teste11',
                    description: 'desc11'
                }, {
                    name: 'teste12',
                    description: 'desc12'
                }, {
                    name: 'teste13',
                    description: 'desc13'
                }, {
                    name: 'teste14',
                    description: 'desc14'
                }, {
                    name: 'teste15',
                    description: 'desc15'
                }, {
                    name: 'teste16',
                    description: 'desc16'
                }, {
                    name: 'teste17',
                    description: 'desc17'
                }, {
                    name: 'teste18',
                    description: 'desc18'
                }, {
                    name: 'teste19',
                    description: 'desc19'
                }, {
                    name: 'teste20',
                    description: 'desc20'
                },],
            });
        }
    }
}