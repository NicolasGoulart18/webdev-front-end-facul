# Atividade — Layout 01

> Status: em evolução.

## Enunciado resumido

Construir um site com duas páginas seguindo o mesmo layout.

Requisitos informados pelo professor:

- usar HTML e CSS;
- construir o layout com Flexbox;
- usar `div` para a estrutura do layout;
- criar duas páginas com o mesmo layout;
- criar links entre as duas páginas na mesma aba/janela;
- incluir pelo menos um link externo abrindo em nova aba/janela;
- manter o resultado funcional e visualmente atraente.

## Estrutura escolhida

```text
Header
Row
├── Sidebar Left
├── Main
└── Sidebar Right
Footer
```

A `.row` usa Flexbox para deixar as três colunas lado a lado.

As sidebars usam:

```css
flex: 1 1 0;
```

E o conteúdo principal usa:

```css
flex: 3 1 0;
```

Assim, o `main` recebe uma proporção maior do espaço disponível.

## Swiper

O **Swiper.js** é uma biblioteca usada para criar sliders e carrosséis.

No projeto ele foi usado para o banner da página inicial com:

- `loop`;
- `autoplay`;
- botões anterior e próximo;
- paginação clicável.

Estrutura básica estudada:

```text
swiper
└── swiper-wrapper
    ├── swiper-slide
    ├── swiper-slide
    └── swiper-slide
```

## Imagem dentro do banner

Para a imagem ocupar o slide sem deformar:

```css
.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

- `width: 100%` ocupa toda a largura disponível;
- `height: 100%` ocupa toda a altura disponível;
- `object-fit: cover` mantém a proporção da imagem e corta o excesso.

## Aspect ratio

Em vez de deixar a altura do banner fixa em pixels, foi usado:

```css
aspect-ratio: 16 / 5;
```

Isso mantém uma proporção de banner horizontal enquanto a largura muda.

## Modo escuro

O botão de tema alterna a classe `dark-mode` no `body`.

Quando a classe está ativa, o CSS aplica outras cores aos elementos.

O texto do botão também muda:

```text
Modo Escuro -> ativa o tema escuro
Modo Claro  -> volta para o tema claro
```

## localStorage

O `localStorage` foi usado para guardar a preferência de tema.

Exemplo da ideia:

```js
localStorage.setItem("tema", "escuro");
```

Depois a página lê esse valor quando é carregada e restaura o tema salvo.

## Áudio

A troca de tema também reproduz um efeito sonoro usando JavaScript e o arquivo:

```text
assets/Fahhhh.mp3
```

Antes de tocar novamente, o áudio é pausado e volta para o início.

## Aprendizados da atividade

- usar Flexbox em um layout completo;
- controlar proporções com `flex`;
- evitar estouro horizontal com `min-width: 0` e `overflow`;
- trabalhar com imagens dentro de containers;
- usar `aspect-ratio`;
- usar uma biblioteca externa via CDN;
- manipular classes com JavaScript;
- salvar dados simples no navegador;
- compartilhar CSS e JavaScript entre páginas.
