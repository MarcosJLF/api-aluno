 Interface de Programação de Aplicações, que permite diferentes sistemas se comunicarem.
 
: Transferência de Estado Representacional, um estilo arquitetural que usa protocolos HTTP.

:
Usa métodos HTTP: GET, POST, PUT, DELETE.

Comunicação sem estado: cada requisição é independente.

Estrutura baseada em recursos (/alunos, /professores).

Dados geralmente são enviados e recebidos no formato JSON.

O é um padrão de arquitetura que organiza o código em três camadas principais::

Responsável por interagir com o banco de dados.

Define a estrutura dos dados e as regras de negócio.

Representado pelos schemas no MongoDB.
:
Responsável pela interface com o usuário.

Como estamos criando uma API RESTful, a "view" seria representada pelas respostas JSON.
:
Contém a lógica de aplicação.

Manipula as requisições HTTP e interage com os modelos para retornar as respostas apropriadas.
