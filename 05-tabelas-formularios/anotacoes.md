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
