# Bloco 5 — Tabelas e Formulários

> Status: em finalização.

Anotações consolidadas do estudo de tabelas e formulários em HTML.

## Tabelas

As tabelas organizam dados em linhas e colunas.

- `<table>`: representa a tabela inteira.
- `<tr>`: representa uma linha da tabela.
- `<th>`: representa uma célula de cabeçalho.
- `<td>`: representa uma célula comum de dados.

### Mapa rápido

```text
<table> = tabela
<tr>    = linha
<th>    = cabeçalho
<td>    = dado
```

### Exemplo de tabela

```html
<table>
    <tr>
        <th>Produto</th>
        <th>Preço</th>
    </tr>
    <tr>
        <td>Notebook</td>
        <td>R$ 3500</td>
    </tr>
</table>
```

Cada `<tr>` cria uma nova linha. As células dessa linha ficam dentro dela usando `<th>` ou `<td>`.

## Formulários

Formulários permitem coletar dados digitados ou selecionados pelo usuário.

- `<form>`: agrupa os campos do formulário.
- `<input>`: cria um campo de entrada de dados.
- `<button>`: cria um botão clicável.

Exemplo básico:

```html
<form>
    <input type="text">
    <button>Enviar</button>
</form>
```

## Tipos de input estudados

```text
text           -> texto comum
password       -> senha com caracteres mascarados visualmente
date           -> data
time           -> horário
datetime-local -> data e horário juntos
```

Exemplos:

```html
<input type="text">
<input type="password">
<input type="date">
<input type="time">
<input type="datetime-local">
```

## Atributos de campos

- `name`: identifica o dado do campo quando o formulário é enviado.
- `size`: altera o tamanho visual de alguns campos de texto.
- `id`: identifica um elemento dentro do documento.

### Label e associação com o campo

> Complemento prático estudado durante o exercício.

O `<label>` descreve o campo e pode ser associado a um `<input>` usando `for` e `id` com o mesmo valor.

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome">
```

Regra para memorizar:

```text
<label for="X">  <->  <input id="X">
```

## GET e POST

> Complemento prático estudado durante a aula; este ponto vai além do questionário principal do professor.

Sem `method`, um formulário usa GET por padrão, e os campos enviados podem aparecer na URL.

```html
<form method="post">
```

Com POST, os dados são enviados no corpo da requisição em vez de aparecerem na URL.

Importante: `type="password"` apenas mascara a senha visualmente, e usar POST sozinho não torna uma senha segura. Em aplicações reais ainda são necessários HTTPS e tratamento adequado no servidor.

## Botões de formulário

```html
<button type="submit">Cadastrar</button>
<button type="reset">Limpar</button>
```

- `submit`: envia/submete o formulário.
- `reset`: restaura os campos para seus valores iniciais.
