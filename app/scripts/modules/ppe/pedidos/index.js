module.exports = function(module) {

    //require('./pedidos.routes.js')(module);
    require('./pedidos.resource.js')(module);
    require('./acordo.resource.js')(module);

    require('./consultar-pedidos')(module);
    require('./aprovar-pedidos')(module);
    require('./obter-pedidos')(module);
    require('./aprovar-pedidos-com-ressalva')(module);
    require('./negar-pedido')(module);

    // Resources
    require('./resource/pedido.resource')(module);
    require('./resource/analise-pedido.resource')(module);

    // Services
    require('./service/pedido.service')(module);
    require('./service/analise-pedido.service')(module);

    // Controllers
    require('./controller/pedido.controller')(module);

}