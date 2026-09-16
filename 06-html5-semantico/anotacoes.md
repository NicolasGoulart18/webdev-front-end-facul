# Bloco 6 — HTML5 Semântico

> Status: em andamento.

Anotações sobre `div`, `span` e elementos semânticos do HTML5.

Este bloco estuda a diferença entre contêineres genéricos e elementos que descrevem a função de cada parte da página.

## `div` e `span`

As duas tags agrupam conteúdo, mas não informam por si só qual é a função semântica daquele conteúdo.

- `<div>`: contêiner genérico de bloco; normalmente começa em uma nova linha e é útil para organizar regiões maiores e layout.
- `<span>`: contêiner genérico inline; usado para envolver um pequeno trecho dentro de uma linha sem forçar quebra.

```html
<div>
    <h2>Produtos</h2>
    <p>Lista de produtos.</p>
</div>

<p>Estou estudando <span>HTML</span> para a prova.</p>
```

## HTML5 semântico

Elementos semânticos descrevem a função do conteúdo na estrutura da página. Em vez de usar `div` para tudo, usamos uma tag específica quando existe um significado adequado.

Principais elementos estudados:

```text
header
nav
main
section
article
aside
footer
```

Essa estrutura torna o documento mais claro e ajuda a representar corretamente a organização do conteúdo.
