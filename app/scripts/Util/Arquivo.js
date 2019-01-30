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
