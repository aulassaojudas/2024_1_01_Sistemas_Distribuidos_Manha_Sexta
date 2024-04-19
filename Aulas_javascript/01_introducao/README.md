## aula 02 - relacionado com o PPT 02
Nesta aula discutimos discutimos o HTTP, suas mensagens de status e JSON 

O Protocolo de Transferência de Hipertexto (HTTP) é um protocolo de camada de aplicação para transmissão de documentos hipermedia, como HTML. Ele foi desenvolvido para comunicação entre navegadores web e servidores na internet, mas também pode ser usado para outros propósitos. O HTTP segue um modelo de requisição-resposta entre um cliente e um servidor.

### Métodos HTTP
Os métodos HTTP definem ações desejadas a serem realizadas nos recursos especificados. Os principais métodos são:

- **GET:** Solicita a representação de um recurso específico. Requisições usando GET devem apenas recuperar dados e não têm efeito colateral.
- **POST:** Envia dados para serem processados (por exemplo, de um formulário) para o recurso especificado. Dados enviados com o método POST podem resultar na criação de um novo recurso.
- **PUT:** Substitui todas as representações atuais do recurso de destino com a carga de dados da requisição.
- **DELETE:** Remove um recurso específico.
- **HEAD:** Semelhante ao GET, mas solicita apenas a linha de status e cabeçalho da resposta, sem o corpo da resposta.
- **PATCH:** Aplica modificações parciais a um recurso.

### Status Code HTTP

Os status codes do HTTP são divididos em cinco classes, indicadas pelo primeiro dígito, e descrevem a resposta do servidor à requisição feita pelo cliente:

- **1xx (Informativo):** Indica que a requisição foi recebida e o processo está continuando.
  - **100 Continue:** O servidor recebeu os cabeçalhos da requisição e o cliente deve proceder a enviar o corpo da requisição.

- **2xx (Sucesso):** Indica que a ação foi recebida, entendida e aceita com sucesso.
  - **200 OK:** A requisição foi bem-sucedida e a resposta contém o recurso solicitado.
  
- **3xx (Redirecionamento):** Indica que mais ações devem ser tomadas para completar a requisição.
  - **301 Moved Permanently:** O recurso solicitado foi movido permanentemente para uma nova URL fornecida na resposta.
  
- **4xx (Erro do Cliente):** Indica que a requisição contém uma sintaxe errada ou não pode ser processada.
  - **404 Not Found:** O servidor não encontrou nada correspondente ao URI da requisição.
  
- **5xx (Erro do Servidor):** Indica que o servidor falhou ao tentar processar uma requisição válida.
  - **500 Internal Server Error:** O servidor encontrou uma condição inesperada que o impediu de atender à requisição.

