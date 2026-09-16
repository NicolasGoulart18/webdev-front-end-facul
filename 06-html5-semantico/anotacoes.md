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

## `header`, `nav` e `main`

- `<header>`: cabeçalho da página ou de uma seção.
- `<nav>`: região destinada à navegação principal e conjuntos importantes de links.
- `<main>`: conteúdo principal do documento.

Mapa rápido:

```text
header = cabeçalho
nav    = navegação
main   = conteúdo principal
```

## `section` e `article`

- `<section>`: seção temática que agrupa conteúdos relacionados.
- `<article>`: conteúdo independente, que pode fazer sentido por conta própria.

Regra para memorizar:

```text
section = assunto / grupo temático
article = conteúdo independente daquele assunto
```

Exemplo: em um portal esportivo, `Futebol` pode ser uma `<section>` e cada notícia pode ser um `<article>`.

## `aside` e `footer`

- `<aside>`: conteúdo complementar ao conteúdo principal. Pode aparecer visualmente na lateral, mas seu significado não depende da posição na tela.
- `<footer>`: rodapé da página ou de uma seção, normalmente usado para informações finais e complementares.

```text
aside  = conteúdo complementar
footer = rodapé
```

## Quando usar semântica e quando usar `div`

Use uma tag semântica quando a região tiver uma função clara, como cabeçalho, navegação, conteúdo principal, seção, artigo, conteúdo complementar ou rodapé.

Use `<div>` quando a necessidade for apenas agrupar elementos para organização, layout ou estilização e não existir uma tag semântica adequada.

Exemplo: uma `div` pode agrupar dois botões para o CSS colocá-los lado a lado.
