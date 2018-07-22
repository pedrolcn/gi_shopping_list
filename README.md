# ShoppingList

Desafio parte do processo seletivo Iporanga/ Gorila Invest

Desenvolvimento de um SPA de lista de compras utilizando Angular e Firebase.


## Pré-requisitos
-----------

Utilize o package-manager da sua escolha, caso seja o npm, basta substituir os comandos

```shell
$ yarn global add 
```
por

```shell
$ npm install -g
```


#### Instalar Angular CLI

```shell
$ yarn global add @angular/cli
```
#### Crie uma conta 

#### Clonar o repositorio e instale as dependências

```shell
$ git clone git@github.com:pedrolcn/gi_shopping_list.git
$ cd shopping-list
$ yarn install
```
#### Configurando o Firebase

- Se não tiver uma conta ainda, crie uma gratuitamente em https://firebase.google.com
- Crie um projeto a partir do [console](https://console.firebase.google.com)
- Configure a autenticação para aceitar autenticação com email e senha

- crie um arquivo `src/environments/firebase.ts` com o seguinte conteúdo substituindo as configurações da sua conta do firebase:
```typescript
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: ''
  storageBucket: '',
};

export default firebaseConfig;
```

## Rodando Localmente
-----

O aplicativo pode ser rodado localmente com o comando
```shell
$ ng serve
```
E em seguida abrir o browser no endereço `localhost:4200`

## Fazendo o deploy no firebase
-----

Edite o arquivo `.firebaserc` na pasta raiz do seu projeto para conter as informações especificas da sua conta:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

#### Installe o  firebase-tools
```shell
$ yarn global add firebase-tools
```

#### Faça o Build e o deploy do app:
```shell
$ ng build --prod
$ firebase login
$ firebase use default
$ firebase deploy
```
