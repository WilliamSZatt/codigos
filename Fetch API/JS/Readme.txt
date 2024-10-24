## Função assíncrona para obter dados de um CEP:

A função é declarada como assíncrona utilizando async, permitindo o uso do await dentro dela para lidar com operações assíncronas.

## Faz uma requisição HTTP usando fetch:

A função fetch é chamada com a URL da API do ViaCEP. Esse comando faz uma requisição para obter informações sobre o CEP "95333000".

O await é usado para pausar a execução até que a resposta da requisição esteja disponível.

## Converte a resposta da requisição para JSON:

A função .json() converte a resposta da requisição (que inicialmente está em formato JSON bruto) em um objeto JavaScript.

O await é utilizado aqui também para garantir que o código aguarde a conversão completa dos dados antes de continuar.

## Exibe os dados retornados no console:

O comando console.log(dados) imprime os dados recebidos da API no console, permitindo que o desenvolvedor veja as informações do CEP retornado.

## Captura e trata qualquer erro:

O bloco try/catch é usado para lidar com possíveis erros.

Se ocorrer algum erro durante a requisição ou no processo de conversão dos dados, o catch captura esse erro e exibe uma mensagem no console, junto com detalhes do erro.

## Executa o bloco finally:

O bloco finally é executado independentemente de ter ocorrido um erro ou não.

Nesse caso, ele simplesmente exibe a mensagem "Terminou a requisição", indicando que o processo de requisição foi concluído.

## Chama a função para executar a requisição:

A função obterDadosCEP() é chamada para iniciar a execução da requisição e o processamento dos dados do CEP.