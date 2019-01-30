(function(){

    'use strict';

    //http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
    window.name = 'NG_DEFER_BOOTSTRAP!';
    window.app_version = '0.0.0';

    window.package = require('../../package.json');




    /* build:modules */
    window.config = require('../../.tmp/scripts/config');

    /** Arquivo gerado pela task template do gulp */
    require('../../.tmp/scripts/templates');

    /* endbuild */
	require('./Util');
    require('../../.tmp/modulos');

    var app = angular
        .module('brbapp',[
            'templates',
            'brb-template',
            'ngTable',
            'brb',
            'app.modulos',
            'ui.select'
        ]
    );

    /** Arquivo gerado pela task modulos do gulp */




    app.constant('PATH',window.package.paths);

    app.constant('VERSION', window.package.version );

    app.config(AppConfig);

    AppConfig.$inject = ['$httpProvider'];

    function AppConfig($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);

    });


})();
