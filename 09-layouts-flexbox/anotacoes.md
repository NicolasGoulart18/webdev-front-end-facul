# Bloco 9 — Layouts com Flexbox

> Status: em estudo e aplicação prática.

Material da disciplina sobre construção de layouts usando `div` e CSS Flexbox.

## Layouts estudados

- Layout 1: Header, Main e Footer.
- Layout 2: duas colunas.
- Layout 3: Header, três colunas iguais e Footer.
- Layout 4: Header, sidebar esquerda, Main, sidebar direita e Footer.

## Conceitos principais

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

No container geral do projeto foi usado `column`, enquanto a área das colunas usa o comportamento em linha.

### `gap`

Cria espaço entre os itens do Flexbox sem precisar aplicar margem individual em cada elemento.

```css
gap: 10px;
```

### `justify-content`

Controla a distribuição dos elementos no eixo principal.

Exemplo usado no header:

```css
justify-content: space-between;
```

Isso mantém o título de um lado e a navegação do outro.

### `align-items`

Controla o alinhamento no eixo transversal.

```css
align-items: center;
```

Foi usado para alinhar verticalmente elementos do header e da navegação.

## Proporções com `flex`

No Layout 4 da atividade prática, as sidebars e o conteúdo principal recebem proporções diferentes.

```css
.sidebar-left,
.sidebar-right {
    flex: 1 1 0;
}

.main {
    flex: 3 1 0;
}
```

Leitura simplificada:

```text
sidebar : main : sidebar
   1    :  3   :    1
```

O `main` recebe aproximadamente três vezes a participação de cada sidebar no espaço flexível disponível.

## `min-width: 0` em itens flexíveis

Durante o uso do Swiper, foi necessário permitir que alguns itens Flexbox realmente encolhessem.

```css
min-width: 0;
```

Isso ajuda a evitar que conteúdos internos forcem a coluna a ficar maior que o espaço disponível e provoquem overflow horizontal.

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

## Checklist

- `display: flex`;
- `flex-direction`;
- `gap`;
- `justify-content`;
- `align-items`;
- `flex`;
- proporções entre colunas;
- uso de Flexbox em containers aninhados;
- `min-width: 0` para controlar overflow em itens flexíveis.
