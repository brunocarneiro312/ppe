/**
 * ==========================
 * ConsultarPedidosController
 * ==========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';

    module.controller('ConsultarPedidosController', ConsultarPedidosController);

    ConsultarPedidosController.$inject = [
        '$http',
        '$scope',
        '$state',
        '$location',
        '$filter',
        'paths',
        'msg',
        'growl',
        'mask',
        'PedidosResource',
        'NgTableParams'
    ];

    function ConsultarPedidosController(
        $http,
        $scope,
        $state,
        $location,
        $filter,
        paths, 
        msg, 
        growl,
        mask,
        PedidosResource,
        NgTableParams) {

        var vm = this;

        // Funções
        vm.consultar      = consultar;
        vm.detalharPedido = detalharPedido;
        vm.limpar         = limpar;

        // Objetos
        vm.pedido            = undefined;
        vm.listaPedidos      = [];
        vm.listaStatusPedido = [];
        vm.listaSituacao     = [];

        /**
         * ----
         * init
         * ----
         */
        function init() {

            //limpar os campos
            vm.pedido        = undefined;
            vm.listaPedidos  = [];
            vm.listaSituacao = [];

            PedidosResource.consultarStatusPedido().getList().then(function (response) {
                vm.listaStatusPedido = response.data;
            });

            PedidosResource.consultarSituacaoPedido().getList().then(function (response) {
                vm.listaSituacao = response.data;
            });

            mask.add('guid', '********-****-****-****-************');
            mask.add('protocolo', '***-***-********-********');
            mask.add('processo', '9999999999');
            mask.add('cpf', '999.999.999-99');
            mask.add('inteiro4', '9999');

        }
        init();

        /**
         * ---------------
         * Carrega ngTable
         * ---------------
         */
        function _carregarTabelaPedidos(listaPedidos)
        {
            vm.tabelaPedidos = new NgTableParams({
                count: 10
            }, {
                counts:[10, 25, 50, 100],
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                total: listaPedidos.length,
                dataset: listaPedidos
            });
        }

        /**
         * ----------------
         * Consultar pedido
         * ----------------
         */
        function consultar()
        {
            if (vm.pedido)
            {
                if (vm.pedido.cpfPoupador)
                {
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace(/\./g, '');
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace('-', '');
                }

                if(vm.pedido.dateCadastro)
                {
                    vm.pedido.dataCadastro = $filter('date')(new Date(vm.pedido.dateCadastro), 'dd/MM/yyyy');
                }
            }

            var URL = window.config.paths.server;

            $http({
                url: URL+'/pedido?limit=10000',
                method: "GET",
                params: vm.pedido
            }).then(function(response) {

                if (response.status == 200)
                {
                    vm.listaPedidos = response.data;
                    _carregarTabelaPedidos(vm.listaPedidos);
                }
                else
                {
                    if (response.data != undefined)
                    {
                        growl.error(response.data.message.message);
                    }
                    else
                    {
                        growl.error(response.statusText);
                    }
                }
            });

            // $http({
            //     url: URL + '/pedido?page=' + pageNumber + '&limit=' + limit,
            //     method: 'GET',
            //     params: vm.pedido
            // }).then(function(respose) {
            //     if (respose.status == 200)
            //     {
            //         vm.listaPedidos = response.data;
            //         _carregarTabelaPedidos(vm.listaPedidos);
            //     }
            //     else
            //     {
            //         growl.error(respose.statusText);
            //     }
            // });
        }

        /**
         * -------------------------------------------------------------------------
         * Detalha o pedido, redirecionando o usuário para o formulário de aprovação
         * -------------------------------------------------------------------------
         */
        function detalharPedido(guidPedido)
        {
            $state.go('home.aprovarpedidos', {guidPedido: guidPedido});
        }

        /**
         * -----------------
         * Limpar formulário
         * -----------------
         */
        function limpar()
        {
            init();
        }
    }
}