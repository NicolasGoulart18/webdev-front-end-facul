# Questão 16 — `let`, `const` e `var`

## Pergunta do professor

Qual é a diferença entre declarar uma variável utilizando `let`, `const` e `var`?

## Resposta curta

### `let`

É usada quando o valor da variável pode precisar ser **reatribuído**.

Possui escopo de bloco.

```js
let idade = 18;
idade = 19;
```

### `const`

É usada quando a referência não deve ser reatribuída.

Também possui escopo de bloco e deve receber um valor na declaração.

```js
const nome = "Nicolas";
```

### `var`

É a forma mais antiga de declarar variáveis em JavaScript.

Possui escopo de função ou global, permite redeclaração e tem comportamento de hoisting diferente de `let` e `const`.

## Para lembrar na prova

```text
let   -> pode reatribuir
const -> não pode reatribuir a referência
var   -> forma antiga, escopo diferente e mais permissiva
```

Em código moderno, normalmente se prefere `const` e `let`.
