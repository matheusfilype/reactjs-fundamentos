# Babel

tem o papel de fazer de converter o nosso codigo para uma maneira que os navegadores mais modernos possam entender o codigo.

## Babel/preset-env

Diz pro Babel o que precisa ser convertido (identifica se o código esta rodando no backend ou front, e etc)

# Webpack

converte arquivos que nao sao JS para uma forma que o browser ira entender. Ex: importamos um .sass, ele ira converter para .css

# React

Biblioteca criada pelo Facebook.
Trabalha com o conceito de componentização
O ideal é nunca ter mais de uma componente em um só arquivo

## Props

São uma forma de passar variaveis para um componente, e também atráves delas podemos 'personalizar' o comportamento do componente

## Imutabilidade

Prevê/diz que uma variável não pode ter seu valor alterado. Ela apenas pode receber um novo valor.

## Exemplo:

```javascript

wrong
const users = ['allan', 'matheus', 'helliton']
users.push('allef')

correct:
const newUsers = [...users, 'allef']
```

## Hook

São funções dentro do React que nos permite 'ligar' aos recursos de state (estado) e ciclo de vida do React a partir de componentes funcionais.

-> Hooks não funcionam dentro de classes

Exemplos: useState, useEffect, useLayoutEffect, useRef, etc...

## Key prop

Propriedade que ajuda o React a se localizar qual item ele precisará tirar da tela, atualizar e etc.. Geralmente usamos dentro de um 'map'.

Sem ele, o react pode confundir na hora de identificar qual elemento sofreu alteração, e com isso pode gerar uma nova renderização na lista inteira, fazendo assim o 'map' percorrer novamente o array.

# Typescript

O Typescript é um Superset do Javascript; isto é, ele adiciona algumas novas features na linguagem do javascript, como por exemplo a tipagem estática, que nos permite definir o tipo da variável.

# React Dev Tools

É uma extensão onde podemos 'monitorar', em desenvolvimento, os componentes escritos em react.
Podemos fazer o monitoramento de quando o componente é renderizado, conseguimos ver qual site usa React, ver os componentes renderizados pelo React, entre outros.
