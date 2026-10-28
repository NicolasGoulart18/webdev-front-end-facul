# Questão 12 — `box-sizing: border-box`

## Pergunta do professor

Qual é o efeito de `box-sizing: border-box` no cálculo das dimensões de um elemento em relação ao padrão `content-box`?

## Resposta curta

Com `border-box`, a largura e a altura declaradas já incluem o **padding e a border**.

No comportamento padrão `content-box`, a largura e a altura declaradas se aplicam apenas ao conteúdo, e padding e border são adicionados por fora.

## Exemplo

```css
.caixa {
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
}
```

A largura total continua sendo 300px.

## Para lembrar na prova

```text
content-box -> padding e border aumentam a dimensão total
border-box  -> padding e border entram na dimensão declarada
```
