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

        var root                      = 'ppe/pedidos/';
        var consultarPedidos          = root + 'consultar-pedidos/views/';
        var aprovarPedidos            = root + 'aprovar-pedidos/views/';
        var aprovarPedidosComRessalva = root + 'aprovar-pedidos-com-ressalva/views/';
        var negarPedido               = root + 'negar-pedido/views/';

        var profileAdm = ['ADM'];

        $stateProvider
            .state('consultar.index', {
                url: null,
                parent: 'default',
                templateUrl: consultarPedidos + 'index.html',
                controller: 'ConsultarPedidosController',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    parent: 'home',
                    label: 'Consultar Pedidos'
                },
                auth: false,
                profile: profileAdm
            });
    }
}