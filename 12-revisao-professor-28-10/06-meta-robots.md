# Questão 06 — Meta Robots

## Pergunta do professor

Qual é a função da tag `<meta name="robots" content="...">` e o que muda entre os valores abaixo?

## Resposta curta

A meta tag `robots` fornece orientações para mecanismos de busca sobre **indexação da página** e **seguimento dos links**.

### `noindex, follow`

- não indexar a página;
- pode seguir os links encontrados nela.

### `index, nofollow`

- pode indexar a página;
- não deve seguir os links encontrados nela.

### `noindex, nofollow`

- não indexar a página;
- não seguir os links.

## Para lembrar na prova

```text
index / noindex   -> indexação
follow / nofollow -> seguir links
```
