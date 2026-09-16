# Bloco 2 — Estrutura HTML

Anotações sobre a estrutura básica de um documento HTML.

## Estrutura básica html
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
- !DOCTYPE html= Informa o navegador que estamos usando html5
- html= elemento que engloba todo html
- head = guarda informações da pagina
  - Dentro dele temos:
    > meta charset="UTF-8" = codificação dos caracteres utf8

    > title>minha pagina</>title = nome que aparece no navegador
    - Depois vem o body:
    > Body =  contém aquilo que realmente será exibido para o usuário na página: textos, imagens, links, botões, tabelas etc.

## TAGS
    - Elemente usado para estruturar o conteudo.
> p > meu texto <p = isso e uma tag de paragrafo

## Atributos
    - Atributos fornecem informações extra ou configuração para uma tag
    - href= links e src= imagens
> a href="https://google.com">Google</a = 

    - <a> = tag
      href = atributo
     "https://google.com" = valor do atributo
      Google = conteúdo
      </a> = fechamento

> img src="foto.jpg" alt="Minha foto">
- img = tag
  src = atributo que informa onde está a imagem
  alt = mensagem para caso a imagem de erro.
