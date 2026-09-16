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

## Destaque visual e significado

`<b>` e `<i>` podem representar apresentação visual, enquanto `<strong>` e `<em>` são preferíveis quando existe significado semântico de importância ou ênfase.

```html
<strong>Importante</strong>
<em>Ênfase</em>
```

Quando a intenção for somente aparência, o CSS deve cuidar do estilo.

## Sintaxe básica do CSS

Uma regra CSS segue a estrutura:

```css
seletor {
    propriedade: valor;
}
```

Exemplo:

```css
p {
    color: red;
    font-size: 20px;
}
```

- `p`: seletor.
- `color` e `font-size`: propriedades.
- `red` e `20px`: valores.

Entre propriedade e valor usamos `:` e ao final da declaração usamos `;`.

## CSS externo

O arquivo CSS pode ficar separado do HTML e ser ligado no `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

- `rel="stylesheet"`: informa que o recurso é uma folha de estilos.
- `href="style.css"`: aponta o caminho do arquivo CSS.
