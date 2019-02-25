(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function(){
   'use strict';

    /*REQUIRE_MODULE*/
    require('../app/scripts/modules/ppe');
	/*END_REQUIRE_MODULE*/

    angular.module('app.modulos',[

        /*MODULE_INJECTION*/

        'ppe'/*END_MODULE_INJECTION*/

    ]);

}());
},{"../app/scripts/modules/ppe":11}],2:[function(require,module,exports){
module.exports={
    "sigla": "PPE",
    "nome": "Portal de Planos Econômicos",
    "env": "DSV",
    "autoLoading": true,
    "paths": {
        "server": "http://localhost:8081/api/v1.0.0",
        "home": "home"
    },
    "home":{
        "url" : "/inicio",
        "templateUrl": "ppe/views/home.html",
        "auth": false
    },
    "oauth": {
        "clientId": "UFBFOlBQRQ==",
        "path": {
            "server": "http://localhost:8081/",
            "auth": "oauth/token",
            "logout": "api/logout",
            "profile": "api/security/currentuser/profiles"
        }
    }
}

},{}],3:[function(require,module,exports){
angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("ppe/views/home.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Bem vindo ao PPE!</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<h3>Seja Bem vindo ao PPE (Portal de Planos Econômicos).<br /> <br /></h3>	 \r\n							</div>\r\n						</div>\r\n                        <div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n							  <i class=\"fa fa-chevron-left\" /> Utilize o menu ao lado  para acessar as funcionalidades.					 \r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/view/index.html","<style>\n    .banner {\n        font-weight: bold;\n        font-size: 2.2em;\n        padding: 0;\n    }\n    .steelblue {\n        color: #2e6e9e;\n    }\n    .conter-wrapper {\n        padding: 50px;\n    }\n    .custom-hr {\n        background-color: #2e6e9e;\n        padding: 2px 0;\n        margin: 0 0 10px 0;\n    }\n    .custom-hr-gray {\n        background-color: #ddd;\n        padding: 1px 0;\n        margin: 0 0 10px 0;\n    }\n    .custom-section {\n        margin: 30px 0;\n    }\n    .font-big {\n        font-size: 1.3em;\n    }\n    .font-regular {\n        font-size: 1.1em;\n    }\n    .vt-spacer-xs {\n        padding-bottom: 5px;\n    }\n    .vt-spacer-sm {\n        padding-bottom: 10px;\n    }\n    .vt-spacer {\n        padding-bottom: 25px;\n    }\n    table thead tr th {\n\n    }\n    .background-banner {\n        background: rgb(197, 239, 247);\n        border: 1px dotted #2e6e9e;\n        padding: 5px 15px;\n        margin: 10px 0 20px 0;\n    }\n    .form-div {\n        background: white;\n        border: 1px solid #ddd;\n        padding-bottom: 25px;\n        box-shadow: 0 1px 3px #ddd;\n    }\n    .bar-right {\n        border-right: 1px solid #ddd;\n    }\n    .form-group input, .form-group select, .form-group textarea {\n        border-radius: 0 !important;\n        box-shadow: 0 1px 1px #ddd;\n    }\n    .btn {\n        border-radius: 0;\n    }\n    ul.nav.nav-tabs {\n        border-bottom: 0 !important;\n    }\n    .nav.nav-tabs li a:hover {\n        border-bottom: 0;\n    }\n    .nav.nav-tabs li.active a {\n        border-radius: 0;\n        background: rgb(197, 239, 247);\n        border: 1px dotted #2e6e9e;\n        color: #2e6e9e;\n    }\n    .indianred {\n        color: indianred;\n    }\n    .green {\n        color: #327245;\n    }\n    .bold {\n        font-weight: bold;\n    }\n    .hr-style {\n        background: #ddd;\n        padding: 1px 0;\n    }\n    .bg-lime {\n        background: lime;\n    }\n    .bg-indianred {\n        background: indianred;\n    }\n    .bg-orange {\n        background: orange;\n    }\n    .box {\n        padding: 15px;\n        border: 1px solid #ddd;\n        box-shadow: 0 1px 2px 1px #ddd;\n        background: #f5f5f5;\n    }\n    .box label {\n        color: steelblue;\n    }\n    .box .form-control {\n        border-radius: 0;\n        box-shadow: inset 1px 2px 1px #ddd;\n    }\n    .box textarea {\n        resize: none;\n    }\n    .modalidade-aprovar {\n        color: green;\n    }\n    .modalidade-ressalva {\n        color: orangered;\n    }\n    .modalidade-negar {\n        color: firebrick;\n    }\n    .div-radio {\n        padding: 2.5px;\n    }\n    .a-green {\n        color: white;\n        border: 1px solid #1b4719 !important;\n        background: #2e772b !important;\n        border-radius: 0;\n        box-shadow: 0 1px 3px 1px #1b4719;\n    }\n    .a-muted {\n        color: #3d3d3d;\n    }\n    .a-green:hover {\n        color: white;\n        border: 1px solid #1b4719 !important;\n        background: #2e772b !important;\n        border-radius: 0;\n        box-shadow: 0 1px 3px 1px #1b4719;\n    }\n    .a-green:focus {\n        color: white;\n        border: 1px solid #1b4719 !important;\n        background: #2e772b !important;\n        border-radius: 0;\n        box-shadow: 0 1px 3px 1px #1b4719;\n    }\n    .a-green:active {\n        color: white;\n        border: 1px solid #1b4719 !important;\n        background: #2e772b !important;\n        border-radius: 0;\n        box-shadow: 0 1px 3px 1px #1b4719;\n    }\n    .nav-tabs a:focus {\n        outline: 0;\n    }\n    .nav-tabs a {\n        border-radius: 0 !important\n    }\n    .form-log {\n        color: #877d42;\n        padding: 15px;\n        background: #fcea79;\n        border: 1px dashed #5b531f;\n    }\n    .form-log.warning {\n        color: #877d42;\n        padding: 15px;\n        background: #fcea79;\n        border: 1px dashed #5b531f;\n    }\n    .form-log.success {\n        color: white;\n        padding: 15px;\n        background: #5caf5b;\n        border: 1px dashed #316030;\n    }\n\n    .log-header {\n        font-size: 1.2em;\n        margin-bottom: 10px;\n    }\n\n    .form-log.warning .log-header {\n    }\n    .form-log.success .log-header {\n        border-bottom: 1px solid #468444;\n    }\n    .div-acordo-aprovado {\n        font-size: 1.2em;\n        padding: 15px;\n        background-color: #b9ffaf;\n        border: 1px dashed #43a335;\n        color: #43a335;\n        text-align: center;\n    }\n    .div-acordo-negado {\n        font-size: 1.2em;\n        padding: 15px;\n        background-color: #f2d5d5;\n        border: 1px dashed #e06969;\n        color: #e06969;\n        text-align: center;\n    }\n    .div-acordo-ressalva {\n        font-size: 1.2em;\n        padding: 15px;\n        background-color: #ffe0bc;\n        border: 1px dashed #fc9928;\n        color: #c68233;\n        text-align: center;\n    }\n    .div-acordo-inexistente {\n        font-size: 1.2em;\n        padding: 15px;\n        margin: 25px;\n        background: #f5f5f5;\n        border: 1px dashed #ddd;\n        text-align: center;\n    }\n</style>\n<div class=\"conter-wrapper\">\n    <span class=\"banner steelblue\">\n        Pedidos\n    </span>\n    <hr class=\"custom-hr\"/>\n    <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\">\n            <a href=\"\" ng-click=\"vm.pedidosView()\" ng-class=\"vm.activeTab === \'pedidos\' ? \'a-green\' : \'\'\"><i class=\"fa fa-search fa-fw\"></i> Consultar</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.detalhesView()\" ng-class=\"vm.activeTab === \'detalhes\' ? \'a-green\' : \'\'\"><i class=\"fa fa-edit\"></i> Detalhes</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.processoView()\" ng-class=\"vm.activeTab === \'processo\' ? \'a-green\' : \'\'\"><i class=\"fa fa-folder-open-o\"></i> Processo</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.dadosBancariosView()\" ng-class=\"vm.activeTab === \'dadosbancarios\' ? \'a-green\' : \'\'\"><i class=\"fa fa-bank\"></i> Dados bancários</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.documentosView()\" ng-class=\"vm.activeTab === \'documentos\' ? \'a-green\' : \'\'\"><i class=\"fa fa-id-card-o\"></i> Documentos</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.propostaView()\" ng-class=\"vm.activeTab === \'proposta\' ? \'a-green\' : \'\'\"><i class=\"fa fa-handshake-o\"></i> Proposta</a>\n        </li>\n        <li role=\"presentation\" ng-class=\"vm.pedidoSelecionado ? \'\' : \'disabled\'\">\n            <a href=\"\" ng-click=\"vm.pagamentosView()\" ng-class=\"vm.activeTab === \'pagamentos\' ? \'a-green\' : \'\'\"><i class=\"fa fa-dollar\"></i> Pagamentos</a>\n        </li>\n    </ul>\n    <div class=\"custom-section\">\n        <!-- ------- -->\n        <!-- Pedidos -->\n        <!-- ------- -->\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'pedidos\'\">\n            <form>\n                <div class=\"row\" style=\"padding: 0 25px\">\n                    <div class=\"col-md-12\" style=\"margin:25px 0\">\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Filtro de Pesquisa\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"input-guid-pedido\">Guid Pedido:</label>\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       id=\"input-guid-pedido\"\n                                       mask=\"guid\"\n                                       placeholder=\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\"\n                                       ng-model=\"vm.pedido.guidPedido\"\n                                       autocomplete=\"off\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"input-protocolo\">Protocolo:</label>\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       id=\"input-protocolo\"\n                                       ng-model=\"vm.pedido.protocolo\"\n                                       mask=\"protocolo\"\n                                       placeholder=\"XXX-XXX-XXXXXXXX-XXXXXXXX\"\n                                       autocomplete=\"off\">\n                            </div>\n\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"input-data-cadastro\">Data de Cadastro:</label>\n                                <input type=\"date\"\n                                       mask=\"data\"\n                                       class=\"form-control\"\n                                       id=\"input-data-cadastro\"\n                                       ng-model=\"vm.pedido.dateCadastro\"\n                                       autocomplete=\"off\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"select-status\">Status:</label>\n                                <select class=\"form-control\" id=\"select-status\" ng-model=\"vm.pedido.status\"\n                                        ng-options=\"t.descricao as t.descricao for t in vm.listaStatusPedido\">\n                                    <option value=\"\">Selecione...</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"input-situacao\">Situação:</label>\n                                <select class=\"form-control\"\n                                        id=\"input-situacao\"\n                                        ng-model=\"vm.pedido.situacaoInternaPedido\"\n                                        ng-options=\"t.id as t.descricao for t in vm.listaSituacao\">\n                                    <option value=\"\">Selecione...</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"input-cpf\">CPF do Poupador:</label>\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       id=\"input-cpf\"\n                                       ng-model=\"vm.pedido.cpfPoupador\"\n                                       mask=\"cpf\"\n                                       placeholder=\"999.999.999-99\"\n                                       autocomplete=\"off\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group text-right\">\n                            <button type=\"submit\"\n                                    class=\"btn btn-primary btn-lg\"\n                                    style=\"margin: 10px 0\"\n                                    ng-click=\"vm.consultar()\">\n                                Consultar <i class=\"fa fa-search fa-fw\"></i>\n                            </button>\n                            &nbsp;\n                            <button class=\"btn btn-default btn-lg\"\n                                    style=\"margin:10px 0\"\n                                    ng-click=\"vm.limpar()\">\n                                Limpar <i class=\"fa fa-trash\"></i>\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <table ng-show=\"vm.listaPedidos.length > 0\" ng-table=\"vm.tabelaPedidos\" class=\"table table-default table-hover table-condensed table-bordered table-striped\">\n                            <tr ng-repeat=\"pedido in $data\" class=\"text-center\">\n                                <td data-title=\"\'GUID\'\" sortable=\"\'cdPedidoHabilitacao\'\">\n                                    <a href=\"\" ng-click=\"vm.consultarPorGuid(pedido.cdPedidoHabilitacao)\">\n                                        {{ pedido.cdPedidoHabilitacao }}\n                                    </a>\n                                </td>\n                                <td data-title=\"\'Protocolo\'\" sortable=\"\'protocolo\'\">{{ pedido.protocolo }}</td>\n                                <td data-title=\"\'Data Abertura\'\" sortable=\"\'dataAbertura\'\">{{ pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</td>\n                                <td data-title=\"\'Nome\'\" sortable=\"\'poupadorDTO.noPessoa\'\">{{ pedido.poupadorDTO.noPessoa }}</td>\n                                <td data-title=\"\'CPF\'\" sortable=\"\'poupadorDTO.nrCpfPessoa\'\">{{ pedido.poupadorDTO.nrCpfPessoa }}</td>\n                                <td data-title=\"\'Status\'\" sortable=\"\'statusPedido.descricao\'\">{{ pedido.statusPedido.descricao }}</td>\n                                <td data-title=\"\'Situação\'\" sortable=\"\'situacaoPedidoHabilitacao.descricao\'\">{{ pedido.situacaoInternaPedido.descricao || \'-\' }}</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"text-right\" style=\"font-weight: bold; padding-right: 15px\">\n                            <span ng-if=\"vm.listaPedidos.length > 0\">Quantidade de pedidos recuperados: {{ vm.listaPedidos.length }}</span>\n                            <span ng-if=\"vm.listaPedidos.length == 0\">&nbsp;</span>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n        <!-- -------- -->\n        <!-- Detalhes -->\n        <!-- -------- -->\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'detalhes\'\">\n            <form>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-3\">\n\n                        </div>\n                        <div class=\"col-9 col-offset-3 text-right\">\n                            <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.pedidosView()\" style=\"margin-left: 25px; margin-top: 25px\">-->\n                                <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                            <!--</button>-->\n                            <!--<button class=\"btn btn-success btn-lg\" ng-click=\"vm.processoView()\" style=\"margin-right: 25px; margin-top: 25px\">-->\n                                <!--Próximo <i class=\"fa fa-angle-double-right fa-lg fa-fw\"></i>-->\n                            <!--</button>-->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" style=\"padding: 0 25px\">\n                    <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Detalhes do pedido: <span class=\"green\">{{ vm.pedidoSelecionado.cdPedidoHabilitacao }}</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-4 col-sm-6\">\n                            <div style=\"border: 1px solid #ddd; padding: 15px\">\n                                <table class=\"table table-default table-condensed table-hover\">\n                                    <thead>\n                                        <!-- --------------- -->\n                                        <!-- Dados do Pedido -->\n                                        <!-- --------------- -->\n                                        <tr>\n                                            <th colspan=\"2\"><i class=\"fa fa-edit fa-fw\"></i> Dados do Pedido</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Protocolo</td>\n                                            <td>{{ vm.pedidoSelecionado.protocolo }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Identificador</td>\n                                            <td>{{ vm.pedidoSelecionado.cdLoteHabilitacao }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Data de leitura do banco</td>\n                                            <td>{{ vm.pedidoSelecionado.dataAbertura | date: \'dd/MM/yyyy\' }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Data de Abertura</td>\n                                            <td>{{ vm.pedidoSelecionado.dataConfirmacaoLeituraBanco | date: \'dd/MM/yyyy\' }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Status do pedido</td>\n                                            <td>{{ vm.pedidoSelecionado.statusPedido.descricao }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Valor custas processuais</td>\n                                            <td>{{ vm.pedidoSelecionado.valorCustasProcessuais }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Valor total simulado</td>\n                                            <td>{{ vm.pedidoSelecionado.valorTotalSimulado }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Destinatário do pagamento</td>\n                                            <td>{{ vm.pedidoSelecionado.destinatarioPagamentoAcordo }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Situação do pedido</td>\n                                            <td>{{ vm.pedidoSelecionado.descricao }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-6\">\n                            <div style=\"border: 1px solid #ddd; padding: 15px\">\n                                <table class=\"table table-default table-condensed table-hover\">\n                                    <thead>\n                                    <tr>\n                                        <!-- ----------------- -->\n                                        <!-- Dados do poupador -->\n                                        <!-- ----------------- -->\n                                        <th colspan=\"2\"><i class=\"fa fa-user-circle-o fa-fw\"></i> Dados do Poupador</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Nome</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.noPessoa }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>CPF</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.nrCpfPessoa }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Data de Nascimento</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.envolvido.dtNascimento | date: \'dd/MM/yyyy\' }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Identidade</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.nrIdentidade }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>UF</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.sgUfIdentidade }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Tipo</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.tipoDocumento.descricao }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Órgão</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.sgOrgaoEmissor }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Classificação</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.tipoDocumento.descricao }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Validade</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.identidade.validade }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Falecido</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.envolvido.descricaoFalecido }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-12\">\n                            <div style=\"border: 1px solid #ddd; padding: 15px\">\n                                <table class=\"table table-default table-condensed table-hover\">\n                                    <thead>\n                                    <tr>\n                                        <!-- -------- -->\n                                        <!-- Contatos -->\n                                        <!-- -------- -->\n                                        <th colspan=\"2\"><i class=\"fa fa-phone fa-fw\"></i> Contatos</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.contatos[0].tipoContato.descricao }}</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.contatos[0].dsContato }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.contatos[1].tipoContato.descricao }}</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.contatos[1].dsContato }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div style=\"border: 1px solid #ddd; padding: 15px; margin: 25px 0\">\n                                <table class=\"table table-default table-condensed table-hover\">\n                                    <thead>\n                                    <tr>\n                                        <!-- -------- -->\n                                        <!-- Endereço -->\n                                        <!-- -------- -->\n                                        <th colspan=\"2\"><i class=\"fa fa-home fa-fw\"></i> Endereço</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>CEP</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.nrCep }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>UF</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.sgUf }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Cidade</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.noCidade }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Bairro</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.dsBairro }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Logradouro</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.logradouro }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Complemento</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.dsComplemento }}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Número</td>\n                                            <td>{{ vm.pedidoSelecionado.poupadorDTO.endereco.dsNumeroEndereco }}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div style=\"border: 1px solid #ddd; padding: 15px; margin: 25px 0\">\n                                <table class=\"table table-default table-condensed table-hover\">\n                                    <thead>\n                                    <tr>\n                                        <!-- ---------- -->\n                                        <!-- Envolvidos -->\n                                        <!-- ---------- -->\n                                        <th colspan=\"2\"><i class=\"fa fa-male fa-fw\"></i> Dados dos Envolvidos</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td colspan=\"2\">\n                                            <b class=\"indianred\">Não existem envolvidos cadastrados</b>\n                                        </td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'processo\'\">\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.detalhesView()\" style=\"margin-left: 25px; margin-top: 25px\">-->\n                        <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                    <!--</button>-->\n                    <!--<button class=\"btn btn-success btn-lg\" ng-click=\"vm.dadosBancariosView()\" style=\"margin-right: 25px; margin-top: 25px\">-->\n                        <!--Próximo <i class=\"fa fa-angle-double-right fa-lg fa-fw\"></i>-->\n                    <!--</button>-->\n                </div>\n                <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                    <div class=\"col-md-12\" >\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Dados do processo\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <table class=\"table table-default table-condensed table-condensed table-hover\">\n                            <thead>\n                                <tr class=\"text-center\">\n                                    <!-- -------- -->\n                                    <!-- Processo -->\n                                    <!-- -------- -->\n                                    <th class=\"text-center\">Nª processo</th>\n                                    <th class=\"text-center\">Nª CNJ</th>\n                                    <th class=\"text-center\">Nª processo antigo</th>\n                                    <th class=\"text-center\">Id Legado</th>\n                                    <th class=\"text-center\">Órgão</th>\n                                    <th class=\"text-center\">Tipo de Ação</th>\n                                    <th class=\"text-center\">Vara</th>\n                                    <th class=\"text-center\">Comarca de Origem</th>\n                                    <th class=\"text-center\">Data Ajuizamento</th>\n                                    <th class=\"text-center\">Data Procuração</th>\n                                    <th class=\"text-center\">UF Origem</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"processo in vm.pedidoSelecionado.listaProcessos\"\n                                ng-if=\"vm.pedidoSelecionado.listaProcessos.length > 0\"\n                                class=\"text-center\">\n\n                                <td>{{ processo.cdProcesso }}</td>\n                                <td>{{ processo.cdCnjProcesso }}</td>\n                                <td>{{ processo.cdProcessoAntigo }}</td>\n                                <td>{{ processo.cdProcessoSistemaLegado }}</td>\n                                <td>{{ processo.orgaoLegal.descricao }}</td>\n                                <td>{{ processo.tipoAcaoProcesso.descricao }}</td>\n                                <td>{{ processo.noVaraOrigemProcesso }}</td>\n                                <td>{{ processo.noComarcaOrigemProcesso }}</td>\n                                <td>{{ processo.dtAjuizamentoProcesso | date: \'dd/MM/yyyy\' }}</td>\n                                <td>{{ processo.dtProcuracaoProcesso | date: \'dd/MM/yyyy\'}}</td>\n                                <td>{{ processo.sgUfProcesso }}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Dados do Patrono\n                        </div>\n                        <div>\n                            <table class=\"table table-default table-condensed table-condensed table-hover\">\n                                <thead>\n                                    <tr class=\"text-center\">\n                                        <!-- -------- -->\n                                        <!-- Processo -->\n                                        <!-- -------- -->\n                                        <th class=\"text-center\">Nome</th>\n                                        <th class=\"text-center\">CPF</th>\n                                        <th class=\"text-center\">Qualificação</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr ng-if=\"vm.pedidoSelecionado.patrono\">\n                                        <td>{{ vm.pedidoSelecionado.patrono.pessoa.noPessoa }}</td>\n                                        <td>{{ vm.pedidoSelecionado.patrono.pessoa.nrCpfPessoa }}</td>\n                                        <td>{{ vm.pedidoSelecionado.patrono.qualificacaoPatrono.descricao }}</td>\n                                    </tr>\n                                    <tr ng-if=\"!vm.pedidoSelecionado.patrono\">\n                                        <td colspan=\"3\"><b class=\"indianred\">Não consta patrono registrado para o processo.</b></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'dadosbancarios\'\">\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.processoView()\" style=\"margin-left: 25px; margin-top: 25px\">-->\n                        <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                    <!--</button>-->\n                    <!--<button class=\"btn btn-success btn-lg\" ng-click=\"vm.documentosView()\" style=\"margin-right: 25px; margin-top: 25px\">-->\n                        <!--Próximo <i class=\"fa fa-angle-double-right fa-lg fa-fw\"></i>-->\n                    <!--</button>-->\n                </div>\n                <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                    <div class=\"col-md-12\" >\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Contas Cadastradas\n                        </div>\n                        <div>\n                            <table class=\"table table-default table-condensed table-condensed table-hover\">\n                                <thead>\n                                <tr class=\"text-center\">\n                                    <!-- --------->\n                                    <!-- Contas -->\n                                    <!-- --------->\n                                    <th class=\"text-center\">Titular da Conta</th>\n                                    <th class=\"text-center\">CPF/CNPJ</th>\n                                    <th class=\"text-center\">Número do Banco</th>\n                                    <th class=\"text-center\">Agência</th>\n                                    <th class=\"text-center\">DV Agência</th>\n                                    <th class=\"text-center\">Conta</th>\n                                    <th class=\"text-center\">DV Conta</th>\n                                    <th class=\"text-center\">Tipo da Conta</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr ng-repeat=\"conta in vm.pedidoSelecionado.listaContas\"\n                                    ng-if=\"vm.pedidoSelecionado.listaContas.length > 0\"\n                                    class=\"text-center\">\n                                    <td>{{ conta.pessoa.noPessoa }}</td>\n                                    <td>{{ conta.pessoa.nrCpfPessoa }}</td>\n                                    <td>{{ conta.nrBanco }}</td>\n                                    <td>{{ conta.cdAgencia }}</td>\n                                    <td>{{ conta.cdAgenciaDV }}</td>\n                                    <td>{{ conta.cdConta }}</td>\n                                    <td>{{ conta.cdContaDV }}</td>\n                                    <td>{{ conta.tpConta }}</td>\n                                </tr>\n                                <tr ng-if=\"vm.pedidoSelecionado.listaContas.length == 0\">\n                                    <td colspan=\"8\">\n                                        <b class=\"indianred\">Não existem contas cadastradas</b>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\" >\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Contas Contempladas\n                        </div>\n                        <div>\n                            <table class=\"table table-default table-condensed table-condensed table-hover\">\n                                <thead>\n                                <tr class=\"text-center\">\n                                    <!-- ------------------- -->\n                                    <!-- Contas Contempladas -->\n                                    <!-- ------------------- -->\n                                    <th class=\"text-center\">Titular da Conta</th>\n                                    <th class=\"text-center\">CPF/CNPJ</th>\n                                    <th class=\"text-center\">Número do Banco</th>\n                                    <th class=\"text-center\">Conta</th>\n                                    <th class=\"text-center\">DV Conta</th>\n                                    <th class=\"text-center\">Agência</th>\n                                    <th class=\"text-center\">DV Agência</th>\n                                    <th class=\"text-center\">Plano Econômico</th>\n                                    <th class=\"text-center\">Valor Simulado</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                    <tr ng-repeat=\"contaContemplada in vm.pedidoSelecionado.listaContasContempladas\"\n                                        ng-if=\"vm.pedidoSelecionado.listaContasContempladas.length > 0\"\n                                        class=\"text-center\">\n\n                                        <td>{{ contaContemplada.conta.pessoa.noPessoa }}</td>\n                                        <td>{{ contaContemplada.conta.pessoa.nrCpfPessoa }}</td>\n                                        <td>{{ contaContemplada.conta.nrBanco }}</td>\n                                        <td>{{ contaContemplada.conta.cdConta }}</td>\n                                        <td>{{ contaContemplada.conta.cdContaDV }}</td>\n                                        <td>{{ contaContemplada.conta.cdAgencia }}</td>\n                                        <td>{{ contaContemplada.conta.cdAgenciaDV }}</td>\n                                        <td>{{ contaContemplada.planoEconomico.descricao }}</td>\n                                        <td>R$ {{ contaContemplada.vlSimuladoCalculado }}</td>\n                                    </tr>\n                                    <tr ng-if=\"vm.pedidoSelecionado.listaContasContempladas.length == 0\">\n                                        <td colspan=\"8\">\n                                            <b class=\"indianred\">Não existem contas contempladas</b>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'documentos\'\">\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.dadosBancariosView()\" style=\"margin-left: 25px; margin-top: 25px\">-->\n                        <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                    <!--</button>-->\n                    <!--<button class=\"btn btn-success btn-lg\" ng-click=\"vm.propostaView()\" style=\"margin-right: 25px; margin-top: 25px\">-->\n                        <!--Próximo <i class=\"fa fa-angle-double-right fa-lg fa-fw\"></i>-->\n                    <!--</button>-->\n                </div>\n                <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                    <div class=\"col-md-12\" >\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Documentos\n                        </div>\n                        <div style=\"border: 1px solid #ddd; padding: 15px\">\n                            <table class=\"table table-default table-condensed table-condensed table-hover\">\n                                <thead>\n                                    <tr class=\"text-center\">\n                                        <!-- ---------- -->\n                                        <!-- Documentos -->\n                                        <!-- ---------- -->\n                                        <th class=\"text-center\">ID</th>\n                                        <th class=\"text-center\">Nome</th>\n                                        <th class=\"text-center\">Tipo</th>\n                                        <th class=\"text-center\">Contexto</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr ng-repeat=\"documento in vm.pedidoSelecionado.listaDocumentos\"\n                                        ng-if=\"vm.pedidoSelecionado.listaDocumentos.length > 0\"\n                                        class=\"text-center\">\n\n                                        <td>{{ documento.cdDocumento }}</td>\n                                        <td>{{ documento.contextoDocumento.descricao }}</td>\n                                        <td>{{ documento.contextoDocumento.id }}</td>\n                                        <td>\n                                            <button type=\"button\"\n                                                    class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope\"\n                                                    title=\"Download\"\n                                                    data-ng-click=\"vm.downloadArquivo(vm.pedidoSelecionado.cdPedidoHabilitacao, documento.cdDocumento)\">\n                                                <span class=\"fa fa-download\" />\n                                        </td>\n\n                                    </tr>\n                                <tr ng-if=\"vm.pedidoSelecionado.listaDocumentos.length == 0\">\n                                    <td colspan=\"8\">\n                                        <b class=\"indianred\">Não existem documentos cadastrados</b>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'proposta\'\">\n            <form name=\"propostaForm\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 text-right\">\n                        <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.documentosView()\" style=\"margin-left: 25px; margin-top: 25px;\">-->\n                            <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                        <!--</button>-->\n                        <!--<button class=\"btn btn-success btn-lg\" ng-click=\"vm.pagamentosView()\" style=\"margin-right: 25px; margin-top: 25px;\">-->\n                            <!--Próximo <i class=\"fa fa-angle-double-right fa-lg fa-fw\"></i>-->\n                        <!--</button>-->\n                    </div>\n                    <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                        <div class=\"col-md-12\" ng-if=\"vm.pedidoHabilitacao\">\n                            <div class=\"font-regular vt-spacer-sm background-banner\">\n                                O pedido já possui uma proposta de acordo cadastrada.\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\" ng-if=\"!vm.pedidoHabilitacao\">\n                            <div class=\"font-regular vt-spacer-sm background-banner\">\n                                Cadastrar proposta de acordo\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\" ng-if=\"vm.pedidoHabilitacao\">\n                            <table class=\"table table-default text-center\">\n                                <thead>\n                                <tr>\n                                    <th colspan=\"4\" style=\"color: cornflowerblue; font-size: 1.2em\">Dados do pedido de habilitação</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-center\">Data da análise</th>\n                                    <th class=\"text-center\">Resultado da análise</th>\n                                    <th class=\"text-center\">Status do pedido</th>\n                                    <th class=\"text-center\">Situação interna do pedido</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td>{{ vm.pedidoHabilitacao.dtConclusaoAnalise | date: \'dd/MM/yyyy\' }}</td>\n                                    <td>{{ vm.pedidoHabilitacao.resultadoAnalise.descricao }}</td>\n                                    <td>{{ vm.pedidoHabilitacao.pedidoHabilitacao.statusPedido.descricao }}</td>\n                                    <td>{{ vm.pedidoHabilitacao.pedidoHabilitacao.situacaoInternaPedido.descricao }}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                            <table class=\"table table-default text-center\">\n                                <thead>\n                                <tr>\n                                    <th colspan=\"4\" style=\"color: cornflowerblue; font-size: 1.2em\">Dados da proposta de acordo</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-center\">Id da proposta</th>\n                                    <th class=\"text-center\">Valor total</th>\n                                    <th class=\"text-center\">Valor poupador</th>\n                                    <th class=\"text-center\">Valor honorário</th>\n                                    <th class=\"text-center\">Valor instituição</th>\n                                    <th class=\"text-center\">Valor reembolso</th>\n                                    <th class=\"text-center\">Qtd parcelas</th>\n                                    <th class=\"text-center\">Dt aceite proposta</th>\n                                    <th class=\"text-center\">Observações</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td>{{ vm.propostaAcordo.sqProposta }}</td>\n                                    <td>{{ vm.propostaAcordo.vlTotalProposta }}</td>\n                                    <td>{{ vm.propostaAcordo.vlPoupador }}</td>\n                                    <td>{{ vm.propostaAcordo.vlHonorarioPatrono }}</td>\n                                    <td>{{ vm.propostaAcordo.vlHonorarioIntituicao }}</td>\n                                    <td>{{ vm.propostaAcordo.vlReembolsoCusta }}</td>\n                                    <td>{{ vm.propostaAcordo.qtParcela }}</td>\n                                    <td>{{ vm.propostaAcordo.dtAceitePropota | date: \'dd/MM/yyyy\' }}</td>\n                                    <td>{{ vm.propostaAcordo.dsObservacaoProposta }}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"col-md-12\" ng-if=\"!vm.pedidoHabilitacao && vm.pedidoSelecionado.statusPedido.descricao === \'ANALISE_DA_INSTITUICAO\'\">\n                            <div class=\"col-md-4\">\n                                <div class=\"col-md-12\">\n\n                                    <div class=\"form-group box\">\n                                        <div class=\"div-radio\">\n                                            <input type=\"radio\"\n                                                   name=\"modalidade\"\n                                                   id=\"radio-aprovar\"\n                                                   value=\"aprovar\"\n                                                   ng-change=\"vm.limparFormProposta(true)\"\n                                                   ng-model=\"vm.formPropostaActive\" />\n\n                                            <label for=\"radio-aprovar\" style=\"color: #50754b\"><i class=\"fa fa-fw fa-check\"></i> Aprovar</label>\n                                        </div>\n                                        <div class=\"div-radio\">\n                                            <input type=\"radio\"\n                                                   name=\"modalidade\"\n                                                   id=\"radio-ressalva\"\n                                                   value=\"ressalva\"\n                                                   ng-change=\"vm.limparFormProposta(true)\"\n                                                   ng-model=\"vm.formPropostaActive\" />\n\n                                            <label for=\"radio-ressalva\" style=\"color: #c69323\"><i class=\"fa fa-fw fa-exclamation-circle\"></i> Aprovar com Ressalvas</label>\n                                        </div>\n                                        <div class=\"div-radio\">\n                                            <input type=\"radio\"\n                                                   name=\"modalidade\"\n                                                   id=\"radio-negar\"\n                                                   value=\"negar\"\n                                                   ng-change=\"vm.limparFormProposta(true)\"\n                                                   ng-model=\"vm.formPropostaActive\" />\n\n                                            <label for=\"radio-negar\" style=\"color: #e06969\"><i class=\"fa fa-fw fa-times\"></i> Negar</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\" ng-style=\"vm.getFormStyle()\" style=\"padding:15px\">\n                                        <div class=\"log-header bold\" ng-style=\"vm.getLabelStyle()\">\n                                            Atenção <i class=\"fa fa-exclamation-triangle fa-fw\"></i>\n                                        </div>\n                                        <div ng-style=\"vm.getLabelStyle()\" class=\"bold\">\n                                            <p>Preencha todos os campos obrigatórios</p>\n                                        </div>\n                                        <div ng-style=\"vm.getLabelStyle()\" class=\"bold\">\n                                            <ul ng-if=\"vm.formPropostaActive === \'aprovar\' || vm.formPropostaActive === \'ressalva\'\">\n                                                <li ng-style=\"vm.propostaAcordo.proposta.identificadorPropostaBanco ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.identificadorPropostaBanco\"></i>Id da proposta</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorTotalAcordo           ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorTotalAcordo\"></i>Valor total da proposta</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorPoupador              ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorPoupador\"></i>Valor destinado ao portador</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorHonorariosAdvogado    ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorHonorariosAdvogado\"></i>Valor dos honorários do advogado</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorHonorariosFebrapo     ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorHonorariosFebrapo\"></i>Valor dos honorários da instituição</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorReembolsoCustas       ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorReembolsoCustas\"></i>Valor de reembolso de custas processuais</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.quantidadeParcelas         ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.quantidadeParcelas\"></i>Quantidade de parcelas</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.valorParcela               ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.valorParcela\"></i>Valor das parcelas</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.dataPrimeiraParcela        ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.dataPrimeiraParcela\"></i>Data da primeira parcela</li>\n                                                <li ng-style=\"vm.propostaAcordo.observacoes                         ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.observacoes\"></i>Observações</li>\n                                            </ul>\n                                            <ul ng-if=\"vm.formPropostaActive === \'negar\'\">\n                                                <li ng-style=\"vm.propostaAcordo.motivoRecusaPedido    ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.motivoRecusaPedido\"></i>Motivo da recusa</li>\n                                                <li ng-style=\"vm.propostaAcordo.proposta.subMotivoRecusa ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.proposta.subMotivoRecusa\"></i>Submotivo da recusa</li>\n                                                <li ng-style=\"vm.propostaAcordo.observacoes                    ? {\'text-decoration\' : \'line-through\'} : \'\'\"><i class=\"fa fa-check fa-fw\" ng-if=\"vm.propostaAcordo.observacoes\"></i>Observações</li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"row box\" ng-style=\"vm.getFormStyle()\">\n\n                                    <div class=\"col-md-12\">\n                                        <!-- ------------------------------- -->\n                                        <!-- Aprovar / Aprovar com Ressalvar -->\n                                        <!-- ------------------------------- -->\n                                        <div ng-if=\"vm.formPropostaActive === \'aprovar\' || vm.formPropostaActive === \'ressalva\'\">\n                                            <div class=\"col-md-4\">\n\n                                                <!-- Id Proposta -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-identificador-proposta\" ng-style=\"vm.getLabelStyle()\">\n                                                        Id\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           name=\"identificadorProposta\"\n                                                           id=\"input-identificador-proposta\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.identificadorPropostaBanco\"\n                                                           ng-required=\"true\"\n                                                           mask=\"inteiro10\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Valor Total do Acordo -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-valor-total-acordo\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor Total\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorTotalAcordo\"\n                                                           id=\"input-valor-destinado-portador\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorTotalAcordo\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorTotalAcordo, \'input-valor-destinado-portador\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           maxlength=\"14\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Valor Destinado ao Portador -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-valor-total-acordo\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor Portador\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorDestinadoPortador\"\n                                                           id=\"input-valor-total-acordo\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorPoupador\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorPoupador, \'input-valor-total-acordo\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           maxlength=\"14\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                                <!-- Valor Honorário Advogado -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-identificador-proposta\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor Advogado\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorHonorarioPatrono\"\n                                                           id=\"input-valor-honorario-patrono\"\n                                                           maxlength=\"14\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorHonorariosAdvogado\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorHonorariosAdvogado, \'input-valor-honorario-patrono\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Valor Total do Acordo -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-valor-total-acordo\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor Instituição\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorHonorarioInstituicao\"\n                                                           id=\"input-valor-honorario-instituicao\"\n                                                           maxlength=\"14\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorHonorariosFebrapo\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorHonorariosFebrapo, \'input-valor-honorario-instituicao\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Valor Destinado ao Portador -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-valor-total-acordo\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor Reembolso\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorReembolsoCustas\"\n                                                           id=\"input-valor-reembolso-custas\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorReembolsoCustas\"\n                                                           maxlength=\"14\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorReembolsoCustas, \'input-valor-reembolso-custas\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                                <!-- Id Proposta -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-identificador-proposta\" ng-style=\"vm.getLabelStyle()\">\n                                                        Quantidade de Parcelas\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"quantidadeParcelas\"\n                                                           id=\"input-quantidade-parcelas\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.quantidadeParcelas\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           mask=\"inteiro4\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Valor da Parcela -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-valor-total-acordo\" ng-style=\"vm.getLabelStyle()\">\n                                                        Valor da Parcela\n                                                    </label>\n                                                    <input type=\"text\"\n                                                           class=\"form-control\"\n                                                           name=\"valorHonorarioInstituicao\"\n                                                           id=\"input-valor-parcela\"\n                                                           maxlength=\"14\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.valorParcela\"\n                                                           ng-keyup=\"vm.getFormatoMonetario(vm.propostaAcordo.proposta.valorParcela, \'input-valor-parcela\')\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n\n                                                <!-- Data da Primeira Parcela -->\n                                                <div class=\"form-group\">\n                                                    <label for=\"input-data-primeira-parcela\" ng-style=\"vm.getLabelStyle()\">\n                                                        Primeira Parcela\n                                                    </label>\n                                                    <input type=\"date\"\n                                                           class=\"form-control\"\n                                                           name=\"dataPrimeiraParcela\"\n                                                           id=\"input-data-primeira-parcela\"\n                                                           mask=\"data\"\n                                                           ng-model=\"vm.propostaAcordo.proposta.dataPrimeiraParcela\"\n                                                           ng-style=\"vm.getInputStyle()\"\n                                                           ng-required=\"true\"\n                                                           autocomplete=\"off\" />\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div ng-if=\"vm.formPropostaActive === \'aprovar\' || vm.formPropostaActive === \'ressalva\'\" style=\"padding:15px\">\n\n                                            <label for=\"textarea-proposta-observacoes\" ng-style=\"vm.getLabelStyle()\">\n                                                Observações\n                                            </label>\n                                            <textarea name=\"observacoes\"\n                                                      id=\"textarea-proposta-observacoes\"\n                                                      ng-model=\"vm.propostaAcordo.observacoes\"\n                                                      cols=\"30\"\n                                                      rows=\"5\"\n                                                      maxlength=\"500\"\n                                                      class=\"form-control\"\n                                                      ng-style=\"vm.getInputStyle()\"\n                                                      ng-required=\"true\"\n                                                      autocomplete=\"off\">\n                                            </textarea>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <small>{{ 500 - vm.propostaAcordo.observacoes.length }} caracteres restantes</small>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                        <!-- ----- -->\n                                        <!-- Negar -->\n                                        <!-- ----- -->\n                                        <div ng-if=\"vm.formPropostaActive === \'negar\'\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"select-motivo-recusa\" ng-style=\"vm.getLabelStyle()\">Motivo da recusa</label>\n                                                            <select id=\"select-motivo-recusa\"\n                                                                    class=\"form-control\"\n                                                                    ng-model=\"vm.propostaAcordo.motivoRecusaPedido\"\n                                                                    ng-style=\"vm.getInputStyle()\"\n                                                                    ng-options=\"t.id as t.descricao for t in vm.listaMotivoRecusa\">\n\n                                                                <option value=\"\">-- Selecione --</option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"select-submotivo-recusa\" ng-style=\"vm.getLabelStyle()\">Submotivo da recusa</label>\n                                                            <select id=\"select-submotivo-recusa\"\n                                                                    class=\"form-control\"\n                                                                    ng-model=\"vm.propostaAcordo.proposta.subMotivoRecusa\"\n                                                                    ng-style=\"vm.getInputStyle()\"\n                                                                    ng-options=\"t.descricao as t.descricao for t in vm.listaSubmotivoRecusa\">\n\n                                                                <option value=\"\">-- Selecione --</option>\n                                                            </select>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"col-md-12\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"textarea-obervacoes-motivo-recusa\" ng-style=\"vm.getLabelStyle()\">Observações:</label>\n\n                                                            <!-- #textarea-observacoes-motivo-recusa-->\n                                                            <textarea name=\"observacoesMotivoRecusa\"\n                                                                      id=\"textarea-obervacoes-motivo-recusa\"\n                                                                      class=\"form-control\"\n                                                                      cols=\"20\"\n                                                                      rows=\"5\"\n                                                                      style=\"resize: none\"\n                                                                      ng-style=\"vm.getInputStyle()\"\n                                                                      maxlength=\"500\"\n                                                                      ng-model=\"vm.propostaAcordo.observacoes\"\n                                                                      ng-required=\"true\">\n                                                            </textarea>\n\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-8\">\n                                                                    <small>{{ 500 - vm.propostaAcordo.observacoes.length }} caracteres restantes</small>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"text-right\"\n                                             ng-if=\"vm.formPropostaActive === \'aprovar\'\"\n                                             style=\"border-top: 1px dotted #ddd;\n                                             padding-top: 15px\">\n\n                                            <button class=\"btn btn-default\"\n                                                    ng-click=\"vm.limparFormProposta()\">\n\n                                                Limpar <i class=\"fa fa-fw fa-trash\"></i>\n                                            </button>\n                                            <button class=\"btn btn-success\"\n                                                    ng-click=\"vm.confirmarProposta()\"\n                                                    ng-disabled=\"propostaForm.$invalid\"\n                                                    ng-style=\"vm.getButtonStyle()\">\n                                                Aprovar <i class=\"fa fa-check fa-fw\"></i>\n                                            </button>\n                                        </div>\n\n                                        <div class=\"text-right\"\n                                             ng-if=\"vm.formPropostaActive === \'ressalva\'\"\n                                             style=\"border-top: 1px dotted #ddd;\n                                             padding-top: 15px\">\n\n                                            <button class=\"btn btn-default\"\n                                                    ng-click=\"vm.limparFormProposta()\">\n\n                                                Limpar <i class=\"fa fa-fw fa-trash\"></i>\n                                            </button>\n                                            <button class=\"btn btn-warning\"\n                                                    ng-click=\"vm.confirmarProposta()\"\n                                                    ng-disabled=\"propostaForm.$invalid\"\n                                                    ng-style=\"vm.getButtonStyle()\">\n                                                Aprovar com Ressalvas <i class=\"fa fa-exclamation-circle fa-fw\"></i>\n                                            </button>\n                                        </div>\n\n                                        <div class=\"text-right\"\n                                             ng-if=\"vm.formPropostaActive === \'negar\'\"\n                                             style=\"border-top: 1px dotted #ddd;\n                                             padding-top: 15px\">\n\n                                            <button class=\"btn btn-default\"\n                                                    ng-click=\"vm.limparFormProposta()\">\n\n                                                Limpar <i class=\"fa fa-fw fa-trash\"></i>\n                                            </button>\n                                            <button class=\"btn btn-danger\"\n                                                    ng-click=\"vm.negarProposta()\"\n                                                    ng-disabled=\"propostaForm.$invalid\"\n                                                    ng-style=\"vm.getButtonStyle()\">\n                                                Negar Proposta <i class=\"fa fa-times fa-fw\"></i>\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\" ng-if=\"!vm.pedidoHabilitacao && vm.pedidoSelecionado.statusPedido.descricao !== \'ANALISE_DA_INSTITUICAO\'\">\n                            <div>\n                                Não é possível realizar acordo pois o pedido selecionado econtra-se no estado {{ vm.pedidoSelecionado.statusPedido.descricao }}.\n                            </div>\n                            <div>\n                                Para relizar a proposta de acordo, o pedido deve estar com o status ANALISE_DA INSTITUIÇÃO\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"form-div\" ng-if=\"vm.activeTab.toLowerCase() === \'pagamentos\'\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12 text-right\">\n                    <!--<button class=\"btn btn-primary btn-lg\" ng-click=\"vm.propostaView()\" style=\"margin-right: 25px; margin-top: 25px;\">-->\n                        <!--<i class=\"fa fa-angle-double-left fa-lg fa-fw\"></i> Voltar-->\n                    <!--</button>-->\n                </div>\n                <div class=\"col-md-12\" style=\"margin: 25px 0\">\n                    <div class=\"col-md-12\" >\n                        <div class=\"font-regular vt-spacer-sm background-banner\">\n                            Pagamentos\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\" ng-if=\"!vm.pedidoHabilitacao\">\n                    <div class=\"div-acordo-inexistente\">\n                        Não existe acordo cadastrado para o pedido.\n                    </div>\n                </div>\n                <div class=\"col-md-12\" ng-if=\"vm.pedidoHabilitacao\">\n\n                    <div ng-if=\"vm.pedidoHabilitacao.resultadoAnalise.id == 1\" style=\"margin: 0 25px\" class=\"div-acordo-negado\">\n                        <div style=\"margin-bottom: 15px\">\n                            <b><i class=\"fa fa-fw fa-lg fa-ban\"></i> Acordo negado</b>\n                        </div>\n                        <div>\n                            Não é possível efetuar pagamentos.\n                        </div>\n                    </div>\n\n                    <div ng-if=\"vm.pedidoHabilitacao.resultadoAnalise.id == 2\" style=\"margin: 0 25px\" class=\"div-acordo-aprovado\">\n                        <div style=\"margin-bottom: 15px\">\n                            <b><i class=\"fa fa-fw fa-lg fa-check\"></i> Acordo aprovado</b>\n                        </div>\n                        <div>\n                            Os pagamentos podem ser realizados através da liberação das parcelas do acordo.\n                        </div>\n                    </div>\n\n                    <div ng-if=\"vm.pedidoHabilitacao.resultadoAnalise.id == 3\" style=\"margin: 0 25px\" class=\"div-acordo-ressalva\">\n                        <div style=\"margin-bottom: 15px\">\n                            <b><i class=\"fa fa-fw fa-lg fa-exclamation-triangle\"></i> Acordo aprovado com ressalvas</b>\n                        </div>\n                        <div>\n                            O pedido de acordo ainda contém pendências. Os pagamentos não podem ser efetuados antes da aprovação do acordo.\n                        </div>\n                    </div>\n\n\n\n                    <div style=\"padding: 25px;\">\n\n                        <div ng-if=\"vm.parcelas.length > 0\" style=\"margin-bottom: 20px\">\n                            <h3>Parcelas do acordo</i></h3>\n                        </div>\n                        <!-- -------- -->\n                        <!-- Parcelas -->\n                        <!-- -------- -->\n                        <table class=\"table table-default table-condensed table-striped table-hover text-center\" ng-if=\"vm.parcelas.length > 0\">\n                            <thead>\n                            <tr>\n                                <th class=\"text-center\">Número da parcela</th>\n                                <th class=\"text-center\">Valor da parcela</th>\n                                <th class=\"text-center\">Data vencimento</th>\n                                <th class=\"text-center\">Ações</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"parcela in vm.parcelas | orderBy: \'numeroOrdemParcela\'\">\n                                <td>{{parcela.numeroOrdemParcela || \'-\'}}</td>\n                                <td>{{parcela.vlParcelaProposta | currency: \"\"}}</td>\n                                <td>{{parcela.dtVencimentoParcela | date: \'dd/MM/yyyy\'}}</td>\n                                <td>\n                                    <!--<button class=\"btn btn-success\" ng-click=\"vm.abrirModalPagamento(pagamento, vm.pedidoSelecionado.cdPedidoHabilitacao)\">-->\n                                        <!--<i class=\"fa fa-fw fa-dollar\"></i>-->\n                                    <!--</button>-->\n                                    <button type=\"button\"\n                                            class=\"btn btn-success btn-sm\"\n                                            title=\"Informar comprovante\"\n                                            ng-click=\"vm.abrirModalPagamento(parcela, vm.pedidoSelecionado.cdPedidoHabilitacao)\">\n                                        <i class=\"fa fa-fw fa-dollar\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n\n                        <div ng-if=\"vm.pagamentos.length > 0\" style=\"margin-bottom: 20px\">\n                            <h3>Pagamentos efetuados</h3>\n                        </div>\n                        <!-- ---------- -->\n                        <!-- Pagamentos -->\n                        <!-- ---------- -->\n                        <table class=\"table table-default table-condensed table-striped table-hover text-center\" ng-if=\"vm.pagamentos.length > 0\">\n                            <thead>\n                            <tr>\n                                <th class=\"text-center\">Código do comprovante</th>\n                                <th class=\"text-center\">Observações</th>\n                                <th class=\"text-center\">Data</th>\n                                <th class=\"text-center\">Código da conta</th>\n                                <th class=\"text-center\">Código do pagamento</th>\n                                <th class=\"text-center\">Código da parcela</th>\n                                <th class=\"text-center\">Status</th>\n                                <th class=\"text-center\">Valor do pagamento</th>\n                                <th class=\"text-center\">Comprovantes</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr ng-repeat=\"pagamento in vm.pagamentos | orderBy: \'dsObservacaoPagamento\'\">\n                                <td>{{pagamento[0]}}</td>\n                                <td>{{pagamento[1]}}</td>\n                                <td>{{pagamento[2] | date: \'dd/MM/yyyy\' }}</td>\n                                <td>{{pagamento[3]}}</td>\n                                <td>{{pagamento[4]}}</td>\n                                <td>{{pagamento[5]}}</td>\n                                <td>{{pagamento[6] === 1 ? \'Pago\' : \'Não pago\'}}</td>\n                                <td>{{pagamento[7] | currency : \"\"}}</td>\n                                <td>\n                                    <button type=\"button\"\n                                            class=\"btn btn-primary btn-sm\"\n                                            title=\"Visualizar comprovante\"\n                                            ng-click=\"vm.getComprovanteUrl(pagamento[8])\"\n                                            ng-if=\"pagamento[6] == 1\">\n\n                                        <i class=\"fa fa-file\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("ppe/sandbox/views/index.html","<div class=\"container\">\n    <h3>Sandbox</h3>\n    <hr />\n\n    {{ vm.tablePedidos }}\n\n    <table ng-table=\"vm.tablePedidos\" class=\"table table-condensed table-striped table-boredered table-hover\">\n        <tr ng-repeat=\"row in $data\">\n            <td data-title=\"\'Name\'\" sortable=\"\'name\'\" filter=\"{name: \'text\'}\">{{row.name}}</td>\n            <td data-title=\"\'Description\'\" sortable=\"\'description\'\" filter=\"{descricao: \'text\'}\">{{row.description}}</td>\n        </tr>\n    </table>\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/aprovar-pedidos.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Dados do Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n\r\n								<!-- ====== -->\r\n								<!-- Pedido -->\r\n								<!-- ====== -->\r\n								<fieldset style=\"margin: 25px 0\">\r\n									<legend>Pedido</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Guid Pedido:\r\n											<b ng-if=\"vm.pedido.cdPedidoHabilitacao\">{{ vm.pedido.cdPedidoHabilitacao }}</b>\r\n											<b ng-if=\"!vm.pedido.cdPedidoHabilitacao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Protocolo:\r\n											<b ng-if=\"vm.pedido.protocolo\">{{ vm.pedido.protocolo }}</b>\r\n											<b ng-if=\"!vm.pedido.protocolo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Identificador:\r\n											<b ng-if=\"vm.pedido.cdLoteHabilitacao\">{{ vm.pedido.cdLoteHabilitacao }}</b>\r\n											<b ng-if=\"!vm.pedido.cdLoteHabilitacao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Data de Abertura:\r\n											<b ng-if=\"vm.pedido.dataAbertura\">{{ vm.pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</b>\r\n											<b ng-if=\"!vm.pedido.dataAbertura\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Data de Leitura do Banco:\r\n											<b ng-if=\"vm.pedido.dataConfirmacaoLeituraBanco\">{{ vm.pedido.dataConfirmacaoLeituraBanco }}</b>\r\n											<b ng-if=\"!vm.pedido.dataConfirmacaoLeituraBanco\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Status do Pedido:\r\n											<b ng-if=\"vm.pedido.statusPedido\">{{ vm.pedido.statusPedido.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.statusPedido\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Valor Custas Processuais:\r\n											<b ng-if=\"vm.pedido.valorCustasProcessuais\">{{ vm.pedido.valorCustasProcessuais | currency: \"\"}}</b>\r\n											<b ng-if=\"!vm.pedido.valorCustasProcessuais\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Valor Total Simulado:\r\n											<b ng-if=\"vm.pedido.valorTotalSimulado\">{{ vm.pedido.valorTotalSimulado | currency: \"\"}}</b>\r\n											<b ng-if=\"!vm.pedido.valorTotalSimulado\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Destinatário de Pagamento:\r\n											<b ng-if=\"vm.pedido.destinatarioPagamentoAcordo\">{{ vm.pedido.destinatarioPagamentoAcordo }}</b>\r\n											<b ng-if=\"!vm.pedido.destinatarioPagamentoAcordo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Situação do pedido: <b>{{ vm.pedido.situacaoPedidoHabilitacao.descricao }}</b>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /pedido -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Poupador -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Dados do Poupador</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Nome:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.noPessoa\">{{ vm.pedido.poupadorDTO.noPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.noPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											CPF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.nrCpfPessoa\">{{ vm.pedido.poupadorDTO.nrCpfPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.nrCpfPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Data de Nascimento:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.dtNascimento\">{{ vm.pedido.poupadorDTO.envolvido.dtNascimento | date: \'dd/MM/yyyy\' }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.dtNascimento\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Identidade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.nrIdentidade\">{{ vm.pedido.poupadorDTO.identidade.nrIdentidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.nrIdentidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Tipo:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\">{{ vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Órgão:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor\">{{ vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Validade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.validade\">{{ vm.pedido.poupadorDTO.identidade.validade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.validade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Falecido:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.descricaoFalecido\">{{ vm.pedido.poupadorDTO.envolvido.descricaoFalecido}}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.descricaoFalecido\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<!--\r\n										<div style=\"margin: 10px\">\r\n											Data do Cálculo:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.dtCalculo\">{{ vm.pedido.poupadorDTO.envolvido.dtCalculo }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.dtCalculo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										-->\r\n										<div style=\"margin: 10px\">\r\n											UF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.sgUfIdentidade\">{{ vm.pedido.poupadorDTO.identidade.sgUfIdentidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.sgUfIdentidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<!-- <div style=\"margin: 10px\">\r\n											Emissão:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidadeDTO.emissao\">{{ vm.pedido.poupadorDTO.identidadeDTO.emissao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidadeDTO.emissao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div> -->\r\n										<div style=\"margin: 10px\">\r\n											Classificação:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\">{{ vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<!-- ======== -->\r\n									<!-- Contatos -->\r\n									<!-- ======== -->\r\n									<div class=\"col-md-12\">\r\n										<div style=\"margin: 10px\">\r\n											<b>Contatos</b>\r\n											<div ng-repeat=\"contato in vm.pedido.poupadorDTO.contatos\">\r\n												{{ contato.dsContato }}\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /poupador -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Endereço -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Endereço do Poupador</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											CEP:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.nrCep\">{{ vm.pedido.poupadorDTO.endereco.nrCep }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.nrCep\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											UF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.sgUf\">{{ vm.pedido.poupadorDTO.endereco.sgUf }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.sgUf\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Cidade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.noCidade\">{{ vm.pedido.poupadorDTO.endereco.noCidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.noCidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Bairro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsBairro\">{{ vm.pedido.poupadorDTO.endereco.dsBairro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsBairro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Tipo Logradouro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsTipoLogradouro\">{{ vm.pedido.poupadorDTO.endereco.dsTipoLogradouro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsTipoLogradouro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Logradouro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.logradouro\">{{ vm.pedido.poupadorDTO.endereco.logradouro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.logradouro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Complemento:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsComplemento\">{{ vm.pedido.poupadorDTO.endereco.dsComplemento }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsComplemento\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Número:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsNumeroEndereco\">{{ vm.pedido.poupadorDTO.endereco.dsNumeroEndereco }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsNumeroEndereco\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n								</fieldset>\r\n							</div>\r\n						</div>\r\n						<div class=\"row\" ng-if=\"vm.pedido.listaEnvolvidos.length > 0\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ========== -->\r\n								<!-- Envolvidos -->\r\n								<!-- ========== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<!-- Lista -->\r\n									<legend>Dados dos Envolvidos</legend>\r\n									<fieldset style=\"margin:0 25px\">\r\n										<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</fieldset><!-- /envolvido -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Processo -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Dados do Processo</legend>\r\n\r\n									<div class=\"row\" ng-repeat=\"processo in vm.pedido.listaProcessos\" ng-if=\"vm.pedido.listaProcessos.length > 0\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Processo n° {{ processo.cdProcesso }}\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número CNJ:\r\n														<b ng-if=\"processo.cdCnjProcesso\">{{ processo.cdCnjProcesso }}</b>\r\n														<b ng-if=\"!processo.cdCnjProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número Antigo:\r\n														<b ng-if=\"processo.cdProcessoAntigo\">{{ processo.cdProcessoAntigo }}</b>\r\n														<b ng-if=\"!processo.cdProcessoAntigo\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador Legado:\r\n														<b ng-if=\"processo.cdProcessoSistemaLegado\">{{ processo.cdProcessoSistemaLegado }}</b>\r\n														<b ng-if=\"!processo.cdProcessoSistemaLegado\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Órgão:\r\n														<b ng-if=\"processo.orgaoLegal.descricao\">{{ processo.orgaoLegal.descricao }}</b>\r\n														<b ng-if=\"!processo.orgaoLegal.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo de Ação:\r\n														<b ng-if=\"processo.tipoAcaoProcesso.descricao\">{{ processo.tipoAcaoProcesso.descricao }}</b>\r\n														<b ng-if=\"!processo.tipoAcaoProcesso.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Vara:\r\n														<b ng-if=\"processo.noVaraOrigemProcesso\">{{ processo.noVaraOrigemProcesso }}</b>\r\n														<b ng-if=\"!processo.noVaraOrigemProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Comarca de Origem:\r\n														<b ng-if=\"processo.noComarcaOrigemProcesso\">{{ processo.noComarcaOrigemProcesso }}</b>\r\n														<b ng-if=\"!processo.noComarcaOrigemProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Ajuizamento:\r\n														<b ng-if=\"processo.dtAjuizamentoProcesso\">{{ processo.dtAjuizamentoProcesso | date: \'dd/MM/yyyy\' }}</b>\r\n														<b ng-if=\"!processo.dtAjuizamentoProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Procuração:\r\n														<b ng-if=\"processo.dtProcuracaoProcesso\">{{ processo.dtProcuracaoProcesso | date: \'dd/MM/yyyy\' }}</b>\r\n														<b ng-if=\"!processo.dtProcuracaoProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														UF de Origem:\r\n														<b ng-if=\"processo.sgUfProcesso\">{{ processo.sgUfProcesso }}</b>\r\n														<b ng-if=\"!processo.sgUfProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaProcessos || vm.pedido.listaProcessos.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>processos</u> cadastrados para o\r\n											pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /processo -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======= -->\r\n								<!-- Patrono -->\r\n								<!-- ======= -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Patrono do Processo</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Nome:\r\n											<b ng-if=\"vm.pedido.patrono.pessoa.noPessoa\">{{ vm.pedido.patrono.pessoa.noPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.pessoa.noPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											CPF:\r\n											<b ng-if=\"vm.pedido.patrono.pessoa.nrCpfPessoa\">{{ vm.pedido.patrono.pessoa.nrCpfPessoa}}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Qualificação:\r\n											<b ng-if=\"vm.pedido.patrono.qualificacaoPatrono.descricao\">{{ vm.pedido.patrono.qualificacaoPatrono.descricao}}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.qualificacaoPatrono.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											<div style=\"margin: 10px\">\r\n												<b>Contatos</b>\r\n												<div ng-repeat=\"contato in vm.pedido.patrono.pessoa.contatos\">\r\n													{{contato.tipoContato.descricao}}: {{ contato.dsContato }}\r\n												</div>\r\n											</div>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Advogado\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\" ng-repeat=\"patronoOrgao in vm.pedido.patrono.patronosOrgao\">\r\n													<div ng-if=\"patronoOrgao.tipoOrgaoPatrono.descricao == \'OAB\'\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n															<b ng-if=\"patronoOrgao.nrMatricula\">{{patronoOrgao.nrMatricula}}</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n															<b ng-if=\"patronoOrgao.descricaoTipoEsfera\">{{ patronoOrgao.descricaoTipoEsfera }}</b>\r\n															<b ng-if=\"!patronoOrgao.descricaoTipoEsfera\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n															<b ng-if=\"patronoOrgao.sgUfOrgao\">{{ patronoOrgao.sgUfOrgao }}</b>\r\n															<b ng-if=\"!patronoOrgao.sgUfOrgao\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Defensor\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\" ng-repeat=\"patronoOrgao in vm.pedido.patrono.patronosOrgao\">\r\n													<div ng-if=\"patronoOrgao.tipoOrgaoPatrono.descricao == \'Defensoria\'\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n															<b ng-if=\"patronoOrgao.nrMatricula\">{{ patronoOrgao.nrMatricula}}</b>\r\n															<b ng-if=\"!patronoOrgao.nrMatricula\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n															<b ng-if=\"patronoOrgao.descricaoTipoEsfera\">{{ patronoOrgao.descricaoTipoEsfera }}</b>\r\n															<b ng-if=\"!patronoOrgao.descricaoTipoEsfera\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n															<b ng-if=\"patronoOrgao.sgUfOrgao\">{{ patronoOrgao.sgUfOrgao }}</b>\r\n															<b ng-if=\"!patronoOrgao.sgUfOrgao\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.patrono\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>patronos</u> cadastrados para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /patrono -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ====== -->\r\n								<!-- Contas -->\r\n								<!-- ====== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Contas</legend>\r\n									<div class=\"row\">\r\n\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\" ng-repeat=\"conta in vm.pedido.listaContas\" ng-if=\"vm.pedido.listaContas.length > 0\">\r\n\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta n° {{ conta.cdConta }} - {{conta.categoriaConta.descricao}}</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n														<b ng-if=\"conta.pessoa.noPessoa\">{{ conta.pessoa.noPessoa }}</b>\r\n														<b ng-if=\"!conta.pessoa.noPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n														<b ng-if=\"conta.pessoa.nrCpfPessoa\">{{ conta.pessoa.nrCpfPessoa }}</b>\r\n														<b ng-if=\"!conta.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n														<b ng-if=\"conta.nrBanco\">{{ conta.nrBanco }}</b>\r\n														<b ng-if=\"!conta.nrBanco\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n														<b ng-if=\"conta.cdAgencia\">{{ conta.cdAgencia }}</b>\r\n														<b ng-if=\"!conta.cdAgencia\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n														<b ng-if=\"conta.cdAgenciaDV\">{{ conta.cdAgenciaDV }}</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n														<b ng-if=\"conta.cdConta\">{{ conta.cdConta }}</b>\r\n														<b ng-if=\"!conta.cdConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n														<b ng-if=\"conta.cdContaDV\">{{ conta.cdContaDV }}</b>\r\n														<b ng-if=\"!conta.cdContaDV\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<!--\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n														<b ng-if=\"conta.dtValidade\">{{ conta.cdAgencia.dtValidade }}</b>\r\n													</div>\r\n													-->\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n														<b ng-if=\"conta.tpConta\">{{ conta.tpConta }}</b>\r\n														<b ng-if=\"!conta.tpConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaContas || vm.pedido.listaContas.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>contas</u> cadastrados para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /contas -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- =================== -->\r\n								<!-- Contas Contempladas -->\r\n								<!-- =================== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Contas Contempladas</legend>\r\n									<div class=\"row\">\r\n\r\n										<!-- Lista de contas -->\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\" ng-repeat=\"contaContemplada in vm.pedido.listaContasContempladas\"\r\n										 ng-if=\"vm.pedido.listaContasContempladas.length > 0\">\r\n\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta n° {{ contaContemplada.conta.cdConta }}</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n														<b ng-if=\"contaContemplada.conta.pessoa.noPessoa\">{{ contaContemplada.conta.pessoa.noPessoa }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.pessoa.noPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n														<b ng-if=\"contaContemplada.conta.pessoa.nrCpfPessoa\">{{ contaContemplada.conta.pessoa.nrCpfPessoa }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n														<b ng-if=\"contaContemplada.conta.nrBanco\">{{ contaContemplada.conta.nrBanco }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.nrBanco\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n														<b ng-if=\"contaContemplada.conta.cdAgencia\">{{ contaContemplada.conta.cdAgencia }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdAgencia\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n														<b ng-if=\"contaContemplada.conta.cdAgenciaDV\">{{ contaContemplada.conta.cdAgenciaDV }}</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Plano econômico:\r\n														<b ng-if=\"contaContemplada.planoEconomico.descricao\">{{ contaContemplada.planoEconomico.descricao }}</b>\r\n														<b ng-if=\"!contaContemplada.planoEconomico.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor simulado:\r\n														<b ng-if=\"contaContemplada.vlSimuladoCalculado\">{{ contaContemplada.vlSimuladoCalculado | currency: \"\"}}</b>\r\n														<b ng-if=\"!contaContemplada.vlSimuladoCalculado\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n														<b ng-if=\"contaContemplada.conta.cdConta\">{{ contaContemplada.conta.cdConta }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n														<b ng-if=\"contaContemplada.conta.cdContaDV\">{{ contaContemplada.conta.cdContaDV }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdContaDV\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n\r\n													<!--\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n														<b ng-if=\"contaContemplada.conta.dtValidade\">{{ contaContemplada.conta.dtValidade }}</b>\r\n													</div>\r\n													-->\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n														<b ng-if=\"contaContemplada.conta.tpConta\">{{ contaContemplada.conta.tpConta }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.tpConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo base:\r\n														<b ng-if=\"contaContemplada.vlSaldoBaseConta\">{{ contaContemplada.vlSaldoBaseConta | currency: \"\"}}</b>\r\n														<b ng-if=\"!contaContemplada.vlSaldoBaseConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário conta:\r\n														<b ng-if=\"contaContemplada.diAniversarioConta\">{{ contaContemplada.diAniversarioConta }}</b>\r\n														<b ng-if=\"!contaContemplada.diAniversarioConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaContasContempladas || vm.pedido.listaContasContempladas.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>contas contempladas</u> cadastrados\r\n											para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /contas -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ========== -->\r\n								<!-- Documentos -->\r\n								<!-- ========== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Documentos</legend>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-condensed table-striped table-hover\" ng-if=\"vm.pedido.listaDocumentos.length > 0\">\r\n												<thead>\r\n													<tr>\r\n														<th>ID</th>\r\n														<th>Nome</th>\r\n														<th></th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n														<th>ID Chave Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr ng-repeat=\"documento in vm.pedido.listaDocumentos\">\r\n														<td>{{ documento.cdDocumento }}</td>\r\n														<td>\r\n															{{ documento.noDocumento }}\r\n														</td>\r\n														<td>\r\n															<button type=\"button\"\r\n																	class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope\"\r\n																	title=\"Download\"\r\n															 		data-ng-click=\"vm.downloadArquivo(vm.pedido.cdPedidoHabilitacao, documento.cdDocumento)\">\r\n																<span class=\"fa fa-download\" />\r\n															</button>\r\n														</td>\r\n														<td>{{ documento.tipoDocumento.descricao }}</td>\r\n														<td>{{ documento.contextoDocumento.descricao }}</td>\r\n														<td>{{ documento.contextoDocumento.id }}</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\" ng-if=\"!vm.pedido.listaDocumentos\">\r\n										<div class=\"col-md-12\">\r\n											<div class=\"alert alert-warning\">\r\n												<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>documentos</u> cadastrados para o\r\n												pedido\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /documentos -->\r\n							</div>\r\n							<div class=\"col-md-12 text-center\" style=\"margin-top:25px\" ng-if=\"vm.pedido.statusPedido.descricao == \'ANALISE_DA_INSTITUICAO\' &&  !vm.bloquearCamposAcordo\">\r\n								<button class=\"btn btn-success\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'aprovar\')\">\r\n									Aprovar\r\n								</button>\r\n								<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'aprovar-ressalvas\')\">\r\n									Aprovar Com Ressalvas\r\n								</button>\r\n								<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'negar\')\">\r\n									Negar\r\n								</button>\r\n							</div>\r\n						</div>\r\n\r\n						<!-- =================================== -->\r\n						<!--        F O R M U L Á R I O S        -->\r\n						<!-- =================================== -->\r\n						<div class=\"alert alert-success\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-check fa-lg fa-fw\"></i> Pedido Aprovado\r\n						</div>\r\n						<div class=\"alert alert-info\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar-ressalva\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Pedido aprovado com Ressalvas\r\n						</div>\r\n						<div class=\"alert alert-danger\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'negar\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-times fa-lg fa-fw\"></i> Pedido Negado\r\n						</div>\r\n\r\n						<!-- =================================== -->\r\n						<!-- Aprovar ou Aprovar com ressalvas    -->\r\n						<!-- =================================== -->\r\n						<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\' || vm.modalidade === \'aprovar-ressalva\'\">\r\n							<div class=\"col-md-12\">\r\n								<form name=\"formAprovarAcordo\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-identificador-proposta\" for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n\r\n												<!-- #input-identificador-proposta -->\r\n												<input type=\"text\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"identificadorProposta\"\r\n													   id=\"input-identificador-proposta\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.identificadorPropostaBanco\"\r\n													   ng-required=\"true\"\r\n													   mask=\"inteiro10\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.identificadorProposta.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.identificadorProposta.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-total-acordo\" for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n\r\n												<!-- #input-valor-total-acordo -->\r\n												<input type=\"text\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorTotalAcordo\"\r\n													   id=\"input-valor-total-acordo\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorTotalAcordoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorTotalAcordo.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorTotalAcordo.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-destinado-portador\" for=\"input-valor-destinado-portador\">Valor Destinado ao\r\n													Portador:</label>\r\n\r\n												<!-- #input-valor-destinado-portador -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorDestinadoPortador\"\r\n													   id=\"input-valor-destinado-portador\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorPoupadorFormatado\"\r\n												 	   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorDestinadoPortador.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorDestinadoPortador.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-patrono\" for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono\r\n													do Processo:</label>\r\n\r\n												<!-- #input-valor-honorario-partono -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n												 	   name=\"valorHonorarioPatrono\"\r\n													   id=\"input-valor-honorario-patrono\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorHonorariosAdvogadoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorHonorarioPatrono.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorHonorarioPatrono.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-instituicao_aprovado\" for=\"input-valor-honorario-instituicao_aprovado\">Valor\r\n													honorário da instituição:</label>\r\n\r\n												<!-- #input-valor-honorario-instituicao_aprovado -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorHonorarioInstituicao\"\r\n													   id=\"input-valor-honorario-instituicao_aprovado\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorHonorariosFebrapoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorHonorarioInstituicao.$valid\" style=\"color: firebrick\">* O campo\r\n														deve ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorHonorarioInstituicao.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-reembolso-custas\" for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n\r\n												<!-- #input-valor-reembolso-custas -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"valorReembolsoCustas\"\r\n													   id=\"input-valor-reembolso-custas\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorReembolsoCustasFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorReembolsoCustas.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorReembolsoCustas.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-quantidade-parcelas\" for=\"input-quantidade-parcelas\">Quantidade de Parcelas:</label>\r\n\r\n												<!-- #input-quantidade-parcelas -->\r\n												<input type=\"text\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   mask=\"inteiro4\"\r\n													   name=\"quantidadeParcelas\"\r\n													   id=\"input-quantidade-parcelas\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.quantidadeParcelas\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.quantidadeParcelas.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.quantidadeParcelas.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-parcela\" for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n\r\n												<!-- #input-valor-parcela -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-disabled=\"true\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorParcela\"\r\n													   id=\"input-valor-parcela\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorParcelaFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-data-primeira-parcela\" for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n\r\n												<!-- #input-data-primeira-parcela -->\r\n												<input type=\"date\"\r\n													   mask=\"data\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"datePrimeiraParcela\"\r\n													   id=\"input-data-primeira-parcela\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.datePrimeiraParcela\"\r\n												 	   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.datePrimeiraParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.datePrimeiraParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label id=\"label-acordo-observacoes\" for=\"textarea-acordo-observacoes\">Observações:</label>\r\n\r\n											<!-- #textarea-acordo-observacoes-->\r\n											<textarea id=\"textarea-acordo-observacoes\"\r\n													  class=\"form-control\"\r\n													  name=\"acordoObservacoes\"\r\n													  ng-readonly=\"vm.bloquearCamposAcordo\"\r\n											 		  cols=\"20\"\r\n													  rows=\"10\"\r\n													  style=\"resize: none\"\r\n													  ng-model=\"vm.resultadoAnalisePedido.observacoes\"\r\n													  ng-required=\"true\"\r\n													  autocomplete=\"off\"\r\n													  maxlength=\"500\">\r\n											</textarea>\r\n\r\n											<div class=\"row\">\r\n												<div class=\"col-md-6\">\r\n													<small>{{ 500 - vm.resultadoAnalisePedido.observacoes.length }} restantes</small>\r\n												</div>\r\n												<div class=\"col-md-6 text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.acordoObservacoes.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.acordoObservacoes.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" ng-if=\"!vm.isAcordoConfirmado\">\r\n											<br />\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.aprovar()\" ng-disabled=\"formAprovarAcordo.$invalid\">\r\n												Confirmar Acordo\r\n												<i class=\"fa fa-ban fa-fw\" ng-if=\"formAprovarAcordo.$invalid\"></i>\r\n												<i class=\"fa fa-check fa-fw\" ng-if=\"formAprovarAcordo.$valid\"></i>\r\n											</button>\r\n											<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.cancelar()\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n									</fieldset>\r\n								</form>\r\n							</div>\r\n\r\n                            <!-- ================= -->\r\n                            <!-- aprovar pagamento -->\r\n                            <!-- ================= -->\r\n							<div class=\"col-md-12\" ng-if=\"vm.isAcordoConfirmado\">\r\n								<form name=\"formAprovarPagamento\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Pagamento</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-guid-pedido\" for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n\r\n												<!-- #input-pagamento-guid-pedido -->\r\n												<input type=\"text\"\r\n													   id=\"input-pagamento-guid-pedido\"\r\n													   name=\"pagamentoGuidPedido\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"true\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.guidPedido\"\r\n													   ng-required=\"true\">\r\n\r\n												<small ng-show=\"formAprovarPagamento.pagamentoGuidPedido.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-identificador-proposta\" for=\"input-pagamento-identificador-proposta\">Identificador\r\n													da Proposta:</label>\r\n\r\n												<!-- # input-pagamento-identificador-proposta -->\r\n												<input type=\"text\"\r\n													   mask=\"inteiro10\"\r\n													   id=\"input-pagamento-identificador-proposta\"\r\n													   name=\"pagamentoIdentificadorProposta\"\r\n												 	   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.identificadorPropostaBanco\"\r\n													   mask=\"inteiro10\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoIdentificadorProposta.$valid\" style=\"color: firebrick\">* O\r\n														campo deve ser informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoIdentificadorProposta.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-numero-parcela\" for=\"input-numero-parcela\">Parcela Número:</label>\r\n\r\n												<!-- #input-numero-parcela -->\r\n												<input type=\"text\"\r\n													   mask=\"inteiro4\"\r\n													   id=\"input-numero-parcela\"\r\n													   name=\"numeroParcela\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.numeroParcela\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.numeroParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.numeroParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-valor\" for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n\r\n												<!-- #input-pagamento-valor -->\r\n												<input type=\"text\"\r\n													   id=\"input-pagamento-valor\"\r\n													   name=\"pagamentoValor\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.valorPagamentoFormatado\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoValor.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoValor.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<!--\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-status\" for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n												<select id=\"select-pagamento-status\"\r\n														name=\"pagamentoStatus\"\r\n														class=\"form-control\"\r\n														ng-readonly=\"vm.bloquearCamposPagamento\"\r\n														ng-model=\"vm.resultadoAnalisePedido.statusPagamento\">\r\n														<option value=\"NAO_REALIZADO\">Não Realizado...</option>\r\n														<option value=\"REALIZADO\">Realizado</option>\r\n												</select>\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoStatus.$valid\" style=\"color: firebrick\">* O campo deve ser informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoStatus.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											-->\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-data-pagamento\" for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n\r\n												<!-- #input-pagamento-data-pagamento -->\r\n												<input type=\"date\"\r\n													   mask=\"data\"\r\n													   id=\"input-pagamento-data-pagamento\"\r\n													   name=\"dataPagamento\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.dataPagamento\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.dataPagamento.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.dataPagamento.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-observacoes\" for=\"input-pagamento-observacoes\">Observações:</label>\r\n\r\n												<!-- #input-pagamento-observacoes -->\r\n												<textarea id=\"input-pagamento-observacoes\"\r\n														  name=\"pagamentoObservacoes\"\r\n														  class=\"form-control\"\r\n														  ng-readonly=\"vm.bloquearCamposPagamento\"\r\n														  cols=\"20\"\r\n														  rows=\"15\"\r\n														  style=\"resize: none\"\r\n														  ng-model=\"vm.resultadoAnalisePedido.observacoesPagamento\"\r\n												 		  ng-required=\"true\"><!-- campo duplicado -->\r\n												</textarea>\r\n											</div>\r\n										</div>\r\n										<!--\r\n										<div class=\"row col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Comprovante</small>\r\n												</legend>\r\n												<div ng-if=\"!vm.exibirComprovantePagamento\">\r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															<label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">Identificador do Comprovante:</label>\r\n															<input type=\"text\"\r\n																	class=\"form-control\"\r\n																	ng-readonly=\"vm.bloquearCamposPagamento\"\r\n																	id=\"input-pagamento-comprovante-identificador\"\r\n																	name=\"comprovanteIdentificador\"\r\n																	mask=\"inteiro10\"\r\n																	ng-model=\"vm.resultadoAnalisePedido.comprovante.identificadorDocumento\"\r\n																    ng-required=\"true\">\r\n														</div>\r\n													</div>\r\n                                                    <div class=\"col-md-6\" ng-if=\"!formAprovarPagamento.comprovanteIdentificador.$valid\">\r\n                                                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\r\n                                                                style=\"margin-top: 35px;\"\r\n                                                                ng-click=\"vm.verificaIdentificador()\">\r\n                                                            Selecionar Arquivo\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6\" ng-if=\"formAprovarPagamento.comprovanteIdentificador.$valid\">\r\n                                                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\r\n                                                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\r\n                                                        </label>\r\n                                                        <input accept=\".pdf\" type=\"file\" id=\"arquivoSelecionado\" style=\"display: none\"\r\n                                                               onchange=\'var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply()\'/>\r\n                                                    </div>\r\n												</div>\r\n												<div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\r\n													<div class=\"col-md-12 form-group\">\r\n														<div>\r\n															<table class=\"table table-bordered table-striped\">\r\n																<thead>\r\n																<tr>\r\n																	<th style=\"text-align: center;\">Identificador do Comprovante</th>\r\n																	<th style=\"text-align: center;\">Nome do arquivo</th>\r\n																	<th style=\"text-align: center;\">Remover</th>\r\n																</tr>\r\n																</thead>\r\n																<tbody>\r\n																<tr>\r\n																	<td style=\"text-align: center;\">{{vm.resultadoAnalisePedido.comprovante.identificadorDocumento}}</td>\r\n																	<td style=\"text-align: center;\"> {{vm.resultadoAnalisePedido.comprovante.nomeArquivo}}</td>\r\n																	<td style=\"text-align: center;\">\r\n																		<button type=\"button\" class=\"btn btn-danger btn-sm\" title=\"Excluir\"\r\n																				data-ng-click=\"vm.removerComprovante()\"> <span class=\"fa fa-remove\"/>\r\n																		</button>\r\n																	</td>\r\n																</tr>\r\n																</tbody>\r\n															</table>\r\n														</div>\r\n													</div>\r\n												</div>\r\n\r\n											</fieldset>\r\n										</div>	\r\n										-->\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.adicionarPagamento()\" ng-disabled=\"formAprovarPagamento.$invalid\">\r\n												Adicionar Pagamento\r\n												<i class=\"fa fa-ban fa-fw\" ng-if=\"formAprovarPagamento.$invalid\"></i>\r\n												<i class=\"fa fa-check fa-fw\" ng-if=\"formAprovarPagamento.$valid\"></i>\r\n											</button>\r\n											<!-- <button class=\"btn btn-danger\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.cancelarConfirmarPagamento()\">\r\n												Cancelar\r\n											</button> -->\r\n										</div>\r\n\r\n										<!-- <div class=\"col-md-12\" ng-if=\"vm.isPagamentoConfirmado\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div> -->\r\n\r\n										<!-- <div class=\"col-md-12\" ng-if=\"vm.isPagamentoConfirmado\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Depósito:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Validade:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div> -->\r\n									</fieldset>\r\n								</form>\r\n\r\n								<fieldset style=\"margin:25px 0\" ng-if=\"vm.pagamentos.length > 0\">\r\n									<legend>Pagamentos cadastrados</legend>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-condensed table-striped table-hover text-center\">\r\n												<thead>\r\n													<tr>\r\n														<th class=\"text-center\">Valor do pagamento</th>\r\n														<th class=\"text-center\">Status</th>\r\n														<th class=\"text-center\">Observações</th>\r\n														<th class=\"text-center\">Data</th>\r\n														<th class=\"text-center\">Ações</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr ng-repeat=\"pagamento in vm.pagamentos\">\r\n														<td>{{pagamento.vlPagamento | currency : \"\"}}</td>\r\n														<td>{{pagamento.stPagamento}}</td>\r\n														<td>{{pagamento.dsObservacaoPagamento}}</td>\r\n														<td>{{pagamento.dtPagamento | date: \'dd/MM/yyyy\' }}</td>\r\n														<td>\r\n															<button type=\"button\"\r\n																	class=\"btn btn-primary btn-sm\"\r\n																	title=\"Informar comprovante\"\r\n																	ng-click=\"vm.abrirModalPagamento(pagamento, vm.pedido.cdPedidoHabilitacao)\"\r\n															 		ng-if=\"pagamento.stPagamento == 2\">\r\n\r\n																<i class=\"fa fa-usd\"></i>\r\n															</button>\r\n\r\n															<button type=\"button\"\r\n																	class=\"btn btn-danger btn-sm\"\r\n																	title=\"Excluir pagamento\"\r\n																	ng-if=\"pagamento.stPagamento == 2\"\r\n															 		data-ng-click=\"vm.removerPagamento(pagamento.sqPagamento)\">\r\n\r\n																<span class=\"fa fa-remove\" />\r\n															</button>\r\n\r\n														</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- pag já cadastrados -->\r\n								<div ng-if=\"vm.pagamentos.length == 0\">\r\n									<div class=\"alert alert-warning\">\r\n										<b>Não existem pagamentos cadastrados para o pedido ({{vm.pedido.cdPedidoHabilitacao}})</b>\r\n									</div>\r\n								</div>\r\n\r\n							</div>\r\n						</div>\r\n\r\n						<!-- ============ -->\r\n						<!-- Negar Pedido -->\r\n						<!-- ============ -->\r\n						<div class=\"row\" ng-if=\"vm.modalidade === \'negar\'\">\r\n							<form name=\"formRecusaDaProposta\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Recusa da Proposta</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"select-motivo-recusa\">Motivo da Recusa:</label>\r\n\r\n												<!-- #select-motivo-recusa -->\r\n												<select class=\"form-control\"\r\n														id=\"select-motivo-recusa\"\r\n														ng-model=\"vm.resultadoAnalisePedido.motivoRecusaPedido\"\r\n												 		ng-disabled=\"vm.bloquearCamposAcordo\"\r\n														ng-options=\"t.id as t.descricao for t in vm.listaMotivoRecusa\">\r\n\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"select-submotivo-recusa\">Submotivo da Recusa:</label>\r\n\r\n												<!-- #select-submotivo-recusa -->\r\n												<select class=\"form-control\"\r\n														id=\"select-submotivo-recusa\"\r\n														ng-model=\"vm.resultadoAnalisePedido.subMotivoRecusaPedido\"\r\n												 		ng-disabled=\"vm.bloquearCamposAcordo\"\r\n														ng-options=\"t.descricao as t.descricao for t in vm.listaSubmotivoRecusa\">\r\n\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"textarea-obervacoes-motivo-recusa\">Observações:</label>\r\n\r\n												<!-- #textarea-observacoes-motivo-recusa-->\r\n												<textarea name=\"observacoesMotivoRecusa\"\r\n														  id=\"textarea-obervacoes-motivo-recusa\"\r\n														  class=\"form-control\"\r\n												 		  ng-readonly=\"vm.bloquearCamposAcordo\"\r\n														  cols=\"20\"\r\n														  rows=\"10\"\r\n														  style=\"resize: none\"\r\n														  maxlength=\"500\"\r\n														  ng-model=\"vm.resultadoAnalisePedido.observacoes\"\r\n												 		  ng-required=\"true\">\r\n												</textarea>\r\n\r\n												<div class=\"row\">\r\n													<div class=\"col-md-6\">\r\n														{{ 500 - vm.resultadoAnalisePedido.observacoes.length}} caracteres restantes\r\n													</div>\r\n													<div class=\"col-md-6 text-right\">\r\n														<small ng-show=\"!formRecusaDaProposta.observacoesMotivoRecusa.$valid\" style=\"color: firebrick\">* O campo\r\n															deve ser informado</small>\r\n														<small ng-show=\"formRecusaDaProposta.observacoesMotivoRecusa.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n													</div>\r\n												</div>\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\" ng-if=\"!vm.bloquearCamposAcordo\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-disabled=\"formRecusaDaProposta.$invalid\" ng-click=\"vm.negar()\">\r\n										Enviar Negação\r\n										<i class=\"fa fa-ban fa-fw\" ng-if=\"formRecusaDaProposta.$invalid\"></i>\r\n										<i class=\"fa fa-check fa-fw\" ng-if=\"formRecusaDaProposta.$valid\"></i>\r\n									</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.cancelar()\">\r\n										Cancelar\r\n									</button>\r\n								</div>\r\n							</form>\r\n						</div>\r\n					</div>\r\n					<div class=\"panel-footer\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<span class=\"fa fa-angle-double-left fa-fw\"></span>\r\n								<a href=\"/#!/consultar-pedidos\">Voltar</a>\r\n							</div>\r\n							<!-- <div class=\"col-md-12\" style=\"width: 100%;\" ng-if=\"vm.debug\">\r\n								<pre><code>{{ vm.formatarJson() }}</code></pre>\r\n							</div> -->\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"col-md-12\" style=\"width: 35%; position: fixed; bottom: 15px; left: 0; z-index: 9999; max-height: 250px; overflow: auto; opacity: .75\"\r\n ng-if=\"vm.debug\">\r\n	<pre><code>{{ vm.formatarJson() }}</code></pre>\r\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/comprovante.html","<form name=\"formPagamento\">\n    <div class=\"modal-header\">\n        <h3 class=\"modal-title\">Informar comprovante</h3>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row col-md-12\">\n            <fieldset style=\"margin:25px 0\">\n                <legend>\n                    <small style=\"font-size:0.8em\">{{vm.tituloTela}}</small>\n                </legend>\n\n                <div style=\"background: indianred\">\n                    <div arquivo-upload></div>\n                </div>\n\n                <div class=\"row\" ng-if=\"!vm.exibirComprovantePagamento\">\n                    <div class=\"col-md-6\">\n                        <div style=\"margin: 10px\">\n                            <label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">{{vm.tituloCampo}}</label>\n\n                            <input type=\"text\"\n                                   class=\"form-control\"\n                                   ng-readonly=\"vm.bloquearCamposPagamento\"\n                                   id=\"input-pagamento-comprovante-identificador\"\n                                   name=\"comprovanteIdentificador\"\n                                   mask=\"inteiro10\"\n                                   ng-model=\"vm.comprovante.identificadorDocumento\" />\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\" ng-if=\"!vm.comprovante.identificadorDocumento\">\n\n                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\n                                style=\"margin-top: 35px;\"\n                                ng-click=\"vm.verificaIdentificador()\">\n\n                            Selecionar Arquivo\n                        </button>\n\n                    </div>\n\n                    <div class=\"col-md-6\" ng-if=\"vm.comprovante.identificadorDocumento\">\n                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\n                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\n                        </label>\n\n                        <input accept=\".pdf\"\n                               type=\"file\"\n                               name=\"arquivoSelecionado\"\n                               id=\"arquivoSelecionado\"\n                               style=\"display: none\"\n                               ng-model=\"vm.file\"\n                               onchange=\"var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply(); vm.changeFile()\"/>\n\n                    </div>\n                </div>\n                <div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\n                    <div class=\"col-md-12 form-group\">\n                        <div>\n                            <table class=\"table table-bordered table-striped\">\n                                <thead>\n                                <tr>\n                                    <th style=\"text-align: center;\">Identificador</th>\n                                    <th style=\"text-align: center;\">Nome do arquivo</th>\n                                    <th style=\"text-align: center;\">Remover</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td style=\"text-align: center;\">{{vm.comprovante.identificadorDocumento}}</td>\n                                    <td style=\"text-align: center;\"> {{vm.comprovante.nomeArquivo}}</td>\n                                    <td style=\"text-align: center;\">\n\n                                        <button type=\"button\"\n                                                class=\"btn btn-danger btn-sm\"\n                                                title=\"Excluir\"\n                                                data-ng-click=\"vm.removerComprovante()\">\n\n                                            <span class=\"fa fa-remove\" />\n                                        </button>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n\n        <button class=\"btn btn-warning btn-rounded\"\n                style=\"float: right;\"\n                ng-click=\"vm.fecharModalPagamento()\">\n\n            Cancelar\n        </button>\n\n        <button class=\"btn btn-primary btn-rounded\"\n                style=\"float: right;\"\n                ng-click=\"vm.confimarPagamento()\"\n                ng-disabled=\"formPagamento.arquivoSelecionado.$invalid || !vm.comprovante.nomeArquivo\">\n\n            Confirmar\n        </button>\n    </div>\n</form>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Aprovar Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" style=\"margin: 0 5px\">Aprovar</button>\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Aprovar com Ressalvas</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Negar</button>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Acordo</button>\r\n											<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<fieldset>\r\n									<legend>Pagamento</legend>\r\n									<div class=\"col-md-6\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n											<input type=\"text\" id=\"input-pagamento-guid-pedido\" class=\"form-control\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-identificador-proposta\">Identificador da Proposta:</label>\r\n											<input type=\"text\" id=\"input-pagamento-identificador-proposta\" class=\"form-control\" ng-readonly=\"true\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-numero-parcela\">Parcela Número:</label>\r\n											<input type=\"text\" id=\"input-numero-parcela\" class=\"form-control\">\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n											<input type=\"text\" id=\"input-pagamento-valor\" class=\"form-control\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n											<select id=\"select-pagamento-status\" class=\"form-control\"></select>\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n											<input type=\"text\" id=\"input-pagamento-data-pagamento\" class=\"form-control\">\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-observacoes\">Observações:</label>\r\n											<textarea id=\"input-pagamento-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n										<button class=\"btn btn-primary\" \r\n												style=\"margin: 0 5px\"\r\n												ng-click=\"vm.confirmarPagamento()\">\r\n											Confirmar Pagamento\r\n										</button>\r\n										<button class=\"btn btn-danger\" \r\n												style=\"margin: 0 5px\">\r\n											Cancelar\r\n										</button>\r\n									</div>\r\n\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Titular da conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF/CNPJ:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Agência:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													DV Agência:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													DV Conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo Conta:\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>\r\n\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Número do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identificador do Depósito:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Data de Validade:\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>\r\n									\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Comprovante</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Identificador do Comprovante:\r\n													<input type=\"text\" class=\"form-control\">\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do  arquivo:\r\n													<input type=\"text\" class=\"form-control\">\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Arquivo:\r\n													<input type=\"file\" name=\"\" id=\"\">\r\n													<div style=\"margin:5px 0\">\r\n														<a href=\"#\">Adicionar</a>\r\n													</div>\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>		\r\n								</fieldset>\r\n								<div class=\"col-md-12 text-center\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Pagamento</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/modal-pagamento.html","<form name=\"formPagamento\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Informar comprovante</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row col-md-12\">\r\n            <fieldset style=\"margin:25px 0\">\r\n                <legend>\r\n                    <small style=\"font-size:0.8em\">{{vm.tituloTela}}</small>\r\n                </legend>\r\n                <div class=\"row\" ng-if=\"!vm.exibirComprovantePagamento\">\r\n                    <div class=\"col-md-6\">\r\n                        <div style=\"margin: 10px\">\r\n                            <label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">{{vm.tituloCampo}}</label>\r\n\r\n                            <input type=\"text\"\r\n                                   class=\"form-control\"\r\n                                   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n                                   id=\"input-pagamento-comprovante-identificador\"\r\n                                   name=\"comprovanteIdentificador\"\r\n                                   mask=\"inteiro10\"\r\n                                   ng-model=\"vm.comprovante.identificadorDocumento\" />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" ng-if=\"!vm.comprovante.identificadorDocumento\">\r\n\r\n                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\r\n                                style=\"margin-top: 35px;\"\r\n                                ng-click=\"vm.verificaIdentificador()\">\r\n\r\n                            Selecionar Arquivo\r\n                        </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-6\" ng-if=\"vm.comprovante.identificadorDocumento\">\r\n                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\r\n                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\r\n                        </label>\r\n\r\n                        <input accept=\".pdf\" \r\n						       type=\"file\" \r\n							   name=\"arquivoSelecionado\" \r\n							   id=\"arquivoSelecionado\" \r\n							   style=\"display: none\"\r\n							   ng-model=\"vm.file\"\r\n                               onchange=\'var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply(); vm.changeFile()\'/>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <div>\r\n                            <table class=\"table table-bordered table-striped\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th style=\"text-align: center;\">Identificador</th>\r\n                                    <th style=\"text-align: center;\">Nome do arquivo</th>\r\n                                    <th style=\"text-align: center;\">Remover</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr>\r\n                                    <td style=\"text-align: center;\">{{vm.comprovante.identificadorDocumento}}</td>\r\n                                    <td style=\"text-align: center;\"> {{vm.comprovante.nomeArquivo}}</td>\r\n                                    <td style=\"text-align: center;\">\r\n\r\n                                        <button type=\"button\"\r\n                                                class=\"btn btn-danger btn-sm\"\r\n                                                title=\"Excluir\"\r\n                                                data-ng-click=\"vm.removerComprovante()\">\r\n\r\n                                            <span class=\"fa fa-remove\" />\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n	\r\n        <button class=\"btn btn-warning btn-rounded\" \r\n		        style=\"float: right;\" \r\n				ng-click=\"vm.fecharModalPagamento()\">\r\n\r\n            Cancelar\r\n		</button>\r\n		\r\n        <button class=\"btn btn-primary btn-rounded\" \r\n		        style=\"float: right;\" \r\n				ng-click=\"vm.confimarPagamento()\" \r\n				ng-disabled=\"formPagamento.arquivoSelecionado.$invalid || !vm.comprovante.nomeArquivo\">\r\n\r\n            Confirmar\r\n		</button>\r\n    </div>\r\n</form>");
$templateCache.put("ppe/pedidos/aprovar-pedidos-com-ressalva/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Aprovar Pedido com Ressalvas</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" style=\"margin: 0 5px\">Aprovar</button>\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Aprovar com Ressalvas</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Negar</button>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Confirmar Ressalvas</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-racional-calculo\">Identificador do Racional de Cálculo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-racional-calculo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-nome-arquivo\">Nome do Arquivo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-nome-arquivo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-arquivo-file\">Arquivo:</label>\r\n												<input type=\"file\" class=\"\" id=\"input-arquivo-file\" />\r\n												<div style=\"margin:5px 0\">\r\n													<a href=\"#\">Adicionar</a>\r\n												</div>\r\n											</div>\r\n										</div>										\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes-2\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes-2\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Enviar Divergências</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/consultar-pedidos/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Consultar Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n\r\n						<form>\r\n							<div class=\"col-md-6\" style=\"margin:25px 0\">\r\n								<div class=\"form-group\">\r\n									<label for=\"input-guid-pedido\">Guid Pedido:</label>\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-guid-pedido\"\r\n										   mask=\"guid\"\r\n										   placeholder=\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (32 dígitos)\"\r\n										   ng-model=\"vm.pedido.guidPedido\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n\r\n								<div class=\"form-group\">\r\n									<label for=\"input-protocolo\">Protocolo:</label>							\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-protocolo\"\r\n										   ng-model=\"vm.pedido.protocolo\"\r\n										   mask=\"protocolo\"\r\n										   placeholder=\"XXX-XXX-XXXXXXXX-XXXXXXXX (22 dígitos)\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"input-data-cadastro\">Data de Cadastro:</label>							\r\n									<input type=\"date\" \r\n										   mask=\"data\"\r\n										   class=\"form-control\" \r\n										   id=\"input-data-cadastro\"\r\n										   ng-model=\"vm.pedido.dateCadastro\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n\r\n\r\n\r\n<!-- 								<div class=\"form-group\">\r\n									<label for=\"input-processo\">Processo:</label>							\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-processo\"\r\n										   mask=\"processo\"\r\n										   placeholder=\"Numérico (máximo de 10 dígitos)\"\r\n										   ng-model=\"vm.pedido.processo\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n -->\r\n							</div>\r\n\r\n							<div class=\"col-md-6\" style=\"margin:25px 0\">\r\n								<div class=\"form-group\">\r\n									<label for=\"select-status\">Status:</label>\r\n									<select class=\"form-control\" id=\"select-status\" ng-model=\"vm.pedido.status\"\r\n											ng-options=\"t.descricao as t.descricao for t in vm.listaStatusPedido\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div>\r\n								\r\n								<!-- <div class=\"form-group\">\r\n									<label for=\"input-ano-oficio\">Ano do Oficio:</label>							\r\n									<input type=\"text\" \r\n										   mask=\"inteiro4\"\r\n										   class=\"form-control\" \r\n										   id=\"input-ano-oficio\"\r\n										   ng-model=\"vm.pedido.anoOficio\"\r\n										   placeholder=\"yyyy\"\r\n										   autocomplete=\"off\">\r\n								</div> -->\r\n\r\n								<!-- <div class=\"form-group\">\r\n									<label for=\"select-origem\">Origem:</label>\r\n									<select class=\"form-control\" id=\"select-origem\" ng-model=\"vm.pedido.origem\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div> -->\r\n\r\n								<div class=\"form-group\">\r\n									<label for=\"input-situacao\">Situação:</label>\r\n									<select class=\"form-control\"\r\n											id=\"input-situacao\"\r\n											ng-model=\"vm.pedido.situacaoInternaPedido\"\r\n											ng-options=\"t.id as t.descricao for t in vm.listaSituacao\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"input-cpf\">CPF do Poupador:</label>\r\n									<input type=\"text\"\r\n										   class=\"form-control\"\r\n										   id=\"input-cpf\"\r\n										   ng-model=\"vm.pedido.cpfPoupador\"\r\n										   mask=\"cpf\"\r\n										   placeholder=\"999.999.999-99\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n\r\n<!-- 								<div class=\"form-group\">\r\n									<label for=\"input-data-cadastro\">Data de Cadastro:</label>							\r\n									<input type=\"date\" \r\n										   mask=\"data\"\r\n										   class=\"form-control\" \r\n										   id=\"input-data-cadastro\"\r\n										   ng-model=\"vm.pedido.dateCadastro\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n\r\n -->							</div>							\r\n\r\n							<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n								<button type=\"submit\"\r\n										class=\"btn btn-primary\"\r\n										style=\"margin:0 5px\"\r\n										ng-click=\"vm.consultar()\">\r\n									Consultar\r\n								</button>\r\n								<button class=\"btn btn-default\"\r\n										style=\"margin:0 5px\"\r\n										ng-click=\"vm.limpar()\">\r\n									Limpar\r\n								</button>\r\n							</div>\r\n\r\n							<!--<div class=\"col-md-12\" style=\"margin-top:50px\">-->\r\n								<!--<div class=\"alert alert-info\" ng-if=\"vm.listaPedidos.length == 0\">-->\r\n									<!--<i class=\"fa fa-exclamation-circle fa-lg fa-fw\"></i>Nenhum registro encontrado.-->\r\n								<!--</div>-->\r\n								<!--<table class=\"table table-default table-hover\" ng-if=\"vm.listaPedidos.length > 0\">-->\r\n									<!--<thead>-->\r\n										<!--<tr>-->\r\n											<!--<th>Guid Pedido</th>-->\r\n											<!--<th>Protocolo</th>-->\r\n											<!--<th>Data Cadastro</th>-->\r\n											<!--<th>Nome do Poupador</th>-->\r\n											<!--<th>CPF do Poupador</th>-->\r\n											<!--<th>Status</th>-->\r\n											<!--<th>Situação</th>-->\r\n										<!--</tr>-->\r\n									<!--</thead>-->\r\n									<!--<tbody>-->\r\n										<!--<tr ng-repeat=\"pedido in vm.listaPedidos\">-->\r\n											<!--<td>-->\r\n												<!--<span  ng-click=\"vm.detalharPedido(pedido.cdPedidoHabilitacao)\"-->\r\n													  <!--style=\"cursor: pointer; color: blue;text-decoration:underline;\">{{ pedido.cdPedidoHabilitacao}}</span>-->\r\n											<!--</td>-->\r\n											<!--<td>{{ pedido.protocolo }}</td>-->\r\n											<!--<td>{{ pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</td>-->\r\n											<!--<td>{{ pedido.poupadorDTO.noPessoa }}</td>-->\r\n											<!--<td>{{ pedido.poupadorDTO.nrCpfPessoa }}</td>-->\r\n											<!--<td>{{ pedido.statusPedido.descricao }}</td>-->\r\n											<!--<td>{{ pedido.situacaoPedidoHabilitacao.descricao }}</td>-->\r\n										<!--</tr>-->\r\n									<!--</tbody>-->\r\n								<!--</table>-->\r\n							<!--</div>-->\r\n\r\n							<div class=\"col-md-12\" style=\"margin-top:50px\">\r\n								<div class=\"alert alert-info\" ng-if=\"vm.listaPedidos.length == 0\">\r\n									<i class=\"fa fa-exclamation-circle fa-lg fa-fw\"></i>Nenhum registro encontrado.\r\n								</div>\r\n								<table ng-table=\"vm.tabelaPedidos\" class=\"table table-default table-hover table-condensed table-bordered table-striped\">\r\n									<tr ng-repeat=\"pedido in $data\" class=\"text-center\">\r\n										<td data-title=\"\'GUID\'\" sortable=\"\'cdPedidoHabilitacao\'\">\r\n											<span ng-click=\"vm.detalharPedido(pedido.cdPedidoHabilitacao)\" style=\"cursor: pointer; color: #4286f4; font-weight: bold; text-transform: uppercase\">\r\n												{{ pedido.cdPedidoHabilitacao }}\r\n											</span>\r\n										</td>\r\n										<td data-title=\"\'Protocolo\'\" sortable=\"\'protocolo\'\">{{ pedido.protocolo }}</td>\r\n										<td data-title=\"\'Data Abertura\'\" sortable=\"\'dataAbertura\'\">{{ pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</td>\r\n										<td data-title=\"\'Nome\'\" sortable=\"\'poupadorDTO.noPessoa\'\">{{ pedido.poupadorDTO.noPessoa }}</td>\r\n										<td data-title=\"\'CPF\'\" sortable=\"\'poupadorDTO.nrCpfPessoa\'\">{{ pedido.poupadorDTO.nrCpfPessoa }}</td>\r\n										<td data-title=\"\'Status\'\" sortable=\"\'statusPedido.descricao\'\">{{ pedido.statusPedido.descricao }}</td>\r\n										<td data-title=\"\'Situação\'\" sortable=\"\'situacaoPedidoHabilitacao.descricao\'\">{{ pedido.situacaoInternaPedido.descricao || \'-\' }}</td>\r\n									</tr>\r\n								</table>\r\n							</div>\r\n							<div class=\"text-right\" style=\"font-weight: bold; padding-right: 15px\">\r\n								Quantidade de pedidos recuperados: {{ vm.listaPedidos.length }}\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/negar-pedido/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Dados do Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'aprovar\')\">\r\n										Aprovar\r\n									</button>\r\n									<button class=\"btn btn-primary\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'aprovar-ressalvas\')\">\r\n										Aprovar Com Ressalvas\r\n									</button>\r\n									<button class=\"btn btn-danger\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'negar\')\">\r\n										Negar\r\n									</button>\r\n								</div>\r\n							</div>\r\n\r\n							<div class=\"alert alert-success\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<i class=\"fa fa-check fa-lg fa-fw\"></i> Aprovar Pedido\r\n							</div>\r\n							<div class=\"alert alert-info\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">\r\n								<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Aprovar Pedido com Ressalvas\r\n							</div>\r\n							<div class=\"alert alert-danger\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'negar\'\">\r\n								<i class=\"fa fa-times fa-lg fa-fw\"></i> Negar Pedido\r\n							</div>\r\n\r\n							<!-- Aprovar -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo\r\n											<span class=\"badge badge-default pull-right\" ng-if=\"!vm.isPagamentoConfirmado\">Não confirmado</span>\r\n											<span class=\"badge badge-success pull-right\" ng-if=\"vm.isPagamentoConfirmado\">Confirmado</span>\r\n										</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-identificador-proposta\" for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-total-acordo\" for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-destinado-portador\" for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-patrono\" for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-reembolso-custas\" for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-quantidade-parcelas\" for=\"input-quantidade-parcelas\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-quantidade-parcelas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-parcela\" for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-data-primeira-parcela\" for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label id=\"label-acordo-observacoes\" for=\"textarea-acordo-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-acordo-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>										\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Pagamento\r\n											<span class=\"badge badge-default pull-right\" ng-if=\"!vm.isPagamentoConfirmado\">Não confirmado</span>\r\n											<span class=\"badge badge-success pull-right\" ng-if=\"vm.isPagamentoConfirmado\">Confirmado</span>\r\n										</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-guid-pedido\" for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n												<input type=\"text\" id=\"input-pagamento-guid-pedido\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-identificador-proposta\" for=\"input-pagamento-identificador-proposta\">Identificador da Proposta:</label>\r\n												<input type=\"text\" id=\"input-pagamento-identificador-proposta\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-numero-parcela\" for=\"input-numero-parcela\">Parcela Número:</label>\r\n												<input type=\"text\" id=\"input-numero-parcela\" class=\"form-control\">\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-valor\" for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n												<input type=\"text\" id=\"input-pagamento-valor\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-status\" for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n												<select id=\"select-pagamento-status\" class=\"form-control\"></select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-data-pagamento\" for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n												<input type=\"text\" id=\"input-pagamento-data-pagamento\" class=\"form-control\">\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-observacoes\" for=\"input-pagamento-observacoes\">Observações:</label>\r\n												<textarea id=\"input-pagamento-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.confirmarPagamento()\">\r\n												Confirmar Pagamento\r\n											</button>\r\n											<button class=\"btn btn-danger\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.cancelarConfirmarPagamento()\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Depósito:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Validade:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n										\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Comprovante</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Comprovante:\r\n														<input type=\"text\" class=\"form-control\">\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do  arquivo:\r\n														<input type=\"text\" class=\"form-control\">\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Arquivo:\r\n														<input type=\"file\" name=\"\" id=\"\">\r\n														<div style=\"margin:5px 0\">\r\n															<a href=\"#\">Adicionar</a>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>		\r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Acordo</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>\r\n							<!-- Aprovar com Ressalvas -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">								\r\n								<div class=\"col-md-12\">									\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" \r\n													style=\"margin: 0 5px\">\r\n												Confirmar Ressalvas\r\n											</button>\r\n											<button class=\"btn btn-danger\"\r\n													style=\"margin: 0 5px\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Racional de Cálculo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-racional-calculo\">Identificador do Racional de Cálculo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-racional-calculo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-nome-arquivo\">Nome do Arquivo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-nome-arquivo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-arquivo-file\">Arquivo:</label>\r\n												<input type=\"file\" class=\"\" id=\"input-arquivo-file\" />\r\n												<div style=\"margin:5px 0\">\r\n													<a href=\"#\">Adicionar</a>\r\n												</div>\r\n											</div>\r\n										</div>										\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes-2\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes-2\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Enviar Divergências</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n\r\n							<!-- Negar Pedido -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'negar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Recusa da Proposta</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"select-motivo-recusa\">Motivo da Recusa:</label>\r\n												<select name=\"motivo-recusa\" id=\"select-motivo-recusa\" class=\"form-control\">\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"select-submotivo-recusa\">Submotivo da Recusa:</label>\r\n												<select name=\"submotivo-recusa\" id=\"select-submotivo-recusa\" class=\"form-control\">\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"textarea-obervacoes-motivo-recusa\">Observações:</label>\r\n												<textarea name=\"observacoes-motivo-recusa\" \r\n														  id=\"textarea-obervacoes-motivo-recusa\" \r\n														  class=\"form-control\" \r\n														  cols=\"20\" \r\n														  rows=\"10\"\r\n														  style=\"resize: none\">\r\n												</textarea>\r\n											</div>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Enviar Negação</button>								\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>					\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/obter-pedidos/views/index.html","<style>\r\n    .big-button {\r\n        font-size: 2.5em;\r\n        border-radius: 0;\r\n        -webkit-transition: all .3s;\r\n        -moz-transition: all .3s;\r\n        -ms-transition: all .3s;\r\n        -o-transition: all .3s;\r\n        transition: all .3s;\r\n    }\r\n    .a-green {\r\n        color: white;\r\n        border: 1px solid #1b4719 !important;\r\n        background: #2e772b !important;\r\n        border-radius: 0;\r\n        box-shadow: 0 1px 3px 1px #1b4719;\r\n    }\r\n    .a-muted {\r\n        color: #3d3d3d;\r\n    }\r\n    .a-green:hover {\r\n        color: white;\r\n        border: 1px solid #1b4719 !important;\r\n        background: #5fb25c !important;\r\n        border-radius: 0;\r\n        box-shadow: 0 1px 3px 1px #1b4719;\r\n    }\r\n    .a-green:focus {\r\n        color: white;\r\n        border: 1px solid #1b4719 !important;\r\n        background: #31722f !important;\r\n        border-radius: 0;\r\n        box-shadow: 0 1px 3px 1px #1b4719;\r\n    }\r\n    .a-green:active {\r\n        color: white;\r\n        border: 1px solid #1b4719 !important;\r\n        background: #31722f !important;\r\n        border-radius: 0;\r\n        box-shadow: 0 1px 3px 1px #1b4719;\r\n    }\r\n</style>\r\n<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Obter Pedidos</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <form>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"col-md-12 text-center\">\r\n                                            <button class=\"btn big-button a-green\"\r\n                                                    style=\"margin-right:10px\" \r\n                                                    ng-click=\"vm.obterPedidos()\">\r\n\r\n                                                Carregar Pedidos <i class=\"fa fa-download fa-fw\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");}]);
},{}],4:[function(require,module,exports){
var Util = window.Util || (window.Util = {});

Util.gerarPdf = function(result, contenttype, nomeArquivo) {
    var arr = result.data instanceof Array ? result.data : [result.data];

    var file = new Blob(arr, {type: contenttype});
    var fileURL = window.URL.createObjectURL(file);

    var linkFake = angular.element(document.getElementById("link_down"));
    if (angular.isDefined(linkFake)) {
        linkFake.remove();
    }
    linkFake = angular.element("<a>");
    linkFake.attr("id", "link_down");
    linkFake.attr("style", "display: none");
    linkFake.attr("href", fileURL);
    linkFake.attr("download", nomeArquivo);

    var body = angular.element(document).find('body');
    body.append(linkFake);
    document.getElementById("link_down").click();
};

Util.downloadArquivo = function(result, contenttype, nomeArquivo) {
    var file = b64toBlob;
    var fileURL = window.URL.createObjectURL(file);

    var linkFake = angular.element(document.getElementById("link_down"));
    if (angular.isDefined(linkFake)) {
        linkFake.remove();
    }
    linkFake = angular.element("<a>");
    linkFake.attr("id", "link_down");
    linkFake.attr("style", "display: none");
    linkFake.attr("href", fileURL);
    linkFake.attr("download", nomeArquivo);

    var body = angular.element(document).find('body');
    body.append(linkFake);
    document.getElementById("link_down").click();
};

Util.gerarBase64Arquivo = function(result, contenttype, nomeArquivo) {
    var arquivo = {
        data: parseBase64toBytearray(result)
    };
    Util.gerarPdf(arquivo, contenttype, nomeArquivo);
};

/**
 * valida se a string é uma data válida (formato: dd/mm/yyyy
 * @param value
 * @returns {boolean}
 */
Util.validarData = function (value) {
    if(Util.stringNotEmpty(value)) {
        var RegExPattern = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;

        if (!((value.match(RegExPattern)) && (value!=''))) {
            return false;
        } else {
            return true;
        }
    }
    return false;
}

/**
 * valida se a string está preenchida
 * @param value
 * @returns {boolean}
 */
Util.stringNotEmpty = function(value) {
    return value != null && value != '';
}

/**
 * gera objeto Date apartir da string no formato 'dd/mm/yyyy'
 * @param str
 * @returns {Date}
 */
Util.gerarData = function(str) {
    var partes = str.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
}

/**
 * Compara duas strings de data, se data inicial é menor que a final
 * @param dataInicial
 * @param dataFinal
 */
Util.dataInicialMaiorQueDataFinal = function(dataInicial, dataFinal) {
    if(Util.validarData(dataInicial) && Util.validarData(dataFinal)) {
        if (Util.gerarData(dataInicial) > Util.gerarData(dataFinal)) {
            return true;
        }
    }
    return false;
}

function parseBase64toBytearray(base64Data, sliceSize) {

    var byteCharacters,
        byteArray,
        byteNumbers,
        blobData,
        blob;

    byteCharacters = atob(base64Data);

    // Get blob data sliced or not
    blobData = sliceSize ? getBlobDataSliced() : getBlobDataAtOnce();
    return blobData;

    /*
    * Get blob data in one slice.
    * => Fast in IE on new Blob(...)
    */
    function getBlobDataAtOnce() {
        byteNumbers = new Array(byteCharacters.length);

        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        byteArray = new Uint8Array(byteNumbers);

        return [byteArray];
    }

    /*
    * Get blob data in multiple slices.
    * => Slow in IE on new Blob(...)
    */
    function getBlobDataSliced() {

        var slice,
            byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            slice = byteCharacters.slice(offset, offset + sliceSize);

            byteNumbers = new Array(slice.length);

            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            byteArray = new Uint8Array(byteNumbers);

            // Add slice
            byteArrays.push(byteArray);
        }

        return byteArrays;
    }
}

},{}],5:[function(require,module,exports){
var Util = window.Util || (window.Util = {});
var U = Util;

//****************************************************************
/**
 * Estilo para IGNORAR configurações.
 */
U.IGNORAR = "IGNORAR";
/**
 * Padrão de nome adotado pelos componentes com erro.
 */
U.PADRAO_NOME_ERRO = "ui-state-error";
/**
 * Mensagem para o placeholder do campo.
 */
U.MSG_PLACE_HOLDER = "Informe o(a) '{0}' ...";
//****************************************************************

/**
 * Executa os procedimentos inciais da tela.
 */
U.iniciarTela = function (fnPosterior) {
  window.setTimeout(function() {
    U.posRender();
    
    if(fnPosterior){
      try{
        fnPosterior();
      }
      catch(e){}
    }
  }, 0);
};

/**
 * Executa os procedimentos executados apos a renderização da tela.
 */
U.posRender = function (args) {
  window.setTimeout(function() {
	U.aplicarConfiguracoes();
	U.colocarFoco(args ? args.atributoFoco : null);
  }, 0);	
};

// Filtra retirando os objetos que devem ser ignorados
U.fnFiltrarIgnorados = function(lista) {
	return lista.not("[" + U.IGNORAR + "]").not("." + U.IGNORAR).attr(U.IGNORAR, "").addClass(U.IGNORAR);
};

/**
 * Executa os procedimentos inciais da tela.
 */
U.aplicarConfiguracoes = function () {
	
// -------------------------------------------------------------------------------
// Mascaras gerais

	try{
		$(".numero").each(function () {
			var obj  = $(this);
			// Aplica a máscara
			obj.maskMoney({allowZero:obj.hasClass("aceitaZero"), allowNegative: obj.hasClass("aceitaNegativo"), precision: 0, thousands: '', affixesStay: false});
		});
	}
	catch(e) {}

	try{
		var prefixo = 'R$ ';
		$(".moeda").each(function () {
			var obj  = $(this);
			// Aplica a máscara
			obj.maskMoney({prefix:obj.hasClass("comPrefixo") ? prefixo : "" , thousands:'.', decimal:',', allowZero:obj.hasClass("aceitaZero"), allowNegative: obj.hasClass("aceitaNegativo")});
			obj.on("focus", function(){
				// Manda o cursor para o final do campo
				obj.click();
			});
		});
	}
  catch(e) {}

// -------------------------------------------------------------------------------
};

/**
 * Coloca o foco no campo.
 */
U.colocarFoco = function(atributoFoco, filtro) {
	try{
		var filtroPadrao = $(filtro ? filtro : "body");
		
		// Seta o foco no campo informado 
		if(atributoFoco) {
			// Capitalize
			atributoFoco = U.capitalize(atributoFoco);
			// Procura o objeto
			atributoFoco = filtroPadrao.find("[id$='" + atributoFoco + "']").get(0);
		}
		// Se não está vazio e aceita foco
		if(atributoFoco && atributoFoco.focus) {
      atributoFoco.focus();
		}
		else {
			// Se houver um campo com erro
			var campoErro = filtroPadrao.find("." + U.PADRAO_NOME_ERRO);
			if(campoErro.length > 0){
				campoErro.eq(0).focus();
				return;
			}
			// Seta o foco no primeiro campo que permite filtro
			filtroPadrao.find(":text:visible:enabled:first,textarea:visible:enabled:first,:checkbox:enabled:first,select:enabled:first,:radio:enabled:first").not("div .dialog input")[0].focus();
		}
	}
	catch(e) {}
};

/**
 * Recupera o componente pelo final do nome
 * @param nomeComponente
 * @returns componente html
 */
U.getComp = function (idCampo, filtro) {
	// Lista os registros os quais o id termina com o parâmetro informado e retorna o primeiro encontrado
	return $(filtro ? filtro : "body").find("[id$='" + idCampo + "']").get(0);
};

/**
 * Recupera o componente input (original html) pelo final do nome.
 * @param nomeComponente
 * @returns componente html
 */
U.getCompInput = function (idCampo, filtro) {
	var obj = $(U.getComp(idCampo));
	// Se é campo data
	if(obj.hasClass("campoData")) {
		// Altera para o campo verdadeiro
		return obj.find("input").get(0);
	}

	return obj;
};

/**
 * Gera um id no padrão GUID.
 */
U.guid = function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Coloca a primeira letra do texto em maiúsculo.
 */
U.capitalize = function(valor) {
	if(valor){
		return valor.substring(0, 1).toUpperCase() + valor.substring(1);
	}
	return null;
};
},{}],6:[function(require,module,exports){
(function () {
    'use strict';

    require('./Arquivo.js');

    var Util = window.Util || (window.Util = {});

    /**
     * Escopo Compartilhado, trabalhando com objetos entre controllers.
     */
    var _objetos = {};

    Util.setObjetos = function (nomeObjeto, objeto) {
        _objetos[nomeObjeto] = objeto;
    };

    Util.getObjeto = function (nomeObjeto) {
        return _objetos[nomeObjeto];
    };

    Util.limpaEscopo = function () {
        _objetos = {};
    };

    Util.stringToDouble = function (valor) {
        if (typeof valor == "string") {
            return parseFloat(valor.replace(/\./g, '').replace(/,/g, '.'));
        }
        return null;
    }

    Util.dateToString = function (date, pattern) {
        var data = $.datepicker.formatDate(pattern, date);
        return data;
    }

    Util.StringToDate = function (data) {
        if (data) {
            data = data.toString().split("/");
            var dia = data[0];
            var mes = parseInt(data[1]) - 1;
            var ano = data[2];
            return new Date(ano, mes, dia);
        }
    }

    Util.formatJson = function (json) {
        return JSON.stringify(json, null, "    ");
    }

    Util.isUndefinedOuNull = function (obj) {
        if (typeof obj == undefined || obj == null)
            return true;
        else
            return false;
    };

    Util.validaDatas = function (dataIni, dataFi, growl) {
        var dataInicio = dataIni ? new Date(dataIni) : undefined;
        var dataFim = dataFi ? new Date(dataFi) : undefined;
        var dataHoje = new Date();
        if (!Util.isUndefinedOuNull(dataInicio) && !Util.isUndefinedOuNull(dataFim)) {
            if (dataInicio > dataFim) {
                growl.warning('A data início não pode ser superior à data final.');
                return false;
            }
            if (dataInicio > dataHoje || dataFim > dataHoje) {
                growl.warning('A data informada não pode ser superior à data atual.');
                return false;
            }
        } else if (!Util.isUndefinedOuNull(dataInicio)) {
            if (dataInicio > dataHoje) {
                growl.warning('A data inicio não pode ser superior à data atual.');
                return false;
            }
        } else {
            if (dataFim > dataHoje) {
                growl.warning('A data final não pode ser superior à data atual.');
                return false;
            }
        }
        return true;
    };

    /**
     * formata um label para o formato monetário
     * @param valor
     * @returns {string}
     */
    Util.formatarMonetario = function (valor) {
        return valor.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}).replace("R\$", "").trim();
    }


})();

},{"./Arquivo.js":4}],7:[function(require,module,exports){
(function(){
  'use strict';

    require('./Util');
    require('./Config');
})();

},{"./Config":5,"./Util":6}],8:[function(require,module,exports){
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

},{"../../.tmp/modulos":1,"../../.tmp/scripts/config":2,"../../.tmp/scripts/templates":3,"../../package.json":37,"./Util":7}],9:[function(require,module,exports){
module.exports = function(module) {

    require("./resource/arquivo.resource.js")(module);

}
},{"./resource/arquivo.resource.js":10}],10:[function(require,module,exports){
/**
 * ----------------------
 * Resource de Pagamentos
 * ----------------------
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.factory("ArquivoResource", ArquivoResource);

    function ArquivoResource(Restangular, $http) {

        var resource = "/arquivos";

        return {
            salvar:  salvar,
            buscar:  buscar,
            remover: remover,
        }

        function salvar(arquivo) {

            return $http({
                method: "POST",
                url: window.config.paths.server + resource + "/arquivo?guidPedido=" + arquivo.guidPedido + "&idDocumento=" + arquivo.identificadorDocumento,
                headers: {
                    'Content-Type': undefined
                },
                data: arquivo.arquivo
            });
        }

        /**
         * ------
         * buscar
         * ------
         */
        function buscar(idArquivo) {

            window.URL = window.URL || window.webkitURL;

            var xhr = new XMLHttpRequest();

            xhr.open('GET', Restangular.one(resource + "/arquivo/", idArquivo)
                .getRestangularUrl(), true);

            xhr.responseType = 'blob';

            xhr.onload = function(e) {
                if (this.status == 200) {
                    var blob = this.response;
                    var url  = window.URL.createObjectURL(blob);
                    window.open(url);
                }
            };

            xhr.send();
        }

        function remover(idArquivo) {
            return Restangular.one(resource + "/arquivo/", idArquivo).remove();
        }
    }
}
},{}],11:[function(require,module,exports){
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

},{"./arquivo":9,"./pagamentos":13,"./pedidos":25,"./ppe.menu.js":35,"./ppe.routes.js":36}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
module.exports = function(module) {
    'use strict';

    // Resource
    require('./resource/pagamentos.resource.js')(module);

    // Service
    require('./service/pagamentos.services.js')(module);

    // Controller
    require('./controller/pagamentos.controller.js')(module);

}
},{"./controller/pagamentos.controller.js":12,"./resource/pagamentos.resource.js":14,"./service/pagamentos.services.js":15}],14:[function(require,module,exports){
/**
 * ---------------------
 * Recurso de pagamentos
 * ---------------------
 * @author COINT
 * @since 01/2019
 */
module.exports = function(module) {

    "use strict";

    module.factory("PagamentosResources", PagamentosResources);

    function PagamentosResources(Restangular){

        var resource = '/pagamentos';

        return {
            salvar:                               salvar,
            remover:                              remover,
            listar:                               listar,
            buscar:                               buscar,
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao,
            listarParcelas:                       listarParcelas,
            listarParcelasPorGuidPedido:          listarParcelasPorGuidPedido,
            informarPagamento:                    informarPagamento,
            verificarPagamentoDeParcela:          verificarPagamentoDeParcela
        }

        /**
         * ------
         * salvar
         * ------
         */
        function salvar(pagamento) {
            return Restangular.all("/acordo/informarPagamento").post(pagamento);
        }

        function informarPagamento(pagamento) {
            return Restangular.all("/pagamentos/informar").post(pagamento);
        }

        /**
         * -------
         * remover
         * -------
         */
        function remover(codigoDoPagamento) {
            return Restangular.one(_getResource() + "/pagamento/", codigoDoPagamento).remove();
        }

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return Restangular.all(_getResource());
        }

        /**
         * ------
         * buscar
         * ------
         */
        function buscar(codigoDoPagamento) {
            return Restangular.one(_getResource() + "/pagamento/" + codigoDoPagamento).get();
        }

        /**
         * ------------------------------------
         * listarPagamentosPorPedidoHabilitacao
         * ------------------------------------
         */
        function listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao) {
            return Restangular.all(_getResource() + "/" + pedidoHabilitacao).getList();
        }

        /**
         * --------------
         * listarParcelas
         * --------------
         */
        function listarParcelas(sqProposta) {
            return Restangular.all('/parcela/' + sqProposta).getList();
        }

        /**
         * ---------------------------
         * listarParcelasPorGuidPedido
         * ---------------------------
         */
        function listarParcelasPorGuidPedido(guidPedido) {
            return Restangular.all('/parcela/guid/' + guidPedido).getList();
        }

        /**
         * ---------------------------
         * verificarPagamentoDeParcela
         * ---------------------------
         */
        function verificarPagamentoDeParcela(sqParcela) {
            return Restangular.one('/pagamentos/parcelas/pagas/' + sqParcela).get();
        }

        /**
         * ------------
         * _getResource
         * ------------
         */
        function _getResource() {
            return resource;
        }
    }
}

},{}],15:[function(require,module,exports){
/**
 * ---------------------
 * Serviço de pagamentos
 * ---------------------
 * @author COINT
 * @since 01/2019
 */
module.exports = function(module) {

    "use strict";

    module.service("PagamentosService", PagamentosService);

    function PagamentosService(PagamentosResources) {

        return {
            salvar:                               salvar,
            remover:                              remover,
            listar:                               listar,
            buscar:                               buscar,
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao,
            listarParcelas:                       listarParcelas,
            informarPagamento:                    informarPagamento
        }

        /**
         * salva pagamento
         */
        function salvar(pagamento) {
            PagamentosResources.salvar(pagamento)
                .then(function(response) {
                    console.log("[INFO] Pagamento adicionado.");
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[ERRO] Erro ao salvar pagamento!");
                });
        }

        /**
         * Solicita recurso para remover pagamento
         */
        function remover(codigoDoPagamento) {
            PagamentosResources.remover(codigoDoPagamento)
                .then(function(response) {
                    console.log("[INFO] Pagamento removido.");
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[ERRO] Erro ao remover pagamento!")
                });
        }

        /**
         * Solicita recurso para listar pagamento
         */
        function listar() {
            PagamentosResources.listar()
                .then(function(response) {
                    console.log("[INFO] Pagamentos recuperados.");
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[INFO] Erro ao recuperar pagamentos!");
                });
        }

        /**
         * Solicita recurso para buscar pagamento
         */
        function buscar(codigoDoPagamento) {
            PagamentosResources.buscar(codigoDoPagamento)
                .then(function(response) {
                    console.log("[INFO] Pagamento encontrado.");
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[ERRO] Erro ao buscar pagamento com o código " + codigoDoPagamento);
                });
        }

        /**
         * Lista todos os pagamentos de determinado pedido de habilitação
         */
        function listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao) {
            PagamentosResources.listarPagamentosPorPedidoHabilitacao(pedidoHabilitacao)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[ERRO] Erro ao listar pagamentos do pedido de habilitação " + pedidoHabilitacao);
                })
        }

        function listarParcelas(sqProposta) {
            PagamentosResources.listarParcelas(sqProposta)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(e) {
                    console.log(e);
                    console.log("[ERRO] Erro ao listar parcelas da proposta " + sqProposta);
                })
        }

        function informarPagamento(pagamento) {
            PagamentosResources.informarPagamento(pagamento)
                .then(function(response) {
                    return response.data.plain();
                })
                .catch(function(err) {
                    console.log(err);
                    return false;
                });
        }
    }
}
},{}],16:[function(require,module,exports){
/**
 * ========================
 * AcordoResource
 * ========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';
    
    module.factory('AcordoResource', AcordoResource);
    
    AcordoResource.$inject = ['Restangular'];

    /*@ngInject*/
    function AcordoResource(Restangular){

        function init() {
            
        }
        init();

        var resource = '/acordo';
        
        return {
            cadastrarResultadoAnalisePedido     : cadastrarResultadoAnalisePedido,
            informarDocumento                   : informarDocumento,
            adicionarArquivoComRessalva         : adicionarArquivoComRessalva,
            negar                               : negar,
            recuperarPagamentos                 : recuperarPagamentos,
            adicionarPagamento                  : adicionarPagamento,
            removerPagamento                    : removerPagamento
        }
        
        function getResource() {
            return resource;
        }

        function cadastrarResultadoAnalisePedido() {
            return Restangular.all(getResource() + "/cadastrarResultadoAnalisePedido");
        }

        function informarDocumento() {
            return Restangular.all(getResource() + "/informarDocumento");
        }

        function adicionarArquivoComRessalva() {
            return Restangular.all(getResource() + "/adicionararquivoressalva");
        }

        function negar() {
            return Restangular.all(getResource() + "/negarAnalisePedido");
        }
        
        function recuperarPagamentos(guidPedido) {
            return Restangular.all(getResource() + "/recuperarpagamentos/" + guidPedido);
        }

        function adicionarPagamento() {
            return Restangular.all(getResource() + "/informarPagamento");
        }

        function removerPagamento(idPagamento) {
            return Restangular.all(getResource() + "/pagamento/" + idPagamento);
        }
    }
}

},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
module.exports = function(module) {

    require('./aprovar-pedidos-com-ressalva.ctrl.js')(module);

}
},{"./aprovar-pedidos-com-ressalva.ctrl.js":17}],19:[function(require,module,exports){
/**
 * ========================
 * AprovarPedidosController
 * ========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function (module) {

    'use strict';

    module.controller('AprovarPedidosController', AprovarPedidosController);

    AprovarPedidosController.$inject = [
        '$scope',
        '$state',
        '$location',
        'msg',
        'growl',
        'PedidosResource',
        'AcordoResource',
        'PagamentosResources',
        'PagamentosService',
        'mask',
        '$http',
        '$stateParams',
        '$filter',
        '$uibModal'
    ];

    function AprovarPedidosController($scope,
                                      $state,
                                      $location,
                                      msg,
                                      growl,
                                      PedidosResource,
                                      AcordoResource,
                                      PagamentosResources,
                                      PagamentoService,
                                      mask,
                                      $http,
                                      $stateParams,
                                      $filter,
                                      $uibModal) {

        var vm = this;

        // funções
        vm.setModalidade                       = setModalidade;
        vm.adicionarPagamento                  = adicionarPagamento;
        vm.cancelarConfirmarPagamento          = cancelarConfirmarPagamento;
        vm.aprovar                             = aprovar;
        vm.negar                               = negar;
        vm.confirmarPagamentoRessalvas         = confirmarPagamentoRessalvas;
        vm.cancelarConfirmarPagamentoRessalvas = cancelarConfirmarPagamentoRessalvas
        vm.enviarDivergencias                  = enviarDivergencias;
        vm.downloadArquivo                     = downloadArquivo;
        vm.formatarJson                        = formatarJson;
        vm.cancelar                            = cancelar;
        vm.removerArquivoCalculo               = removerArquivoCalculo;
        vm.abrirModalPagamento                 = abrirModalPagamento;
        vm.removerPagamento                    = removerPagamento;

        $scope.adicionarArquivoRessalva = adicionarArquivoRessalva;

        // variáveis globais
        vm.listaMotivoRecusa                = undefined;
        vm.listaSubmotivoRecusa             = undefined;
        vm.modalidade                       = undefined;
        vm.isPagamentoConfirmado            = undefined;
        vm.isAcordoConfirmado               = undefined;
        vm.isPagamentoRessalvasConfirmado   = undefined;
        vm.pedido                           = {};
        vm.resultadoAnalisePedido           = {};
        vm.bloquearCamposAcordo             = false;
        vm.bloquearCamposPagamento          = false;
        vm.bloquearCamposRacionalCalculo    = false;
        vm.isBtnConfirmarAcordoDesabilitado = true;
        vm.debug                            = false; // habilita saída de testes no frontend
        vm.exibirComprovantePagamento       = false;
        vm.exibirArquivoCalculo             = false;
        vm.bloquearCamposRessalva           = false;
        vm.pagamentos                       = [];

        function setarValoresNaTela(propostaAcordo)
        {
            vm.bloquearCamposAcordo                                             = true;
            vm.isAcordoConfirmado                                               = true;
            vm.resultadoAnalisePedido.proposta                                  = {};
            vm.resultadoAnalisePedido.proposta.identificadorPropostaBanco       = propostaAcordo.codigoPropostaAcordo;
            vm.resultadoAnalisePedido.proposta.valorTotalAcordoFormatado        = Util.formatarMonetario(propostaAcordo.vlTotalProposta);
            vm.resultadoAnalisePedido.proposta.valorPoupadorFormatado           = Util.formatarMonetario(propostaAcordo.vlPoupador);
            vm.resultadoAnalisePedido.proposta.valorHonorariosFebrapoFormatado  = Util.formatarMonetario(propostaAcordo.vlHonorarioIntituicao);
            vm.resultadoAnalisePedido.proposta.valorReembolsoCustasFormatado    = Util.formatarMonetario(propostaAcordo.vlReembolsoCusta);
            vm.resultadoAnalisePedido.proposta.quantidadeParcelas               = propostaAcordo.qtParcela;
            vm.resultadoAnalisePedido.proposta.valorHonorariosAdvogadoFormatado = Util.formatarMonetario(propostaAcordo.vlHonorarioPatrono);
            vm.resultadoAnalisePedido.proposta.datePrimeiraParcela              = Util.StringToDate(propostaAcordo.dataPrimeiraParcela);
            vm.resultadoAnalisePedido.proposta.valorParcelaFormatado            = Util.formatarMonetario(propostaAcordo.valorParcela);
            vm.resultadoAnalisePedido.proposta.dataPrimeiraParcela              = propostaAcordo.dataPrimeiraParcela;
            vm.resultadoAnalisePedido.observacoes                               = propostaAcordo.dsObservacaoProposta;
        }

        if ($stateParams.guidPedido)
        {
            PedidosResource.one($stateParams.guidPedido).get().then(function (response) {

                vm.pedido          = response.data;
                var propostaAcordo = vm.pedido.propostaAcordo;

                //TODO codigo comentado para entrega da primeira demanda
                // if(propostaAcordo) {
                //     var descricao = propostaAcordo.analisePedidoHabilitacao.resultadoAnalise.descricao;
                //     if('PROPOSTA_DE_ACORDO' == descricao) {
                //         setModalidade('aprovar');
                //         setarValoresNaTela(propostaAcordo);
                //
                //     }
                //     if('PROPOSTA_DE_ACORDO_COM_VALOR_DIVERGENTE_SIMULADO' == descricao) {
                //         setModalidade('aprovar-ressalvas');
                //         setarValoresNaTela(propostaAcordo);
                //     }
                //
                //     if('HABILITACAO_NEGADA' == descricao) {
                //         setModalidade('negar');
                //         vm.bloquearCamposAcordo = true;
                //         vm.resultadoAnalisePedido.motivoRecusaPedido = propostaAcordo.analisePedidoHabilitacao.motivoRecusaAnalise.id;
                //     }
                //     Util.posRender();
                //     console.log(vm.resultadoAnalisePedido)
                // }
            });
        }

        function init()
        {
            mask.add("inteiro10", "9999999999");
            mask.add("inteiro4", "9999");
            vm.resultadoAnalisePedido.comprovante = {};
        }
        init();

        /**
         * Define qual a modalidade será empregada para o pedido
         * - Aprovar
         * - Aprovar com ressalvas
         * - Negar
         */
        function setModalidade(valor)
        {
            vm.isAcordoConfirmado             = undefined;
            vm.isPagamentoRessalvasConfirmado = undefined;
            vm.resultadoAnalisePedido         = {};

            if (valor === 'aprovar')
            {
                vm.modalidade = 'aprovar';
                // vm.resultadoAnalisePedido = {};
            }

            if (valor === 'aprovar-ressalvas')
            {
                vm.bloquearCamposRessalva        = false;
                vm.bloquearCamposRacionalCalculo = false;
                vm.modalidade                    = 'aprovar-ressalva';
                // vm.resultadoAnalisePedido   = {};
            }

            if (valor === 'negar')
            {
                vm.modalidade           = 'negar';
                vm.exibirArquivoCalculo = false;

                // vm.resultadoAnalisePedido = {};

                PedidosResource.consultarMotivoRecusa().getList().then(function (response) {
                    vm.listaMotivoRecusa = response.data;
                });

                PedidosResource.consultarSubmotivoRecusa().getList().then(function (response) {
                    vm.listaSubmotivoRecusa = response.data;
                });

            }

            vm.resultadoAnalisePedido = {
                guidPedido: vm.pedido.cdPedidoHabilitacao
            };

            Util.posRender();
        }

        /**
         * =============
         * Aprova pedido
         * ============
         */
        function aprovar() {

            vm.resultadoAnalisePedido.resultado = vm.modalidade == 'aprovar'
                ? 'PROPOSTA_DE_ACORDO'
                : 'PROPOSTA_DE_ACORDO_COM_VALOR_DIVERGENTE_SIMULADO';

            vm.resultadoAnalisePedido.guidPedido = vm.pedido.cdPedidoHabilitacao;

            // ========
            // Proposta
            // ========
            var proposta = vm.resultadoAnalisePedido.proposta;

            // Parsing dos valores para Double
            proposta.valorTotalAcordo        = Util.stringToDouble(proposta.valorTotalAcordoFormatado);
            proposta.valorPoupador           = Util.stringToDouble(proposta.valorPoupadorFormatado);
            proposta.valorHonorariosAdvogado = Util.stringToDouble(proposta.valorHonorariosAdvogadoFormatado);
            proposta.valorReembolsoCustas    = Util.stringToDouble(proposta.valorReembolsoCustasFormatado);
            proposta.valorParcela            = Util.stringToDouble(proposta.valorParcelaFormatado);
            proposta.valorHonorariosFebrapo  = Util.stringToDouble(proposta.valorHonorariosFebrapoFormatado);

            /**
             * Verificando situação interna do pedido
             */
            if (vm.modalidade.toLowerCase() === 'aprovar') {
                vm.resultadoAnalisePedido.situacaoInterna = 1;
            }

            if (vm.modalidade.toLowerCase() === 'aprovar-ressalva') {
                vm.resultadoAnalisePedido.situacaoInterna = 2;
            }

            if (vm.resultadoAnalisePedido.proposta.datePrimeiraParcela) {
                vm.resultadoAnalisePedido.proposta.dataPrimeiraParcela = $filter('date')(new Date(vm.resultadoAnalisePedido.proposta.datePrimeiraParcela), 'dd/MM/yyyy');
            }

            // Validando se campos de valores
            if (!_validarValoresInformados(proposta)) {
                growl.error("Os valores informados extrapolam o valor total da proposta!");
                return;
            }

            var dataAtual = new Date();
            dataAtual.setHours(0, 0, 0, 0);

            var dataComparada = new Date(vm.resultadoAnalisePedido.proposta.datePrimeiraParcela);
            dataComparada.setHours(0, 0, 0, 0);

            if (dataAtual > dataComparada) {
                growl.error("A data da primeira parcela não pode ser menor que o dia de hoje!");
                return;
            }

            // Seta status da variável de confirmação de pagamento
            AcordoResource.cadastrarResultadoAnalisePedido().post(vm.resultadoAnalisePedido)
                .then(function (response) {

                    if (response.status == 200) {
                        vm.isAcordoConfirmado         = true;
                        vm.exibirComprovantePagamento = false;
                        vm.bloquearCamposAcordo       = true;

                        growl.success("Acordo confirmado com sucesso!");
                    }
                    else {
                        if (response.data != undefined) {
                            growl.error(response.data.message.message);
                        }
                        else {
                            growl.error(response.statusText);
                        }
                    }

                    _listarPagamentos(vm.resultadoAnalisePedido.guidPedido);
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        /**
         * Valida se valores da proposta
         */
        function _validarValoresInformados(proposta) {

            // Os valores informados não devem extrapolar o valor total da proposta
            var valorTotalInformado = proposta.valorHonorariosAdvogado
                + proposta.valorPoupador
                + proposta.valorReembolsoCustas
                + proposta.valorHonorariosFebrapo;

            return valorTotalInformado > proposta.valorTotalAcordo
                ? false
                : true;
        }

        /**
         * ===================
         * Enviar divergências
         * ===================
         */
        function enviarDivergencias()
        {
            AcordoResource.adicionarArquivoComRessalva().withHttpConfig({ transformRequest: angular.identity })
                .customPOST(vm.resultadoAnalisePedido.comprovante.arquivo, undefined, undefined, { 'Content-Type': undefined })
                .then(function (resposta)
                {
                    vm.bloquearCamposRacionalCalculo = true;
                    growl.success("Racional de cálculo enviado com sucesso!");
                })
                .catch(function (erro) {
                    growl.error(erro.data.message);
                });
        }

        /**
         * ===========
         * Nega pedido
         * ===========
         */
        function negar() {

            vm.resultadoAnalisePedido.resultado  = 'HABILITACAO_NEGADA'
            vm.resultadoAnalisePedido.gridPedido = vm.pedido.cdPedidoHabilitacao;

            AcordoResource.negar().post(vm.resultadoAnalisePedido)
                .then(function (response) {
                    if (response.status == 200) {
                        vm.bloquearCamposAcordo = true;
                        growl.success("Acordo negado com sucesso!");
                    }
                    else {
                        if (response.data != undefined) {
                            growl.error(response.data.message.message);
                        }
                        else {
                            growl.error(response.statusText);
                        }
                    }
            })
            .catch(function (erro) {
                console.log(erro);
            });
        }

        /**
         * Realiza a confirmação do pagamento.
         * Mantém os dados informados no formulário e o desabilita
         */
        function adicionarPagamento()
        {
            vm.resultadoAnalisePedido.guidPedido     = vm.pedido.cdPedidoHabilitacao;
            vm.resultadoAnalisePedido.valorPagamento = Util.formatarMonetario(Util.stringToDouble(vm.resultadoAnalisePedido.valorPagamentoFormatado));

            AcordoResource.adicionarPagamento().post(vm.resultadoAnalisePedido)
                .then(function (response) {
                    if (response.status == 200)
                    {
                        growl.success("Pagamento adicionado.");

                        //recuperar os pag para atualizar a lista de pag
                        // AcordoResource.recuperarPagamentos(vm.resultadoAnalisePedido.guidPedido).getList().then(function (response) {
                        //     vm.pedido.listaPagamentos = response.data;
                        //     growl.success("Pagamento adicionado com sucesso!");
                        //
                        //     //limpar os campos da tela
                        //     vm.exibirComprovantePagamento = false;
                        //     vm.resultadoAnalisePedido.identificadorPropostaBanco = "";
                        //     vm.resultadoAnalisePedido.numeroParcela = "";
                        //     vm.resultadoAnalisePedido.valorPagamentoFormatado = "";
                        //     vm.resultadoAnalisePedido.statusPagamento = "";
                        //     vm.resultadoAnalisePedido.dataPagamento = "";
                        //     vm.resultadoAnalisePedido.observacoesPagamento = "";
                        //     vm.resultadoAnalisePedido.comprovante.identificadorDocumento = "";
                        //
                        // });

                        _listarPagamentos(vm.resultadoAnalisePedido.guidPedido);
                    }
                    else
                    {
                        if (response.data != undefined)
                        {
                            growl.error(response.data.message.message);
                        }
                        else
                        {
                            growl.error(response.statusText);
                        }
                    }
                })
                .catch(function (erro)
                {
                    growl.error(erro.data.message);
                });
        }

        function _desabilitarCamposAdicionarPagamento()
        {

        }

        function atualizarDadosPagamento() {

            AcordoResource.recuperarPagamentos(vm.resultadoAnalisePedido.guidPedido).getList().then(function (response) {
                vm.pedido.listaPagamentos = response.data;

                //limpar os campos da tela
                vm.exibirComprovantePagamento                                = false;
                vm.resultadoAnalisePedido.identificadorPropostaBanco         = "";
                vm.resultadoAnalisePedido.numeroParcela                      = "";
                vm.resultadoAnalisePedido.valorPagamentoFormatado            = "";
                vm.resultadoAnalisePedido.statusPagamento                    = "";
                vm.resultadoAnalisePedido.dataPagamento                      = "";
                vm.resultadoAnalisePedido.observacoesPagamento               = "";
                vm.resultadoAnalisePedido.comprovante.identificadorDocumento = "";

            });
        }

        function cancelarConfirmarPagamento() {

            // Removendo classe 'text-muted' nas labels do formulário de pagamento
            document.getElementById('label-identificador-proposta').classList.remove('text-muted');
            document.getElementById('label-valor-total-acordo').classList.remove('text-muted');
            document.getElementById('label-valor-destinado-portador').classList.remove('text-muted');
            document.getElementById('label-valor-honorario-patrono').classList.remove('text-muted');
            document.getElementById('label-valor-reembolso-custas').classList.remove('text-muted');
            document.getElementById('label-quantidade-parcelas').classList.remove('text-muted');
            document.getElementById('label-valor-parcela').classList.remove('text-muted');
            document.getElementById('label-data-primeira-parcela').classList.remove('text-muted');
            document.getElementById('label-acordo-observacoes').classList.remove('text-muted');
            document.getElementById('label-pagamento-comprovante-identificador').classList.remove('text-muted');
            document.getElementById('label-pagamento-comprovante-nomearquivo').classList.remove('text-muted');

            // Habilitando edição do formulário de acordo
            document.getElementById('input-identificador-proposta').disabled = false;
            document.getElementById('input-valor-total-acordo').disabled = false;
            document.getElementById('input-valor-destinado-portador').disabled = false;
            document.getElementById('input-valor-honorario-patrono').disabled = false;
            document.getElementById('input-valor-reembolso-custas').disabled = false;
            document.getElementById('input-quantidade-parcelas').disabled = false;
            document.getElementById('input-valor-parcela').disabled = false;
            document.getElementById('input-data-primeira-parcela').disabled = false;
            document.getElementById('textarea-acordo-observacoes').disabled = false;

            // Removendo classe 'text-muted' nas labels do formulário de pagamento
            document.getElementById('label-pagamento-guid-pedido').classList.remove('text-muted');
            document.getElementById('label-pagamento-identificador-proposta').classList.remove('text-muted');
            document.getElementById('label-numero-parcela').classList.remove('text-muted');
            document.getElementById('label-pagamento-valor').classList.remove('text-muted');
            document.getElementById('label-pagamento-status').classList.remove('text-muted');
            document.getElementById('label-pagamento-data-pagamento').classList.remove('text-muted');
            document.getElementById('label-pagamento-observacoes').classList.remove('text-muted');

            // Habilita edição do formulário de pagamento
            document.getElementById('input-pagamento-guid-pedido').disabled = false;
            document.getElementById('input-pagamento-identificador-proposta').disabled = false;
            document.getElementById('input-numero-parcela').disabled = false;
            document.getElementById('input-pagamento-valor').disabled = false;
            document.getElementById('select-pagamento-status').disabled = false;
            document.getElementById('input-pagamento-data-pagamento').disabled = false;
            document.getElementById('input-pagamento-observacoes').disabled = false;
            document.getElementById('input-pagamento-comprovante-identificador').disabled = false;
            document.getElementById('input-pagamento-comprovante-nomearquivo').disabled = false;
        }

        function confirmarPagamentoRessalvas() {

            vm.resultadoAnalisePedido.resultado  = 'PROPOSTA_DE_ACORDO_COM_VALOR_DIVERGENTE_SIMULADO';
            vm.resultadoAnalisePedido.guidPedido = vm.pedido.cdPedidoHabilitacao;

            // ========
            // Proposta
            // ========
            var proposta = vm.resultadoAnalisePedido.proposta;

            // Parsing dos valores para Double
            proposta.valorTotalAcordo        = Util.stringToDouble(proposta.valorTotalAcordoFormatado);
            proposta.valorPoupador           = Util.stringToDouble(proposta.valorPoupadorFormatado);
            proposta.valorHonorariosAdvogado = Util.stringToDouble(proposta.valorHonorariosAdvogadoFormatado);
            proposta.valorReembolsoCustas    = Util.stringToDouble(proposta.valorReembolsoCustasFormatado);
            proposta.valorParcela            = Util.stringToDouble(proposta.valorParcelaFormatado);
            proposta.valorHonorariosFebrapo  = Util.stringToDouble(proposta.valorHonorariosFebrapoFormatado);

            // Seta status da variável de confirmação de pagamento
            AcordoResource.cadastrarResultadoAnalisePedido().post(vm.resultadoAnalisePedido)
                .then(function (response) {
                    if (response.status == 200) {
                        vm.isPagamentoRessalvasConfirmado = true;
                        vm.bloquearCamposRessalva         = true;

                        growl.success("Acordo confirmado com ressalvas!");

                    }
                    else {

                        if (response.data != undefined) {
                            growl.error(response.data.message.message);
                        }
                        else {
                            growl.error(response.statusText);
                        }
                    }
                })
                .catch(function (erro) {
                    console.log(erro);
                });

        }

        function cancelarConfirmarPagamentoRessalvas() {

            // Adicionando classe 'text-muted' aos labels
            document.getElementById("label-identificador-proposta-ressalvas").classList.remove('text-muted');
            document.getElementById("label-valor-total-acordo-ressalvas").classList.remove('text-muted');
            document.getElementById("label-valor-destinado-portador-ressalvas").classList.remove('text-muted');
            document.getElementById("label-valor-honorario-patrono-ressalvas").classList.remove('text-muted');
            document.getElementById("label-valor-reembolso-custas-ressalvas").classList.remove('text-muted');
            document.getElementById("label-quantidade-parcelas-ressalvas").classList.remove('text-muted');
            document.getElementById("label-valor-parcela-ressalvas").classList.remove('text-muted');
            document.getElementById("label-data-primeira-parcela-ressalvas").classList.remove('text-muted');
            document.getElementById("label-observacoes-ressalvas").classList.remove('text-muted');

            // Desabilitando inputs
            document.getElementById("input-identificador-proposta-ressalvas").disabled = false;
            document.getElementById("input-valor-total-acordo-ressalvas").disabled = false;
            document.getElementById("input-valor-destinado-portador-ressalvas").disabled = false;
            document.getElementById("input-valor-honorario-patrono-ressalvas").disabled = false;
            document.getElementById("input-valor-reembolso-custas-ressalvas").disabled = false;
            document.getElementById("input-quantidade-parcelas-ressalvas").disabled = false;
            document.getElementById("input-valor-parcela-ressalvas").disabled = false;
            document.getElementById("input-data-primeira-parcela-ressalvas").disabled = false;
            document.getElementById("textarea-observacoes-ressalvas").disabled = false;

            // Seta status da variável de confirmação de pagamento com ressalvas
            vm.isPagamentoRessalvasConfirmado = false;

        }

        function downloadArquivo(gridPedido, codigoArquivo) {

            PedidosResource.obterArquivo(gridPedido, codigoArquivo).get().then(function (response) {
                Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
            })
            .catch(function (erro) {
                growl.error(erro.data.message);
            });
        }

        function formatarJson() {
            return Util.formatJson(vm.resultadoAnalisePedido);
        }

        /**
         * ==============================
         * Cancela a modalidade escolhida
         * ==============================
         */
        function cancelar() {
            vm.modalidade             = undefined;
            vm.resultadoAnalisePedido = {};
        }

        function verificarCamposInformados(obj) {
            var hasNull = undefined;

            if (typeof obj === 'object') {

                Object.keys(obj).forEach(function (attr) {

                    if (obj[attr]) {
                        hasNull = true;
                    }
                });
            }
            return true;
        }

        function adicionarArquivoRessalva(element) {

            var identificadorRacionalCalculo = vm.resultadoAnalisePedido.racionalDeCalculo != undefined
                ? vm.resultadoAnalisePedido.racionalDeCalculo.identificadorRacionalCalculo
                : undefined;

            if (identificadorRacionalCalculo == undefined || identificadorRacionalCalculo == null || identificadorRacionalCalculo == '') {
                growl.error("Informe o Identificador do Racional de Cálculo.");
                return;
            }

            var scope         = angular.element(element).scope();
            var arquivo       = element.files[0];
            var tamanhoMaximo = 5242880;

            if (arquivo.size > tamanhoMaximo) {
                growl.warning("Tamanho máximo ultrapassado, o limite máximo de 5 MB.");
                return;
            }

            var nomeArquivo = arquivo.name;
            var formData    = new FormData();

            formData.append('file', arquivo);
            formData.append('racionalCalculo', vm.resultadoAnalisePedido.racionalDeCalculo.identificadorRacionalCalculo);
            formData.append('observacao', vm.resultadoAnalisePedido.racionalDeCalculo.observacoes);
            formData.append('gridPedido', vm.resultadoAnalisePedido.guidPedido);

            vm.exibirArquivoCalculo                           = true;
            vm.resultadoAnalisePedido.comprovante             = {};
            vm.resultadoAnalisePedido.comprovante.nomeArquivo = nomeArquivo;
            vm.resultadoAnalisePedido.comprovante.arquivo     = formData;

            //aplica scopo criado nada tela para tirar o delay do input 'FILE' na hora de selecionar o arquivo
            scope.$apply();
        }

        function removerArquivoCalculo() {
            vm.exibirArquivoCalculo                                                  = false;
            vm.resultadoAnalisePedido.comprovante                                    = {};
            vm.resultadoAnalisePedido.racionalDeCalculo.identificadorRacionalCalculo = '';
        }

        /**
         * -------------------
         * abrirModalPagamento
         * -------------------
         */
        function abrirModalPagamento(pagamento, guidPedido)
        {
            Util.setObjetos('pagamento', pagamento);
            Util.setObjetos('guidPedido', guidPedido);

            var modalInstance = $uibModal.open({
                templateUrl: 'ppe/pedidos/aprovar-pedidos/views/comprovante.html',
                controller: 'PagamentoController as vm',
                size: 'xMd',
                resolve: {
                    items: function () {
                        var parametros = {
                            "pagamento": pagamento,
                            "situacao": vm.modalidade
                        }
                        return parametros;
                    }
                }
            });

            modalInstance.result.then(function (isSucesso) {
                if (isSucesso) {
                    atualizarDadosPagamento();
                }
            }, function (error) {
                // pass the error the the error service
                return error;
            });
        }

        /**
         * ----------------
         * removerPagamento
         * ----------------
         */
        function removerPagamento(idPagamento) {
            PagamentosResources.remover(idPagamento)
                .then(function (response) {
                    if (response.status == 200) {
                        // atualizarDadosPagamento();
                        growl.success("Pagamento excluído com sucesso.");
                    }
                    else {
                        if (response.data != undefined) {
                            growl.error(response.data.message);
                        }
                        else {
                            growl.error(response.statusText);
                        }
                    }

                    _listarPagamentos(vm.resultadoAnalisePedido.guidPedido);
                })
                .catch(function (erro) {
                    console.log(erro);
                    growl.error(erro.data);
                    _listarPagamentos(vm.resultadoAnalisePedido.guidPedido);
                });
        }

        $scope.$watch(function ()
        {
            return vm.resultadoAnalisePedido.proposta;
        },
        function (newValue, oldValue)
        {
            if (!newValue) return;

            var valor = (newValue.valorPoupadorFormatado)
                ? Util.stringToDouble(newValue.valorPoupadorFormatado)
                : 0;

            var quantidadeParcelas = newValue.quantidadeParcelas || 0;

            var valorParcela = (valor > 0.0 && quantidadeParcelas > 0)
                ? (valor / quantidadeParcelas)
                : 0;

            vm.resultadoAnalisePedido.proposta.valorParcelaFormatado = Util.formatarMonetario(valorParcela);
        }, true);

        /**
         * Lista todos os pag cadastrados para o pedido habilitacao
         */
        function _listarPagamentos(guidPedido) {

            PagamentosResources.listarPagamentosPorPedidoHabilitacao(guidPedido)
                .then(function(response) {
                    vm.pagamentos = response.data.plain();
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }
}
},{}],20:[function(require,module,exports){
module.exports = function(module) {

    require('./aprovar-pedidos.ctrl.js')(module);

    require('./pagamento.ctrl.js')(module);

}
},{"./aprovar-pedidos.ctrl.js":19,"./pagamento.ctrl.js":21}],21:[function(require,module,exports){
module.exports = function(module) {

    'use strict';

    module.controller('PagamentoController', PagamentoController);

    function PagamentoController($scope,
                                 $uibModalInstance,
                                 items,
                                 growl,
                                 AcordoResource,
                                 ArquivoResource,
                                 PagamentosResources) {

        var vm = this;

        vm.fecharModalPagamento         = fecharModalPagamento;
        vm.confimarPagamento            = confimarPagamento;
        vm.removerComprovante           = removerComprovante;
        vm.verificaIdentificador        = verificaIdentificador;
        vm.pagamento                    = {};
        vm.comprovante                  = {};
        vm.exibirComprovantePagamento   = false;
        vm.situacao                     = items.situacao;
		vm.isArquivoSelecionado         = false;
		vm.changeFile                   = changeFile;
		
		/**
		 * Altera o estado do arquivo para "selecionado"
		 */
		function changeFile() {
			vm.isArquivoSelecionado = true;
		}

        if(vm.situacao === 'aprovar') {
            vm.tituloTela = 'Comprovante';
            vm.tituloCampo = 'Identificador do Comprovante:';
        } else {
            vm.tituloTela = 'Racional de cálculo';
            vm.tituloCampo = 'Identificador do Racional de Cálculo:';
        }


        $scope.adicionarArquivo = adicionarArquivo;

        function init() {
            vm.pagamento = items.pagamento;
            vm.guid      = items.guidPedido;
            var pagamento = Util.getObjeto("pagamento");
            var guidPedido = Util.getObjeto("guidPedido");
        }
        init();

        function fecharModalPagamento() {
            $uibModalInstance.dismiss();
        }

        function confimarPagamento() {

            vm.comprovante.guidPedido = Util.getObjeto("guidPedido");

            // Salvando arquivo de comprovante na base
            ArquivoResource.salvar(vm.comprovante)
                .then(function(response) {
                    growl.success("Arquivo " + vm.comprovante.nomeArquivo + " enviado com sucesso.");

                    var dataArray = vm.pagamento.dtVencimentoParcela.split('-');
                    var dataFormatada = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0];

                    var cdDocumento = response.data.resultado.cdDocumento;

                    var pagamentoDaParcela = {
                        'sqConta':            Util.getObjeto('sqConta'),
                        'dataPagamento':      dataFormatada,
                        'descricaoPagamento': 'pagamento da parcela de número ' + vm.pagamento.numeroOrdemParcela,
                        'idDocumento':        vm.comprovante.identificadorDocumento,
                        'idParcela':          vm.pagamento.sqParcelaProposta,
                        'situacaoPagamento':  1,
                        'valorPagamento':     vm.pagamento.vlParcelaProposta,
                        'cdDocumento':        cdDocumento
                    };

                    // Gerando pagamento de parcela
                    PagamentosResources.informarPagamento(pagamentoDaParcela)
                        .then(function(response) {
                            growl.success("Pagamento efetuado com sucesso");
                            console.log(response.data);

                        })
                        .catch(function(err) {
                            growl.error("Falha ao criar pagamento");
                            console.log(err);
                        });

                })
                .catch(function(err) {
                    growl.error("Erro ao enviar arquivo " + vm.comprovante.nomeArquivo);
                });

            fecharModalPagamento();
        }

        /**
         * --------------------
         * confirmarComprovante
         * --------------------
         */
        function confirmarComprovante() {

        }

        function adicionarArquivo(element) {

            var identificadorDocumento = vm.comprovante.identificadorDocumento;
            if(identificadorDocumento == undefined || identificadorDocumento == null || identificadorDocumento == '') {
                growl.warning("Informe o identificador do arquivo.");
                return;
            }

            var scope = angular.element(element).scope();
            var arquivo = element.files[0];
            //o tamanho máximo do arquivo 5MB
            var tamanhoMaximo = 5242880;

            if (arquivo.size > tamanhoMaximo) {
                growl.warning("Tamanho máximo ultrapassado, o limite máximo de 5 MB.");
                return;
            }
			
			if (arquivo.name.toUpperCase().indexOf(".PDF") == -1){
                growl.warning("O arquivo deve ser um PDF!");
                return;
			}

            var nomeArquivo = arquivo.name;

            var formData = new FormData();
            formData.append('file', arquivo);
            formData.append('idPagamento', vm.pagamento.sqPagamento);
            formData.append('identificadorComprovante', identificadorDocumento);

            vm.exibirComprovantePagamento = true;
            vm.comprovante.nomeArquivo = nomeArquivo;
            vm.comprovante.arquivo = formData;

            //aplica scopo criado nada tela para tirar o delay do input 'FILE' na hora de selecionar o arquivo
            scope.$apply();
        }

        function verificaIdentificador() {
            if(!vm.comprovante.identificadorDocumento) {
                growl.warning("Informe o identificador do arquivo.");
                return false;
            }
			else {
				vm.isArquivoSelecionado = true;
			}
        }

        function removerComprovante() {
            vm.exibirComprovantePagamento = false;
            vm.comprovante = {};
        }
    }
}
},{}],22:[function(require,module,exports){
/**
 * ==========================
 * ConsultarPedidosController
 * ==========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';

    module.controller('ConsultarPedidosController', ConsultarPedidosController);

    ConsultarPedidosController.$inject = [
        '$http',
        '$scope',
        '$state',
        '$location',
        '$filter',
        'paths',
        'msg',
        'growl',
        'mask',
        'PedidosResource',
        'NgTableParams'
    ];

    function ConsultarPedidosController(
        $http,
        $scope,
        $state,
        $location,
        $filter,
        paths, 
        msg, 
        growl,
        mask,
        PedidosResource,
        NgTableParams) {

        var vm = this;

        // Funções
        vm.consultar      = consultar;
        vm.detalharPedido = detalharPedido;
        vm.limpar         = limpar;

        // Objetos
        vm.pedido            = undefined;
        vm.listaPedidos      = [];
        vm.listaStatusPedido = [];
        vm.listaSituacao     = [];

        /**
         * ----
         * init
         * ----
         */
        function init() {

            //limpar os campos
            vm.pedido        = undefined;
            vm.listaPedidos  = [];
            vm.listaSituacao = [];

            PedidosResource.consultarStatusPedido().getList().then(function (response) {
                vm.listaStatusPedido = response.data;
            });

            PedidosResource.consultarSituacaoPedido().getList().then(function (response) {
                vm.listaSituacao = response.data;
            });

            mask.add('guid', '********-****-****-****-************');
            mask.add('protocolo', '***-***-********-********');
            mask.add('processo', '9999999999');
            mask.add('cpf', '999.999.999-99');
            mask.add('inteiro4', '9999');

        }
        init();

        /**
         * ---------------
         * Carrega ngTable
         * ---------------
         */
        function _carregarTabelaPedidos(listaPedidos)
        {
            vm.tabelaPedidos = new NgTableParams({
                count: 10
            }, {
                counts:[10, 25, 50, 100],
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                total: listaPedidos.length,
                dataset: listaPedidos
            });
        }

        /**
         * ----------------
         * Consultar pedido
         * ----------------
         */
        function consultar()
        {
            if (vm.pedido)
            {
                if (vm.pedido.cpfPoupador)
                {
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace(/\./g, '');
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace('-', '');
                }

                if(vm.pedido.dateCadastro)
                {
                    vm.pedido.dataCadastro = $filter('date')(new Date(vm.pedido.dateCadastro), 'dd/MM/yyyy');
                }
            }

            var URL = window.config.paths.server;

            $http({
                url: URL+'/pedido?limit=10000',
                method: "GET",
                params: vm.pedido
            }).then(function(response) {

                if (response.status == 200)
                {
                    vm.listaPedidos = response.data;
                    _carregarTabelaPedidos(vm.listaPedidos);
                }
                else
                {
                    if (response.data != undefined)
                    {
                        growl.error(response.data.message.message);
                    }
                    else
                    {
                        growl.error(response.statusText);
                    }
                }
            });

            // $http({
            //     url: URL + '/pedido?page=' + pageNumber + '&limit=' + limit,
            //     method: 'GET',
            //     params: vm.pedido
            // }).then(function(respose) {
            //     if (respose.status == 200)
            //     {
            //         vm.listaPedidos = response.data;
            //         _carregarTabelaPedidos(vm.listaPedidos);
            //     }
            //     else
            //     {
            //         growl.error(respose.statusText);
            //     }
            // });
        }

        /**
         * -------------------------------------------------------------------------
         * Detalha o pedido, redirecionando o usuário para o formulário de aprovação
         * -------------------------------------------------------------------------
         */
        function detalharPedido(guidPedido)
        {
            $state.go('home.aprovarpedidos', {guidPedido: guidPedido});
        }

        /**
         * -----------------
         * Limpar formulário
         * -----------------
         */
        function limpar()
        {
            init();
        }
    }
}
},{}],23:[function(require,module,exports){
module.exports = function(module) {

    require('./consultar-pedidos.ctrl.js')(module);
        
}
},{"./consultar-pedidos.ctrl.js":22}],24:[function(require,module,exports){
module.exports = function(module) {

    'use strict';

    module.controller('PedidoController', PedidoController);

    function PedidoController($http,
                              $scope,
                              $state,
                              $stateParams,
                              $location,
                              $filter,
                              paths,
                              msg,
                              growl,
                              mask,
                              AcordoResource,
                              PedidosResource,
                              PedidoResource,
                              PedidoService,
                              PagamentosResources,
                              NgTableParams,
                              $uibModal) {

        /** Variáveis internas */
        var vm       = this;
        var execOnce = false;

        /** Variáveis utilizadas na view */
        vm.pedido               = undefined;
        vm.pedidoSelecionado    = undefined;
        vm.propostaAcordo       = {};
        vm.listaPedidos         = [];
        vm.listaStatusPedido    = [];
        vm.listaSituacao        = [];
        vm.listaMotivoRecusa    = [];
        vm.listaSubmotivoRecusa = [];
        vm.pagamentos           = [];
        vm.parcelas             = [];
        vm.activeTab            = undefined;
        vm.isPedidosTab         = undefined;
        vm.isDetalhePedidoTab   = undefined;
        vm.isPropostaTab        = undefined;
        vm.isPagamentosTab      = undefined;
        vm.formPropostaActive   = undefined;
        vm.pedidoHabilitacao    = undefined;

        /** Funções */
        vm.consultar                   = consultar;
        vm.consultarPorGuid            = consultarPorGuid;
        vm.buscarAnalisePedido         = buscarAnalisePedido;
        vm.buscarProposta              = buscarProposta;
        vm.limpar                      = limpar;
        vm.changeTab                   = changeTab;
        vm.getTabClass                 = getTabClass;
        vm.pedidosView                 = pedidosView;
        vm.detalhesView                = detalhesView;
        vm.processoView                = processoView;
        vm.dadosBancariosView          = dadosBancariosView;
        vm.documentosView              = documentosView;
        vm.propostaView                = propostaView;
        vm.pagamentosView              = pagamentosView;
        vm.downloadArquivo             = downloadArquivo;
        vm.limparFormProposta          = limparFormProposta;
        vm.confirmarProposta           = confirmarProposta;
        vm.negarProposta               = negarProposta;
        vm.getModalidade               = getModalidade;
        vm.getModalidadeClass          = getModalidadeClass;
        vm.getFormatoMonetario         = getFormatoMonetario;
        vm.getFormStyle                = getFormStyle;
        vm.getInputStyle               = getInputStyle;
        vm.getButtonStyle              = getButtonStyle;
        vm.getLabelStyle               = getLabelStyle;
        vm.listarPagamentos            = listarPagamentos;
        vm.listarParcelas              = listarParcelas;
        vm.adicionarPagamento          = adicionarPagamento;
        vm.abrirModalPagamento         = abrirModalPagamento;
        vm.verificarPagamentoDeParcela = verificarPagamentoDeParcela;
        vm.downloadArquivo             = downloadArquivo;
        vm.downloadComprovante         = downloadComprovante;
        vm.getComprovanteUrl           = getComprovanteUrl;

        /**
         * ----
         * init
         * ----
         */
        function init() {

            if (!execOnce) {

                execOnce = true;

                PedidosResource.consultarStatusPedido().getList().then(function (response) {
                    vm.listaStatusPedido = response.data;
                });

                PedidosResource.consultarSituacaoPedido().getList().then(function (response) {
                    vm.listaSituacao = response.data;
                });

                PedidosResource.consultarMotivoRecusa().getList().then(function (response) {
                    vm.listaMotivoRecusa = response.data;
                });

                PedidosResource.consultarSubmotivoRecusa().getList().then(function (response) {
                    vm.listaSubmotivoRecusa = response.data;
                });

                // vm.consultar();
            }

            // limpar os campos
            vm.pedido        = undefined;
            vm.listaPedidos  = [];
            vm.listaSituacao = [];

            // Setando tab inicial
            changeTab("pedidos");
            vm.activeTab = "pedidos";

            // Setando formulário padrão
            vm.formPropostaActive = 'aprovar';

            mask.add('guid', '********-****-****-****-************');
            mask.add('protocolo', '***-***-********-********');
            mask.add('processo', '9999999999');
            mask.add('cpf', '999.999.999-99');
            mask.add('inteiro4', '9999');
            mask.add("inteiro10", "9999999999");
            mask.add("money", '999.999.999.999,00');

        }
        init();

        /**
         * ----------------
         * Consultar pedido
         * ----------------
         */
        function consultar() {
            if (vm.pedido) {

                if (vm.pedido.cpfPoupador) {

                    if (!_validarCpf(vm.pedido.cpfPoupador)) {
                        growl.error("O CPF informado não é válido.");
                        return;
                    }

                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace(/\./g, '');
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace('-', '');
                }

                if(vm.pedido.dateCadastro) {
                    var dataAtual = new Date();
                    var dataInformada = vm.pedido.dateCadastro;

                    if (dataInformada > dataAtual) {
                        growl.error("A data informada não pode ser maior que a data atual.");
                        return;
                    }

                    vm.pedido.dataCadastro = $filter('date')(new Date(vm.pedido.dateCadastro), 'dd/MM/yyyy');
                }
            }

            var URL = window.config.paths.server;

            _consultarPedidos(10000, vm.pedido);
        }

        /**
         * ---------------
         * Carrega ngTable
         * ---------------
         */
        function _carregarTabelaPedidos(listaPedidos) {
            vm.tabelaPedidos = new NgTableParams({
                count: 10
            }, {
                counts:[10, 25, 50, 100],
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                total: listaPedidos.length,
                dataset: listaPedidos
            });
        }

        /**
         * ------
         * limpar
         * ------
         * Limpa formulário de pesquisa
         */
        function limpar() {
            init();
        }

        /**
         * ---------
         * changeTab
         * ---------
         * Modifica a aba ativa
         */
        function changeTab(tabName) {
            vm.tabName = tabName;
        }

        /**
         * -----------
         * getTabClass
         * -----------
         * Ativa ou desativa a aba através da mudança de classe
         */
        function getTabClass(tabName) {
            return vm.tabName === tabName
                ? "active"
                : "disabled";
        }

        /**
         * ----------------
         * consultarPorGuid
         * ----------------
         */
        function consultarPorGuid(guidPedido) {

            // Se for retornado da base...
            PedidoService.consultarPedido(guidPedido)
                .then(function(response) {

                    // Setamos o pedido selecionado
                    vm.pedidoSelecionado = response.data;

                    // Busca AnalisePedidoHabilitacao para o pedido
                    vm.buscarAnalisePedido(vm.pedidoSelecionado.cdPedidoHabilitacao);

                    // Buscar pagamentos do pedido
                    vm.listarPagamentos(vm.pedidoSelecionado.cdPedidoHabilitacao);

                    // Se estiver vindo da aba proposta, vai para pagamentos
                    if (vm.activeTab === 'proposta') {
                        vm.changeTab("pagamentos");
                        vm.activeTab = "pagamentos";
                    }
                    // Se vier de pagamentos, atualiza e volta para pagamentos
                    if (vm.activeTab === 'pagamentos') {
                        vm.changeTab("pagamentos");
                        vm.activeTab = "pagamentos";
                    }
                    // Caso contrário, vai para detalhe
                    if (vm.activeTab !== 'proposta' && vm.activeTab !== 'pagamentos') {
                        vm.changeTab("detalhes");
                        vm.activeTab = "detalhes";
                    }
                })
                .catch(function(err) {
                    console.log(err);
                })
        }

        /**
         * -----------------
         * _consultarPedidos
         * -----------------
         * consulta todos os pedidos cadastrados
         */
        function _consultarPedidos(limit, params) {

            PedidoService.consultarPedidos(limit, params)
                .then(function(response) {
                    vm.pedidosCadastrados = response.data;

                    if (response.status == 200) {

                        vm.listaPedidos = response.data;

                        if (vm.listaPedidos.length == 0) {
                            growl.info('Não existem pedidos cadastrados');
                            return;
                        }

                        _carregarTabelaPedidos(vm.listaPedidos);
                    }
                    else {
                        response.data != undefined
                            ? growl.error(response.data.message.message)
                            : growl.error(response.statusText);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * ----------------
         * _consultarPedido
         * ----------------
         * consulta pedido pelo guidPedido
         */
        function _consultarPedido(guidPedido) {
            if (guidPedido) {
                PedidoService.consultarPedido(guidPedido)
                    .then(function(response) {
                        vm.pedidoSelecionado = response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        }

        /**
         * -----------
         * pedidosView
         * -----------
         */
        function pedidosView() {
            vm.changeTab('pedidos');
            vm.activeTab = 'pedidos';
        }

        /**
         * ------------
         * detalhesView
         * ------------
         */
        function detalhesView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('detalhes');
                vm.activeTab = 'detalhes';
            }
        }

        /**
         * ------------
         * processoView
         * ------------
         */
        function processoView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('processo');
                vm.activeTab = 'processo';
            }
        }

        /**
         * ------------------
         * dadosBancariosView
         * ------------------
         */
        function dadosBancariosView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('dadosbancarios');
                vm.activeTab = 'dadosbancarios';
            }
        }

        /**
         * --------------
         * documentosView
         * --------------
         */
        function documentosView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('documentos');
                vm.activeTab = 'documentos';
            }
        }

        /**
         * ------------
         * propostaView
         * ------------
         */
        function propostaView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('proposta');
                vm.activeTab = 'proposta';
            }
        }

        /**
         * --------------
         * pagamentosView
         * --------------
         */
        function pagamentosView() {
            if (vm.pedidoSelecionado) {
                vm.changeTab('pagamentos');
                vm.activeTab = 'pagamentos';
            }
        }

        /**
         * ---------------
         * downloadArquivo
         * ---------------
         */
        function downloadArquivo(gridPedido, codigoArquivo) {

            PedidosResource.obterArquivo(gridPedido, codigoArquivo).get().then(function (response) {
                Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
            })
            .catch(function (erro) {
                growl.error(erro.data.message);
            });
        }

        /**
         * -----------------
         * limparFormAprovar
         * -----------------
         */
        function limparFormProposta(force) {
            if (force || confirm("Deseja limpar o formulário?")) {
                vm.propostaAcordo = {};
            }
        }

        /**
         * -----------------
         * confirmarProposta
         * -----------------
         * Confirma proposta de acordo
         */
        function confirmarProposta() {

            // valida se os campos obrigatórios foram informados
            if (!isCamposInformados()) {
                return;
            }

            // validas se os campos informados estão válidos
            if (!isCamposValidos()) {
                return;
            }

            // Confirmando proposta de acordo
            if (confirm('deseja salvar o acordo?')) {

                // Montando proposta de acordo
                vm.propostaAcordo.guidPedido = vm.pedidoSelecionado.cdPedidoHabilitacao;

                vm.propostaAcordo.resultado = vm.getModalidade().toLowerCase() == 'aprovar'
                    ? 'PROPOSTA_DE_ACORDO'
                    : 'PROPOSTA_DE_ACORDO_COM_VALOR_DIVERGENTE_SIMULADO';

                // Parsing dos valores para Double
                vm.propostaAcordo.proposta.valorTotalAcordo        = Util.stringToDouble(vm.propostaAcordo.proposta.valorTotalAcordo);
                vm.propostaAcordo.proposta.valorPoupador           = Util.stringToDouble(vm.propostaAcordo.proposta.valorPoupador);
                vm.propostaAcordo.proposta.valorHonorariosAdvogado = Util.stringToDouble(vm.propostaAcordo.proposta.valorHonorariosAdvogado);
                vm.propostaAcordo.proposta.valorReembolsoCustas    = Util.stringToDouble(vm.propostaAcordo.proposta.valorReembolsoCustas);
                vm.propostaAcordo.proposta.valorParcela            = Util.stringToDouble(vm.propostaAcordo.proposta.valorParcela);
                vm.propostaAcordo.proposta.valorHonorariosFebrapo  = Util.stringToDouble(vm.propostaAcordo.proposta.valorHonorariosFebrapo);

                /**
                 * Verificando situação interna do pedido
                 */
                if (vm.formPropostaActive.toLowerCase() === 'aprovar') {
                    vm.propostaAcordo.situacaoInterna = 1;
                }

                if (vm.formPropostaActive.toLowerCase() === 'ressalva') {
                    vm.propostaAcordo.situacaoInterna = 2;
                }

                if (vm.propostaAcordo.proposta.dataPrimeiraParcela) {
                    vm.propostaAcordo.proposta.dataPrimeiraParcela = $filter('date')(new Date(vm.propostaAcordo.proposta.dataPrimeiraParcela), 'dd/MM/yyyy');
                }

                // Seta status da variável de confirmação de pagamento
                AcordoResource.cadastrarResultadoAnalisePedido().post(vm.propostaAcordo)
                    .then(function(response) {

                        if (response.status == 200) {
                            growl.success("Acordo confirmado com sucesso.");

                            // Limpa formulário de proposta
                            vm.limparFormProposta(true);

                            // Atualiza os pedidos
                            _consultarPedidos(10000);

                            // Realiza novamente a consulta após salvar o acordo
                            consultarPorGuid(vm.pedidoSelecionado.cdPedidoHabilitacao);

                            // Listando parcelas do pedido
                            listarParcelas(vm.pedidoSelecionado.cdPedidoHabilitacao);

                        }
                        else {
                            if (response.data != undefined) {
                                growl.error(response.data.message.message);
                            }
                            else {
                                growl.error(response.statusText);
                            }
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });
            }
        }

        /**
         * ------------------
         * isCamposInformados
         * ------------------
         */
        function isCamposInformados() {

            // Validando campos
            if (!vm.propostaAcordo.proposta.identificadorPropostaBanco) {
                growl.error("Informe o id da proposta.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorTotalAcordo) {
                growl.error("Informe o valor total do acordo.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorPoupador) {
                growl.error("Informe o valor destinado ao portador.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorHonorariosAdvogado) {
                growl.error("Informe o valor destinado ao advogado.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorHonorariosFebrapo) {
                growl.error("Informe o valor de honorários da intituição.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorReembolsoCustas) {
                growl.error("Informe o valor de reembolso.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.quantidadeParcelas) {
                growl.error("Informe a quantidade de parcelas.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorParcela) {
                growl.error("Informe o valor da parcela.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.dataPrimeiraParcela) {
                growl.error("Informe a data da primeira parcela.");
                return false;
            }

            return true;
        }

        /**
         * ---------------
         * isCamposValidos
         * ---------------
         */
        function isCamposValidos() {

            var dataHoje = new Date();
            var dataPrimeiraParcela = vm.propostaAcordo.proposta.dataPrimeiraParcela;

            if (dataPrimeiraParcela < dataHoje) {
                growl.error("A data da primeira parcela não pode ser menor que a data de hoje.");
                return false;
            }

            return true;
        }

        /**
         * -------------
         * negarProposta
         * -------------
         * Nega proposta de acordo
         */
        function negarProposta() {
            if (confirm('deseja negar o acordo?')) {

                vm.propostaAcordo.guidPedido      = vm.pedidoSelecionado.cdPedidoHabilitacao;
                vm.propostaAcordo.resultado       = 'HABILITACAO_NEGADA'
                vm.propostaAcordo.situacaoInterna = 3;

                AcordoResource.negar().post(vm.propostaAcordo)
                    .then(function (response) {
                        if (response.status == 200) {

                            // Atualiza os pedidos
                            _consultarPedidos(10000);

                            // Realiza novamente a consulta após salvar o acordo
                            consultarPorGuid(vm.pedidoSelecionado.cdPedidoHabilitacao);

                            growl.success("Acordo negado com sucesso!");
                        }
                        else {
                            if (response.data != undefined) {
                                growl.error(response.data.message.message);
                            }
                            else {
                                growl.error(response.statusText);
                            }
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });


                vm.limparFormProposta(true);
                growl.success("Proposta negada com sucesso!");
            }
        }

        /**
         * -------------
         * getModalidade
         * -------------
         */
        function getModalidade() {
            if (vm.formPropostaActive === 'aprovar') {
                return "Aprovar";
            }
            if (vm.formPropostaActive === 'ressalva') {
                return "Aprovar com Ressalvas";
            }
            if (vm.formPropostaActive === 'negar') {
                return "Negar";
            }
        }

        /**
         * ------------------
         * getModalidadeClass
         * ------------------
         */
        function getModalidadeClass() {
            if (vm.formPropostaActive === 'aprovar') {
                return 'modalidade-aprovar';
            }
            if (vm.formPropostaActive === 'ressalva') {
                return 'modalidade-ressalva';
            }
            if (vm.formPropostaActive === 'negar') {
                return 'modalidade-negar';
            }
        }

        /**
         * -----------
         * _validarCpf
         * -----------
         */
        function _validarCpf(cpf) {

            cpf = cpf.split('.').join('');
            cpf = cpf.split('-').join('');

            var soma;
            var resto;

            soma = 0;

            if (cpf == "00000000000") {
                return false;
            }

            for (var i = 1; i <= 9; i++) {
                soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
            }
            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }

            if (resto != parseInt(cpf.substring(9, 10))) {
                return false;
            }

            soma = 0;

            for (i = 1; i <= 10; i++) {
                soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }

            if (resto != parseInt(cpf.substring(10, 11) )) {
                return false;
            }

            return true;
        }

        /**
         * ------------
         * _validarCnpj
         * ------------
         */
        function _validarCNPJ(cnpj) {

            cnpj = cnpj.replace(/[^\d]+/g,'');

            if(cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                return false;

            // Valida DVs
            var tamanho = cnpj.length - 2
            var numeros = cnpj.substring(0,tamanho);
            var digitos = cnpj.substring(tamanho);
            var soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != digitos.charAt(0)) {
                return false;
            }

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            var pos = tamanho - 7;

            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != digitos.charAt(1)) {
                return false;
            }

            return true;
        }

        function getFormatoMonetario(valor, id) {

            if (valor) {
                var elemento = document.getElementById(id);
                var valor = elemento.value;

                valor = valor + '';
                valor = parseInt(valor.replace(/[\D]+/g,''));
                valor = valor + '';
                valor = valor.replace(/([0-9]{2})$/g, ",$1");

                if (valor.length > 6) {
                    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                }

                elemento.value = valor;
            }
        }

        /**
         * -------------------
         * buscarAnalisePedido
         * -------------------
         */
        function buscarAnalisePedido(guidPedido) {

            PedidoService.buscarAnalisePedidoPorGuid(guidPedido)
                .then(function(response) {
                    vm.pedidoHabilitacao = response.data;

                    if (vm.pedidoHabilitacao) {
                        vm.buscarProposta(vm.pedidoHabilitacao.sqAnalisePedidoHabilitacao);
                        listarParcelas(vm.pedidoSelecionado.cdPedidoHabilitacao);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {

            PedidoService.buscarProposta(sqProposta)
                .then(function(response) {
                    vm.propostaAcordo = response.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * ------------
         * getFormStyle
         * ------------
         */
        function getFormStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'background': '#f0f7da',
                    'border': '1px solid #a8bc96'
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'background': '#fce4ba',
                    'border': '1px solid #d89d5d'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'background': '#f2d5d5',
                    'border': '1px solid #e06969'
                }
            }
        }

        /**
         * -------------
         * getInputStyle
         * -------------
         */
        function getInputStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'border': '1px solid #a8bc96',
                    'background': '#e0efd0'
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'border': '1px solid #d89d5d',
                    'background': '#efe0c9'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'border': '1px solid #e06969',
                    'background': '#fcecea'
                }
            }
        }

        /**
         * --------------
         * getButtonStyle
         * --------------
         */
        function getButtonStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'background': '#50754b',
                    'border': '1px solid #50754b',
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'background': '#c69323',
                    'border': '1px solid #c69323'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'background': '#b75d52',
                    'border': '1px solid #e06969'
                }
            }
        }

        /**
         * -------------
         * getLabelStyle
         * -------------
         */
        function getLabelStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'color': '#50754b',
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'color': '#c69323',
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'color': '#e06969',
                }
            }
        }

        /**
         * ----------------
         * listarPagamentos
         * ----------------
         */
        function listarPagamentos(guidPedido) {

            PagamentosResources.listarPagamentosPorPedidoHabilitacao(guidPedido)
                .then(function(response) {
                    vm.pagamentos = response.data.plain();
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * ------------------
         * adicionarPagamento
         * ------------------
         */
        function adicionarPagamento() {

            console.log(vm.propostaAcordo);

            vm.propostaAcordo.guidPedido = vm.pedidoSelecionado.cdPedidoHabilitacao;
            // vm.propostaAcordo.valorPagamento = Util.formatarMonetario(Util.stringToDouble(vm.propostaAcordo.valorPagamento));


            AcordoResource.adicionarPagamento().post(vm.propostaAcordo.pagamento)
                .then(function(response) {
                    if (response.status == 200) {
                        listarPagamentos(vm.propostaAcordo.guidPedido);
                        growl.success("Pagamento adicionado.");
                    }
                    else {
                        if (response.data != undefined) {
                            growl.error(response.data.message.message);
                        }
                        else
                        {
                            growl.error(response.statusText);
                        }
                    }
                })
                .catch(function (erro)
                {
                    growl.error(erro.data.message);
                });
        }

        /**
         * -------------
         * listaParcelas
         * -------------
         */
        function listarParcelas(guidPedido) {
            PagamentosResources.listarParcelasPorGuidPedido(guidPedido)
                .then(function(response) {
                    vm.parcelas = response.data.plain();
                })
                .catch(function(err) {
                    console.log(err);
                })
        }

        /**
         * -------------------
         * abrirModalPagamento
         * -------------------
         */
        function abrirModalPagamento(pagamento, guidPedido) {

            guidPedido = guidPedido || vm.pedidoSelecionado.cdPedidoHabilitacao;

            Util.setObjetos('pagamento', pagamento);
            Util.setObjetos('guidPedido', guidPedido);
            Util.setObjetos('sqConta', vm.pedidoSelecionado.listaContasContempladas[0].sqConta);

            // var modalInstance = $uibModal.open({
            //     templateUrl: 'ppe/pedidos/aprovar-pedidos/views/comprovante.html',
            //     controller: 'PagamentoController as vm',
            //     size: 'xMd',
            //     resolve: {
            //         items: function () {
            //             var parametros = {
            //                 "pagamento": pagamento,
            //                 "situacao": vm.modalidade
            //             }
            //             return parametros;
            //         }
            //     }
            // });

            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'ppe/pedidos/aprovar-pedidos/views/comprovante.html',
                controller: 'PagamentoController as vm',
                resolve: {
                    items: function () {
                        var parametros = {
                            "pagamento": pagamento,
                            "situacao": vm.modalidade
                        }
                        return parametros;
                    }
                }
            });

            modalInstance.result.then(function(response) {

            }, function () {
                vm.consultarPorGuid(vm.pedidoSelecionado.cdPedidoHabilitacao);
            });
            // modalInstance.result.then(function (response) {
            //     console.log(response);
            // }, function (error) {
            //     return error;
            // });
        }

        /**
         * ---------------------------
         * verificarPagamentoDeParcela
         * ---------------------------
         */
        function verificarPagamentoDeParcela(sqParcela) {
            PagamentosResources.verificarPagamentoDeParcela(sqParcela)
                .then(function(response) {
                    console.log(response.data);
                })
                .catch(function(err) {
                    console.log(err);
                })
        }

        /**
         * ---------------
         * downloadArquivo
         * ---------------
         */
        function downloadArquivo(guidPedido, codigoArquivo) {

            PedidosResource.obterArquivo(guidPedido, codigoArquivo).get()
                .then(function (response) {
                    Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
                })
                .catch(function (erro) {
                    growl.error(erro.data.message);
                });
        }

        function downloadComprovante(pagamento) {

            var codigoComprovante = pagamento[8];

            PedidosResource.obterComprovante(codigoComprovante).get()
                .then(function(response) {
                    Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * --------------------------------------------------------
         * Redireciona browser para link de download do comprovante
         * --------------------------------------------------------
         */
        function getComprovanteUrl(codigoArquivo) {
            window.open(window.config.paths.server + "/arquivos/arquivo/" + codigoArquivo);
        }

    }
}
},{}],25:[function(require,module,exports){
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
},{"./acordo.resource.js":16,"./aprovar-pedidos":20,"./aprovar-pedidos-com-ressalva":18,"./consultar-pedidos":23,"./controller/pedido.controller":24,"./negar-pedido":26,"./obter-pedidos":28,"./pedidos.resource.js":30,"./resource/analise-pedido.resource":31,"./resource/pedido.resource":32,"./service/analise-pedido.service":33,"./service/pedido.service":34}],26:[function(require,module,exports){
module.exports = function(module) {

    require('./negar-pedido.ctrl.js')(module);
    
}
},{"./negar-pedido.ctrl.js":27}],27:[function(require,module,exports){
/**
 * =====================
 * NegarPedidoController
 * =====================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';

    module.controller('NegarPedidoController', NegarPedidoController);
    
    NegarPedidoController.$inject = [
        '$scope',
        '$state',
        'msg',
        'growl'
    ];

    function NegarPedidoController($scope, $state, msg, growl) {

        var vm = this;
        
        // funções
        vm.setModalidade = setModalidade;
        vm.confirmarPagamento = confirmarPagamento;
        vm.cancelarConfirmarPagamento = cancelarConfirmarPagamento;

        // variáveis globais
        vm.modalidade = undefined;
        vm.isPagamentoConfirmado = undefined
        
        function init() {
            
        }
        init();

        /**
         * Define qual a modalidade será empregada para o pedido
         * - Aprovar
         * - Aprovar com ressalvas
         * - Negar
         */
        function setModalidade(valor) {

            if (valor === 'aprovar') {
                vm.modalidade = 'aprovar';
            }

            if (valor === 'aprovar-ressalvas') {
                vm.modalidade = 'aprovar-ressalva';
            }

            if (valor === 'negar') {
                vm.modalidade = 'negar';
            }
        }

        /**
         * Realiza a confirmação do pagamento.
         * Mantém os dados informados no formulário e o desabilita
         */
        function confirmarPagamento() {

            // Aplicando classe 'text-muted' nas labels do formulário de acordo
            document.getElementById('label-identificador-proposta').classList.add('text-muted');
            document.getElementById('label-valor-total-acordo').classList.add('text-muted');
            document.getElementById('label-valor-destinado-portador').classList.add('text-muted');
            document.getElementById('label-valor-honorario-patrono').classList.add('text-muted');
            document.getElementById('label-valor-reembolso-custas').classList.add('text-muted');
            document.getElementById('label-quantidade-parcelas').classList.add('text-muted');
            document.getElementById('label-valor-parcela').classList.add('text-muted');
            document.getElementById('label-data-primeira-parcela').classList.add('text-muted');
            document.getElementById('label-acordo-observacoes').classList.add('text-muted');

            // Desabilitando edição do formulário de acordo
            document.getElementById('input-identificador-proposta').disabled = true;
            document.getElementById('input-valor-total-acordo').disabled = true;
            document.getElementById('input-valor-destinado-portador').disabled = true;
            document.getElementById('input-valor-honorario-patrono').disabled = true;
            document.getElementById('input-valor-reembolso-custas').disabled = true;
            document.getElementById('input-quantidade-parcelas').disabled = true;
            document.getElementById('input-valor-parcela').disabled = true;
            document.getElementById('input-data-primeira-parcela').disabled = true;
            document.getElementById('textarea-acordo-observacoes').disabled = true;

            // Aplicando classe 'text-muted' nas labels do formulário de pagamento
            document.getElementById('label-pagamento-guid-pedido').classList.add('text-muted');
            document.getElementById('label-pagamento-identificador-proposta').classList.add('text-muted');
            document.getElementById('label-numero-parcela').classList.add('text-muted');
            document.getElementById('label-pagamento-valor').classList.add('text-muted');
            document.getElementById('label-pagamento-status').classList.add('text-muted');
            document.getElementById('label-pagamento-data-pagamento').classList.add('text-muted');
            document.getElementById('label-pagamento-observacoes').classList.add('text-muted');

            // Desabilitando edição do formulário de pagamento            
            document.getElementById('input-pagamento-guid-pedido').disabled = true;
            document.getElementById('input-pagamento-identificador-proposta').disabled = true;
            document.getElementById('input-numero-parcela').disabled = true;
            document.getElementById('input-pagamento-valor').disabled = true;
            document.getElementById('select-pagamento-status').disabled = true;
            document.getElementById('input-pagamento-data-pagamento').disabled = true;
            document.getElementById('input-pagamento-observacoes').disabled = true;

            // Seta status da variável de confirmação de pagamento
            vm.isPagamentoConfirmado = true;

        }

        function cancelarConfirmarPagamento() {

            // Removendo classe 'text-muted' nas labels do formulário de pagamento
            document.getElementById('label-identificador-proposta').classList.remove('text-muted');
            document.getElementById('label-valor-total-acordo').classList.remove('text-muted');
            document.getElementById('label-valor-destinado-portador').classList.remove('text-muted');
            document.getElementById('label-valor-honorario-patrono').classList.remove('text-muted');
            document.getElementById('label-valor-reembolso-custas').classList.remove('text-muted');
            document.getElementById('label-quantidade-parcelas').classList.remove('text-muted');
            document.getElementById('label-valor-parcela').classList.remove('text-muted');
            document.getElementById('label-data-primeira-parcela').classList.remove('text-muted');
            document.getElementById('label-acordo-observacoes').classList.remove('text-muted');

            // Habilitando edição do formulário de acordo
            document.getElementById('input-identificador-proposta').disabled = false;
            document.getElementById('input-valor-total-acordo').disabled = false;
            document.getElementById('input-valor-destinado-portador').disabled = false;
            document.getElementById('input-valor-honorario-patrono').disabled = false;
            document.getElementById('input-valor-reembolso-custas').disabled = false;
            document.getElementById('input-quantidade-parcelas').disabled = false;
            document.getElementById('input-valor-parcela').disabled = false;
            document.getElementById('input-data-primeira-parcela').disabled = false;
            document.getElementById('textarea-acordo-observacoes').disabled = false;

            // Removendo classe 'text-muted' nas labels do formulário de pagamento
            document.getElementById('label-pagamento-guid-pedido').classList.remove('text-muted');
            document.getElementById('label-pagamento-identificador-proposta').classList.remove('text-muted');
            document.getElementById('label-numero-parcela').classList.remove('text-muted');
            document.getElementById('label-pagamento-valor').classList.remove('text-muted');
            document.getElementById('label-pagamento-status').classList.remove('text-muted');
            document.getElementById('label-pagamento-data-pagamento').classList.remove('text-muted');
            document.getElementById('label-pagamento-observacoes').classList.remove('text-muted');

            // Habilita edição do formulário de pagamento
            document.getElementById('input-pagamento-guid-pedido').disabled = false;
            document.getElementById('input-pagamento-identificador-proposta').disabled = false;
            document.getElementById('input-numero-parcela').disabled = false;
            document.getElementById('input-pagamento-valor').disabled = false;
            document.getElementById('select-pagamento-status').disabled = false;
            document.getElementById('input-pagamento-data-pagamento').disabled = false;
            document.getElementById('input-pagamento-observacoes').disabled = false;

            // Seta status da variável de confirmação de pagamento
            vm.isPagamentoConfirmado = undefined;
        }
    }
}
},{}],28:[function(require,module,exports){
module.exports = function(module) {

    require('./obter-pedidos.ctrl')(module);

}
},{"./obter-pedidos.ctrl":29}],29:[function(require,module,exports){
/**
 * =======================
 * ObterPedidosControllers
 * =======================
 * @author COINT
 */
module.exports = function(module) {

    'use strict';

    module.controller('ObterPedidosController', ObterPedidosController);

    function ObterPedidosController(PedidosResource, growl, mask) {
        
        var vm = this;

        // Funções
        vm.obterPedidos            = obterPedidos;
        vm.reset                   = reset;
        vm.exibirCriterioPesquisa  = exibirCriterioPesquisa;
        vm.ocultarCriterioPesquisa = ocultarCriterioPesquisa;
        
        // Variáveis / Objetos
        vm.isCriterioPesquisa  = undefined;        
        vm.obterPedidosRequest = {};
        vm.listaStatusPedido   = [];

        function init() {
            PedidosResource.consultarStatusPedido().getList().then(function (response) {
                vm.listaStatusPedido = response.data;
            });
            mask.add('guid', '********-****-****-****-************');
            mask.add("inteiro5", "99999");
        }
        init();

        function obterPedidos() {

            if (!Util.isUndefinedOuNull(vm.obterPedidosRequest.dateInicio) || !Util.isUndefinedOuNull(vm.obterPedidosRequest.dateFim)) {
                //Valida de acordo com as regras de filtro de data do sistema
                var isDatasValidas = Util.validaDatas(vm.obterPedidosRequest.dateInicio, vm.obterPedidosRequest.dateFim, growl);
                if (!isDatasValidas) {
                    //sobe a mensagem de erro
                    return;
                }
            }

            vm.obterPedidosRequest.dataInicio = Util.dateToString(vm.obterPedidosRequest.dateInicio, 'dd/mm/yy');
            vm.obterPedidosRequest.dataFim    = Util.dateToString(vm.obterPedidosRequest.dateFim,    'dd/mm/yy');

            PedidosResource.obterPedidos().get(vm.obterPedidosRequest)
                .then(function(response) {
                    if(response.status != 200) {
                        growl.error(response.data.message.message);
                    } else {
                        growl.success("Pedidos importados com sucesso.");
                    }
                }).catch(function(error) {
                    growl.error(error.data.message.message)
                });
        }

        function exibirCriterioPesquisa() {
            vm.isCriterioPesquisa = true;
        }

        function ocultarCriterioPesquisa() {
            vm.isCriterioPesquisa = false;
        }

        function reset() {
            vm.obterPedidosRequest = {};
        }
    }
}
},{}],30:[function(require,module,exports){
/**
 * ========================
 * ConsultarPedidosResource
 * ========================
 * 
 * @author COINT
 * @since 05/2018
 * @param {*} module 
 */
module.exports = function(module) {

    'use strict';
    
    module.factory('PedidosResource', PedidosResource);
    
    PedidosResource.$inject = ['Restangular'];

    /*@ngInject*/
    function PedidosResource(Restangular){

        function init() {
            
        }
        init();

        var resource = '/pedido';
        
        return {
            one:                      one,
            all:                      all,
            consultar:                consultar,
            getResource:              getResource,
            consultarStatusPedido:    consultarStatusPedido,
            obterArquivo:             obterArquivo,
            obterComprovante:         obterComprovante,
            obterPedidos:             obterPedidos,
            consultarMotivoRecusa:    consultarMotivoRecusa,
            consultarSubmotivoRecusa: consultarSubmotivoRecusa,
            consultarSituacaoPedido:  consultarSituacaoPedido
        }
        
        function getResource() {
            return resource;
        }
        
        function all() {
            return Restangular.all(resource);
        }
        
        function one(pedido) {
            return Restangular.one(resource, pedido);
        }

        function consultar() {
            return Restangular.all(resource);
        }

        function consultarStatusPedido() {
            return Restangular.all('tabeladominio/statuspedido');
        }

        function obterArquivo(guidPedido, codigoArquivo) {
            return Restangular.one('documento/obterarquivo/'+ guidPedido +"/"+ codigoArquivo);
        }

        function obterPedidos() {
            return Restangular.one('pedido/obterpedido');
        }

        function consultarMotivoRecusa() {
            return Restangular.all('tabeladominio/motivorecusa');
        }

        function consultarSubmotivoRecusa() {
            return Restangular.all('tabeladominio/submotivorecusa');
        }

        function consultarSituacaoPedido() {
            return Restangular.all('tabeladominio/situacaopedido');
        }

        function obterComprovante(codigoComprovante) {
            return Restangular.one('arquivos/arquivo/' + codigoComprovante);
        }
    }
}

},{}],31:[function(require,module,exports){
/**
 * --------------------------------
 * AnalisePedidoHabilitacaoResource
 * --------------------------------
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.factory(AnalisePedidoHabilitacaoResouce, 'AnalisePedidoHabilitacaoResouce');

    function AnalisePedidoHabilitacaoResouce(Restangular) {

        return {
            listar:              listar,
            buscar:              buscar,
            buscarPorGuidPedido: buscarPorGuidPedido
        }

        var resource = '/analise-pedido-habilitacao';

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return Restangular.all(resource).getList();
        }

        /**
         * ------
         * buscar
         * ------
         * @param sqPedidoHabilitacao
         * @returns {*}
         */
        function buscar(sqPedidoHabilitacao) {
            return Restangular.one(resource, sqPedidoHabilitacao).get();
        }

        /**
         * -------------------
         * buscarPorGuidPedido
         * -------------------
         * @param guidPedido
         * @returns {*}
         */
        function buscarPorGuidPedido(guidPedido) {
            return Restangular.one(resource, guidPedido).get();
        }
    }
}
},{}],32:[function(require,module,exports){
module.exports = function(module) {
    'use strict';

    module.factory("PedidoResource", PedidoResource);

    function PedidoResource(Restangular) {

        var resource = "/pedido";

        return {
            consultarPedidos:           consultarPedidos,
            consultarPedido:            consultarPedido,
            buscarAnalisePedidoPorGuid: buscarAnalisePedidoPorGuid,
            buscarProposta:             buscarProposta
        }

        /**
         * ----------------
         * consultarPedidos
         * ----------------
         */
        function consultarPedidos(limit, params) {

            // Se não for informado o limite, seta igual a 10000
            limit = limit || 10000;

            // Se não houver parametros, seta com ""
            params = params || "";

            return Restangular.all(resource).customGET("", {
                limit:          limit,
                guidPedido:     params.guidPedido,
                protocolo:      params.protocolo,
                processo:       params.processo,
                cpfPoupador:    params.cpfPoupador,
                status:         params.status,
                anoOficio:      params.anoOficio,
                origemProcesso: params.origemProcesso,
                dataCadastro:   params.dataCadastro,
                situacaoInternaPedido: params.situacaoInternaPedido
            });

        }

        /**
         * ---------------
         * consultarPedido
         * ---------------
         */
        function consultarPedido(guidPedido) {
            return Restangular.one(resource, guidPedido).get();
        }

        /**
         * -------------------
         * buscarAnalisePedido
         * -------------------
         */
        function buscarAnalisePedidoPorGuid(guidPedido) {
            return Restangular.one('/analise-pedido-habilitacao/guid', guidPedido).get();
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {
            return Restangular.one('/proposta-acordo', sqProposta).get();
        }
    }
}
},{}],33:[function(require,module,exports){
/**
 * -------------------------------
 * AnalisePedidoHabilitacaoService
 * -------------------------------
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.service(AnalisePedidoHabilitacaoService, 'AnalisePedidoHabilitacaoService');

    function AnalisePedidoHabilitacaoService(AnalisePedidoHabilitacaoResource) {

        return {
            buscar:              buscar,
            listar:              listar,
            buscarPorGuidPedido: buscarPorGuidPedido
        }

        /**
         * ------
         * buscar
         * ------
         */
        function buscar(sqPedidoHabilitacao) {
            return AnalisePedidoHabilitacaoResource.buscar(sqPedidoHabilitacao);
        }

        /**
         * ------
         * listar
         * ------
         */
        function listar() {
            return AnalisePedidoHabilitacaoResource.listar();
        }

        /**
         * -------------------
         * buscarPorGuidPedido
         * -------------------
         */
        function buscarPorGuidPedido(guidPedido) {
            return AnalisePedidoHabilitacaoResource.buscarPorGuidPedido(guidPedido);
        }
    }
}
},{}],34:[function(require,module,exports){
/**
 * Serviço de pedidos
 * @author COINT
 * @since 02/2019
 */
module.exports = function(module) {

    'use strict';

    module.service("PedidoService", PedidoService);

    function PedidoService(PedidoResource) {

        return {
            consultarPedidos:           consultarPedidos,
            consultarPedido:            consultarPedido,
            buscarAnalisePedidoPorGuid: buscarAnalisePedidoPorGuid,
            buscarProposta:             buscarProposta
        }

        /**
         * -----------------------------------------------------
         * Chama resource que lista todos os pedidos cadastrados
         * -----------------------------------------------------
         */
        function consultarPedidos(limit, params) {
            return PedidoResource.consultarPedidos(limit, params);
        }

        /**
         * --------------------------------------------
         * Chama resource que lista um pedido pelo guid
         * --------------------------------------------
         */
        function consultarPedido(guidPedido) {
            return PedidoResource.consultarPedido(guidPedido);
        }

        /**
         * --------------------------
         * buscarAnalisePedidoPorGuid
         * --------------------------
         */
        function buscarAnalisePedidoPorGuid(guidPedido) {
            return PedidoResource.buscarAnalisePedidoPorGuid(guidPedido);
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {
            return PedidoResource.buscarProposta(sqProposta);
        }
    }
}
},{}],35:[function(require,module,exports){
/**
 * =======
 * PPEMenu
 * =======
 * @author COINT
 * @since 05/2018
 * @param {*} module    
 */
module.exports = function (module) {

    'use strict';

    module.run(PPEMenu);

    PPEMenu.$inject = ['Menu'];

    function PPEMenu(Menu) {

        // Menu de Pedidos
        Menu.add('Pedidos', null, 'fa-file-text')
            .subitem('Consultar Pedido', 'home.consultarpedidos', 'fa-search')
            .subitem('Consultar Refactor', 'home.consultarpedidosref', 'fa-search')
            .subitem('Obter Pedidos', 'home.obterpedidos', 'fa-cloud-download');
            //.subitem('Aprovar', 'home.aprovarpedidos', 'fa-check')
            //.subitem('Aprovar com ressalva', 'home.aprovarcomressalva', 'fa-exclamation-triangle')
            //.subitem('Negar pedido', 'home.negarpedido', 'fa-times');
    }

};
},{}],36:[function(require,module,exports){
/**
 * ======================
 * ConsultarPedidosRoutes
 * ======================
 * 
 * @author COINT
 * @since '05/2018'
 */
module.exports = function(module){

	module.config(ConsultarPedidosRoutes);
	
	ConsultarPedidosRoutes.$inject = ['$stateProvider'];
	
	function ConsultarPedidosRoutes($stateProvider){

        var root = 'ppe/pedidos/';
        var consultarPedidos = root + 'consultar-pedidos/views/';
        var aprovarPedidos = root + 'aprovar-pedidos/views/';
        var aprovarPedidosComRessalva = root + 'aprovar-pedidos-com-ressalva/views/';
        var negarPedido = root + 'negar-pedido/views/';

        var profileAdm = ['ADM'];

        $stateProvider		
            .state('home.consultarpedidos',{
                url: '/consultar-pedidos',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/consultar-pedidos/views/index.html',
                controller: 'ConsultarPedidosController as vm',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Consultar pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.aprovarpedidos', {
                url: '/aprovar-pedidos/:guidPedido',
                templateUrl: 'ppe/pedidos/aprovar-pedidos/views/aprovar-pedidos.html',
                controller: 'AprovarPedidosController as vm',
                parent: 'dashboard',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Aprovar pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.consultarpedidosref', {
                url: '/pedidos',
                templateUrl: 'ppe/pedidos/view/index.html',
                controller: 'PedidoController as vm',
                parent: 'dashboard',
                ncyBreadcrumb:{
                    parent: 'home.consultarpedidos',
                    label: 'Pedidos'
                },
                auth: false,
                profile: profileAdm
            })
            .state('home.obterpedidos',{
                url: '/obter-pedidos',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/obter-pedidos/views/index.html',
                controller: 'ObterPedidosController as vm',
                ncyBreadcrumb:{
                    parent: 'home.aprovarcomressalva',
                    parent: 'home.aprovarcomressalva',
                    label: 'Obter Pedidos'
                },
                auth: false,
                profile: profileAdm
            });
            /*
            .state('home.negarpedido',{
                url: '/negar-pedido',
                parent: 'dashboard',
                templateUrl: 'ppe/pedidos/negar-pedido/views/index.html',
                controller: 'NegarPedidoController as vm',
                ncyBreadcrumb:{
                    parent: 'home.negarpedido',
                    label: 'Negar pedido'
                },
                auth: false
            })*/
    }
}
},{}],37:[function(require,module,exports){
module.exports={
  "private": true,
  "version": "1.0.0",
  "engines": {
    "node": ">=0.10.0"
  },
  "scripts": {
    "test": "gulp test"
  },
  "devDependencies": {
    "amd-optimize": "^0.6.1",
    "apache-server-configs": "^2.11.0",
    "browser-sync": "^2.11.1",
    "browserify": "^13.0.1",
    "browserify-shim": "^3.8.11",
    "chai": "^2.1.0",
    "compression": "^1.6.0",
    "connect": "^3.3.4",
    "connect-gzip": "^0.1.6",
    "connect-livereload": "^0.5.3",
    "del": "^0.1.3",
    "fs": "0.0.2",
    "gulp": "^3.9.1",
    "gulp-amd-optimize": "^0.4.3",
    "gulp-angular-templatecache": "^1.8.0",
    "gulp-autoprefixer": "^2.1.0",
    "gulp-cache": "^0.2.8",
    "gulp-clean-css": "^2.0.4",
    "gulp-concat-css": "^2.2.0",
    "gulp-connect": "^2.2.0",
    "gulp-csso": "^1.0.0",
    "gulp-each": "^0.2.0",
    "gulp-filter": "^2.0.2",
    "gulp-flatten": "^0.0.4",
    "gulp-gzip": "^1.2.0",
    "gulp-if": "^1.2.5",
    "gulp-inject": "^1.2.0",
    "gulp-inject-string": "^1.1.0",
    "gulp-intercept": "^0.1.0",
    "gulp-jscs": "^1.4.0",
    "gulp-jshint": "^1.9.2",
    "gulp-karma": "0.0.5",
    "gulp-less": "^3.0.1",
    "gulp-livereload": "^3.8.0",
    "gulp-load-plugins": "^0.8.0",
    "gulp-minify-html": "^1.0.0",
    "gulp-ng-annotate": "^0.5.2",
    "gulp-ngdocs": "^0.2.10",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.5.3",
    "gulp-replace-task": "^0.11.0",
    "gulp-require": "^0.1.4",
    "gulp-requirejs": "^0.1.3",
    "gulp-size": "^1.2.1",
    "gulp-streamify": "^1.0.2",
    "gulp-sync": "^0.1.4",
    "gulp-uglify": "^1.5.1",
    "gulp-useref": "^1.1.1",
    "gulp-util": "^3.0.7",
    "gulp-watchify": "^0.6.0",
    "http": "0.0.0",
    "jasmine-core": "^2.3.4",
    "jshint-stylish": "^1.0.1",
    "lazypipe": "^0.2.2",
    "load-grunt-tasks": "^3.3.0",
    "lodash.assign": "^3.2.0",
    "main-bower-files": "^2.5.0",
    "marked": "^0.3.5",
    "marked-terminal": "^1.6.1",
    "mocha": "^2.1.0",
    "mock-gulp-dest": "^0.1.1",
    "ng-mask": "^3.1.1",
    "opn": "^1.0.1",
    "q": "^1.4.1",
    "serve-index": "^1.6.2",
    "serve-static": "^1.9.1",
    "time-grunt": "^1.2.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^3.7.0",
    "wiredep": "^2.2.2",
    "yargs": "^3.3.1"
  },
  "dependencies": {
    "angular-aria": "^1.4.8",
    "angular-highlightjs": "^0.5.1",
    "angular-ivh-treeview": "^1.0.4",
    "angular-mocks": "^1.4.8",
    "angular-sanitize": "^1.4.8",
    "angular-ui-calendar": "^1.0.2",
    "bootstrap": "^3.3.6",
    "bootstrap-btn-outline-rounded": "0.0.1",
    "brb-base": "^2.1.1",
    "brb-help": "^1.0.0",
    "brb-template": "^3.5.0",
    "c3": "^0.4.11",
    "es5-shim": "^4.3.1",
    "fullcalendar": "^2.5.0",
    "jquery-maskmoney": "^3.0.2",
    "jquery-ui": "^1.10.5",
    "json3": "^3.3.2",
    "lodash": "^4.13.1",
    "ng-mask": "^3.1.1",
    "ng-table": "^3.0.1",
    "phpjs": "^1.3.2",
    "sha-1": "^0.1.1",
    "streamjs": "^1.6.4",
    "textangular": "^1.4.6",
    "ui-router": "1.0.0-alpha0",
    "ui-select": "^0.19.8",
    "waypoints": "^4.0.0"
  },
  "browser": {
    "http": "http-browserify-2/http",
    "https": "http-browserify-2/https"
  }
}

},{}]},{},[8]);
