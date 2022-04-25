Babel -> tem o papel de fazer de converter o nosso codigo para uma maneira que os navegadores mais modernos possam entender o codigo.

Babel/preset-env => diz pro babel o que precisa ser convertido (identifica se o codigo esta rodando no backend ou front, e etc)

Webpack -> converte arquivos que nao sao JS para uma forma que o browser ira entender. Ex: importamos um .sass, ele ira converter para .css

React
Biblioteca criada pelo Facebook.
Trabalha com o conceito de componentização
O ideal é nunca ter mais de uma componente em um só arquivo

Props = são uma forma de passar variaveis para um componente, e também atráves delas podemos 'personalizar' o comportamento do componente

Imutabilidade == prevê/diz que uma variável não pode ter seu valor alterado. Ela apenas pode receber um novo valor.

Exemplo:

```javascript

wrong
const users = ['allan', 'matheus', 'helliton']
users.push('allef')

correct:
const newUsers = [...users, 'allef']
```

Hook: sao funções dentro do React que nos permite 'ligar' aos recursos de state (estado) e ciclo de vida do React a partir de componentes funcionais.

-> Hooks não funcionam dentro de classes

Exemplos: useState, useEffect, useLayoutEffect, useRef, etc...

Key prop => propriedade que ajuda o React a se localizar qual item ele precisará tirar da tela, atualizar e etc.. Geralmente usamos dentro de um 'map'.

Sem ele, o react pode confundir na hora de identificar qual elemento sofreu alteração, e com isso pode gerar uma nova renderização na lista inteira, fazendo assim o 'map' percorrer novamente o array.
