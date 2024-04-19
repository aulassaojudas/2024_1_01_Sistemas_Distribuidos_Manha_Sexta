
### Introdução
1. **Ferramentas e Tecnologias:**
### NestJS

**NestJS** é um framework para construção de aplicações server-side em Node.js. É construído sobre o Express (um dos frameworks de servidor HTTP mais populares para Node.js) e opcionalmente pode ser configurado para usar Fastify, oferecendo um desempenho ainda melhor. NestJS oferece uma arquitetura de aplicação robusta e escalável que é inspirada no Angular.

#### Características Principais:
- **Arquitetura Modular:** Usa módulos para organizar o código de forma clara, facilitando a manutenção e a escalabilidade da aplicação.
- **Injeção de Dependência:** Integrado de forma nativa, o sistema de injeção de dependência permite construir código altamente testável e modular.
- **Suporte a TypeScript:** Escrito em TypeScript, ele oferece tipagem forte e ferramentas poderosas de tempo de compilação que ajudam a prevenir erros comuns durante o desenvolvimento.
- **Ecossistema Rico:** Possui integrações diferentes bibliotecas e ferramentas, como TypeORM para acesso a banco de dados e Passport para autenticação.

### MySQL

**MySQL** é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, muito popular na indústria de tecnologia. É conhecido por sua confiabilidade, robustez e facilidade de uso. Muitas aplicações web de grande escala usam MySQL como componente chave de suas estruturas de armazenamento de dados.

#### Características Principais:
- **Compatibilidade:** MySQL suporta todas as principais plataformas, incluindo Linux, Windows, OS X, etc.
- **Facilidade de Uso:** Oferece uma estrutura simples para criação, atualização e gestão de bancos de dados relacional.
- **Performance:** É muito eficiente em lidar com grandes bases de dados, oferecendo uma excelente performance e velocidade.
- **Segurança:** Possui um sólido sistema de segurança que inclui autenticação baseada em host, e suporte a SSL para conexões criptografadas.
- **Flexibilidade:** Suporta várias engines de armazenamento, cada uma otimizada para diferentes tipos de necessidades de aplicação.

2. **Visão Geral do Projeto:** 
O projeto de software proposto tem como objetivo desenvolver uma aplicação colaborativa dedicada à análise de documentos acadêmicos. Esta aplicação é desenhada especificamente para atender às necessidades de pesquisadores e acadêmicos, facilitando a colaboração e possibilitando uma análise detalhada dos documentos com base em descritores específicos. Vale destacar que a ferramenta oferece um método de análise documental, o que permite aos usuários visualizar correlações entre os documentos e os descritores.

Funcionalidades Principais:

1. **Sistema de Autenticação e Autorização** A autenticação diferencia os direitos dos usuários baseado em seus papéis, que são: proprietário do projeto, o qual tem controle total sobre os documentos e projetos que gerencia; usuários convidados, que podem ser convidados pelo proprietário para colaborar em um ou mais projetos específicos, tendo direitos limitados à edição e inclusão de novos documentos.
  
2. **Filiação** Cada usuário possui uma filiação ou mais, que representa uma relação com uma instituição de ensino, instituto de pesquisa ou outro orgão que o usuário tenha uma relação de pesquisa. 

3. **Descritor** Funciona como o núcleo da análise documental, sendo um documento base que só pode ser editado ou modificado pelo proprietário do projeto. Este documento evolui ao longo do tempo, incorporando novos termos e relações baseadas na análise de documentos comparados, servindo como a base para aestabelecer a correlação entre documentos do projeto.

4. **Projetos** Projetos são conjuntos de documentos submetidos à análise, isto é, uma coleção de trabalhos acadêmicos, como artigos, teses, dissertações, que serão correlacionadas a um ou mais descritores.

5. **Convites** Os proprietários de projetos podem enviar convites por e-mail para outros usuários para colaborarem em seus projetos, estabelecendo uma rede de trabalho colaborativo.

6. **Correlação** A aplicação emprega um método sofisticado para correlacionar os descritores com os documentos. O método envolve a remoção de StopWords, criação de dicionários de palavras, e a construção de grafos que representam a relação entre palavras dentro de cada documento. A comparação desses grafos com o do descritor permite determinar a correlação entre o documento e o descritor, o que facilita a análise acadêmica profunda dos textos.

### Configuração do Ambiente
Criar uma aplicação usando NestJS começa com a instalação do Node.js, pois o NestJS é um framework que roda em cima do ambiente de execução do Node.js.

### Instalação do Node.js
1. **Baixe o Node.js:**
   - Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
   - Escolha a versão recomendada para a maioria dos usuários (LTS - Long Term Support) e baixe o instalador apropriado para seu sistema operacional (Windows, macOS, ou Linux).

2. **Execute o Instalador:**
   - **Windows:** Execute o arquivo `.exe` baixado e siga as instruções do assistente de instalação. Certifique-se de marcar a opção para instalar o `npm` (Node Package Manager) e adicionar o Node.js ao PATH do sistema.
   - **macOS:** Monte o arquivo `.pkg` baixado e siga as instruções na tela para instalar o Node.js.
   - **Linux:** Dependendo da distribuição, você pode usar um gerenciador de pacotes (como `apt` para Ubuntu) com um comando como `sudo apt install nodejs npm`, ou seguir os passos para a instalação via pacote binário disponível no site.

3. **Verifique a Instalação:**
   - Abra um terminal ou prompt de comando e digite `node -v` e `npm -v` para verificar se o Node.js e o npm foram instalados corretamente. Você deverá ver os números das versões instaladas.

### Instalação do NestJS
1. **Instalação do CLI do NestJS:**
   - Com o Node.js e o npm instalados, você pode instalar o Nest CLI (Command Line Interface) globalmente em seu sistema. No terminal, execute:
     ```
     npm install -g @nestjs/cli
     ```
   - Isso permitirá que você utilize o CLI do NestJS para criar e gerenciar projetos NestJS facilmente.

2. **Criação de um Novo Projeto:**
   - Para iniciar um novo projeto, use o comando:
     ```
     nest new nome-do-projeto
     ```
   - Substitua `nome-do-projeto` pelo nome que deseja dar ao seu projeto. O CLI fará algumas perguntas sobre preferências de instalação, como o gerenciador de pacotes (npm ou yarn), e então configurará o projeto para você.

3. **Estrutura do Projeto:**
   - Uma vez criado, navegue até o diretório do projeto (`cd nome-do-projeto`) e você verá a seguinte estrutura básica:
     - `src/`: Diretório onde reside o código fonte do projeto.
     - `node_modules/`: Diretório com todas as bibliotecas necessárias.
     - `package.json`: Arquivo com as dependências do projeto e scripts de comando.
     - `tsconfig.json`: Configurações do TypeScript para o projeto.

4. **Execução do Projeto:**
   - Dentro do diretório do projeto, execute o servidor de desenvolvimento com:
     ```
     npm run start:dev
     ```
   - Isso iniciará o servidor NestJS em modo de desenvolvimento, geralmente acessível em `http://localhost:3000`. Qualquer alteração no código será automaticamente refletida graças ao hot-reloading.

### Construção do Backend
1. **Criação do sistema de autenticação** CRUD de login e filiação

   **Modelagem de Dados:** 
   O código que você apresentou define duas tabelas em um banco de dados, utilizando a sintaxe do dbdiagram.io, uma ferramenta de diagramação para esquemas de banco de dados. Vamos descrever cada tabela e seus campos:
   
   ### Tabela `login`
      1. **id_login**: Este campo é a chave primária da tabela, o que significa que cada valor nesse campo é único para cada registro. Além disso, este campo é configurado para autoincremento, indicando que ele gera automaticamente um novo valor sequencial para cada novo registro inserido.
      2. **email**: Campo do tipo `varchar(40)` destinado a armazenar endereços de email. O modificador `unique` garante que cada email inserido nesse campo seja único em toda a tabela, evitando duplicidade de emails.
      3. **senha**: Um campo do tipo `varchar(60)`, usado para armazenar a senha do usuário. O tamanho permite armazenar senhas que possam ter sido hashizadas.
      4. **nome**: Campo do tipo `varchar(40)`, usado para armazenar o nome do usuário.
   
   ### Tabela `filiacao`
      1. **id_perfil**: Chave primária da tabela, similar ao `id_login` da tabela `login`, também configurado para autoincremento.
      2. **id_login**: Este campo serve como uma chave estrangeira que referencia o `id_login` da tabela `login`. Isso estabelece uma relação entre as duas tabelas, onde cada registro na tabela `filiacao` está associado a um registro na tabela `login`. O modificador `unique` neste campo indica que cada `id_login` só pode aparecer uma vez nesta tabela, ou seja, cada usuário tem no máximo um perfil associado nesta tabela.
      3. **nome**: Do tipo `varchar(40)`, armazena o nome que pode ser diferente do nome na tabela `login`.
      4. **endereco**: Campo do tipo `varchar(40)`, usado para armazenar o endereço do usuário.
      5. **cidade**: Campo do tipo `varchar(30)`, usado para registrar a cidade do usuário.
      6. **bairro**: Campo do tipo `varchar(30)`, usado para registrar o bairro onde o usuário reside.
      7. **uf**: Campo do tipo `varchar(2)`, usado para registrar a unidade federativa (estado) do usuário.
   
   Essas tabelas são projetadas para armazenar informações de login e perfil de filiação de usuários, com a tabela `filiacao` estendendo as informações da tabela `login` através de uma relação de chave estrangeira.

2. **Criação de Módulos:** Ensinar como criar módulos em NestJS para diferentes funcionalidades, como autenticação e gestão de usuários.export interface RootObject 151677303809
3. **Serviços e Controladores:** Explicar como criar serviços para a lógica de negócios e controladores para lidar com as requisições HTTP.
4. **Conexão com o Banco de Dados:**
   - **TypeORM ou Sequelize:** Introdução ao ORM, configuração e uso para interagir com o banco de dados MySQL.
   - **Implementação de Operações CRUD:** Criação, leitura, atualização e exclusão de usuários no banco de dados.

### Implementação de Autenticação
1. **Estratégias de Autenticação:** Discussão sobre diferentes estratégias (local, JWT, OAuth).
2. **Sessões e Segurança:** Como gerenciar sessões de usuário e implementar medidas de segurança básicas.
3. **JWT (JSON Web Tokens):** Configuração e utilização de JWT para autenticação e autorização.

### Testes
1. **Testes Automatizados:** Introdução aos testes no NestJS.
2. **Escrevendo Testes para CRUD e Autenticação:** Como escrever testes para verificar a funcionalidade e a segurança do sistema de login.

### Front-end Básico (opcional)
1. **Integração com o Front-end:** Caso seja relevante, demonstrar como conectar um front-end simples (Angular, React, etc.) com o back-end NestJS.
2. **Formulários de Login e Registro:** Criação de interfaces de usuário para as funcionalidades de login e registro.

### Conclusão
1. **Revisão da Aula:** Recapitular os principais pontos e aprendizados da aula.
2. **Desafios e Projetos Futuros:** Sugerir maneiras de expandir o projeto, como adicionar funcionalidades de recuperação de senha ou integração com redes sociais.
3. **Q&A:** Sessão de perguntas e respostas para esclarecer dúvidas dos alunos.

### Recursos Adicionais
1. **Material de Leitura:** Fornecer links e recursos para estudo adicional.
2. **Código Fonte:** Disponibilizar o código desenvolvido durante a aula para referência futura.

Este roteiro serve como uma estrutura abrangente para sua aula, garantindo que os alunos obtenham uma compreensão clara e prática de como desenvolver um sistema de login utilizando NestJS e MySQL.