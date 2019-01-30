/**
 * =======
 * PPEMenu
 * =======
 * @author COINT
 * @since 05/2018
 * @param {*} module    
 */
module.exports = function (module) {

    'use strict';

    module.run(PPEMenu);

    PPEMenu.$inject = ['Menu'];

    function PPEMenu(Menu) {

        // Menu de Pedidos
        Menu.add('Pedidos', null, 'fa-file-text')
            .subitem('Consultar Pedido', 'home.consultarpedidos', 'fa-search')
            .subitem('Obter Pedidos', 'home.obterpedidos', 'fa-cloud-download');
            //.subitem('Aprovar', 'home.aprovarpedidos', 'fa-check')
            //.subitem('Aprovar com ressalva', 'home.aprovarcomressalva', 'fa-exclamation-triangle')
            //.subitem('Negar pedido', 'home.negarpedido', 'fa-times');
    }

};