# Bloco 1 — Fundamentos Web

Arquivo de anotações do primeiro bloco de estudos.

> O conteúdo será preenchido conforme os assuntos forem estudados.
### HTML
    -> Estrutura do codigo/casa

### CSS
    -> Estilização do site

### JavaScript
    -> Coisas que funcionam/interagem
### Exemplo simples:
    -HTML:
        Aqui ele só diz que tem uma pagina e um botão
    <h1>Minha Pagina</h1>
    <button>clique aqui</button>

    -CSS:
        CSS entra pra estilizar/mudar aparencia
        h1{
            color:blue;
        }
        button{
            font-size:20px
        }
     -JavaScript:
        -Ele vai fazer por exemplo, quando o usuario clicar vai acontecer alguma coisa.


 ### Interação do usuario com o site

 - USUÁRIO abre o site
        ↓
   SERVIDOR envia conteúdo
        ↓
   HTML + CSS + JavaScript + mídias
        ↓
   BROWSER interpreta
        ↓
   página aparece na tela          

### Client Side
- O que acontece do lado do usuário
    - HTML: Interpretado pelo browser
    - CSS: Interpretado pelo browser
    - JavaScript: Também executado pelo browser
    > Exemplo: Você abre uma pagina no chrome e o navegador monta tudo visualemte.

### Server Side
- O que acontece no servidor até chegar em você
 - Linguagens: Python,C, Pearl
    > O servidor processa as informações e depois entrega codigos HTML,CSS,JavaScript para o navegador


### Client & Server
 >  SERVER-SIDE = prepara/processa
 
 >CLIENT-SIDE = recebe/interpreta/exibe

## Obeservação sobre CLlient x Serve side
- Muitas páginas são construídas dinamicamente
- O servidor pode gerar ou montar o conteúdo conforme a     navegação do usuário e depois enviar isso pro navegador.
- exemplo mental:
    - Você entra no seu perfil
        ↓
servidor busca seus dados
        ↓
monta a resposta
        ↓
envia para o navegador
        ↓
browser mostra a página


## Como o navegador mostra a pagina:
>você edita o código
       
        ↓
>salva o arquivo

        ↓
>abre/volta para o navegador

        ↓
>atualiza a página

## Testes em navegadores diferentes
- Mesmo existindo padrões Web, o resultado pode apresentar pequenas diferenças entre navegadores.
- Por isso é interessante testar a página em browsers diferentes e verificar se alguma alteração é necessária.

## Responsividade
- Um site responsivo adapta e reorganiza seus elementos conforme o espaço disponível na tela.
- A página deve se ajustar a diferentes tamanhos de tela, como computador, tablet e smartphone.
- Responsividade não significa apenas "funcionar em qualquer navegador"; significa principalmente adaptar o layout ao tamanho da tela.

## Testando telas de dispositivos no Chrome
- Pressione `F12` para abrir as ferramentas de desenvolvedor.
- Use o botão **Toggle device toolbar** para simular diferentes tamanhos de tela e dispositivos móveis.
- Depois de alterar o modo de visualização, pode ser necessário atualizar a página para observar o comportamento responsivo.
