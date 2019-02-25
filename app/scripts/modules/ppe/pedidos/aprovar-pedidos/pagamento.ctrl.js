module.exports = function(module) {

    'use strict';

    module.controller('PagamentoController', PagamentoController);

    function PagamentoController($scope,
                                 $uibModalInstance,
                                 items,
                                 growl,
                                 AcordoResource,
                                 ArquivoResource,
                                 PagamentosResources) {

        var vm = this;

        vm.fecharModalPagamento         = fecharModalPagamento;
        vm.confimarPagamento            = confimarPagamento;
        vm.removerComprovante           = removerComprovante;
        vm.verificaIdentificador        = verificaIdentificador;
        vm.pagamento                    = {};
        vm.comprovante                  = {};
        vm.exibirComprovantePagamento   = false;
        vm.situacao                     = items.situacao;
		vm.isArquivoSelecionado         = false;
		vm.changeFile                   = changeFile;
		
		/**
		 * Altera o estado do arquivo para "selecionado"
		 */
		function changeFile() {
			vm.isArquivoSelecionado = true;
		}

        if(vm.situacao === 'aprovar') {
            vm.tituloTela = 'Comprovante';
            vm.tituloCampo = 'Identificador do Comprovante:';
        } else {
            vm.tituloTela = 'Racional de cálculo';
            vm.tituloCampo = 'Identificador do Racional de Cálculo:';
        }


        $scope.adicionarArquivo = adicionarArquivo;

        function init() {
            vm.pagamento = items.pagamento;
            vm.guid      = items.guidPedido;
            var pagamento = Util.getObjeto("pagamento");
            var guidPedido = Util.getObjeto("guidPedido");
        }
        init();

        function fecharModalPagamento() {
            $uibModalInstance.dismiss();
        }

        function confimarPagamento() {

            vm.comprovante.guidPedido = Util.getObjeto("guidPedido");

            // Salvando arquivo de comprovante na base
            ArquivoResource.salvar(vm.comprovante)
                .then(function(response) {
                    growl.success("Arquivo " + vm.comprovante.nomeArquivo + " enviado com sucesso.");

                    var dataArray = vm.pagamento.dtVencimentoParcela.split('-');
                    var dataFormatada = dataArray[2] + '/' + dataArray[1] + '/' + dataArray[0];

                    var cdDocumento = response.data.resultado.cdDocumento;

                    var pagamentoDaParcela = {
                        'sqConta':            Util.getObjeto('sqConta'),
                        'dataPagamento':      dataFormatada,
                        'descricaoPagamento': 'pagamento da parcela de número ' + vm.pagamento.numeroOrdemParcela,
                        'idDocumento':        vm.comprovante.identificadorDocumento,
                        'idParcela':          vm.pagamento.sqParcelaProposta,
                        'situacaoPagamento':  1,
                        'valorPagamento':     vm.pagamento.vlParcelaProposta,
                        'cdDocumento':        cdDocumento
                    };

                    // Gerando pagamento de parcela
                    PagamentosResources.informarPagamento(pagamentoDaParcela)
                        .then(function(response) {
                            growl.success("Pagamento efetuado com sucesso");
                            console.log(response.data);

                        })
                        .catch(function(err) {
                            growl.error("Falha ao criar pagamento");
                            console.log(err);
                        });

                })
                .catch(function(err) {
                    growl.error("Erro ao enviar arquivo " + vm.comprovante.nomeArquivo);
                });

            fecharModalPagamento();
        }

        /**
         * --------------------
         * confirmarComprovante
         * --------------------
         */
        function confirmarComprovante() {

        }

        function adicionarArquivo(element) {

            var identificadorDocumento = vm.comprovante.identificadorDocumento;
            if(identificadorDocumento == undefined || identificadorDocumento == null || identificadorDocumento == '') {
                growl.warning("Informe o identificador do arquivo.");
                return;
            }

            var scope = angular.element(element).scope();
            var arquivo = element.files[0];
            //o tamanho máximo do arquivo 5MB
            var tamanhoMaximo = 5242880;

            if (arquivo.size > tamanhoMaximo) {
                growl.warning("Tamanho máximo ultrapassado, o limite máximo de 5 MB.");
                return;
            }
			
			if (arquivo.name.toUpperCase().indexOf(".PDF") == -1){
                growl.warning("O arquivo deve ser um PDF!");
                return;
			}

            var nomeArquivo = arquivo.name;

            var formData = new FormData();
            formData.append('file', arquivo);
            formData.append('idPagamento', vm.pagamento.sqPagamento);
            formData.append('identificadorComprovante', identificadorDocumento);

            vm.exibirComprovantePagamento = true;
            vm.comprovante.nomeArquivo = nomeArquivo;
            vm.comprovante.arquivo = formData;

            //aplica scopo criado nada tela para tirar o delay do input 'FILE' na hora de selecionar o arquivo
            scope.$apply();
        }

        function verificaIdentificador() {
            if(!vm.comprovante.identificadorDocumento) {
                growl.warning("Informe o identificador do arquivo.");
                return false;
            }
			else {
				vm.isArquivoSelecionado = true;
			}
        }

        function removerComprovante() {
            vm.exibirComprovantePagamento = false;
            vm.comprovante = {};
        }
    }
}