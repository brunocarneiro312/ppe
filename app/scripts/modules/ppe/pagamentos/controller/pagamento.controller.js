exports.module = function(module) {

    'use strict';

    module.controller('PagamentoController', PagamentoController);

    function PagamentoController() {

        var vm = this;

        function init() {
            console.log('[INFO] PagamentoController.init()');
        }
        init();

    }
}