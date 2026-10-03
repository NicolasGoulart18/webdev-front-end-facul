# Tech Day — Atividade Layout 01

Projeto prático desenvolvido para a disciplina de desenvolvimento front-end da faculdade.

A proposta da atividade foi criar **duas páginas com o mesmo layout**, usando `div` na estrutura e **CSS Flexbox** para organizar as áreas da página.

## Páginas

- `index.html` — página inicial do Tech Day.
- `noticias.html` — página de notícias.
- As duas páginas compartilham o mesmo `style.css` e o mesmo `script.js`.

## Estrutura do layout

```text
Header
├── Tech Day
└── Navegação

Row
├── Sidebar esquerda
├── Main
└── Sidebar direita

Footer
```

A área central foi construída com Flexbox. As sidebars usam uma proporção menor e o conteúdo principal recebe mais espaço.

## HTML usado

- `div` para organizar as regiões do layout;
- títulos e parágrafos;
- links internos entre `index.html` e `noticias.html`;
- link externo para o GitHub com `target="_blank"`;
- botão para alternar o tema;
- imagem dentro do carrossel;
- áudio usado na troca de tema.

## CSS usado

- variável CSS em `:root`;
- seletores de classe e ID;
- `display: flex`;
- `flex-direction`;
- `justify-content`;
- `align-items`;
- `gap`;
- `flex`;
- `padding` e `margin`;
- `border-radius`;
- `hover`;
- `transition`;
- `transform: scale()`;
- `min-width` e `min-height`;
- `box-sizing`;
- `overflow`;
- `aspect-ratio`;
- `object-fit: cover`.

### Proporção do banner

O carrossel usa:

```css
aspect-ratio: 16 / 5;
```

Isso permite que a altura acompanhe a largura mantendo a proporção do banner.

Nas imagens:

```css
width: 100%;
height: 100%;
object-fit: cover;
```

O `object-fit: cover` mantém a proporção da imagem e corta apenas o excesso necessário para preencher o slide.

## JavaScript usado

### Modo claro e escuro

O botão `#theme-toggle` adiciona ou remove a classe `dark-mode` no `body`.

O tema escolhido é salvo no navegador usando `localStorage`, permitindo manter a preferência ao recarregar a página.

### Áudio

Ao alternar o tema, o arquivo `assets/Fahhhh.mp3` é reproduzido como efeito sonoro.

### Swiper

Foi utilizada a biblioteca **Swiper.js** para criar o carrossel da página inicial.

Recursos utilizados:

- slides;
- navegação anterior/próximo;
- paginação;
- autoplay;
- loop.

O Swiper é carregado por CDN na página inicial.

## Assets

- `rtx.webp` — imagem usada nos slides do banner;
- `Fahhhh.mp3` — efeito sonoro usado na troca de tema.

## Conceitos que mais pratiquei

- construção de layout com Flexbox;
- divisão de uma página em header, sidebars, main e footer;
- reutilização do mesmo CSS em duas páginas;
- navegação entre páginas;
- manipulação de classes com JavaScript;
- armazenamento com `localStorage`;
- uso de biblioteca externa;
- proporção de imagens e banners;
- organização de arquivos e commits no GitHub.

## Status

Projeto em evolução conforme novos conteúdos são estudados e aplicados.
