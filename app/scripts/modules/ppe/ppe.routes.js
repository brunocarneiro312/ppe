/**
 * ======================
 * ConsultarPedidosRoutes
 * ======================
 * 
 * @author COINT
 * @since '05/2018'
 */
module.exports = function(module){

	module.config(ConsultarPedidosRoutes);
	
	ConsultarPedidosRoutes.$inject = ['$stateProvider'];
	
	function ConsultarPedidosRoutes($stateProvider){

        var root = 'ppe/pedidos/';
        var consultarPedidos = root + 'consultar-pedidos/views/';
        var aprovarPedidos = root + 'aprovar-pedidos/views/';
        var aprovarPedidosComRessalva = root + 'aprovar-pedidos-com-ressalva/views/';
        var negarPedido = root + 'negar-pedido/views/';

        var profileAdm = ['ADM'];

        $stateProvider		
            .state('home.consultarpedidos',{
                url: '/consultar-pedidos',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/consultar-pedidos/views/index.html',
                controller: 'ConsultarPedidosController as vm',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Consultar pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.aprovarpedidos', {
                url: '/aprovar-pedidos/:guidPedido',
                templateUrl: 'ppe/pedidos/aprovar-pedidos/views/aprovar-pedidos.html',
                controller: 'AprovarPedidosController as vm',
                parent: 'dashboard',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Aprovar pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.consultarpedidosref', {
                url: '/pedidos',
                templateUrl: 'ppe/pedidos/view/index.html',
                controller: 'PedidoController as vm',
                parent: 'dashboard',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.obterpedidos',{
                url: '/obter-pedidos',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/obter-pedidos/views/index.html',
                controller: 'ObterPedidosController as vm',
                ncyBreadcrumb:{
                    parent: 'home.aprovarcomressalva',
                    parent: 'home.aprovarcomressalva',
                    label: 'Obter Pedidos'
                },
                auth: false,
                profile: profileAdm
            });
            /*
            .state('home.negarpedido',{
                url: '/negar-pedido',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/negar-pedido/views/index.html',
                controller: 'NegarPedidoController as vm',
                ncyBreadcrumb:{
                    parent: 'home.negarpedido',
                    label: 'Negar pedido'
                },
                auth: false
            })*/
    }
}