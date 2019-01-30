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