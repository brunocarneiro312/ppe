(function(){
    
    'use strict';

    var ppe = angular.module('ppe', []);
        
    require('./ppe.menu.js')(ppe);
    require('./ppe.routes.js')(ppe);

    require('./pedidos')(ppe);

    // Pagamentos
    require('./pagamentos')(ppe);

    // Arquivo
    require("./arquivo")(ppe);

})();
