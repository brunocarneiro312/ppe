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
         * ===================
         * abrirModalPagamento
         * ===================
         */
        function abrirModalPagamento(pagamento)
        {
            var modalInstance = $uibModal.open({
                templateUrl: 'ppe/pedidos/aprovar-pedidos/views/modal-pagamento.html',
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
         * ================
         * removerPagamento
         * ================
         */
        function removerPagamento(idPagamento) {
            PagamentosResources.removerPagamento(idPagamento)
                .then(function (response) {
                    if (response.status == 200) {
                        atualizarDadosPagamento();
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

            PagamentosResources.listarPagamentosPorPedidoHabilitacao(guidPedido).getList()
                .then(function(response) {
                    vm.pagamentos = response.data.plain();
                    console.log('===========');
                    console.log(vm.pagamentos);
                    console.log('===========');
                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }
}