module.exports = function(module) {
    'use strict';

    // Resource
    require('./resource/pagamentos.resource.js')(module);

    // Service
    require('./service/pagamentos.services.js')(module);

    // Controller
    require('./controller/pagamentos.controller.js')(module);

}