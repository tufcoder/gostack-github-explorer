<h1 align="center">GITHUB EXPLORER</h1>

## Conteúdo

- [Introdução](#introdução)
- [Lista de Tarefas](#lista-de-tarefas)
- [Stack](#stack)
- [Basic Features](#basic-features)
- [New Features](#new-features)
- [Processo de Build](#processo-de-build)
- [Agradecimentos](#agradecimentos)

## Introdução

Aplicação criada dentro do bootcamp GoStack da @Rocketseat. As funcionalidades básicas estão descritas em [Basic Features](#basic-features).
<br>
Essa aplicação se conecta na `API do Github` disponível no endereço `https://api.github.com` para listar os repositórios de um autor.
<br>
Vamos utilizar a chave `repository_url` da API com o endereço `https://api.github.com/repos/{autor}/{repositório}` passando dentro do input o `autor/repositório` e listar o repositório pesquisado.
<br>
Exemplo: `facebook/react`
<br>
<br>
Adicionei duas novas features: disponíveis em [New Features](#new-features).

## Lista de tarefas

- [x] Versão Web - Basic Features
- [x] Personalizações - New Features:
  - [x] Não duplicar um repositório listado.
  - [x] Excluir um repositório listado.
  - [ ] Versão Mobile/Responsiva

## Stack

- NodeJS
- ReactJS
- TypeScript
- Styled Components

## Basic Features

Com o Github Explorer é possível:

* Utilizar a [API](https://api.github.com) do Github.
* Pesquisar um `autor/repositório`.
* Visualizar uma `lista` de repositórios pesquisados.
* Clicar em cada repositório listado e ser redirecionado para uma nova rota contendo:
  * Descrição do repositório
  * Stars
  * Pull Requets
  * Issues
* Persistir a lista de repositórios pesquisados usando o `localStorage` do `React`.

## New Features
  * Não permitir repositórios duplicados.
  * Excluir um repositório já listado.

## Processo de build

```shell
git clone https://github.com/tuf-code/gostack-github-explorer.git
cd gostack-github-explorer
yarn
yarn start
```
- O comando `yarn` resolve as dependências do projeto.
- O comando `yarn start` inicia o projeto em http://localhost:3000 por padrão.

## Agradecimentos

Agradeço ao [Netlify](https://www.netlify.com) pelo host e deploy.

Versão `Web` disponível em https://tuf-code-github-explorer.netlify.app
