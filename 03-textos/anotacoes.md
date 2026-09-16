# Bloco 3 — Textos e Conteúdo

Anotações sobre títulos, parágrafos, quebras de linha e semântica textual.

## Títulos: h1 até h6

As tags `<h1>` até `<h6>` definem títulos e subtítulos e criam uma hierarquia de importância no conteúdo.

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Subseção</h3>
<h4>Nível 4</h4>
<h5>Nível 5</h5>
<h6>Nível 6</h6>
```

- `<h1>`: maior nível de hierarquia.
- `<h2>` até `<h6>`: níveis progressivamente menores.
- Essa hierarquia ajuda a organizar o conteúdo e também é relevante para mecanismos de busca (SEO).

## Parágrafos

A tag `<p>` delimita um parágrafo de texto.

```html
<p>Estou estudando HTML.</p>
```

Um parágrafo representa um bloco de texto, não apenas uma quebra de linha.

## Quebra de linha: br

A tag `<br>` cria uma quebra de linha dentro do conteúdo.

```html
<p>
    Linha 1<br>
    Linha 2<br>
    Linha 3
</p>
```

Diferença principal:

```text
<p>  -> cria/delimita um parágrafo
<br> -> apenas quebra a linha
```

No exemplo do poema usado no material, várias tags `<br>` são usadas para manter cada verso em uma linha diferente. Sem elas, as quebras digitadas no código não seriam preservadas visualmente da mesma forma pelo navegador.

## Tags semânticas de texto

### strong

`<strong>` indica que um trecho possui forte importância semântica. Normalmente aparece em negrito, mas sua função não é apenas visual.

```html
<strong>Conteúdo importante</strong>
```

### em

`<em>` indica ênfase no conteúdo. Normalmente aparece em itálico, mas sua função também é semântica.

```html
<em>Trecho com ênfase</em>
```

Forma rápida de lembrar:

```text
<strong> -> importância
<em>     -> ênfase
```

O material contrasta esse uso semântico com o uso puramente estético de `<b>` e `<i>`.

### del

`<del>` representa um conteúdo removido ou substituído. Visualmente, navegadores normalmente exibem o trecho riscado.

```html
<p>
    Nova data: <del>15/09/2026</del> <strong>30/09/2026</strong>
</p>
```

### mark

`<mark>` destaca um trecho do texto, como uma marcação de marca-texto.

```html
<p>Documento <mark>importante</mark>.</p>
```

No questionário do material, a tag esperada para uma palavra apresentada como highlighted é `<mark>`.
