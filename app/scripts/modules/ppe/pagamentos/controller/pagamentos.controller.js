exports.module = function(module) {

    'use strict';

    module.controller('PagamentoController2', PagamentoController2);

    function PagamentoController2() {

        var vm = this;

        function init() {
            console.log('[INFO] PagamentoController.init()');
        }
        init();

    }
}