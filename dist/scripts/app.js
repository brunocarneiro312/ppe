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
$templateCache.put("ppe/sandbox/views/index.html","<div class=\"container\">\n    <h3>Sandbox</h3>\n    <hr />\n\n    {{ vm.tablePedidos }}\n\n    <table ng-table=\"vm.tablePedidos\" class=\"table table-condensed table-striped table-boredered table-hover\">\n        <tr ng-repeat=\"row in $data\">\n            <td data-title=\"\'Name\'\" sortable=\"\'name\'\" filter=\"{name: \'text\'}\">{{row.name}}</td>\n            <td data-title=\"\'Description\'\" sortable=\"\'description\'\" filter=\"{descricao: \'text\'}\">{{row.description}}</td>\n        </tr>\n    </table>\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/aprovar-pedidos.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Dados do Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n\r\n								<!-- ====== -->\r\n								<!-- Pedido -->\r\n								<!-- ====== -->\r\n								<fieldset style=\"margin: 25px 0\">\r\n									<legend>Pedido</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Guid Pedido:\r\n											<b ng-if=\"vm.pedido.cdPedidoHabilitacao\">{{ vm.pedido.cdPedidoHabilitacao }}</b>\r\n											<b ng-if=\"!vm.pedido.cdPedidoHabilitacao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Protocolo:\r\n											<b ng-if=\"vm.pedido.protocolo\">{{ vm.pedido.protocolo }}</b>\r\n											<b ng-if=\"!vm.pedido.protocolo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Identificador:\r\n											<b ng-if=\"vm.pedido.cdLoteHabilitacao\">{{ vm.pedido.cdLoteHabilitacao }}</b>\r\n											<b ng-if=\"!vm.pedido.cdLoteHabilitacao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Data de Abertura:\r\n											<b ng-if=\"vm.pedido.dataAbertura\">{{ vm.pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</b>\r\n											<b ng-if=\"!vm.pedido.dataAbertura\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Data de Leitura do Banco:\r\n											<b ng-if=\"vm.pedido.dataConfirmacaoLeituraBanco\">{{ vm.pedido.dataConfirmacaoLeituraBanco }}</b>\r\n											<b ng-if=\"!vm.pedido.dataConfirmacaoLeituraBanco\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Status do Pedido:\r\n											<b ng-if=\"vm.pedido.statusPedido\">{{ vm.pedido.statusPedido.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.statusPedido\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Valor Custas Processuais:\r\n											<b ng-if=\"vm.pedido.valorCustasProcessuais\">{{ vm.pedido.valorCustasProcessuais | currency: \"\"}}</b>\r\n											<b ng-if=\"!vm.pedido.valorCustasProcessuais\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Valor Total Simulado:\r\n											<b ng-if=\"vm.pedido.valorTotalSimulado\">{{ vm.pedido.valorTotalSimulado | currency: \"\"}}</b>\r\n											<b ng-if=\"!vm.pedido.valorTotalSimulado\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Destinatário de Pagamento:\r\n											<b ng-if=\"vm.pedido.destinatarioPagamentoAcordo\">{{ vm.pedido.destinatarioPagamentoAcordo }}</b>\r\n											<b ng-if=\"!vm.pedido.destinatarioPagamentoAcordo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Situação do pedido: <b>{{ vm.pedido.situacaoPedidoHabilitacao.descricao }}</b>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /pedido -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Poupador -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Dados do Poupador</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Nome:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.noPessoa\">{{ vm.pedido.poupadorDTO.noPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.noPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											CPF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.nrCpfPessoa\">{{ vm.pedido.poupadorDTO.nrCpfPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.nrCpfPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Data de Nascimento:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.dtNascimento\">{{ vm.pedido.poupadorDTO.envolvido.dtNascimento | date: \'dd/MM/yyyy\' }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.dtNascimento\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Identidade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.nrIdentidade\">{{ vm.pedido.poupadorDTO.identidade.nrIdentidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.nrIdentidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Tipo:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\">{{ vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Órgão:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor\">{{ vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.sgOrgaoEmissor\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											<!-- faltando... -->\r\n											Validade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.validade\">{{ vm.pedido.poupadorDTO.identidade.validade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.validade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Falecido:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.descricaoFalecido\">{{ vm.pedido.poupadorDTO.envolvido.descricaoFalecido}}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.descricaoFalecido\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<!--\r\n										<div style=\"margin: 10px\">\r\n											Data do Cálculo:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.envolvido.dtCalculo\">{{ vm.pedido.poupadorDTO.envolvido.dtCalculo }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.envolvido.dtCalculo\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										-->\r\n										<div style=\"margin: 10px\">\r\n											UF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.sgUfIdentidade\">{{ vm.pedido.poupadorDTO.identidade.sgUfIdentidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.sgUfIdentidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<!-- <div style=\"margin: 10px\">\r\n											Emissão:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidadeDTO.emissao\">{{ vm.pedido.poupadorDTO.identidadeDTO.emissao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidadeDTO.emissao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div> -->\r\n										<div style=\"margin: 10px\">\r\n											Classificação:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\">{{ vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.identidade.tipoDocumento.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<!-- ======== -->\r\n									<!-- Contatos -->\r\n									<!-- ======== -->\r\n									<div class=\"col-md-12\">\r\n										<div style=\"margin: 10px\">\r\n											<b>Contatos</b>\r\n											<div ng-repeat=\"contato in vm.pedido.poupadorDTO.contatos\">\r\n												{{ contato.dsContato }}\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /poupador -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Endereço -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Endereço do Poupador</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											CEP:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.nrCep\">{{ vm.pedido.poupadorDTO.endereco.nrCep }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.nrCep\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											UF:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.sgUf\">{{ vm.pedido.poupadorDTO.endereco.sgUf }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.sgUf\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Cidade:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.noCidade\">{{ vm.pedido.poupadorDTO.endereco.noCidade }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.noCidade\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Bairro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsBairro\">{{ vm.pedido.poupadorDTO.endereco.dsBairro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsBairro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Tipo Logradouro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsTipoLogradouro\">{{ vm.pedido.poupadorDTO.endereco.dsTipoLogradouro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsTipoLogradouro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Logradouro:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.logradouro\">{{ vm.pedido.poupadorDTO.endereco.logradouro }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.logradouro\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Complemento:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsComplemento\">{{ vm.pedido.poupadorDTO.endereco.dsComplemento }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsComplemento\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Número:\r\n											<b ng-if=\"vm.pedido.poupadorDTO.endereco.dsNumeroEndereco\">{{ vm.pedido.poupadorDTO.endereco.dsNumeroEndereco }}</b>\r\n											<b ng-if=\"!vm.pedido.poupadorDTO.endereco.dsNumeroEndereco\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n								</fieldset>\r\n							</div>\r\n						</div>\r\n						<div class=\"row\" ng-if=\"vm.pedido.listaEnvolvidos.length > 0\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ========== -->\r\n								<!-- Envolvidos -->\r\n								<!-- ========== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<!-- Lista -->\r\n									<legend>Dados dos Envolvidos</legend>\r\n									<fieldset style=\"margin:0 25px\">\r\n										<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</fieldset><!-- /envolvido -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======== -->\r\n								<!-- Processo -->\r\n								<!-- ======== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Dados do Processo</legend>\r\n\r\n									<div class=\"row\" ng-repeat=\"processo in vm.pedido.listaProcessos\" ng-if=\"vm.pedido.listaProcessos.length > 0\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Processo n° {{ processo.cdProcesso }}\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número CNJ:\r\n														<b ng-if=\"processo.cdCnjProcesso\">{{ processo.cdCnjProcesso }}</b>\r\n														<b ng-if=\"!processo.cdCnjProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número Antigo:\r\n														<b ng-if=\"processo.cdProcessoAntigo\">{{ processo.cdProcessoAntigo }}</b>\r\n														<b ng-if=\"!processo.cdProcessoAntigo\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador Legado:\r\n														<b ng-if=\"processo.cdProcessoSistemaLegado\">{{ processo.cdProcessoSistemaLegado }}</b>\r\n														<b ng-if=\"!processo.cdProcessoSistemaLegado\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Órgão:\r\n														<b ng-if=\"processo.orgaoLegal.descricao\">{{ processo.orgaoLegal.descricao }}</b>\r\n														<b ng-if=\"!processo.orgaoLegal.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo de Ação:\r\n														<b ng-if=\"processo.tipoAcaoProcesso.descricao\">{{ processo.tipoAcaoProcesso.descricao }}</b>\r\n														<b ng-if=\"!processo.tipoAcaoProcesso.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Vara:\r\n														<b ng-if=\"processo.noVaraOrigemProcesso\">{{ processo.noVaraOrigemProcesso }}</b>\r\n														<b ng-if=\"!processo.noVaraOrigemProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Comarca de Origem:\r\n														<b ng-if=\"processo.noComarcaOrigemProcesso\">{{ processo.noComarcaOrigemProcesso }}</b>\r\n														<b ng-if=\"!processo.noComarcaOrigemProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Ajuizamento:\r\n														<b ng-if=\"processo.dtAjuizamentoProcesso\">{{ processo.dtAjuizamentoProcesso | date: \'dd/MM/yyyy\' }}</b>\r\n														<b ng-if=\"!processo.dtAjuizamentoProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Procuração:\r\n														<b ng-if=\"processo.dtProcuracaoProcesso\">{{ processo.dtProcuracaoProcesso | date: \'dd/MM/yyyy\' }}</b>\r\n														<b ng-if=\"!processo.dtProcuracaoProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														UF de Origem:\r\n														<b ng-if=\"processo.sgUfProcesso\">{{ processo.sgUfProcesso }}</b>\r\n														<b ng-if=\"!processo.sgUfProcesso\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaProcessos || vm.pedido.listaProcessos.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>processos</u> cadastrados para o\r\n											pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /processo -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ======= -->\r\n								<!-- Patrono -->\r\n								<!-- ======= -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Patrono do Processo</legend>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											Nome:\r\n											<b ng-if=\"vm.pedido.patrono.pessoa.noPessoa\">{{ vm.pedido.patrono.pessoa.noPessoa }}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.pessoa.noPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											CPF:\r\n											<b ng-if=\"vm.pedido.patrono.pessoa.nrCpfPessoa\">{{ vm.pedido.patrono.pessoa.nrCpfPessoa}}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n										<div style=\"margin: 10px\">\r\n											Qualificação:\r\n											<b ng-if=\"vm.pedido.patrono.qualificacaoPatrono.descricao\">{{ vm.pedido.patrono.qualificacaoPatrono.descricao}}</b>\r\n											<b ng-if=\"!vm.pedido.patrono.qualificacaoPatrono.descricao\" style=\"color: firebrick\">\r\n												<small>Não informado</small>\r\n											</b>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div style=\"margin: 10px\">\r\n											<div style=\"margin: 10px\">\r\n												<b>Contatos</b>\r\n												<div ng-repeat=\"contato in vm.pedido.patrono.pessoa.contatos\">\r\n													{{contato.tipoContato.descricao}}: {{ contato.dsContato }}\r\n												</div>\r\n											</div>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Advogado\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\" ng-repeat=\"patronoOrgao in vm.pedido.patrono.patronosOrgao\">\r\n													<div ng-if=\"patronoOrgao.tipoOrgaoPatrono.descricao == \'OAB\'\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n															<b ng-if=\"patronoOrgao.nrMatricula\">{{patronoOrgao.nrMatricula}}</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n															<b ng-if=\"patronoOrgao.descricaoTipoEsfera\">{{ patronoOrgao.descricaoTipoEsfera }}</b>\r\n															<b ng-if=\"!patronoOrgao.descricaoTipoEsfera\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n															<b ng-if=\"patronoOrgao.sgUfOrgao\">{{ patronoOrgao.sgUfOrgao }}</b>\r\n															<b ng-if=\"!patronoOrgao.sgUfOrgao\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">\r\n														Defensor\r\n													</small>\r\n												</legend>\r\n												<div class=\"col-md-6\" ng-repeat=\"patronoOrgao in vm.pedido.patrono.patronosOrgao\">\r\n													<div ng-if=\"patronoOrgao.tipoOrgaoPatrono.descricao == \'Defensoria\'\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n															<b ng-if=\"patronoOrgao.nrMatricula\">{{ patronoOrgao.nrMatricula}}</b>\r\n															<b ng-if=\"!patronoOrgao.nrMatricula\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n															<b ng-if=\"patronoOrgao.descricaoTipoEsfera\">{{ patronoOrgao.descricaoTipoEsfera }}</b>\r\n															<b ng-if=\"!patronoOrgao.descricaoTipoEsfera\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n															<b ng-if=\"patronoOrgao.sgUfOrgao\">{{ patronoOrgao.sgUfOrgao }}</b>\r\n															<b ng-if=\"!patronoOrgao.sgUfOrgao\" style=\"color: firebrick\">\r\n																<small>Não informado</small>\r\n															</b>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.patrono\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>patronos</u> cadastrados para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /patrono -->\r\n							</div>\r\n						</div>\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ====== -->\r\n								<!-- Contas -->\r\n								<!-- ====== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Contas</legend>\r\n									<div class=\"row\">\r\n\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\" ng-repeat=\"conta in vm.pedido.listaContas\" ng-if=\"vm.pedido.listaContas.length > 0\">\r\n\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta n° {{ conta.cdConta }} - {{conta.categoriaConta.descricao}}</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n														<b ng-if=\"conta.pessoa.noPessoa\">{{ conta.pessoa.noPessoa }}</b>\r\n														<b ng-if=\"!conta.pessoa.noPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n														<b ng-if=\"conta.pessoa.nrCpfPessoa\">{{ conta.pessoa.nrCpfPessoa }}</b>\r\n														<b ng-if=\"!conta.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n														<b ng-if=\"conta.nrBanco\">{{ conta.nrBanco }}</b>\r\n														<b ng-if=\"!conta.nrBanco\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n														<b ng-if=\"conta.cdAgencia\">{{ conta.cdAgencia }}</b>\r\n														<b ng-if=\"!conta.cdAgencia\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n														<b ng-if=\"conta.cdAgenciaDV\">{{ conta.cdAgenciaDV }}</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n														<b ng-if=\"conta.cdConta\">{{ conta.cdConta }}</b>\r\n														<b ng-if=\"!conta.cdConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n														<b ng-if=\"conta.cdContaDV\">{{ conta.cdContaDV }}</b>\r\n														<b ng-if=\"!conta.cdContaDV\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<!--\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n														<b ng-if=\"conta.dtValidade\">{{ conta.cdAgencia.dtValidade }}</b>\r\n													</div>\r\n													-->\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n														<b ng-if=\"conta.tpConta\">{{ conta.tpConta }}</b>\r\n														<b ng-if=\"!conta.tpConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaContas || vm.pedido.listaContas.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>contas</u> cadastrados para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /contas -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- =================== -->\r\n								<!-- Contas Contempladas -->\r\n								<!-- =================== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Contas Contempladas</legend>\r\n									<div class=\"row\">\r\n\r\n										<!-- Lista de contas -->\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\" ng-repeat=\"contaContemplada in vm.pedido.listaContasContempladas\"\r\n										 ng-if=\"vm.pedido.listaContasContempladas.length > 0\">\r\n\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta n° {{ contaContemplada.conta.cdConta }}</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n														<b ng-if=\"contaContemplada.conta.pessoa.noPessoa\">{{ contaContemplada.conta.pessoa.noPessoa }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.pessoa.noPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n														<b ng-if=\"contaContemplada.conta.pessoa.nrCpfPessoa\">{{ contaContemplada.conta.pessoa.nrCpfPessoa }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.pessoa.nrCpfPessoa\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n														<b ng-if=\"contaContemplada.conta.nrBanco\">{{ contaContemplada.conta.nrBanco }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.nrBanco\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n														<b ng-if=\"contaContemplada.conta.cdAgencia\">{{ contaContemplada.conta.cdAgencia }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdAgencia\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n														<b ng-if=\"contaContemplada.conta.cdAgenciaDV\">{{ contaContemplada.conta.cdAgenciaDV }}</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Plano econômico:\r\n														<b ng-if=\"contaContemplada.planoEconomico.descricao\">{{ contaContemplada.planoEconomico.descricao }}</b>\r\n														<b ng-if=\"!contaContemplada.planoEconomico.descricao\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor simulado:\r\n														<b ng-if=\"contaContemplada.vlSimuladoCalculado\">{{ contaContemplada.vlSimuladoCalculado | currency: \"\"}}</b>\r\n														<b ng-if=\"!contaContemplada.vlSimuladoCalculado\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n														<b ng-if=\"contaContemplada.conta.cdConta\">{{ contaContemplada.conta.cdConta }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n														<b ng-if=\"contaContemplada.conta.cdContaDV\">{{ contaContemplada.conta.cdContaDV }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.cdContaDV\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n\r\n													<!--\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n														<b ng-if=\"contaContemplada.conta.dtValidade\">{{ contaContemplada.conta.dtValidade }}</b>\r\n													</div>\r\n													-->\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n														<b ng-if=\"contaContemplada.conta.tpConta\">{{ contaContemplada.conta.tpConta }}</b>\r\n														<b ng-if=\"!contaContemplada.conta.tpConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo base:\r\n														<b ng-if=\"contaContemplada.vlSaldoBaseConta\">{{ contaContemplada.vlSaldoBaseConta | currency: \"\"}}</b>\r\n														<b ng-if=\"!contaContemplada.vlSaldoBaseConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário conta:\r\n														<b ng-if=\"contaContemplada.diAniversarioConta\">{{ contaContemplada.diAniversarioConta }}</b>\r\n														<b ng-if=\"!contaContemplada.diAniversarioConta\" style=\"color: firebrick\">\r\n															<small>Não informado</small>\r\n														</b>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\" ng-if=\"!vm.pedido.listaContasContempladas || vm.pedido.listaContasContempladas.length == 0\">\r\n										<div class=\"alert alert-warning\">\r\n											<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>contas contempladas</u> cadastrados\r\n											para o pedido\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /contas -->\r\n							</div>\r\n						</div>\r\n\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<!-- ========== -->\r\n								<!-- Documentos -->\r\n								<!-- ========== -->\r\n								<fieldset style=\"margin:25px 0\">\r\n									<legend>Documentos</legend>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-condensed table-striped table-hover\" ng-if=\"vm.pedido.listaDocumentos.length > 0\">\r\n												<thead>\r\n													<tr>\r\n														<th>ID</th>\r\n														<th>Nome</th>\r\n														<th></th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n														<th>ID Chave Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr ng-repeat=\"documento in vm.pedido.listaDocumentos\">\r\n														<td>{{ documento.cdDocumento }}</td>\r\n														<td>\r\n															{{ documento.noDocumento }}\r\n														</td>\r\n														<td>\r\n															<button type=\"button\"\r\n																	class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope\"\r\n																	title=\"Download\"\r\n															 		data-ng-click=\"vm.downloadArquivo(vm.pedido.cdPedidoHabilitacao, documento.cdDocumento)\">\r\n																<span class=\"fa fa-download\" />\r\n															</button>\r\n														</td>\r\n														<td>{{ documento.tipoDocumento.descricao }}</td>\r\n														<td>{{ documento.contextoDocumento.descricao }}</td>\r\n														<td>{{ documento.contextoDocumento.id }}</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n									<div class=\"row\" ng-if=\"!vm.pedido.listaDocumentos\">\r\n										<div class=\"col-md-12\">\r\n											<div class=\"alert alert-warning\">\r\n												<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Não existem <u>documentos</u> cadastrados para o\r\n												pedido\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- /documentos -->\r\n							</div>\r\n							<div class=\"col-md-12 text-center\" style=\"margin-top:25px\" ng-if=\"vm.pedido.statusPedido.descricao == \'ANALISE_DA_INSTITUICAO\' &&  !vm.bloquearCamposAcordo\">\r\n								<button class=\"btn btn-success\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'aprovar\')\">\r\n									Aprovar\r\n								</button>\r\n								<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'aprovar-ressalvas\')\">\r\n									Aprovar Com Ressalvas\r\n								</button>\r\n								<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.setModalidade(\'negar\')\">\r\n									Negar\r\n								</button>\r\n							</div>\r\n						</div>\r\n\r\n						<!-- =================================== -->\r\n						<!--        F O R M U L Á R I O S        -->\r\n						<!-- =================================== -->\r\n						<div class=\"alert alert-success\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-check fa-lg fa-fw\"></i> Pedido Aprovado\r\n						</div>\r\n						<div class=\"alert alert-info\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar-ressalva\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Pedido aprovado com Ressalvas\r\n						</div>\r\n						<div class=\"alert alert-danger\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'negar\' && vm.bloquearCamposAcordo\">\r\n							<i class=\"fa fa-times fa-lg fa-fw\"></i> Pedido Negado\r\n						</div>\r\n\r\n						<!-- =================================== -->\r\n						<!-- Aprovar ou Aprovar com ressalvas    -->\r\n						<!-- =================================== -->\r\n						<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\' || vm.modalidade === \'aprovar-ressalva\'\">\r\n							<div class=\"col-md-12\">\r\n								<form name=\"formAprovarAcordo\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-identificador-proposta\" for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n\r\n												<!-- #input-identificador-proposta -->\r\n												<input type=\"text\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"identificadorProposta\"\r\n													   id=\"input-identificador-proposta\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.identificadorPropostaBanco\"\r\n													   ng-required=\"true\"\r\n													   mask=\"inteiro10\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.identificadorProposta.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.identificadorProposta.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-total-acordo\" for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n\r\n												<!-- #input-valor-total-acordo -->\r\n												<input type=\"text\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorTotalAcordo\"\r\n													   id=\"input-valor-total-acordo\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorTotalAcordoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorTotalAcordo.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorTotalAcordo.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-destinado-portador\" for=\"input-valor-destinado-portador\">Valor Destinado ao\r\n													Portador:</label>\r\n\r\n												<!-- #input-valor-destinado-portador -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorDestinadoPortador\"\r\n													   id=\"input-valor-destinado-portador\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorPoupadorFormatado\"\r\n												 	   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorDestinadoPortador.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorDestinadoPortador.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-patrono\" for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono\r\n													do Processo:</label>\r\n\r\n												<!-- #input-valor-honorario-partono -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n												 	   name=\"valorHonorarioPatrono\"\r\n													   id=\"input-valor-honorario-patrono\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorHonorariosAdvogadoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorHonorarioPatrono.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorHonorarioPatrono.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-instituicao_aprovado\" for=\"input-valor-honorario-instituicao_aprovado\">Valor\r\n													honorário da instituição:</label>\r\n\r\n												<!-- #input-valor-honorario-instituicao_aprovado -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorHonorarioInstituicao\"\r\n													   id=\"input-valor-honorario-instituicao_aprovado\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorHonorariosFebrapoFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorHonorarioInstituicao.$valid\" style=\"color: firebrick\">* O campo\r\n														deve ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorHonorarioInstituicao.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-reembolso-custas\" for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n\r\n												<!-- #input-valor-reembolso-custas -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"valorReembolsoCustas\"\r\n													   id=\"input-valor-reembolso-custas\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorReembolsoCustasFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorReembolsoCustas.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorReembolsoCustas.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-quantidade-parcelas\" for=\"input-quantidade-parcelas\">Quantidade de Parcelas:</label>\r\n\r\n												<!-- #input-quantidade-parcelas -->\r\n												<input type=\"text\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   mask=\"inteiro4\"\r\n													   name=\"quantidadeParcelas\"\r\n													   id=\"input-quantidade-parcelas\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.quantidadeParcelas\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.quantidadeParcelas.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.quantidadeParcelas.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-parcela\" for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n\r\n												<!-- #input-valor-parcela -->\r\n												<input type=\"text\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   ng-disabled=\"true\"\r\n													   maxlength=\"14\"\r\n													   name=\"valorParcela\"\r\n													   id=\"input-valor-parcela\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.valorParcelaFormatado\"\r\n													   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.valorParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.valorParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-data-primeira-parcela\" for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n\r\n												<!-- #input-data-primeira-parcela -->\r\n												<input type=\"date\"\r\n													   mask=\"data\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposAcordo\"\r\n													   name=\"datePrimeiraParcela\"\r\n													   id=\"input-data-primeira-parcela\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.proposta.datePrimeiraParcela\"\r\n												 	   ng-required=\"true\"\r\n													   autocomplete=\"off\" />\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.datePrimeiraParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.datePrimeiraParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label id=\"label-acordo-observacoes\" for=\"textarea-acordo-observacoes\">Observações:</label>\r\n\r\n											<!-- #textarea-acordo-observacoes-->\r\n											<textarea id=\"textarea-acordo-observacoes\"\r\n													  class=\"form-control\"\r\n													  name=\"acordoObservacoes\"\r\n													  ng-readonly=\"vm.bloquearCamposAcordo\"\r\n											 		  cols=\"20\"\r\n													  rows=\"10\"\r\n													  style=\"resize: none\"\r\n													  ng-model=\"vm.resultadoAnalisePedido.observacoes\"\r\n													  ng-required=\"true\"\r\n													  autocomplete=\"off\"\r\n													  maxlength=\"500\">\r\n											</textarea>\r\n\r\n											<div class=\"row\">\r\n												<div class=\"col-md-6\">\r\n													<small>{{ 500 - vm.resultadoAnalisePedido.observacoes.length }} restantes</small>\r\n												</div>\r\n												<div class=\"col-md-6 text-right\">\r\n													<small ng-show=\"!formAprovarAcordo.acordoObservacoes.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarAcordo.acordoObservacoes.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" ng-if=\"!vm.isAcordoConfirmado\">\r\n											<br />\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.aprovar()\" ng-disabled=\"formAprovarAcordo.$invalid\">\r\n												Confirmar Acordo\r\n												<i class=\"fa fa-ban fa-fw\" ng-if=\"formAprovarAcordo.$invalid\"></i>\r\n												<i class=\"fa fa-check fa-fw\" ng-if=\"formAprovarAcordo.$valid\"></i>\r\n											</button>\r\n											<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.cancelar()\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n									</fieldset>\r\n								</form>\r\n							</div>\r\n\r\n                            <!-- ================= -->\r\n                            <!-- aprovar pagamento -->\r\n                            <!-- ================= -->\r\n							<div class=\"col-md-12\" ng-if=\"vm.isAcordoConfirmado\">\r\n								<form name=\"formAprovarPagamento\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Pagamento</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-guid-pedido\" for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n\r\n												<!-- #input-pagamento-guid-pedido -->\r\n												<input type=\"text\"\r\n													   id=\"input-pagamento-guid-pedido\"\r\n													   name=\"pagamentoGuidPedido\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"true\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.guidPedido\"\r\n													   ng-required=\"true\">\r\n\r\n												<small ng-show=\"formAprovarPagamento.pagamentoGuidPedido.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-identificador-proposta\" for=\"input-pagamento-identificador-proposta\">Identificador\r\n													da Proposta:</label>\r\n\r\n												<!-- # input-pagamento-identificador-proposta -->\r\n												<input type=\"text\"\r\n													   mask=\"inteiro10\"\r\n													   id=\"input-pagamento-identificador-proposta\"\r\n													   name=\"pagamentoIdentificadorProposta\"\r\n												 	   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.identificadorPropostaBanco\"\r\n													   mask=\"inteiro10\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoIdentificadorProposta.$valid\" style=\"color: firebrick\">* O\r\n														campo deve ser informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoIdentificadorProposta.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-numero-parcela\" for=\"input-numero-parcela\">Parcela Número:</label>\r\n\r\n												<!-- #input-numero-parcela -->\r\n												<input type=\"text\"\r\n													   mask=\"inteiro4\"\r\n													   id=\"input-numero-parcela\"\r\n													   name=\"numeroParcela\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.numeroParcela\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.numeroParcela.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.numeroParcela.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-valor\" for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n\r\n												<!-- #input-pagamento-valor -->\r\n												<input type=\"text\"\r\n													   id=\"input-pagamento-valor\"\r\n													   name=\"pagamentoValor\"\r\n													   class=\"moeda aceitaZero form-control\"\r\n													   maxlength=\"14\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.valorPagamentoFormatado\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoValor.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoValor.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											<!--\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-status\" for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n												<select id=\"select-pagamento-status\"\r\n														name=\"pagamentoStatus\"\r\n														class=\"form-control\"\r\n														ng-readonly=\"vm.bloquearCamposPagamento\"\r\n														ng-model=\"vm.resultadoAnalisePedido.statusPagamento\">\r\n														<option value=\"NAO_REALIZADO\">Não Realizado...</option>\r\n														<option value=\"REALIZADO\">Realizado</option>\r\n												</select>\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoStatus.$valid\" style=\"color: firebrick\">* O campo deve ser informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoStatus.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n											-->\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-data-pagamento\" for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n\r\n												<!-- #input-pagamento-data-pagamento -->\r\n												<input type=\"date\"\r\n													   mask=\"data\"\r\n													   id=\"input-pagamento-data-pagamento\"\r\n													   name=\"dataPagamento\"\r\n													   class=\"form-control\"\r\n													   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n													   ng-model=\"vm.resultadoAnalisePedido.dataPagamento\"\r\n													   ng-required=\"true\">\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.dataPagamento.$valid\" style=\"color: firebrick\">* O campo deve ser\r\n														informado</small>\r\n													<small ng-show=\"formAprovarPagamento.dataPagamento.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-observacoes\" for=\"input-pagamento-observacoes\">Observações:</label>\r\n\r\n												<!-- #input-pagamento-observacoes -->\r\n												<textarea id=\"input-pagamento-observacoes\"\r\n														  name=\"pagamentoObservacoes\"\r\n														  class=\"form-control\"\r\n														  ng-readonly=\"vm.bloquearCamposPagamento\"\r\n														  cols=\"20\"\r\n														  rows=\"10\"\r\n														  style=\"resize: none\"\r\n														  ng-model=\"vm.resultadoAnalisePedido.observacoesPagamento\"\r\n												 		  ng-required=\"true\"><!-- campo duplicado -->\r\n												</textarea>\r\n\r\n												<div class=\"text-right\">\r\n													<small ng-show=\"!formAprovarPagamento.pagamentoObservacoes.$valid\" style=\"color: firebrick\">* O campo deve\r\n														ser informado</small>\r\n													<small ng-show=\"formAprovarPagamento.pagamentoObservacoes.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n												</div>\r\n											</div>\r\n										</div>\r\n										<!--\r\n										<div class=\"row col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Comprovante</small>\r\n												</legend>\r\n												<div ng-if=\"!vm.exibirComprovantePagamento\">\r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															<label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">Identificador do Comprovante:</label>\r\n															<input type=\"text\"\r\n																	class=\"form-control\"\r\n																	ng-readonly=\"vm.bloquearCamposPagamento\"\r\n																	id=\"input-pagamento-comprovante-identificador\"\r\n																	name=\"comprovanteIdentificador\"\r\n																	mask=\"inteiro10\"\r\n																	ng-model=\"vm.resultadoAnalisePedido.comprovante.identificadorDocumento\"\r\n																    ng-required=\"true\">\r\n														</div>\r\n													</div>\r\n                                                    <div class=\"col-md-6\" ng-if=\"!formAprovarPagamento.comprovanteIdentificador.$valid\">\r\n                                                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\r\n                                                                style=\"margin-top: 35px;\"\r\n                                                                ng-click=\"vm.verificaIdentificador()\">\r\n                                                            Selecionar Arquivo\r\n                                                        </button>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6\" ng-if=\"formAprovarPagamento.comprovanteIdentificador.$valid\">\r\n                                                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\r\n                                                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\r\n                                                        </label>\r\n                                                        <input accept=\".pdf\" type=\"file\" id=\"arquivoSelecionado\" style=\"display: none\"\r\n                                                               onchange=\'var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply()\'/>\r\n                                                    </div>\r\n												</div>\r\n												<div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\r\n													<div class=\"col-md-12 form-group\">\r\n														<div>\r\n															<table class=\"table table-bordered table-striped\">\r\n																<thead>\r\n																<tr>\r\n																	<th style=\"text-align: center;\">Identificador do Comprovante</th>\r\n																	<th style=\"text-align: center;\">Nome do arquivo</th>\r\n																	<th style=\"text-align: center;\">Remover</th>\r\n																</tr>\r\n																</thead>\r\n																<tbody>\r\n																<tr>\r\n																	<td style=\"text-align: center;\">{{vm.resultadoAnalisePedido.comprovante.identificadorDocumento}}</td>\r\n																	<td style=\"text-align: center;\"> {{vm.resultadoAnalisePedido.comprovante.nomeArquivo}}</td>\r\n																	<td style=\"text-align: center;\">\r\n																		<button type=\"button\" class=\"btn btn-danger btn-sm\" title=\"Excluir\"\r\n																				data-ng-click=\"vm.removerComprovante()\"> <span class=\"fa fa-remove\"/>\r\n																		</button>\r\n																	</td>\r\n																</tr>\r\n																</tbody>\r\n															</table>\r\n														</div>\r\n													</div>\r\n												</div>\r\n\r\n											</fieldset>\r\n										</div>	\r\n										-->\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-click=\"vm.adicionarPagamento()\" ng-disabled=\"formAprovarPagamento.$invalid\">\r\n												Adicionar Pagamento\r\n												<i class=\"fa fa-ban fa-fw\" ng-if=\"formAprovarPagamento.$invalid\"></i>\r\n												<i class=\"fa fa-check fa-fw\" ng-if=\"formAprovarPagamento.$valid\"></i>\r\n											</button>\r\n											<!-- <button class=\"btn btn-danger\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.cancelarConfirmarPagamento()\">\r\n												Cancelar\r\n											</button> -->\r\n										</div>\r\n\r\n										<!-- <div class=\"col-md-12\" ng-if=\"vm.isPagamentoConfirmado\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div> -->\r\n\r\n										<!-- <div class=\"col-md-12\" ng-if=\"vm.isPagamentoConfirmado\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Depósito:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Validade:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div> -->\r\n									</fieldset>\r\n								</form>\r\n\r\n								<fieldset style=\"margin:25px 0\" ng-if=\"vm.pagamentos.length > 0\">\r\n									<legend>Pagamentos cadastrados</legend>\r\n									<div class=\"row\">\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-condensed table-striped table-hover text-center\">\r\n												<thead>\r\n													<tr>\r\n														<th class=\"text-center\">Valor do pagamento</th>\r\n														<th class=\"text-center\">Status</th>\r\n														<th class=\"text-center\">Observações</th>\r\n														<th class=\"text-center\">Data</th>\r\n														<th class=\"text-center\">Ações</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr ng-repeat=\"pagamento in vm.pagamentos\">\r\n														<td>{{pagamento.vlPagamento | currency : \"\"}}</td>\r\n														<td>{{pagamento.stPagamento}}</td>\r\n														<td>{{pagamento.dsObservacaoPagamento}}</td>\r\n														<td>{{pagamento.dtPagamento | date: \'dd/MM/yyyy\' }}</td>\r\n														<td>\r\n\r\n															<button type=\"button\"\r\n																	class=\"btn btn-primary btn-sm\"\r\n																	title=\"Informar comprovante\"\r\n																	ng-click=\"vm.abrirModalPagamento(pagamento)\"\r\n															 		ng-if=\"pagamento.stPagamento == 2\">\r\n\r\n																<i class=\"fa fa-usd\"></i>\r\n															</button>\r\n\r\n															<button type=\"button\"\r\n																	class=\"btn btn-danger btn-sm\"\r\n																	title=\"Excluir pagamento\"\r\n																	ng-if=\"pagamento.stPagamento == 2\"\r\n															 		data-ng-click=\"vm.removerPagamento(pagamento.sqPagamento)\">\r\n\r\n																<span class=\"fa fa-remove\" />\r\n															</button>\r\n\r\n														</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</fieldset><!-- pag já cadastrados -->\r\n								<div ng-if=\"vm.pagamentos.length == 0\">\r\n									<div class=\"alert alert-warning\">\r\n										<b>Não existem pagamentos cadastrados para o pedido ({{vm.pedido.cdPedidoHabilitacao}})</b>\r\n									</div>\r\n								</div>\r\n\r\n							</div>\r\n						</div>\r\n\r\n						<!-- ============ -->\r\n						<!-- Negar Pedido -->\r\n						<!-- ============ -->\r\n						<div class=\"row\" ng-if=\"vm.modalidade === \'negar\'\">\r\n							<form name=\"formRecusaDaProposta\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Recusa da Proposta</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"select-motivo-recusa\">Motivo da Recusa:</label>\r\n\r\n												<!-- #select-motivo-recusa -->\r\n												<select class=\"form-control\"\r\n														id=\"select-motivo-recusa\"\r\n														ng-model=\"vm.resultadoAnalisePedido.motivoRecusaPedido\"\r\n												 		ng-disabled=\"vm.bloquearCamposAcordo\"\r\n														ng-options=\"t.id as t.descricao for t in vm.listaMotivoRecusa\">\r\n\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"select-submotivo-recusa\">Submotivo da Recusa:</label>\r\n\r\n												<!-- #select-submotivo-recusa -->\r\n												<select class=\"form-control\"\r\n														id=\"select-submotivo-recusa\"\r\n														ng-model=\"vm.resultadoAnalisePedido.subMotivoRecusaPedido\"\r\n												 		ng-disabled=\"vm.bloquearCamposAcordo\"\r\n														ng-options=\"t.descricao as t.descricao for t in vm.listaSubmotivoRecusa\">\r\n\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"textarea-obervacoes-motivo-recusa\">Observações:</label>\r\n\r\n												<!-- #textarea-observacoes-motivo-recusa-->\r\n												<textarea name=\"observacoesMotivoRecusa\"\r\n														  id=\"textarea-obervacoes-motivo-recusa\"\r\n														  class=\"form-control\"\r\n												 		  ng-readonly=\"vm.bloquearCamposAcordo\"\r\n														  cols=\"20\"\r\n														  rows=\"10\"\r\n														  style=\"resize: none\"\r\n														  maxlength=\"500\"\r\n														  ng-model=\"vm.resultadoAnalisePedido.observacoes\"\r\n												 		  ng-required=\"true\">\r\n												</textarea>\r\n\r\n												<div class=\"row\">\r\n													<div class=\"col-md-6\">\r\n														{{ 500 - vm.resultadoAnalisePedido.observacoes.length}} caracteres restantes\r\n													</div>\r\n													<div class=\"col-md-6 text-right\">\r\n														<small ng-show=\"!formRecusaDaProposta.observacoesMotivoRecusa.$valid\" style=\"color: firebrick\">* O campo\r\n															deve ser informado</small>\r\n														<small ng-show=\"formRecusaDaProposta.observacoesMotivoRecusa.$valid\" style=\"color: green\"><i class=\"fa fa-check\"></i></small>\r\n													</div>\r\n												</div>\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\" ng-if=\"!vm.bloquearCamposAcordo\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\" ng-disabled=\"formRecusaDaProposta.$invalid\" ng-click=\"vm.negar()\">\r\n										Enviar Negação\r\n										<i class=\"fa fa-ban fa-fw\" ng-if=\"formRecusaDaProposta.$invalid\"></i>\r\n										<i class=\"fa fa-check fa-fw\" ng-if=\"formRecusaDaProposta.$valid\"></i>\r\n									</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\" ng-click=\"vm.cancelar()\">\r\n										Cancelar\r\n									</button>\r\n								</div>\r\n							</form>\r\n						</div>\r\n					</div>\r\n					<div class=\"panel-footer\">\r\n						<div class=\"row\">\r\n							<div class=\"col-md-12\">\r\n								<span class=\"fa fa-angle-double-left fa-fw\"></span>\r\n								<a href=\"/#!/consultar-pedidos\">Voltar</a>\r\n							</div>\r\n							<!-- <div class=\"col-md-12\" style=\"width: 100%;\" ng-if=\"vm.debug\">\r\n								<pre><code>{{ vm.formatarJson() }}</code></pre>\r\n							</div> -->\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"col-md-12\" style=\"width: 35%; position: fixed; bottom: 15px; left: 0; z-index: 9999; max-height: 250px; overflow: auto; opacity: .75\"\r\n ng-if=\"vm.debug\">\r\n	<pre><code>{{ vm.formatarJson() }}</code></pre>\r\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/comprovante.html","<form name=\"formPagamento\">\n    <div class=\"modal-header\">\n        <h3 class=\"modal-title\">Informar comprovante</h3>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row col-md-12\">\n            <fieldset style=\"margin:25px 0\">\n                <legend>\n                    <small style=\"font-size:0.8em\">{{vm.tituloTela}}</small>\n                </legend>\n                <div class=\"row\" ng-if=\"!vm.exibirComprovantePagamento\">\n                    <div class=\"col-md-6\">\n                        <div style=\"margin: 10px\">\n                            <label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">{{vm.tituloCampo}}</label>\n\n                            <input type=\"text\"\n                                   class=\"form-control\"\n                                   ng-readonly=\"vm.bloquearCamposPagamento\"\n                                   id=\"input-pagamento-comprovante-identificador\"\n                                   name=\"comprovanteIdentificador\"\n                                   mask=\"inteiro10\"\n                                   ng-model=\"vm.comprovante.identificadorDocumento\" />\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\" ng-if=\"!vm.comprovante.identificadorDocumento\">\n\n                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\n                                style=\"margin-top: 35px;\"\n                                ng-click=\"vm.verificaIdentificador()\">\n\n                            Selecionar Arquivo\n                        </button>\n\n                    </div>\n                    <div class=\"col-md-6\" ng-if=\"vm.comprovante.identificadorDocumento\">\n                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\n                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\n                        </label>\n\n                        <input accept=\".pdf\"\n                               type=\"file\"\n                               name=\"arquivoSelecionado\"\n                               id=\"arquivoSelecionado\"\n                               style=\"display: none\"\n                               ng-model=\"vm.file\"\n                               onchange=\'var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply(); vm.changeFile()\'/>\n\n                    </div>\n                </div>\n                <div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\n                    <div class=\"col-md-12 form-group\">\n                        <div>\n                            <table class=\"table table-bordered table-striped\">\n                                <thead>\n                                <tr>\n                                    <th style=\"text-align: center;\">Identificador</th>\n                                    <th style=\"text-align: center;\">Nome do arquivo</th>\n                                    <th style=\"text-align: center;\">Remover</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td style=\"text-align: center;\">{{vm.comprovante.identificadorDocumento}}</td>\n                                    <td style=\"text-align: center;\"> {{vm.comprovante.nomeArquivo}}</td>\n                                    <td style=\"text-align: center;\">\n\n                                        <button type=\"button\"\n                                                class=\"btn btn-danger btn-sm\"\n                                                title=\"Excluir\"\n                                                data-ng-click=\"vm.removerComprovante()\">\n\n                                            <span class=\"fa fa-remove\" />\n                                        </button>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </fieldset>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n\n        <button class=\"btn btn-warning btn-rounded\"\n                style=\"float: right;\"\n                ng-click=\"vm.fecharModalPagamento()\">\n\n            Cancelar\n        </button>\n\n        <button class=\"btn btn-primary btn-rounded\"\n                style=\"float: right;\"\n                ng-click=\"vm.confimarPagamento()\"\n                ng-disabled=\"formPagamento.arquivoSelecionado.$invalid || !vm.comprovante.nomeArquivo\">\n\n            Confirmar\n        </button>\n\n        <!--<button class=\"btn btn-default\" ng-click=\"vm.teste()\">Teste</button>-->\n    </div>\n</form>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Aprovar Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" style=\"margin: 0 5px\">Aprovar</button>\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Aprovar com Ressalvas</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Negar</button>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Acordo</button>\r\n											<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<fieldset>\r\n									<legend>Pagamento</legend>\r\n									<div class=\"col-md-6\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n											<input type=\"text\" id=\"input-pagamento-guid-pedido\" class=\"form-control\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-identificador-proposta\">Identificador da Proposta:</label>\r\n											<input type=\"text\" id=\"input-pagamento-identificador-proposta\" class=\"form-control\" ng-readonly=\"true\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-numero-parcela\">Parcela Número:</label>\r\n											<input type=\"text\" id=\"input-numero-parcela\" class=\"form-control\">\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-6\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n											<input type=\"text\" id=\"input-pagamento-valor\" class=\"form-control\">\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n											<select id=\"select-pagamento-status\" class=\"form-control\"></select>\r\n										</div>\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n											<input type=\"text\" id=\"input-pagamento-data-pagamento\" class=\"form-control\">\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12\">\r\n										<div class=\"form-group\">\r\n											<label for=\"input-pagamento-observacoes\">Observações:</label>\r\n											<textarea id=\"input-pagamento-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n									</div>\r\n									<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n										<button class=\"btn btn-primary\" \r\n												style=\"margin: 0 5px\"\r\n												ng-click=\"vm.confirmarPagamento()\">\r\n											Confirmar Pagamento\r\n										</button>\r\n										<button class=\"btn btn-danger\" \r\n												style=\"margin: 0 5px\">\r\n											Cancelar\r\n										</button>\r\n									</div>\r\n\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Titular da conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF/CNPJ:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Agência:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													DV Agência:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													DV Conta:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo Conta:\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>\r\n\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Número do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do Banco:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identificador do Depósito:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Data de Validade:\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>\r\n									\r\n									<div class=\"col-md-12\">\r\n										<fieldset style=\"margin:25px 0\">\r\n											<legend>\r\n												<small style=\"font-size:0.8em\">Comprovante</small>\r\n											</legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Identificador do Comprovante:\r\n													<input type=\"text\" class=\"form-control\">\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Nome do  arquivo:\r\n													<input type=\"text\" class=\"form-control\">\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Arquivo:\r\n													<input type=\"file\" name=\"\" id=\"\">\r\n													<div style=\"margin:5px 0\">\r\n														<a href=\"#\">Adicionar</a>\r\n													</div>\r\n												</div>\r\n											</div>\r\n										</fieldset>\r\n									</div>		\r\n								</fieldset>\r\n								<div class=\"col-md-12 text-center\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Pagamento</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/aprovar-pedidos/views/modal-pagamento.html","<form name=\"formPagamento\">\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Informar comprovante</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row col-md-12\">\r\n            <fieldset style=\"margin:25px 0\">\r\n                <legend>\r\n                    <small style=\"font-size:0.8em\">{{vm.tituloTela}}</small>\r\n                </legend>\r\n                <div class=\"row\" ng-if=\"!vm.exibirComprovantePagamento\">\r\n                    <div class=\"col-md-6\">\r\n                        <div style=\"margin: 10px\">\r\n                            <label for=\"input-pagamento-comprovante-identificador\" id=\"label-pagamento-comprovante-identificador\">{{vm.tituloCampo}}</label>\r\n\r\n                            <input type=\"text\"\r\n                                   class=\"form-control\"\r\n                                   ng-readonly=\"vm.bloquearCamposPagamento\"\r\n                                   id=\"input-pagamento-comprovante-identificador\"\r\n                                   name=\"comprovanteIdentificador\"\r\n                                   mask=\"inteiro10\"\r\n                                   ng-model=\"vm.comprovante.identificadorDocumento\" />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" ng-if=\"!vm.comprovante.identificadorDocumento\">\r\n\r\n                        <button class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \"\r\n                                style=\"margin-top: 35px;\"\r\n                                ng-click=\"vm.verificaIdentificador()\">\r\n\r\n                            Selecionar Arquivo\r\n                        </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-6\" ng-if=\"vm.comprovante.identificadorDocumento\">\r\n                        <label style=\"margin-top: 35px;\" for=\"arquivoSelecionado\"\r\n                               class=\"btn btn-primary btn-rounded ng-scope ng-isolate-scope \">Selecionar Arquivo\r\n                        </label>\r\n\r\n                        <input accept=\".pdf\" \r\n						       type=\"file\" \r\n							   name=\"arquivoSelecionado\" \r\n							   id=\"arquivoSelecionado\" \r\n							   style=\"display: none\"\r\n							   ng-model=\"vm.file\"\r\n                               onchange=\'var scope = angular.element(this).scope(); scope.adicionarArquivo(this); scope.$apply(); vm.changeFile()\'/>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" ng-if=\"vm.exibirComprovantePagamento\">\r\n                    <div class=\"col-md-12 form-group\">\r\n                        <div>\r\n                            <table class=\"table table-bordered table-striped\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th style=\"text-align: center;\">Identificador</th>\r\n                                    <th style=\"text-align: center;\">Nome do arquivo</th>\r\n                                    <th style=\"text-align: center;\">Remover</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr>\r\n                                    <td style=\"text-align: center;\">{{vm.comprovante.identificadorDocumento}}</td>\r\n                                    <td style=\"text-align: center;\"> {{vm.comprovante.nomeArquivo}}</td>\r\n                                    <td style=\"text-align: center;\">\r\n\r\n                                        <button type=\"button\"\r\n                                                class=\"btn btn-danger btn-sm\"\r\n                                                title=\"Excluir\"\r\n                                                data-ng-click=\"vm.removerComprovante()\">\r\n\r\n                                            <span class=\"fa fa-remove\" />\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n	\r\n        <button class=\"btn btn-warning btn-rounded\" \r\n		        style=\"float: right;\" \r\n				ng-click=\"vm.fecharModalPagamento()\">\r\n\r\n            Cancelar\r\n		</button>\r\n		\r\n        <button class=\"btn btn-primary btn-rounded\" \r\n		        style=\"float: right;\" \r\n				ng-click=\"vm.confimarPagamento()\" \r\n				ng-disabled=\"formPagamento.arquivoSelecionado.$invalid || !vm.comprovante.nomeArquivo\">\r\n\r\n            Confirmar\r\n		</button>\r\n    </div>\r\n</form>");
$templateCache.put("ppe/pedidos/aprovar-pedidos-com-ressalva/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Aprovar Pedido com Ressalvas</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" style=\"margin: 0 5px\">Aprovar</button>\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Aprovar com Ressalvas</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Negar</button>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Confirmar Ressalvas</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-racional-calculo\">Identificador do Racional de Cálculo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-racional-calculo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-nome-arquivo\">Nome do Arquivo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-nome-arquivo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-arquivo-file\">Arquivo:</label>\r\n												<input type=\"file\" class=\"\" id=\"input-arquivo-file\" />\r\n												<div style=\"margin:5px 0\">\r\n													<a href=\"#\">Adicionar</a>\r\n												</div>\r\n											</div>\r\n										</div>										\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes-2\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes-2\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Enviar Divergências</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/consultar-pedidos/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Consultar Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n\r\n						<form>\r\n							<div class=\"col-md-6\" style=\"margin:25px 0\">\r\n								<div class=\"form-group\">\r\n									<label for=\"input-guid-pedido\">Guid Pedido:</label>\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-guid-pedido\"\r\n										   mask=\"guid\"\r\n										   placeholder=\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (32 dígitos)\"\r\n										   ng-model=\"vm.pedido.guidPedido\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n\r\n								<div class=\"form-group\">\r\n									<label for=\"input-protocolo\">Protocolo:</label>							\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-protocolo\"\r\n										   ng-model=\"vm.pedido.protocolo\"\r\n										   mask=\"protocolo\"\r\n										   placeholder=\"XXX-XXX-XXXXXXXX-XXXXXXXX (22 dígitos)\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"input-data-cadastro\">Data de Cadastro:</label>							\r\n									<input type=\"date\" \r\n										   mask=\"data\"\r\n										   class=\"form-control\" \r\n										   id=\"input-data-cadastro\"\r\n										   ng-model=\"vm.pedido.dateCadastro\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n\r\n\r\n\r\n<!-- 								<div class=\"form-group\">\r\n									<label for=\"input-processo\">Processo:</label>							\r\n									<input type=\"text\" \r\n										   class=\"form-control\" \r\n										   id=\"input-processo\"\r\n										   mask=\"processo\"\r\n										   placeholder=\"Numérico (máximo de 10 dígitos)\"\r\n										   ng-model=\"vm.pedido.processo\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n -->\r\n							</div>\r\n\r\n							<div class=\"col-md-6\" style=\"margin:25px 0\">\r\n								<div class=\"form-group\">\r\n									<label for=\"select-status\">Status:</label>\r\n									<select class=\"form-control\" id=\"select-status\" ng-model=\"vm.pedido.status\"\r\n											ng-options=\"t.descricao as t.descricao for t in vm.listaStatusPedido\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div>\r\n								\r\n								<!-- <div class=\"form-group\">\r\n									<label for=\"input-ano-oficio\">Ano do Oficio:</label>							\r\n									<input type=\"text\" \r\n										   mask=\"inteiro4\"\r\n										   class=\"form-control\" \r\n										   id=\"input-ano-oficio\"\r\n										   ng-model=\"vm.pedido.anoOficio\"\r\n										   placeholder=\"yyyy\"\r\n										   autocomplete=\"off\">\r\n								</div> -->\r\n\r\n								<!-- <div class=\"form-group\">\r\n									<label for=\"select-origem\">Origem:</label>\r\n									<select class=\"form-control\" id=\"select-origem\" ng-model=\"vm.pedido.origem\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div> -->\r\n\r\n								<div class=\"form-group\">\r\n									<label for=\"input-situacao\">Situação:</label>\r\n									<select class=\"form-control\"\r\n											id=\"input-situacao\"\r\n											ng-model=\"vm.pedido.situacaoInternaPedido\"\r\n											ng-options=\"t.id as t.descricao for t in vm.listaSituacao\">\r\n										<option value=\"\">Selecione...</option>\r\n									</select>\r\n								</div>\r\n								<div class=\"form-group\">\r\n									<label for=\"input-cpf\">CPF do Poupador:</label>\r\n									<input type=\"text\"\r\n										   class=\"form-control\"\r\n										   id=\"input-cpf\"\r\n										   ng-model=\"vm.pedido.cpfPoupador\"\r\n										   mask=\"cpf\"\r\n										   placeholder=\"999.999.999-99\"\r\n										   autocomplete=\"off\">\r\n								</div>\r\n\r\n<!-- 								<div class=\"form-group\">\r\n									<label for=\"input-data-cadastro\">Data de Cadastro:</label>							\r\n									<input type=\"date\" \r\n										   mask=\"data\"\r\n										   class=\"form-control\" \r\n										   id=\"input-data-cadastro\"\r\n										   ng-model=\"vm.pedido.dateCadastro\"\r\n										   autocomplete=\"off\">\r\n								</div>								\r\n\r\n -->							</div>							\r\n\r\n							<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n								<button type=\"submit\"\r\n										class=\"btn btn-primary\"\r\n										style=\"margin:0 5px\"\r\n										ng-click=\"vm.consultar()\">\r\n									Consultar\r\n								</button>\r\n								<button class=\"btn btn-default\"\r\n										style=\"margin:0 5px\"\r\n										ng-click=\"vm.limpar()\">\r\n									Limpar\r\n								</button>\r\n							</div>\r\n\r\n							<!--<div class=\"col-md-12\" style=\"margin-top:50px\">-->\r\n								<!--<div class=\"alert alert-info\" ng-if=\"vm.listaPedidos.length == 0\">-->\r\n									<!--<i class=\"fa fa-exclamation-circle fa-lg fa-fw\"></i>Nenhum registro encontrado.-->\r\n								<!--</div>-->\r\n								<!--<table class=\"table table-default table-hover\" ng-if=\"vm.listaPedidos.length > 0\">-->\r\n									<!--<thead>-->\r\n										<!--<tr>-->\r\n											<!--<th>Guid Pedido</th>-->\r\n											<!--<th>Protocolo</th>-->\r\n											<!--<th>Data Cadastro</th>-->\r\n											<!--<th>Nome do Poupador</th>-->\r\n											<!--<th>CPF do Poupador</th>-->\r\n											<!--<th>Status</th>-->\r\n											<!--<th>Situação</th>-->\r\n										<!--</tr>-->\r\n									<!--</thead>-->\r\n									<!--<tbody>-->\r\n										<!--<tr ng-repeat=\"pedido in vm.listaPedidos\">-->\r\n											<!--<td>-->\r\n												<!--<span  ng-click=\"vm.detalharPedido(pedido.cdPedidoHabilitacao)\"-->\r\n													  <!--style=\"cursor: pointer; color: blue;text-decoration:underline;\">{{ pedido.cdPedidoHabilitacao}}</span>-->\r\n											<!--</td>-->\r\n											<!--<td>{{ pedido.protocolo }}</td>-->\r\n											<!--<td>{{ pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</td>-->\r\n											<!--<td>{{ pedido.poupadorDTO.noPessoa }}</td>-->\r\n											<!--<td>{{ pedido.poupadorDTO.nrCpfPessoa }}</td>-->\r\n											<!--<td>{{ pedido.statusPedido.descricao }}</td>-->\r\n											<!--<td>{{ pedido.situacaoPedidoHabilitacao.descricao }}</td>-->\r\n										<!--</tr>-->\r\n									<!--</tbody>-->\r\n								<!--</table>-->\r\n							<!--</div>-->\r\n\r\n							<div class=\"col-md-12\" style=\"margin-top:50px\">\r\n								<div class=\"alert alert-info\" ng-if=\"vm.listaPedidos.length == 0\">\r\n									<i class=\"fa fa-exclamation-circle fa-lg fa-fw\"></i>Nenhum registro encontrado.\r\n								</div>\r\n								<table ng-table=\"vm.tabelaPedidos\" class=\"table table-default table-hover table-condensed table-bordered table-striped\">\r\n									<tr ng-repeat=\"pedido in $data\" class=\"text-center\">\r\n										<td data-title=\"\'GUID\'\" sortable=\"\'cdPedidoHabilitacao\'\">\r\n											<span ng-click=\"vm.detalharPedido(pedido.cdPedidoHabilitacao)\" style=\"cursor: pointer; color: #4286f4; font-weight: bold; text-transform: uppercase\">\r\n												{{ pedido.cdPedidoHabilitacao }}\r\n											</span>\r\n										</td>\r\n										<td data-title=\"\'Protocolo\'\" sortable=\"\'protocolo\'\">{{ pedido.protocolo }}</td>\r\n										<td data-title=\"\'Data Abertura\'\" sortable=\"\'dataAbertura\'\">{{ pedido.dataAbertura | date: \'dd/MM/yyyy\' }}</td>\r\n										<td data-title=\"\'Nome\'\" sortable=\"\'poupadorDTO.noPessoa\'\">{{ pedido.poupadorDTO.noPessoa }}</td>\r\n										<td data-title=\"\'CPF\'\" sortable=\"\'poupadorDTO.nrCpfPessoa\'\">{{ pedido.poupadorDTO.nrCpfPessoa }}</td>\r\n										<td data-title=\"\'Status\'\" sortable=\"\'statusPedido.descricao\'\">{{ pedido.statusPedido.descricao }}</td>\r\n										<td data-title=\"\'Situação\'\" sortable=\"\'situacaoPedidoHabilitacao.descricao\'\">{{ pedido.situacaoInternaPedido.descricao || \'-\' }}</td>\r\n									</tr>\r\n								</table>\r\n							</div>\r\n							<div class=\"text-right\" style=\"font-weight: bold; padding-right: 15px\">\r\n								Quantidade de pedidos recuperados: {{ vm.listaPedidos.length }}\r\n							</div>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/negar-pedido/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Dados do Pedido</h3>\r\n					</div>\r\n					<div class=\"panel-body\">\r\n						<form>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin: 25px 0\">\r\n										<legend>Pedido</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Guid Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Protocolo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Abertura:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Leitura do Banco:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Status do Pedido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Custas Processuais:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Valor Total Simulado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Destinatário de Pagamento\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>							\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Nascimento;\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Validade:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Falecido:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data do Cálculo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Emissão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Classificação:\r\n											</div>                    \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Endereço do Poupador</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												CEP:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Cidade:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Bairro:\r\n											</div>                    \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Tipo Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Logradouro:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Complemento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número:\r\n											</div>               \r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados dos Envolvidos</legend>\r\n										<fieldset style=\"margin:0 25px\">\r\n											<legend><small style=\"font-size:0.8em\">Envolvido 1</small></legend>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Nome:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CPF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Identidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Tipo:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Órgão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													CEP:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													UF:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Cidade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Bairro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Fixo:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Email:\r\n												</div>\r\n											</div>\r\n											<div class=\"col-md-6\">\r\n												<div style=\"margin: 10px\">\r\n													Emissão:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Classificação:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Validade:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Qualificação:\r\n												</div>                    \r\n												<div style=\"margin: 10px\">\r\n													Tipo Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Logradouro:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Complemento:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Número:\r\n												</div>\r\n												<div style=\"margin: 10px\">\r\n													Telefone Celular:\r\n												</div>\r\n											</div>\r\n										</fieldset>                            \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Dados do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Número CNJ:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Número Antigo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Identificador Legado:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Órgão:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Tipo de Ação:\r\n											</div>           \r\n											<div style=\"margin: 10px\">\r\n												Patrocínio:\r\n											</div>         \r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Vara:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Comarca de Origem:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Ajuizamento:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Data de Procuração:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												UF de Origem:\r\n											</div>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Patrono do Processo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Nome:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												CPF:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Qualificação:\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div style=\"margin: 10px\">\r\n												Telefone Fixo:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Telefone Celular:\r\n											</div>\r\n											<div style=\"margin: 10px\">\r\n												Email:\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Advogado\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>\r\n										<div class=\"row\">\r\n											<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n												<fieldset style=\"margin:25px 0\">\r\n													<legend>\r\n														<small style=\"font-size:0.8em\">\r\n															Defensor\r\n														</small>\r\n													</legend>                    \r\n													<div class=\"col-md-6\">\r\n														<div style=\"margin: 10px\">\r\n															Número OAB:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															Esfera:\r\n														</div>\r\n														<div style=\"margin: 10px\">\r\n															UF:\r\n														</div>                            \r\n													</div>              \r\n												</fieldset>\r\n											</div>\r\n										</div>    \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Contas</legend>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência\r\n													</div>                        \r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>                        \r\n												</div>      \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identidicador do Depósito Judicial:\r\n													</div>              \r\n													<div style=\"margin: 10px\">\r\n														Data Validade:\r\n													</div>                            \r\n												</div>              \r\n											</fieldset>\r\n										</div>\r\n										<div class=\"col-md-12\" style=\"margin: 0 25px\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Plano</small>\r\n												</legend>                    \r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Plano Econômico:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Valor Simulado:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>    \r\n													<div style=\"margin: 10px\">\r\n														Tipo da Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Saldo Base:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Aniversário Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>                \r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Documentos</legend>\r\n										<div class=\"col-md-12\">\r\n											<table class=\"table table-default table-hover\">\r\n												<thead>\r\n													<tr>\r\n														<th>Nome</th>\r\n														<th>Tipo</th>\r\n														<th>Contexto</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RG</td>\r\n														<td>INVENTARIANTE</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">OF_119VC_0999-2018.pdf</a></td>\r\n														<td>RNE</td>\r\n														<td>TERMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>CPF</td>\r\n														<td>RESUMO</td>\r\n													</tr>\r\n													<tr>\r\n														<td><a href=\"#\">RSP_119VC_0999-2018.pdf</a></td>\r\n														<td>OAB</td>\r\n														<td>ADVOGADO</td>\r\n													</tr>\r\n												</tbody>\r\n											</table>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-success\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'aprovar\')\">\r\n										Aprovar\r\n									</button>\r\n									<button class=\"btn btn-primary\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'aprovar-ressalvas\')\">\r\n										Aprovar Com Ressalvas\r\n									</button>\r\n									<button class=\"btn btn-danger\" \r\n											style=\"margin: 0 5px\"\r\n											ng-click=\"vm.setModalidade(\'negar\')\">\r\n										Negar\r\n									</button>\r\n								</div>\r\n							</div>\r\n\r\n							<div class=\"alert alert-success\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<i class=\"fa fa-check fa-lg fa-fw\"></i> Aprovar Pedido\r\n							</div>\r\n							<div class=\"alert alert-info\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">\r\n								<i class=\"fa fa-exclamation-triangle fa-lg fa-fw\"></i> Aprovar Pedido com Ressalvas\r\n							</div>\r\n							<div class=\"alert alert-danger\" style=\"margin:25px 0\" ng-if=\"vm.modalidade === \'negar\'\">\r\n								<i class=\"fa fa-times fa-lg fa-fw\"></i> Negar Pedido\r\n							</div>\r\n\r\n							<!-- Aprovar -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo\r\n											<span class=\"badge badge-default pull-right\" ng-if=\"!vm.isPagamentoConfirmado\">Não confirmado</span>\r\n											<span class=\"badge badge-success pull-right\" ng-if=\"vm.isPagamentoConfirmado\">Confirmado</span>\r\n										</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-identificador-proposta\" for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-total-acordo\" for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-destinado-portador\" for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-honorario-patrono\" for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-reembolso-custas\" for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-quantidade-parcelas\" for=\"input-quantidade-parcelas\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-quantidade-parcelas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-valor-parcela\" for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-data-primeira-parcela\" for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label id=\"label-acordo-observacoes\" for=\"textarea-acordo-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-acordo-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>										\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Pagamento\r\n											<span class=\"badge badge-default pull-right\" ng-if=\"!vm.isPagamentoConfirmado\">Não confirmado</span>\r\n											<span class=\"badge badge-success pull-right\" ng-if=\"vm.isPagamentoConfirmado\">Confirmado</span>\r\n										</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-guid-pedido\" for=\"input-pagamento-guid-pedido\">Guid Pedido:</label>\r\n												<input type=\"text\" id=\"input-pagamento-guid-pedido\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-identificador-proposta\" for=\"input-pagamento-identificador-proposta\">Identificador da Proposta:</label>\r\n												<input type=\"text\" id=\"input-pagamento-identificador-proposta\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-numero-parcela\" for=\"input-numero-parcela\">Parcela Número:</label>\r\n												<input type=\"text\" id=\"input-numero-parcela\" class=\"form-control\">\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-valor\" for=\"input-pagamento-valor\">Valor do Pagamento:</label>\r\n												<input type=\"text\" id=\"input-pagamento-valor\" class=\"form-control\">\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-status\" for=\"select-pagamento-status\">Status do Pagamento:</label>\r\n												<select id=\"select-pagamento-status\" class=\"form-control\"></select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-data-pagamento\" for=\"input-pagamento-data-pagamento\">Data do Pagamento:</label>\r\n												<input type=\"text\" id=\"input-pagamento-data-pagamento\" class=\"form-control\">\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<div class=\"form-group\">\r\n												<label id=\"label-pagamento-observacoes\" for=\"input-pagamento-observacoes\">Observações:</label>\r\n												<textarea id=\"input-pagamento-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.confirmarPagamento()\">\r\n												Confirmar Pagamento\r\n											</button>\r\n											<button class=\"btn btn-danger\" \r\n													style=\"margin: 0 5px\"\r\n													ng-click=\"vm.cancelarConfirmarPagamento()\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Bancária - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Titular da conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														CPF/CNPJ:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Agência:\r\n													</div>\r\n												</div>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														DV Agência:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														DV Conta:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Validade:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Tipo Conta:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Conta Judicial - Acordo</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Número do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do Banco:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Depósito:\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Data de Validade:\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>\r\n										\r\n										<div class=\"col-md-12\">\r\n											<fieldset style=\"margin:25px 0\">\r\n												<legend>\r\n													<small style=\"font-size:0.8em\">Comprovante</small>\r\n												</legend>\r\n												<div class=\"col-md-6\">\r\n													<div style=\"margin: 10px\">\r\n														Identificador do Comprovante:\r\n														<input type=\"text\" class=\"form-control\">\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Nome do  arquivo:\r\n														<input type=\"text\" class=\"form-control\">\r\n													</div>\r\n													<div style=\"margin: 10px\">\r\n														Arquivo:\r\n														<input type=\"file\" name=\"\" id=\"\">\r\n														<div style=\"margin:5px 0\">\r\n															<a href=\"#\">Adicionar</a>\r\n														</div>\r\n													</div>\r\n												</div>\r\n											</fieldset>\r\n										</div>		\r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Confirmar Acordo</button>\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>\r\n							<!-- Aprovar com Ressalvas -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">								\r\n								<div class=\"col-md-12\">									\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Acordo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Identificador Proposta:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-total-acordo\">Valor Total Acordo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-total-acordo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-destinado-portador\">Valor Destinado ao Portador:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-destinado-portador\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-honorario-patrono\">Valor de Honorário ao Patrono do Processo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-honorario-patrono\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-reembolso-custas\">Valor de Reembolso de Custas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-reembolso-custas\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-proposta\">Quantidade de Parcelas:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-proposta\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-valor-parcela\">Valor da Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-valor-parcela\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-data-primeira-parcela\">Data da Primeira Parcela:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-data-primeira-parcela\" />\r\n											</div>\r\n										</div>\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\" \r\n													style=\"margin: 0 5px\">\r\n												Confirmar Ressalvas\r\n											</button>\r\n											<button class=\"btn btn-danger\"\r\n													style=\"margin: 0 5px\">\r\n												Cancelar\r\n											</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'aprovar-ressalva\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Racional de Cálculo</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"input-identificador-racional-calculo\">Identificador do Racional de Cálculo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-identificador-racional-calculo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-nome-arquivo\">Nome do Arquivo:</label>\r\n												<input type=\"text\" class=\"form-control\" id=\"input-nome-arquivo\" />\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"input-arquivo-file\">Arquivo:</label>\r\n												<input type=\"file\" class=\"\" id=\"input-arquivo-file\" />\r\n												<div style=\"margin:5px 0\">\r\n													<a href=\"#\">Adicionar</a>\r\n												</div>\r\n											</div>\r\n										</div>										\r\n										<div class=\"col-md-12\">\r\n											<label for=\"textarea-observacoes-2\">Observações:</label>\r\n											<textarea id=\"textarea-observacoes-2\" class=\"form-control\" cols=\"20\" rows=\"10\" style=\"resize: none\"></textarea>\r\n										</div>\r\n										<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n											<button class=\"btn btn-primary\">Enviar Divergências</button>\r\n											<button class=\"btn btn-danger\">Cancelar</button>\r\n										</div>\r\n									</fieldset>\r\n								</div>\r\n							</div>\r\n\r\n							<!-- Negar Pedido -->\r\n							<div class=\"row\" ng-if=\"vm.modalidade === \'negar\'\">\r\n								<div class=\"col-md-12\">\r\n									<fieldset style=\"margin:25px 0\">\r\n										<legend>Recusa da Proposta</legend>\r\n										<div class=\"col-md-6\">\r\n											<div class=\"form-group\">\r\n												<label for=\"select-motivo-recusa\">Motivo da Recusa:</label>\r\n												<select name=\"motivo-recusa\" id=\"select-motivo-recusa\" class=\"form-control\">\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"select-submotivo-recusa\">Submotivo da Recusa:</label>\r\n												<select name=\"submotivo-recusa\" id=\"select-submotivo-recusa\" class=\"form-control\">\r\n													<option value=\"\">Selecione...</option>\r\n												</select>\r\n											</div>\r\n											<div class=\"form-group\">\r\n												<label for=\"textarea-obervacoes-motivo-recusa\">Observações:</label>\r\n												<textarea name=\"observacoes-motivo-recusa\" \r\n														  id=\"textarea-obervacoes-motivo-recusa\" \r\n														  class=\"form-control\" \r\n														  cols=\"20\" \r\n														  rows=\"10\"\r\n														  style=\"resize: none\">\r\n												</textarea>\r\n											</div>\r\n										</div>                    \r\n									</fieldset>\r\n								</div>\r\n								<div class=\"col-md-12 text-center\" style=\"margin-top:25px\">\r\n									<button class=\"btn btn-primary\" style=\"margin: 0 5px\">Enviar Negação</button>								\r\n									<button class=\"btn btn-danger\" style=\"margin: 0 5px\">Cancelar</button>\r\n								</div>\r\n							</div>					\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>");
$templateCache.put("ppe/pedidos/obter-pedidos/views/index.html","<div class=\"conter-wrapper\">\r\n	<div class=\"container-fluid home-page\">\r\n		<div class=\"row\">\r\n			<div class=\"col-md-12\">\r\n				<div class=\"panel panel-primary\">\r\n					<div class=\"panel-heading\">\r\n						<h3 class=\"panel-title\">Obter Pedidos</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <!--<div class=\"alert alert-info\">-->\r\n                                    <!--<i class=\"fa fa-info-circle fa-fw\"></i>-->\r\n                                    <!--Informe os parâmetros abaixo para carregar os pedidos.-->\r\n                                    <!--<a href=\"\" class=\"pull-right\" style=\"color:white\" ng-click=\"vm.exibirCriterioPesquisa()\" ng-show=\"!vm.isCriterioPesquisa\">-->\r\n                                       <!--Critérios de pesquisa-->\r\n                                       <!--<i class=\"fa fa-angle-right fa-fw\"></i>                                       -->\r\n                                    <!--</a>-->\r\n                                    <!--<a href=\"\" class=\"pull-right\" style=\"color:white\" ng-click=\"vm.ocultarCriterioPesquisa()\" ng-show=\"vm.isCriterioPesquisa\">-->\r\n                                        <!--Ocultar<i class=\"fa fa-angle-down fa-fw\"></i>                                       -->\r\n                                    <!--</a>                                    -->\r\n                                    <!--<div ng-show=\"vm.isCriterioPesquisa\">-->\r\n                                        <!--<br>-->\r\n                                        <!--<ul>-->\r\n                                            <!--<li> - Caso não seja informado parâmetro algum, será obtido todos os pedidos disponíveis.</li>                            -->\r\n                                            <!--<li> - Caso seja informado algum parâmetro, a consulta será feita com base nos parâmetros informados.</li>                          -->\r\n                                            <!--<li> - Caso não seja informada a <span style=\"color:firebrick;font-weight: bold\">data de início</span> mas seja informada a <span style=\"color:green;font-weight: bold\">data fim</span>, a consulta retornará os pedidos até a <u>data fim</u>.</li>-->\r\n                                            <!--<li> - Caso seja informada a <span style=\"color:green;font-weight: bold\">data de início</span> mas não seja informada a <span style=\"color:firebrick;font-weight: bold\">data fim</span>, a consulta retornará os pedidos até a <u>data vigente</u>.</li>-->\r\n                                            <!--<li> - Caso seja informada a quantidade a retornar, somente o número de pedidos especificados serão retornados ordenados de acordo com a consulta ao WS.</li>-->\r\n                                        <!--</ul>    -->\r\n                                    <!--</div>-->\r\n                                <!--</div>-->\r\n                                <form>\r\n                                    <div class=\"col-md-12\">\r\n                                        <!--<div class=\"col-md-6\">-->\r\n                                            <!--<div class=\"form-group\">-->\r\n                                                <!--<label for=\"input-guid-pedido\" id=\"label-guid-pedido\">Guid Pedido:</label>-->\r\n                                                <!--<input type=\"text\" -->\r\n                                                    <!--name=\"guid-pedido\" -->\r\n                                                    <!--id=\"input-guid-pedido\" -->\r\n                                                    <!--class=\"form-control\"-->\r\n                                                    <!--mask=\"guid\"-->\r\n                                                    <!--placeholder=\"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (32 dígitos)\"-->\r\n                                                    <!--ng-model=\"vm.obterPedidosRequest.guidPedido\"-->\r\n                                                    <!--autocomplete=\"off\">-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"form-group\">-->\r\n                                                <!--<label for=\"input-data-inicio\" id=\"label-data-inicio\">Data início:</label>-->\r\n                                                <!--<input type=\"date\" -->\r\n                                                    <!--name=\"data-inicio\" -->\r\n                                                    <!--id=\"input-data-inicio\" -->\r\n                                                    <!--class=\"form-control\"-->\r\n                                                    <!--mask=\"data\"-->\r\n                                                    <!--ng-model=\"vm.obterPedidosRequest.dateInicio\">-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"form-group\">-->\r\n                                                <!--<label for=\"input-qtd-retornar\" id=\"label-qtd-retornar\">Quantidade a retornar:</label>-->\r\n                                                <!--<input type=\"text\" -->\r\n                                                        <!--mask=\"inteiro5\"-->\r\n                                                        <!--style=\"width: 75px\"-->\r\n                                                        <!--name=\"qtd-retornar\" -->\r\n                                                        <!--id=\"input-qtd-retornar\" -->\r\n                                                        <!--class=\"form-control\"-->\r\n                                                        <!--ng-model=\"vm.obterPedidosRequest.quantidadeARetornar\">-->\r\n                                            <!--</div>-->\r\n                                        <!--</div>-->\r\n                                        <!--<div class=\"col-md-6\">-->\r\n                                            <!--<div class=\"form-group\">-->\r\n                                                <!--<label for=\"select-status-pedido\" id=\"label-status-pedido\">Status do Pedido:</label>-->\r\n                                                    <!--<select class=\"form-control\" id=\"select-status\" ng-model=\"vm.obterPedidosRequest.statusPedido\"-->\r\n                                                        <!--ng-options=\"t.descricao as t.descricao for t in vm.listaStatusPedido\">-->\r\n                                                    <!--<option value=\"\">Selecione...</option>-->\r\n                                                <!--</select>-->\r\n                                            <!--</div>-->\r\n                                            <!--<div class=\"form-group\">-->\r\n                                                <!--<label for=\"input-data-fim\" id=\"label-data-fim\">Data fim:</label>-->\r\n                                                <!--<input type=\"date\"-->\r\n                                                    <!--name=\"data-fim\" -->\r\n                                                    <!--id=\"input-data-fim\" -->\r\n                                                    <!--class=\"form-control\"-->\r\n                                                    <!--mask=\"data\"-->\r\n                                                    <!--ng-model=\"vm.obterPedidosRequest.dateFim\">-->\r\n                                            <!--</div>                                        -->\r\n                                        <!--</div>                                    -->\r\n                                        <div class=\"col-md-12 text-center\">\r\n                                            <button class=\"btn btn-primary\" \r\n                                                    style=\"margin-right:10px\" \r\n                                                    ng-click=\"vm.obterPedidos()\">\r\n                                                Carregar <i class=\"fa fa-arrow-down fa-fw\"></i>\r\n                                            </button>\r\n                                            <!--<button class=\"btn btn-default\" -->\r\n                                                    <!--type=\"reset\" -->\r\n                                                    <!--ng-click=\"vm.reset()\">-->\r\n                                                <!--Limpar <i class=\"fa fa-times fa-fw\"></i>-->\r\n                                            <!--</button>-->\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");}]);
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

},{"../../.tmp/modulos":1,"../../.tmp/scripts/config":2,"../../.tmp/scripts/templates":3,"../../package.json":32,"./Util":7}],9:[function(require,module,exports){
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
            download: download
        }

        function salvar(arquivo) {
            return Restangular.all(resource + "/arquivo").customPOST(
                arquivo, undefined, undefined, {"Content-Type": undefined});
        }

        function buscar(idArquivo) {
            return Restangular.one(resource + "/arquivo/" + idArquivo).get();
        }

        function remover(idArquivo) {
            return Restangular.one(resource + "/arquivo/", idArquivo).remove();
        }

        function _setFileTypeHeader() {
            return {
                "Content-Type": undefined
            }
        }

        function download(idArquivo) {
            $http.get(resource + "/arquivo/" + idArquivo, {
                responseType: "arraybuffer"
            }).then(function(response) {
                console.log(response);
                return response;
            }).catch(function(err) {
                console.log(err);
            });
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

},{"./arquivo":9,"./pagamentos":13,"./pedidos":24,"./ppe.menu.js":30,"./ppe.routes.js":31}],12:[function(require,module,exports){
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
        }

        /**
         * ------
         * salvar
         * ------
         */
        function salvar(pagamento) {
            return Restangular.all("/acordo/informarPagamento").post(pagamento);
        }

        /**
         * -------
         * remover
         * -------
         */
        function remover(codigoDoPagamento) {
            console.log(codigoDoPagamento);
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
            listarPagamentosPorPedidoHabilitacao: listarPagamentosPorPedidoHabilitacao
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
            return Restangular.all(getResource() + "/negar");
        }
        
        function recuperarPagamentos(guidPedido) {
            console.log('----------------------');
            console.log("recuperando pagamentos");
            console.log('----------------------');
            return Restangular.all(getResource() + "/recuperarpagamentos/" + guidPedido);
        }

        function adicionarPagamento() {
            console.log("informando pagamento...");
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
         * =============
         */
        function aprovar()
        {
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
            if (vm.modalidade.toLowerCase() === 'aprovar')
            {
                vm.resultadoAnalisePedido.situacaoInterna = 1;
            }

            if (vm.modalidade.toLowerCase() === 'aprovar-ressalva')
            {
                vm.resultadoAnalisePedido.situacaoInterna = 2;
            }

            if (vm.resultadoAnalisePedido.proposta.datePrimeiraParcela)
            {
                vm.resultadoAnalisePedido.proposta.dataPrimeiraParcela = $filter('date')(new Date(vm.resultadoAnalisePedido.proposta.datePrimeiraParcela), 'dd/MM/yyyy');
            }

            var dataAtual = new Date();
            dataAtual.setHours(0, 0, 0, 0);

            var dataComparada = new Date(vm.resultadoAnalisePedido.proposta.datePrimeiraParcela);
            dataComparada.setHours(0, 0, 0, 0);

            if (dataAtual > dataComparada)
            {
                growl.error("A data da primeira parcela não pode ser menor que o dia de hoje!");
                return;
            }

            // Seta status da variável de confirmação de pagamento
            AcordoResource.cadastrarResultadoAnalisePedido().post(vm.resultadoAnalisePedido)
                .then(function (response)
                {
                    if (response.status == 200)
                    {
                        vm.isAcordoConfirmado         = true;
                        vm.exibirComprovantePagamento = false;
                        vm.bloquearCamposAcordo       = true;

                        growl.success("Acordo confirmado com sucesso!");
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

                    _listarPagamentos(vm.resultadoAnalisePedido.guidPedido);
                })
                .catch(function (erro)
                {
                    console.log(erro);
                });
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
        function negar()
        {
            vm.resultadoAnalisePedido.resultado  = 'HABILITACAO_NEGADA'
            vm.resultadoAnalisePedido.gridPedido = vm.pedido.cdPedidoHabilitacao;

            AcordoResource.negar().post(vm.resultadoAnalisePedido).then(function (response) {
                if (response.status == 200)
                {
                    vm.bloquearCamposAcordo = true;
                    growl.success("Acordo negado com sucesso!");
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
            vm.resultadoAnalisePedido.valorPagamento = Util.stringToDouble(vm.resultadoAnalisePedido.valorPagamentoFormatado);

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

        function atualizarDadosPagamento()
        {
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

        function cancelarConfirmarPagamento()
        {
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

        function confirmarPagamentoRessalvas()
        {
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
                    if (response.status == 200)
                    {
                        vm.isPagamentoRessalvasConfirmado = true;
                        vm.bloquearCamposRessalva         = true;

                        growl.success("Acordo confirmado com ressalvas!");

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
                    console.log(erro);
                });

        }

        function cancelarConfirmarPagamentoRessalvas()
        {
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

        function downloadArquivo(gridPedido, codigoArquivo)
        {
            PedidosResource.obterArquivo(gridPedido, codigoArquivo).get().then(function (response)
            {
                Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
            })
            .catch(function (erro)
            {
                growl.error(erro.data.message);
            });
        }

        function formatarJson()
        {
            return Util.formatJson(vm.resultadoAnalisePedido);
        }

        /**
         * ==============================
         * Cancela a modalidade escolhida
         * ==============================
         */
        function cancelar()
        {
            vm.modalidade             = undefined;
            vm.resultadoAnalisePedido = {};
        }

        function verificarCamposInformados(obj)
        {
            var hasNull = undefined;

            if (typeof obj === 'object')
            {
                Object.keys(obj).forEach(function (attr)
                {
                    if (obj[attr])
                    {
                        hasNull = true;
                    }
                });
            }
            return true;
        }

        function adicionarArquivoRessalva(element)
        {
            var identificadorRacionalCalculo = vm.resultadoAnalisePedido.racionalDeCalculo != undefined
                ? vm.resultadoAnalisePedido.racionalDeCalculo.identificadorRacionalCalculo
                : undefined;

            if (identificadorRacionalCalculo == undefined || identificadorRacionalCalculo == null || identificadorRacionalCalculo == '')
            {
                growl.error("Informe o Identificador do Racional de Cálculo.");
                return;
            }

            var scope         = angular.element(element).scope();
            var arquivo       = element.files[0];
            var tamanhoMaximo = 5242880;

            if (arquivo.size > tamanhoMaximo)
            {
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

        function removerArquivoCalculo()
        {
            vm.exibirArquivoCalculo                                                  = false;
            vm.resultadoAnalisePedido.comprovante                                    = {};
            vm.resultadoAnalisePedido.racionalDeCalculo.identificadorRacionalCalculo = '';
        }

        /**
         * -------------------
         * abrirModalPagamento
         * -------------------
         */
        function abrirModalPagamento(pagamento)
        {
            var modalInstance = $uibModal.open({
                // templateUrl: 'ppe/pedidos/aprovar-pedidos/views/modal-pagamento.html',
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
                                 ArquivoResource) {

        var vm = this;

        vm.fecharModalPagamento         = fecharModalPagamento;
        vm.confimarPagamento            = confimarPagamento;
        vm.removerComprovante           = removerComprovante;
        vm.verificaIdentificador        = verificaIdentificador;
        vm.teste                        = teste;

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
        }
        init();

        function fecharModalPagamento() {
            $uibModalInstance.dismiss();
        }

        function confimarPagamento() {
            AcordoResource.informarDocumento().withHttpConfig({transformRequest: angular.identity})
                .customPOST(vm.comprovante.arquivo, undefined, undefined, {'Content-Type': undefined})
                .then(function (response) {
                    if(response.status == 200) {
                        //recuperar os pag para atualizar a lista de pag
                        growl.success("Pagamento confirmado com sucesso!");
                        $uibModalInstance.close(true);
                    } else {
                        if(response.data != undefined) {
                            growl.error(response.data.message.message);
                        }else {
                            growl.error(response.statusText);
                        }
                    }
                })
                .catch(function (erro) {
                    growl.error(erro.data.message);
                });

            // Salvando arquivo de comprovante na base
            ArquivoResource.salvar(vm.comprovante.arquivo)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(err) {
                    console.log(err);
                });
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

        function teste() {
            // ArquivoResource.buscar(1)
            //     .then(function(response) {
            //         var file = new Blob([response.data], { type: 'application/pdf' });
            //         var url = (window.URL || window.webkitURL).createObjectURL(file);
            //         console.log(url);
            //     })
            //     .catch(function(err) {
            //         console.log(err)
            //     });

            ArquivoResource.download(62);

            ArquivoResource.buscar(62);
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

    //require('./pedidos.routes.js')(module);
    require('./pedidos.resource.js')(module);
    require('./acordo.resource.js')(module);

    require('./consultar-pedidos')(module);
    require('./aprovar-pedidos')(module);
    require('./obter-pedidos')(module);
    require('./aprovar-pedidos-com-ressalva')(module);
    require('./negar-pedido')(module);


}
},{"./acordo.resource.js":16,"./aprovar-pedidos":20,"./aprovar-pedidos-com-ressalva":18,"./consultar-pedidos":23,"./negar-pedido":25,"./obter-pedidos":27,"./pedidos.resource.js":29}],25:[function(require,module,exports){
module.exports = function(module) {

    require('./negar-pedido.ctrl.js')(module);
    
}
},{"./negar-pedido.ctrl.js":26}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
module.exports = function(module) {

    require('./obter-pedidos.ctrl')(module);

}
},{"./obter-pedidos.ctrl":28}],28:[function(require,module,exports){
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

            console.log("-------------------------");
            console.log(vm.obterPedidosRequest);
            console.log("-------------------------");

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

            console.log(vm.obterPedidosRequest);

            PedidosResource.obterPedidos().get(vm.obterPedidosRequest)
                .then(function(response) {
                    console.log(response);
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
},{}],29:[function(require,module,exports){
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

        function obterArquivo(gridPedido, codigoArquivo) {
            return Restangular.one('documento/obterarquivo/'+ gridPedido +"/"+ codigoArquivo);
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
    }
}

},{}],30:[function(require,module,exports){
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
            .subitem('Obter Pedidos', 'home.obterpedidos', 'fa-cloud-download');
            //.subitem('Aprovar', 'home.aprovarpedidos', 'fa-check')
            //.subitem('Aprovar com ressalva', 'home.aprovarcomressalva', 'fa-exclamation-triangle')
            //.subitem('Negar pedido', 'home.negarpedido', 'fa-times');
    }

};
},{}],31:[function(require,module,exports){
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
},{}],32:[function(require,module,exports){
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
