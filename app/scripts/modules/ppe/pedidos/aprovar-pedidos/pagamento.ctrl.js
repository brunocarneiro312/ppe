module.exports = function(module) {

    'use strict';

    module.controller('PagamentoController', PagamentoController);

    function PagamentoController($scope,
                                 $uibModalInstance,
                                 items,
                                 growl,
                                 AcordoResource,
                                 ArquivoResource) {

        var vm = this;

        vm.fecharModalPagamento         = fecharModalPagamento;
        vm.confimarPagamento            = confimarPagamento;
        vm.removerComprovante           = removerComprovante;
        vm.verificaIdentificador        = verificaIdentificador;
        vm.teste                        = teste;

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
        }
        init();

        function fecharModalPagamento() {
            $uibModalInstance.dismiss();
        }

        function confimarPagamento() {
            AcordoResource.informarDocumento().withHttpConfig({transformRequest: angular.identity})
                .customPOST(vm.comprovante.arquivo, undefined, undefined, {'Content-Type': undefined})
                .then(function (response) {
                    if(response.status == 200) {
                        //recuperar os pag para atualizar a lista de pag
                        growl.success("Pagamento confirmado com sucesso!");
                        $uibModalInstance.close(true);
                    } else {
                        if(response.data != undefined) {
                            growl.error(response.data.message.message);
                        }else {
                            growl.error(response.statusText);
                        }
                    }
                })
                .catch(function (erro) {
                    growl.error(erro.data.message);
                });

            // Salvando arquivo de comprovante na base
            ArquivoResource.salvar(vm.comprovante.arquivo)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(err) {
                    console.log(err);
                });
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

        function teste() {
            // ArquivoResource.buscar(1)
            //     .then(function(response) {
            //         var file = new Blob([response.data], { type: 'application/pdf' });
            //         var url = (window.URL || window.webkitURL).createObjectURL(file);
            //         console.log(url);
            //     })
            //     .catch(function(err) {
            //         console.log(err)
            //     });

            ArquivoResource.download(62);

            ArquivoResource.buscar(62);
        }
    }
}