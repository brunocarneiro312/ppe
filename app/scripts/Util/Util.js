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
