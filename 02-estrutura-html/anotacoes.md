# Bloco 2 — Estrutura HTML

> Status: concluído.

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

### Elementos vazios

Alguns elementos não envolvem conteúdo textual e, por isso, não possuem uma tag de fechamento separada.

Exemplos importantes:

```html
<img src="foto.jpg" alt="Minha foto">
<br>
<input type="text">
```

No HTML atual, não é necessário escrever `</img>`, `</br>` ou `</input>`.

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

## Aninhamento de tags

Aninhamento é quando uma tag fica dentro de outra tag.

```html
<p>
    Meu texto <strong>importante</strong>
</p>
```

A regra principal é:

> A última tag que abriu é a primeira que deve ser fechada.

Correto:

```html
<b><i>Texto</i></b>
```

Incorreto:

```html
<b><i>Texto</b></i>
```

Uma forma simples de visualizar:

```text
<b>
    <i>
        texto
    </i>
</b>
```

## HTML x XHTML

O material mostra o XHTML como uma tentativa de tornar os documentos HTML mais rígidos e previsíveis usando regras herdadas do XML.

### Diferença geral

```text
HTML  -> mais flexível
XHTML -> sintaxe mais rígida e explícita
```

No HTML, historicamente os navegadores toleravam vários erros e a linguagem é case-insensitive. No XHTML, as regras passaram a exigir uma escrita muito mais rigorosa.

### Regras importantes do XHTML

1. Tags e nomes de atributos em letras minúsculas.
2. Aninhamento correto: a última tag aberta deve ser a primeira fechada.
3. Todo elemento de conteúdo precisa ser fechado.
4. Elementos vazios usam fechamento explícito com `/`.
5. Atributos booleanos precisam ter valor explícito entre aspas.

Exemplos:

```html
<br />
<img src="foto.jpg" alt="Foto de perfil" />
<input type="text" />
```

Em HTML, pode aparecer:

```html
<input type="checkbox" checked>
```

No XHTML, a forma exigida era:

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

> XHTML queria que a estrutura fosse bem formada, explícita e previsível.

## Checklist do bloco

- Estrutura básica do documento HTML.
- `DOCTYPE`, `html`, `head`, `meta`, `title` e `body`.
- Tags de abertura e fechamento.
- Elementos vazios.
- Atributos e valores.
- Comentários.
- Aninhamento correto.
- Diferenças principais entre HTML e XHTML.

> Observação: XHTML seria retomado mais à frente, mas esse conteúdo já foi adiantado durante o Bloco 2.
