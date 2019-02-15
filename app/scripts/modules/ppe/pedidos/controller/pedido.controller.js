module.exports = function(module) {

    'use strict';

    module.controller('PedidoController', PedidoController);

    function PedidoController($http,
                              $scope,
                              $state,
                              $stateParams,
                              $location,
                              $filter,
                              paths,
                              msg,
                              growl,
                              mask,
                              AcordoResource,
                              PedidosResource,
                              PedidoService,
                              NgTableParams) {

        /** Variáveis internas */
        var vm       = this;
        var execOnce = false;

        /** Variáveis utilizadas na view */
        vm.pedido               = undefined;
        vm.pedidoSelecionado    = undefined;
        vm.propostaAcordo       = {};
        vm.listaPedidos         = [];
        vm.listaStatusPedido    = [];
        vm.listaSituacao        = [];
        vm.listaMotivoRecusa    = [];
        vm.listaSubmotivoRecusa = [];
        vm.activeTab            = undefined;
        vm.isPedidosTab         = undefined;
        vm.isDetalhePedidoTab   = undefined;
        vm.isPropostaTab        = undefined;
        vm.isPagamentosTab      = undefined;
        vm.formPropostaActive   = undefined;
        vm.pedidoHabilitacao    = undefined;

        /** Funções */
        vm.consultar           = consultar;
        vm.consultarPorGuid    = consultarPorGuid;
        vm.buscarAnalisePedido = buscarAnalisePedido;
        vm.buscarProposta      = buscarProposta;
        vm.limpar              = limpar;
        vm.changeTab           = changeTab;
        vm.getTabClass         = getTabClass;
        vm.pedidosView         = pedidosView;
        vm.detalhesView        = detalhesView;
        vm.processoView        = processoView;
        vm.dadosBancariosView  = dadosBancariosView;
        vm.documentosView      = documentosView;
        vm.propostaView        = propostaView;
        vm.pagamentosView      = pagamentosView;
        vm.downloadArquivo     = downloadArquivo;
        vm.limparFormProposta  = limparFormProposta;
        vm.confirmarProposta   = confirmarProposta;
        vm.negarProposta       = negarProposta;
        vm.getModalidade       = getModalidade;
        vm.getModalidadeClass  = getModalidadeClass;
        vm.getFormatoMonetario = getFormatoMonetario;
        vm.getFormStyle        = getFormStyle;
        vm.getInputStyle       = getInputStyle;
        vm.getButtonStyle      = getButtonStyle;
        vm.getLabelStyle       = getLabelStyle;

        /**
         * ----
         * init
         * ----
         */
        function init() {

            if (!execOnce) {

                execOnce = true;

                PedidosResource.consultarStatusPedido().getList().then(function (response) {
                    vm.listaStatusPedido = response.data;
                });

                PedidosResource.consultarSituacaoPedido().getList().then(function (response) {
                    vm.listaSituacao = response.data;
                });

                PedidosResource.consultarMotivoRecusa().getList().then(function (response) {
                    vm.listaMotivoRecusa = response.data;
                });

                PedidosResource.consultarSubmotivoRecusa().getList().then(function (response) {
                    vm.listaSubmotivoRecusa = response.data;
                });

                // vm.consultar();
            }

            // limpar os campos
            vm.pedido        = undefined;
            vm.listaPedidos  = [];
            vm.listaSituacao = [];

            // Setando tab inicial
            changeTab("proposta");
            vm.activeTab = "proposta";

            // Setando formulário padrão
            vm.formPropostaActive = 'aprovar';

            mask.add('guid', '********-****-****-****-************');
            mask.add('protocolo', '***-***-********-********');
            mask.add('processo', '9999999999');
            mask.add('cpf', '999.999.999-99');
            mask.add('inteiro4', '9999');
            mask.add("inteiro10", "9999999999");
            mask.add("money", '999.999.999.999,00');

        }
        init();

        /**
         * ----------------
         * Consultar pedido
         * ----------------
         */
        function consultar() {
            if (vm.pedido) {

                if (vm.pedido.cpfPoupador) {

                    if (!_validarCpf(vm.pedido.cpfPoupador)) {
                        growl.error("O CPF informado não é válido.");
                        return;
                    }

                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace(/\./g, '');
                    vm.pedido.cpfPoupador = vm.pedido.cpfPoupador.replace('-', '');
                }

                if(vm.pedido.dateCadastro) {
                    var dataAtual = new Date();
                    var dataInformada = vm.pedido.dateCadastro;

                    if (dataInformada > dataAtual) {
                        growl.error("A data informada não pode ser maior que a data atual.");
                        return;
                    }

                    vm.pedido.dataCadastro = $filter('date')(new Date(vm.pedido.dateCadastro), 'dd/MM/yyyy');
                }
            }

            var URL = window.config.paths.server;

            _consultarPedidos(10000, vm.pedido);

        }

        /**
         * ---------------
         * Carrega ngTable
         * ---------------
         */
        function _carregarTabelaPedidos(listaPedidos) {
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
         * ------
         * limpar
         * ------
         * Limpa formulário de pesquisa
         */
        function limpar() {
            init();
        }

        /**
         * ---------
         * changeTab
         * ---------
         * Modifica a aba ativa
         */
        function changeTab(tabName) {
            vm.tabName = tabName;
        }

        /**
         * -----------
         * getTabClass
         * -----------
         * Ativa ou desativa a aba através da mudança de classe
         */
        function getTabClass(tabName) {
            return vm.tabName === tabName
                ? "active"
                : "disabled";
        }

        /**
         * ----------------
         * consultarPorGuid
         * ----------------
         */
        function consultarPorGuid(guidPedido) {

            // Se for retornado da base...
            PedidoService.consultarPedido(guidPedido)
                .then(function(response) {

                    // Setamos o pedido selecionado
                    vm.pedidoSelecionado = response.data;

                    // Busca AnalisePedidoHabilitacao para o pedido
                    vm.buscarAnalisePedido(vm.pedidoSelecionado.cdPedidoHabilitacao);

                    // Alteramos a aba de apresentação para "detalhe"
                    vm.changeTab("detalhes");
                    vm.activeTab = "Detalhes";

                })
                .catch(function(err) {
                    console.log(err);
                })
        }

        /**
         * -----------------
         * _consultarPedidos
         * -----------------
         * consulta todos os pedidos cadastrados
         */
        function _consultarPedidos(limit, params) {

            PedidoService.consultarPedidos(limit, params)
                .then(function(response) {
                    vm.pedidosCadastrados = response.data;

                    if (response.status == 200) {
                        vm.listaPedidos = response.data;
                        _carregarTabelaPedidos(vm.listaPedidos);
                    }
                    else {
                        response.data != undefined
                            ? growl.error(response.data.message.message)
                            : growl.error(response.statusText);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * ----------------
         * _consultarPedido
         * ----------------
         * consulta pedido pelo guidPedido
         */
        function _consultarPedido(guidPedido) {
            if (guidPedido) {
                PedidoService.consultarPedido(guidPedido)
                    .then(function(response) {
                        vm.pedidoSelecionado = response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            }
        }

        /**
         * -----------
         * pedidosView
         * -----------
         */
        function pedidosView() {
            vm.changeTab('pedidos');
            vm.activeTab = 'pedidos';
        }

        /**
         * ------------
         * detalhesView
         * ------------
         */
        function detalhesView() {
            vm.changeTab('detalhes');
            vm.activeTab = 'detalhes';
        }

        /**
         * ------------
         * processoView
         * ------------
         */
        function processoView() {
            vm.changeTab('processo');
            vm.activeTab = 'processo';
        }

        /**
         * ------------------
         * dadosBancariosView
         * ------------------
         */
        function dadosBancariosView() {
            vm.changeTab('dadosbancarios');
            vm.activeTab = 'dadosbancarios';
        }

        /**
         * --------------
         * documentosView
         * --------------
         */
        function documentosView() {
            vm.changeTab('documentos');
            vm.activeTab = 'documentos';
        }

        /**
         * ------------
         * propostaView
         * ------------
         */
        function propostaView() {
            vm.changeTab('proposta');
            vm.activeTab = 'proposta';
        }

        /**
         * --------------
         * pagamentosView
         * --------------
         */
        function pagamentosView() {
            vm.changeTab('pagamentos');
            vm.activeTab = 'pagamentos';
        }

        /**
         * ---------------
         * downloadArquivo
         * ---------------
         */
        function downloadArquivo(gridPedido, codigoArquivo) {

            PedidosResource.obterArquivo(gridPedido, codigoArquivo).get().then(function (response) {
                Util.gerarBase64Arquivo(response.data.conteudo, 'application/pdf', response.data.nomeArquivo);
            })
            .catch(function (erro) {
                growl.error(erro.data.message);
            });
        }

        /**
         * -----------------
         * limparFormAprovar
         * -----------------
         */
        function limparFormProposta(force) {
            if (force || confirm("Deseja limpar o formulário?")) {
                vm.propostaAcordo = {};
            }
        }

        /**
         * -----------------
         * confirmarProposta
         * -----------------
         * Confirma proposta de acordo
         */
        function confirmarProposta() {

            // valida se os campos obrigatórios foram informados
            if (!isCamposInformados()) {
                return;
            }

            // validas se os campos informados estão válidos
            if (!isCamposValidos()) {
                return;
            }

            // Confirmando proposta de acordo
            if (confirm('deseja salvar o acordo?')) {

                // Montando proposta de acordo
                vm.propostaAcordo.guidPedido = vm.pedidoSelecionado.cdPedidoHabilitacao;

                vm.propostaAcordo.resultado = vm.getModalidade() == 'aprovar'
                    ? 'PROPOSTA_DE_ACORDO'
                    : 'PROPOSTA_DE_ACORDO_COM_VALOR_DIVERGENTE_SIMULADO';

                // Parsing dos valores para Double
                vm.propostaAcordo.proposta.valorTotalAcordo        = Util.stringToDouble(vm.propostaAcordo.proposta.valorTotalAcordoFormatado);
                vm.propostaAcordo.proposta.valorPoupador           = Util.stringToDouble(vm.propostaAcordo.proposta.valorPoupadorFormatado);
                vm.propostaAcordo.proposta.valorHonorariosAdvogado = Util.stringToDouble(vm.propostaAcordo.proposta.valorHonorariosAdvogadoFormatado);
                vm.propostaAcordo.proposta.valorReembolsoCustas    = Util.stringToDouble(vm.propostaAcordo.proposta.valorReembolsoCustasFormatado);
                vm.propostaAcordo.proposta.valorParcela            = Util.stringToDouble(vm.propostaAcordo.proposta.valorParcelaFormatado);
                vm.propostaAcordo.proposta.valorHonorariosFebrapo  = Util.stringToDouble(vm.propostaAcordo.proposta.valorHonorariosFebrapoFormatado);

                /**
                 * Verificando situação interna do pedido
                 */
                if (vm.formPropostaActive.toLowerCase() === 'aprovar') {
                    vm.propostaAcordo.situacaoInterna = 1;
                }

                if (vm.formPropostaActive.toLowerCase() === 'ressalva') {
                    vm.propostaAcordo.situacaoInterna = 2;
                }

                if (vm.formPropostaActive.toLowerCase() === 'negar') {
                    vm.propostaAcordo.situacaoInterna = 3;
                }

                if (vm.propostaAcordo.proposta.dataPrimeiraParcela) {
                    vm.propostaAcordo.proposta.dataPrimeiraParcela = $filter('date')(new Date(vm.propostaAcordo.proposta.dataPrimeiraParcela), 'dd/MM/yyyy');
                }

                // Seta status da variável de confirmação de pagamento
                AcordoResource.cadastrarResultadoAnalisePedido().post(vm.propostaAcordo)
                    .then(function(response) {

                        if (response.status == 200) {
                            growl.success("Acordo confirmado com sucesso.");

                            // Limpa formulário de proposta
                            vm.limparFormProposta(true);

                            // Realiza novamente a consulta após salvar o acordo
                            consultarPorGuid(vm.pedidoSelecionado.cdPedidoHabilitacao);
                        }
                        else {
                            if (response.data != undefined) {
                                growl.error(response.data.message.message);
                            }
                            else {
                                growl.error(response.statusText);
                            }
                        }
                    })
                    .catch(function (erro) {
                        console.log(erro);
                    });
            }
        }

        /**
         * ------------------
         * isCamposInformados
         * ------------------
         */
        function isCamposInformados() {

            // Validando campos
            if (!vm.propostaAcordo.proposta.identificadorPropostaBanco) {
                growl.error("Informe o id da proposta.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorTotalAcordo) {
                growl.error("Informe o valor total do acordo.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorDestinadoPortador) {
                growl.error("Informe o valor destinado ao portador.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorHonorarioPatrono) {
                growl.error("Informe o valor destinado ao advogado.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorHonorarioInstituicao) {
                growl.error("Informe o valor de honorários da intituição.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorReembolsoCustas) {
                growl.error("Informe o valor de reembolso.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.valorParcela) {
                growl.error("Informe o valor da parcela.");
                return false;
            }

            if (!vm.propostaAcordo.proposta.dataPrimeiraParcela) {
                growl.error("Informe a data da primeira parcela.");
                return false;
            }

            return true;
        }

        /**
         * ---------------
         * isCamposValidos
         * ---------------
         */
        function isCamposValidos() {

            var dataHoje = new Date();
            var dataPrimeiraParcela = vm.propostaAcordo.proposta.dataPrimeiraParcela;

            if (dataPrimeiraParcela < dataHoje) {
                growl.error("A data da primeira parcela não pode ser menor que a data de hoje.");
                return false;
            }

            return true;
        }

        /**
         * -------------
         * negarProposta
         * -------------
         * Nega proposta de acordo
         */
        function negarProposta() {
            if (confirm('deseja negar o acordo?')) {
                vm.limparFormProposta(true);

                growl.success("Proposta negada com sucesso!");
            }
        }

        /**
         * -------------
         * getModalidade
         * -------------
         */
        function getModalidade() {
            if (vm.formPropostaActive === 'aprovar') {
                return "Aprovar";
            }
            if (vm.formPropostaActive === 'ressalva') {
                return "Aprovar com Ressalvas";
            }
            if (vm.formPropostaActive === 'negar') {
                return "Negar";
            }
        }

        /**
         * ------------------
         * getMOdalidadeClass
         * ------------------
         */
        function getModalidadeClass() {
            if (vm.formPropostaActive === 'aprovar') {
                return 'modalidade-aprovar';
            }
            if (vm.formPropostaActive === 'ressalva') {
                return 'modalidade-ressalva';
            }
            if (vm.formPropostaActive === 'negar') {
                return 'modalidade-negar';
            }
        }

        /**
         * -----------
         * _validarCpf
         * -----------
         */
        function _validarCpf(cpf) {

            cpf = cpf.split('.').join('');
            cpf = cpf.split('-').join('');

            var soma;
            var resto;

            soma = 0;

            if (cpf == "00000000000") {
                return false;
            }

            for (var i = 1; i <= 9; i++) {
                soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
            }
            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }

            if (resto != parseInt(cpf.substring(9, 10))) {
                return false;
            }

            soma = 0;

            for (i = 1; i <= 10; i++) {
                soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
            }
            resto = (soma * 10) % 11;

            if ((resto == 10) || (resto == 11)) {
                resto = 0;
            }

            if (resto != parseInt(cpf.substring(10, 11) )) {
                return false;
            }

            return true;
        }

        /**
         * ------------
         * _validarCnpj
         * ------------
         */
        function _validarCNPJ(cnpj) {

            cnpj = cnpj.replace(/[^\d]+/g,'');

            if(cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                return false;

            // Valida DVs
            var tamanho = cnpj.length - 2
            var numeros = cnpj.substring(0,tamanho);
            var digitos = cnpj.substring(tamanho);
            var soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != digitos.charAt(0)) {
                return false;
            }

            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            var pos = tamanho - 7;

            for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) {
                    pos = 9;
                }
            }

            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

            if (resultado != digitos.charAt(1)) {
                return false;
            }

            return true;
        }

        function getFormatoMonetario(valor, id) {

            if (valor) {
                var elemento = document.getElementById(id);
                var valor = elemento.value;

                valor = valor + '';
                valor = parseInt(valor.replace(/[\D]+/g,''));
                valor = valor + '';
                valor = valor.replace(/([0-9]{2})$/g, ",$1");

                if (valor.length > 6) {
                    valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                }

                elemento.value = valor;
            }
        }

        /**
         * -------------------
         * buscarAnalisePedido
         * -------------------
         */
        function buscarAnalisePedido(guidPedido) {

            PedidoService.buscarAnalisePedidoPorGuid(guidPedido)
                .then(function(response) {
                    vm.pedidoHabilitacao = response.data;

                    if (vm.pedidoHabilitacao) {

                        console.log('consultando proposta');

                        vm.buscarProposta(vm.pedidoHabilitacao.sqAnalisePedidoHabilitacao);
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * --------------
         * buscarProposta
         * --------------
         */
        function buscarProposta(sqProposta) {

            PedidoService.buscarProposta(sqProposta)
                .then(function(response) {
                    vm.propostaAcordo = response.data;
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        /**
         * ------------
         * getFormStyle
         * ------------
         */
        function getFormStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'background': '#f0f7da',
                    'border': '1px solid #a8bc96'
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'background': '#fce4ba',
                    'border': '1px solid #d89d5d'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'background': '#f2d5d5',
                    'border': '1px solid #e06969'
                }
            }
        }

        /**
         * -------------
         * getInputStyle
         * -------------
         */
        function getInputStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'border': '1px solid #a8bc96'
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'border': '1px solid #d89d5d'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'border': '1px solid #e06969'
                }
            }
        }

        /**
         * --------------
         * getButtonStyle
         * --------------
         */
        function getButtonStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'background': '#50754b',
                    'border': '1px solid #50754b',
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'background': '#c69323',
                    'border': '1px solid #c69323'
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'background': 'firebrick',
                    'border': '1px solid #e06969'
                }
            }
        }

        /**
         * -----------------
         * getInputTextColor
         * -----------------
         */
        function getLabelStyle() {
            if (vm.formPropostaActive === 'aprovar') {
                return {
                    'color': '#50754b',
                }
            }
            if (vm.formPropostaActive === 'ressalva') {
                return {
                    'color': '#c69323',
                }
            }
            if (vm.formPropostaActive === 'negar') {
                return {
                    'color': '#e06969',
                }
            }
        }
    }
}