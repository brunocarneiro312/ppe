module.exports = function(module) {

    'use strict';

    module.controller('PagamentosController', PagamentosController);

    function PagamentosController() {

        var vm = this;

        function init() {
            console.log("[INFO] PagamentosController.init()");
        }
        init();
    }
}