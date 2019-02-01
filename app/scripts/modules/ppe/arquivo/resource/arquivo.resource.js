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