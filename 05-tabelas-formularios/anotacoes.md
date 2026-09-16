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
