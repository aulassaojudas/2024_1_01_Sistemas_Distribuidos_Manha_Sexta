## aula 03 - relacionado com o PPT 03

Nesta aula discutimos discutimos o padrão arquiterual REST , suas mensagens de status e JSON e instalamos o UUID 

UUID, sigla para Identificador Universal Único, é uma string de caracteres destinada a identificar unicamente recursos ou entidades em programação. Utilizados em desenvolvimento de software, os UUIDs são empregados para identificar de forma única registros em bancos de dados, objetos em sistemas operacionais, e mensagens em aplicações de mensageria, entre outros usos, através de algoritmos que asseguram sua unicidade, até mesmo em ambientes distribuídos.

Os UUIDs são representados por uma string de 32 ou 36 caracteres, formatada como 8-4-4-4-12. Podem ser gerados aleatoriamente ou a partir de informações fornecidas, como a data e hora atuais.

Existem diversas versões de UUID especificadas pelo IETF (Internet Engineering Task Force), incluindo:

- **Versão 1 (v1):** Baseada na data e hora atuais e no endereço MAC de uma interface de rede, garantindo unicidade temporal e espacial.
- **Versão 4 (v4):** Gerada a partir de informações aleatórias, sendo a mais comum devido à sua ampla aplicabilidade e garantia de unicidade em sistemas distribuídos.
- **Versão 3 (v3) e Versão 5 (v5):** Ambas geradas a partir de um nome e um valor de namespace, com a v5 utilizando o algoritmo SHA-1, garantindo unicidade dentro de um mesmo namespace e nome.
- **Versão 2 (v2):** Baseada na data e hora atuais, além do identificador de segurança do sistema, garantindo unicidade temporal e de segurança do sistema.

Cada versão possui propriedades e aplicações específicas, sendo a versão 4 a mais empregada devido à sua geração baseada em aleatoriedade, o que assegura a unicidade mesmo em ambientes distribuídos.

## Vantagens

Unicidade: O principal objetivo de se utilizar UUIDs é garantir que cada identificador gerado seja único. Isso é importante para aplicações distribuídas, onde é necessário garantir que não haja conflito de identificadores entre diferentes sistemas.
Não seguem uma sequência: UUIDs são gerados com base em informações aleatórias ou em informações específicas, como data e hora ou endereço MAC. Isso significa que eles não seguem uma sequência e são menos propensos a serem adivinhados.
Grande espaço de endereçamento: UUIDs são compostos por 128 bits, o que significa que existem 2^128 possíveis combinações. Isso torna muito improvável que dois UUIDs gerados sejam idênticos.

## Desvantagens

Tamanho: UUIDs são muito longos e podem consumir muito espaço de armazenamento. Além disso, eles podem ser menos legíveis do que outros tipos de identificadores.
Desempenho: Gerar e comparar UUIDs pode ser mais lento do que outros tipos de identificadores, pois eles são compostos por muitos bits.
Complexidade: UUIDs podem ser complexos de entender e trabalhar, especialmente para desenvolvedores iniciantes

## REST 

O Representational State Transfer, mais conhecido pela sigla REST, é fundamentalmente um conjunto de princípios de design destinados ao desenvolvimento de arquiteturas de software para sistemas distribuídos, particularmente aqueles que operam sobre comunicações em rede. 

Este modelo arquitetônico foi originalmente concebido por Roy Fielding, uma figura central na criação do protocolo HTTP, em sua tese de doutorado. Fielding propôs o REST como o modelo ideal para guiar a evolução da arquitetura da Web, especificamente para o desenvolvimento do protocolo HTTP.

O REST se destaca por promover a utilização de um conjunto de práticas que se alinham com os fundamentos da Web, facilitando a implementação de Web Services. Esse modelo oferece uma alternativa elegante e simplificada ao SOAP, tradicionalmente usado para esse propósito. Ao adotar os princípios REST, desenvolvedores conseguem integrar aplicações web de maneira mais natural, aproveitando as características inerentes ao protocolo HTTP e à arquitetura da Web.

A aplicação dos princípios REST em projetos de software não apenas potencializa a comunicação e integração entre diferentes sistemas na Web, mas também promove uma arquitetura que é simultaneamente robusta, flexível e adaptável às necessidades de escalabilidade e manutenção da moderna.

## Princípios do REST 

1. **Interface Uniforme:** A chave para a simplicidade do REST é a utilização de uma interface uniforme, o que facilita a comunicação entre o cliente e o servidor. Isso inclui o uso de URIs padronizadas para recursos, a manipulação de recursos através de representações, a utilização de métodos HTTP específicos (como GET, POST, PUT, DELETE) de forma padronizada, e a inclusão de hiperlinks em respostas para permitir a navegação entre estados ou recursos relacionados.

2. **Stateless (Sem Estado):** Cada requisição do cliente para o servidor deve conter todas as informações necessárias para compreender e completar a requisição. O servidor não armazena nenhum estado do cliente entre requisições. Isso aumenta a confiabilidade e a visibilidade, pois a falta de dependência de um estado de sessão permite que cada requisição seja tratada independentemente.

3. **Cacheável:** As respostas às requisições devem ser explícitas ao indicar se podem ou não ser armazenadas em cache. Se uma resposta for cacheável, o cliente tem o direito de reutilizar essa resposta para requisições equivalentes no futuro, o que melhora a eficiência e reduz a latência.

4. **Sistema em Camadas:** A arquitetura REST permite o uso de um sistema em camadas, o que significa que componentes intermediários podem ser colocados entre o cliente e o servidor. Esses componentes podem oferecer serviços como balanceamento de carga, cache, ou encriptação sem afetar a requisição ou a resposta. Isso melhora a escalabilidade ao permitir que a infraestrutura seja estendida ou modificada sem impactar o sistema como um todo.

5. **Código sob Demanda (opcional):** Este princípio, embora seja opcional, permite que o servidor estenda ou personalize a funcionalidade de um cliente enviando-lhe código executável ou scripts. Isso pode reduzir o número de recursos que o cliente precisa implementar inicialmente, aumentando a flexibilidade.

Implementar corretamente esses princípios em uma arquitetura RESTful garante que a aplicação seja bem adaptada à Web, aproveitando suas características fundamentais para criar sistemas distribuídos eficientes, escaláveis e fáceis de manter.

## aula 05

O processo de refatoração é uma prática essencial no desenvolvimento de software, visando melhorar a estrutura interna do código sem alterar seu comportamento externo. Recentemente, adotamos essa abordagem em nosso projeto, realizando uma série de melhorias significativas no código-base para aumentar a eficiência, a legibilidade e a manutenibilidade do sistema, sem modificar as funcionalidades existentes.

Os seguintes arquivos foram refatorados, com o objetivo de utilizar de forma completa o conceito de DTO 

### user.dto.js 
Foram implementados metódos setId(id), setEmail(email) e setPassword(password) que são responsáveis por validar o id, email e password 
    foi incluido um parametro criar que por padrão é false, esse parametro é um exemplo de condicional para uso de validações

### user.entity.js 
Os parametros foram convertidos para um objeto incrementando {}. 

### user.controller.js 
Foi retirada a linha const { GenericException } = require("../generic-exception.js");, uma vez que ainda não é aplicada
    no metódo createUser(req, res) foi implementado o try catch para capturar erros enviados pelo objeto userDTO

### user.service.js 
Os parametros dos métodos create e update foram substituidos pelo objeto DTO

### perfil
Foram feitas as mesmas alterações feitas no user, aplicando os DTOS nos arquivos, perfil, entity, perfile.dto, perfil.controller, perfil.service 
 
