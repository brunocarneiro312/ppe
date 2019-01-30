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