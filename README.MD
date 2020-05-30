Verificar se existe o node instalado
node -v
se precisar instalar o curl = sudo apt install curl
-- ativar o repositorio
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
-- instalar o node
sudo apt-get install -y nodejs
-- verificar a versao do npm
npm -v
-- instalar o yarn
sudo npm install yarn -g
yarn -v

-- gerar o editor config
-- iniciar o projeto
yarn init -y
-- adicionar express
yarn add express
-- adicionar o typescript
yarn add typescript -D
-- iniciar o typescript
yarn tsc --init
-- configurar o tsconfig
-- adicionar ao nosso projeto types
yarn add @types/express -D
-- gerar o typescript para javascript
yarn tsc
-- aprendeu como rodar um servidor
node dist/server.js
-- instalar o ts-node-dev
yarn add ts-node-dev -D
-- adicionou os scripts build e dev:server no package.json
-- adicionar o eslint
yarn add eslint -D
yarn eslint --init
-- configurar o vs code
"[javascript]":{

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true,

}

},

"[javascriptreact]":{

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true,

}

},

"[typescript]":{

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true,

}

},

"[typescriptreact]":{

"editor.codeActionsOnSave": {

"source.fixAll.eslint": true,

}

},

-- adicionar uma import para o typescript
yarn add -D eslint-import-resolver-typescript

-- adicionar o prettier
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

-- configurei o prettier
prettier.config.js

-- configurei o eslintrc

-- configurei launch json


PATTERN REPOSITORY/ SERVICE
boilerplate = conjunto de arquivos

yarn add reflect-metadata
yarn add typeorm
