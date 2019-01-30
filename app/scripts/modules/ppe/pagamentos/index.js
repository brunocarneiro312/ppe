module.exports = function(module) {

    // Controller
    require('./controller/pagamento.controller')(module);

    // Resource
    require('./resource/pagamento.resource')(module);

    // Service
    require('./service/pagamento.service')(module);

}