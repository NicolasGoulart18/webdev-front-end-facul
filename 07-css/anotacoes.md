# Bloco 7 — CSS

> Status: em andamento.

Anotações sobre HTML antigo/obsoleto, formas de aplicar CSS e conceitos básicos vistos na disciplina.

## Separação entre HTML e CSS

- HTML: estrutura e conteúdo.
- CSS: aparência, estilo e layout.

## Tags antigas e obsoletas

Algumas tags antigas eram usadas apenas para apresentação visual e perderam espaço para o CSS.

- `<font>`: alterava fonte, tamanho e cor.
- `<center>`: centralizava conteúdo.
- `<blink>`: fazia texto piscar.
- `<marquee>`: fazia texto se mover.
- `<frameset>` e `<frame>`: dividiam a janela em vários documentos.

Exemplo antigo:

```html
<center><font color="red">Olá</font></center>
```

Ideia moderna:

```html
<p>Olá</p>
```

```css
p {
    color: red;
    text-align: center;
}
```
