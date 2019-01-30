module.exports = function(module) {

    "use strict";

    module.service("PagamentosService", PagamentosService);

    function PagamentosService(PagamentosResources) {

        return {
            salvar:  salvar,
            remover: remover,
            listar:  listar,
            buscar:  buscar
        }

        /**
         * salvar
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
        function remover(pagamento) {
            PagamentosResources.remover(pagamento)
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
                })

        }
    }
}