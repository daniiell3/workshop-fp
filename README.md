Workshop de Programação Funcional
=================

Clone o projeto
```
git clone https://github.com/daniiell3/workshop-fp.git
```

Entre na pasta do projeto
```
cd workshop-fp
```

Instale as dependencias
```
npm install
```

Rode os testes
```
npm test
```

Ajuste os blocos de código no arquivo ```test.js``` para que os testes passem.

Todos os ajustes devem ser feitos criando funções puras.

Funções puras:

1. Não criam side-effects

2. O output é gerado apenas pelo(s) input(s)

3. Sempre retorna o mesmo resultado dados os mesmos parâmetros

Exemplo:


```javascript
let name = "Matheus"

// impura
const helloName = () => {
    name = `Olá ${name}`
    return name
}

// pure
const helloName = (name) => `Olá ${name}`
```
