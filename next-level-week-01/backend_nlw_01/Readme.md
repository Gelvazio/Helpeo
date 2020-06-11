# Comando para iniciar o server
npx ts-node src/server.ts

# Comando criar dados das tabelas
npm run knex:migrate

# Comando para atualizar os seeds 
npm run knex:seed

# Corrigir erro ao usar seed
Reiniciar package json
passo 1 rodar:

npm cache clean --force

passo 2 rodar 

deletar a pasta node_modules 

passo 3

rodar 
npm install

passo 4 testar de novo

# passo 2 corrigir erro knex 
1 - rodar:
npx knex migrate:rollback

2 - rodar:
npm run knex:migrate

3 - rodar:
npm run knex:seed




