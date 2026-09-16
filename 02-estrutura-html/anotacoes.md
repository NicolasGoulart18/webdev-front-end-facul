# Bloco 2 — Estrutura HTML

Anotações sobre a estrutura básica de um documento HTML.

## Estrutura básica do HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Minha página</title>
</head>
<body>
    <h1>Olá, mundo!</h1>
</body>
</html>
```

- `<!DOCTYPE html>`: informa ao navegador que o documento utiliza HTML5.
- `<html>`: elemento que engloba o documento HTML.
- `<head>`: guarda informações sobre a página que normalmente não aparecem no conteúdo principal.
- `<meta charset="UTF-8">`: define a codificação de caracteres UTF-8.
- `<title>`: define o texto exibido na aba do navegador.
- `<body>`: contém o conteúdo exibido ao usuário, como textos, imagens, links, botões e tabelas.

### Forma rápida de lembrar

```text
HTML
├── HEAD -> informações sobre a página
└── BODY -> conteúdo visível da página
```

## Tags

As tags são elementos usados para estruturar o conteúdo HTML.

```html
<p>Meu texto</p>
```

- `<p>`: tag de abertura.
- `Meu texto`: conteúdo.
- `</p>`: tag de fechamento.
- A barra `/` indica o fechamento da tag.

## Atributos

Atributos fornecem informações adicionais ou configurações para uma tag.

```html
<a href="https://google.com">Google</a>
```

- `<a>`: tag.
- `href`: atributo.
- `"https://google.com"`: valor do atributo.
- `Google`: conteúdo.
- `</a>`: fechamento.

Outro exemplo:

```html
<img src="foto.jpg" alt="Minha foto">
```

- `<img>`: tag de imagem.
- `src`: informa o caminho ou URL da imagem.
- `alt`: fornece texto alternativo, importante para acessibilidade.

## Comentários

Comentários ficam no código para organização e documentação e não são exibidos normalmente na página.

```html
<!-- Este é um comentário -->
```

Exemplo:

```html
<body>
    <!-- Título principal da página -->
    <h1>Minha faculdade</h1>
</body>
```
