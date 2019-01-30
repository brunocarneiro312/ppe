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