# Desafio NODEJS (Integrações avançado)

O programa deve ser uma aplicação web em Node.js que utilize o Express.js e a biblioteca Puppeteer.js para realizar web scraping. O objetivo é raspar dados de notícias do G1, armazenar esses dados em um banco de dados MySQL e disponibilizá-los através de uma API REST.

A API deve ter uma rota /noticia_g1 que aceite requisições do tipo POST, onde o parâmetro URL deve ser fornecido com o link da notícia do G1 a ser raspada. A rota deve realizar o scraping dos dados do título e subtítulo da notícia e salvá-los em uma tabela chamada "noticia" no banco de dados. A tabela deve conter as colunas id, title e subtitle.

# Documentação da API

## Introdução

Esta API permite realizar web scraping de notícias do G1 e armazenar os dados em um banco de dados MySQL. A API possui a seguinte rota:

- /noticia_g1 (POST): Realiza o scraping de dados de uma notícia do G1.

## Formato de entrada

### Rota /noticia_g1 (POST)
URL: O link da notícia do G1 a ser raspada. Deve ser enviado como parâmetro no corpo da requisição.

## Formato de saída

### Rota /noticia_g1 (POST)
A rota /noticia_g1 retornará um objeto JSON contendo o título e o subtítulo da notícia raspada.

## Erros
Em caso de erros, a API retornará uma resposta com o código de status apropriado e uma mensagem de erro.

## Tecnologias Utilizadas

- MySQL-all-in-one (versão ^4.6.1)
- Node.js (versão 18.16.0)
- Express.js (versão ^4.18.2)
- Express-async-errors (versão ^3.1.1)
- Typescript (versão ^5.0.4)
- Puppeteer (versão ^20.2.1)

## Instalação e Execução Local

1. Clone o repositório: `git clone https://github.com/DouglasK20/desafio-web-scrapping.git`
2. Acesse o diretório do projeto: `cd desafio-web-scrapping`
3. Instale as dependências: `npm install`
4. Execute o projeto: `npm run dev`
5. O servidor estará em execução em `http://localhost:3000/noticia_g1?noticia=`
6. Adicione a url da noticia do g1.

## Banco de Dados

### Estrutura do Banco de Dados

A estrutura do banco de dados é composta pela tabela noticia:

"id": é uma coluna do tipo INT que armazena um ID único para cada notícia.

"title": é uma coluna do tipo VARCHAR(100) que armazena o título da notícia, com no máximo 100 caracteres.

"subtitle": é uma coluna do tipo VARCHAR(100) que armazena o subtítulo da notícia, com no máximo 100 caracteres.

```sql
-- Dump SQL da tabela

CREATE TABLE noticia ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL, 
    subtitle VARCHAR(100) NOT NULL
);