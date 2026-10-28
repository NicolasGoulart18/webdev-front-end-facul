# Questão 17 — Por que evitar `document.write()`

## Pergunta do professor

Por que o uso do método `document.write()` é desaconselhado no desenvolvimento web moderno e quais alternativas devem ser preferidas?

## Resposta curta

`document.write()` escreve diretamente no fluxo do documento HTML.

Seu uso é desaconselhado porque pode dificultar a manutenção e, se executado depois que a página já foi carregada, pode substituir o conteúdo do documento.

## Alternativas modernas

Prefira manipular o DOM, por exemplo:

```js
document.getElementById("mensagem").textContent = "Olá!";
```

Também podem ser usados métodos como:

- `querySelector()`;
- `createElement()`;
- `append()` ou `appendChild()`;
- `textContent`.

## Para lembrar na prova

Em vez de escrever diretamente no documento com `document.write()`, prefira **selecionar ou criar elementos e alterar o DOM**.
