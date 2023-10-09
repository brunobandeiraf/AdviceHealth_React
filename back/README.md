# API NODE
Backend em NodeJS, utilizando Express e Knex. 

## 🛠 Stack utilizada
* `Node.js` 
* `Express`
* `Knex`
* `Sqlite3`
* `Jest.js`

## Instalação do projeto
* Baixe o repositório do projeto, navegue via terminal até a pasta e instale as dependências necessárias com `npm install`.
* Confira se a pasta `node_modules` foi criada na raiz do projeto.

## Como rodar a API
* No terminal, acesse a pasta raiz do projeto e insira o comando `npm run dev` para rodar o projeto em modo de desenvolvimento. Você deverá ver no terminal a seguinte mensagem:
  ```
  > api-js-local@1.0.0 dev
  > nodemon server.js

  [nodemon] 2.0.16
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Servidor escutando em http://localhost:3000
  ```

* Os recursos da API poderão ser acessados a partir da *base URL* `http://localhost:3000`.
  > Esta API está programada para ser acessada a partir de `http://localhost:3000`. Certifique-se de que não existem outros recursos ocupando a porta `3000` antes de subir o projeto.

## RUNNER
- node src/server.js
- npm start 
- npm run dev
- npm run migrate

## Endpoints

A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:

`/users`
* `GET /`
* `GET /users/:id`
* `POST /users`
* `PUT /users/`
* `PATCH /users/avatar`

`/users`
* `POST /sessions`

### KNEX
Create migration
- npx knex migrate:make migrationName
Run latest migration
- npx knex migrate:latest

### LIBS - INSTALL
- npm init -y
- npm install express --save
- npm install nodemon --save-dev
- npm install express-async-errors --save
- npm install sqlite3 sqlite --save
- npm install bcryptjs --save
- npm install knex --save
- npx knex init
- npm install jsonwebtoken
- npm install multer 
- npm install cors

### TESTS
- npm install --save-dev jest
- npx jest --init
- npm test

### DEPLOY
- npm install dotenv --save 
- npx pm2 init 
- npm install pm2