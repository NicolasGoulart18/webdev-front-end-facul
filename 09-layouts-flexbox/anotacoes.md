# Bloco 9 — Layouts com Flexbox

> Status: concluído para a revisão da prova de 28/10/2026.

Material da disciplina sobre construção de layouts usando `div`, CSS Flexbox e os efeitos CSS apresentados no material do professor.

## Layouts estudados

- Layout 1: Header, Main e Footer.
- Layout 2: duas colunas.
- Layout 3: Header, três colunas iguais e Footer.
- Layout 4: Header, sidebar esquerda, Main, sidebar direita e Footer.

## Flexbox

### `display: flex`

Ativa o Flexbox no elemento pai.

```css
.row {
    display: flex;
}
```

Os filhos diretos passam a ser organizados como itens flexíveis.

### `flex-direction`

Controla a direção dos itens.

```text
row    -> lado a lado
column -> um abaixo do outro
```

No container geral, `column` empilha as áreas verticalmente. Em uma `.row`, o comportamento padrão coloca os elementos lado a lado.

### `gap`

Cria espaço entre os itens do Flexbox.

```css
gap: 10px;
```

### `justify-content`

Controla a distribuição dos elementos no eixo principal.

```css
justify-content: space-between;
```

### `align-items`

Controla o alinhamento no eixo transversal.

```css
align-items: center;
```

## Proporções com `flex`

Exemplo:

```css
.sidebar {
    flex: 1;
}

.main {
    flex: 3;
}
```

Leitura simplificada:

```text
sidebar : main
   1    :  3
```

O `main` recebe uma participação de espaço flexível aproximadamente três vezes maior que a sidebar.

## `box-sizing: border-box`

Faz com que padding e borda sejam incluídos dentro da largura e altura declaradas.

```css
* {
    box-sizing: border-box;
}
```

O seletor `*` é o seletor universal e aplica a regra a todos os elementos.

## Centralização com `margin: auto`

```css
main {
    margin: 2rem auto;
}
```

- `2rem`: margem superior e inferior.
- `auto`: margens esquerda e direita automáticas, permitindo centralização horizontal quando existe uma largura definida.

## Unidade `rem`

`rem` é relativo ao tamanho da fonte do elemento raiz.

Exemplo: se `1rem = 16px`, então `2rem = 32px`.

## Responsividade com `min()`

```css
main {
    width: min(90%, 1000px);
}
```

A função `min()` escolhe o menor valor.

Assim, o elemento pode encolher em telas menores sem ultrapassar o limite definido.

## `div` e `span`

- `div`: elemento de bloco usado para agrupar partes da página.
- `span`: elemento inline usado para isolar e estilizar pequenas partes de um texto.

## `background-color` x `background`

```css
background-color: red;
```

Usado quando é necessária apenas uma cor sólida de fundo.

```css
background: linear-gradient(45deg, green, blue);
```

`background` é uma propriedade mais ampla e pode receber gradientes, imagens e outras configurações de fundo.

## `linear-gradient()`

Cria um degradê entre cores.

```css
background: linear-gradient(45deg, green, blue);
```

- `45deg`: direção/inclinação.
- `green`: primeira cor.
- `blue`: segunda cor.

## Gradiente dentro do texto

```css
.destaque {
    background: linear-gradient(45deg, #00ff7f, #007fff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
```

Leitura:

```text
linear-gradient()      -> cria o degradê
background-clip: text  -> recorta o background no formato das letras
color: transparent     -> revela o degradê dentro do texto
```

A versão com `-webkit-` auxilia a compatibilidade em alguns navegadores.

## `text-shadow`

Adiciona sombra ao texto.

```css
text-shadow: 5px 5px 2px black;
```

```text
1º 5px -> deslocamento horizontal
2º 5px -> deslocamento vertical
2px    -> desfoque
black  -> cor
```

## `line-height`

Controla a altura da linha e o espaçamento vertical entre linhas de texto.

```css
body {
    line-height: 1.6;
}
```

## `min-width: 0` em itens flexíveis

Durante o uso do Swiper, foi necessário permitir que alguns itens Flexbox realmente encolhessem.

```css
min-width: 0;
```

Isso ajuda a evitar que conteúdos internos provoquem overflow horizontal.

## Estrutura mental do Layout 4

```text
container
├── header
├── row
│   ├── sidebar-left
│   ├── main
│   └── sidebar-right
└── footer
```

## Checklist final

- `display: flex`
- `flex-direction`
- `gap`
- `justify-content`
- `align-items`
- `flex`
- proporções entre colunas
- Flexbox em containers aninhados
- `box-sizing: border-box`
- seletor universal `*`
- `rem`
- `margin: auto`
- `min()`
- `div` e `span`
- `background-color` e `background`
- `linear-gradient()`
- `background-clip: text`
- `color: transparent`
- `text-shadow`
- `line-height`
- `min-width: 0`
