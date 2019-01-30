/**
 * ===================================
 * AprovarPedidosComRessalvaController
 * ===================================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';

    module.controller('AprovarPedidosComRessalvaController', AprovarPedidosComRessalvaController);

    AprovarPedidosComRessalvaController.$inject = [
        '$scope',
        '$state',
        'msg',
        'growl'
    ];

    function AprovarPedidosComRessalvaController($scope, $state, msg, growl) {

        console.log('ok');

        function init() {
            
        }
        init();
    }
}