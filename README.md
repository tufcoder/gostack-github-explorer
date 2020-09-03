<h1 align="center">GITHUB EXPLORER</h1>

## Conteúdo

- [Introdução](#introdução)
- [Stack](#stack)
- [Features](#features)
- [Processo de Build](#processo-de-build)
- [Agradecimento](#agradecimento)
- [Funcionalidades](#funcionalidades)


## Introdução

Essa aplicação se conecta na `API do Github` disponível no endereço `https://api.github.com` para listar os repositórios de um autor.
<br>Vamos utilizar a chave `repository_url` com o endereço `https://api.github.com/repos/{autor}/{repositório}` passando dentro do input o `autor/repositório` e pesquisar.
<br>Exemplo: `facebook/react`

## Stack

- NodeJS
- ReactJS
- TypeScript
- Styled Components

## Features

Com o Github Explorer é possível:

* Utilizar a [API](https://api.github.com) do Github.
* Pesquisar um `autor/repositório`.
* Visualizar uma `lista` de repositórios pesquisados.
* Clicar em cada repositório listado e ser redirecionado para uma nova rota contendo:
  * Descrição do repositório
  * Issues
  * Pull Requets
* Acionar o botão `voltar`
* Persistir a lista de repositórios pesquisados usando o `localStorage` do `React`.

## Processo de build

```shell
git clone https://github.com/tuf-code/gostack-github-explorer.git
cd gostack-github-explorer
yarn
yarn start
```
- O comando `yarn` resolve as dependências do projeto.
- O comando `yarn start` inicia em http://localhost:3000.

## Agradecimento

Agradeço ao [Netlify](https://www.netlify.com) pelo host e deploy.

Versão `Web` disponível em https://tuf-code-github-explorer.netlify.app

## Funcionalidades

- [x] Versão Web
- [ ] Versão Mobile/Responsiva
- [x] Publicar no Netlify