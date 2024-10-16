# 📝 Chatbot

🎯 Este projeto é referente ao frontend de uma aplicação com 3 seções de chats distintas de interação com IA, uma seção 
de lista de Insights que podem ser gerados através de API IA.


## 📝 Informações Adicionais

📌 Este projeto utiliza:
* Angular CLI: 17.3.9
* Typescript: 5.4.2
* HTML5
* SASS

📌 Para acessar a aplicação é necessário logar através de um e-mail válido (A validação do e-mail é feita através da biblioteca `Validators`). Devido a desacoplação com o backend, a aplicação aceita qualquer e-mail informado.

📌 Como o projeto foi desacoplado do backend, todo o gerenciamento do conteúdo de chat é feito via LocalStorage no navegador do usuário.

📌 A interação do chat foi alterada (devido a ausência do backend) para que a resposta seja `Resposta para a pergunta: {pergunta-usuario}`. Para a interação real com uma API IA, é necessário integração com o backend.

📌 Projeto desenvolvido com o [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.9.


## ⚙ Config e Pré-requisito
⚙ Node `20.13.1` ou superior.

⚙ [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.9 ou superior

⚙ Execute o comando `npm i` para instalar as dependências npm.


## ⌨️ Servidor de desenvolvimento
Execute o comando `npm start` serve para iniciar um servidor de desenvolvimento. Acesse através da URL http://localhost:4200/.

## 📦 Build
Execute `ng build` para criar o projeto. Os artefatos do build serão armazenados no diretório `dist/`

