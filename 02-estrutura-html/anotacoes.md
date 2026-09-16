# Bloco 2 — Estrutura HTML

> Status: concluído.

Este bloco reúne a estrutura básica de um documento HTML e os conceitos estudados antes de avançar para conteúdo textual.

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
- `<html>`: engloba o documento HTML.
- `<head>`: guarda informações sobre a página que normalmente não aparecem no conteúdo principal.
- `<meta charset="UTF-8">`: define a codificação de caracteres UTF-8.
- `<title>`: define o texto exibido na aba do navegador.
- `<body>`: contém o conteúdo visível da página, como textos, imagens, links, botões e tabelas.

### Forma rápida de lembrar

```text
HTML
├── HEAD -> informações sobre a página
└── BODY -> conteúdo visível da página
```

## Tags

Tags são elementos usados para estruturar o conteúdo HTML.

```html
<p>Meu texto</p>
```

- `<p>`: abertura da tag.
- `Meu texto`: conteúdo.
- `</p>`: fechamento da tag.
- A barra `/` indica o fechamento.

## Elementos sem fechamento separado

Alguns elementos não possuem uma tag de fechamento separada.

```html
<img src="foto.jpg" alt="Minha foto">
<br>
<input type="text">
```

Portanto, no HTML, não usamos `</img>`, `</br>` ou `</input>`.

## Atributos

Atributos fornecem informações extras ou configurações para uma tag.

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
- `src`: informa onde está a imagem.
- `alt`: fornece um texto alternativo para a imagem.

## Comentários

Comentários servem para organizar e documentar o código e não aparecem normalmente na página.

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

## Aninhamento de tags

Aninhamento acontece quando uma tag fica dentro de outra.

```html
<p>
    Meu texto <strong>importante</strong>
</p>
```

Regra principal:

> A última tag que abriu é a primeira que deve ser fechada.

Correto:

```html
<b><i>Texto</i></b>
```

Incorreto:

```html
<b><i>Texto</b></i>
```

## HTML x XHTML

O XHTML utiliza regras mais rígidas de escrita, aproximando a sintaxe das exigências do XML.

```text
HTML  -> mais flexível
XHTML -> sintaxe mais rígida e explícita
```

### Regras importantes do XHTML

1. Tags e atributos escritos em letras minúsculas.
2. Aninhamento correto.
3. Elementos precisam ser fechados corretamente.
4. Elementos vazios usam `/` no fechamento.
5. Atributos booleanos aparecem com valor explícito.

Exemplos:

```html
<br />
<img src="foto.jpg" alt="Minha foto" />
<input type="text" />
```

Em HTML:

```html
<input type="checkbox" checked>
```

Em XHTML:

```html
<input type="checkbox" checked="checked" />
```

Outros exemplos do mesmo padrão:

```html
<option selected="selected">Opção</option>
<input disabled="disabled" />
<select multiple="multiple"></select>
```

### Ideia para memorizar

> XHTML exige uma estrutura mais rígida, explícita e corretamente aninhada.

## Checklist do bloco

- Estrutura básica do documento HTML.
- `DOCTYPE`, `html`, `head`, `meta`, `title` e `body`.
- Tags de abertura e fechamento.
- Elementos sem fechamento separado.
- Atributos e valores.
- Comentários.
- Aninhamento correto.
- Diferenças principais entre HTML e XHTML.

> XHTML foi adiantado neste bloco e não precisa ser estudado novamente do zero mais à frente.
