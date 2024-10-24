# Configurações do Type Script

1. Inicializar um projeto Node.js
2. Instalar o TypeScript
   2.1. Instalação global - `npm install -g typescript` <!--! Não é muito recomendado instalar globalmente -->
   2.2. Instalação local (dentro do projeto) - `npm install typescript -D`
3. Utilizar o TypeScript instalado para transpilar nosso código (Converter nosso código TS para JS) - `npx tsc index.ts`<!--? index.ts = nome do arquivo TypeScript -->
4. ficar atualizando automaticamente - `npx tsc index.ts --watch`
5. Inicializa todas as configurações do TypeSript dentro do projeto (JavaScript) - `npx tsc --init`
6. Após inicializar todas as configurações pode apenas utilizar para atualiza-las - `npx tsc`
7. ficar atualizando automaticamente após as configurações `npx tsc --watch`
