module.exports = function(module) {

    //require('./pedidos.routes.js')(module);
    require('./pedidos.resource.js')(module);
    require('./acordo.resource.js')(module);
    require('./pagamento.resource')(module);

    require('./consultar-pedidos')(module);
    require('./aprovar-pedidos')(module);
    require('./obter-pedidos')(module);
    require('./aprovar-pedidos-com-ressalva')(module);
    require('./negar-pedido')(module);

    // pagamentos


}