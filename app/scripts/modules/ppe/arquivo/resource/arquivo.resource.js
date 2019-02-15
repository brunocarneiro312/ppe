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

            console.log("-----");
            console.log(arquivo);
            console.log("-----");

            return $http({
                method: "POST",
                url: window.config.paths.server + "/" + resource + "/arquivo?idDocumento=" + arquivo.identificadorDocumento,
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