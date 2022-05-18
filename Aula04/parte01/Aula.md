# Box Model

- Fundamental para fazer layout para a web
- Maior facilidade para aplicar o CSS

## o que é?

Uma Caixa retangular.
Essa caixa possui propridade de uma caixa 2D

-- Tamanho (largura x altura)     width | heigth
-- Conteúdo                       content
-- Bordas                         border
-- Preencimento interno           Padding
-- Espaço fora da caixa           margin



## box-sizing

Como será calculado o tamanho total da caixa

- content-box | border-box

'''css
div{
    box-sizing: border-box;
}



## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comortamento externo das caixas

**Block**
- Ocupa toda a linha, colocando o próximo elemento abaixo desse.
- Width e heigth são respeitados
- Padding, margin, border, irão funcionar normalmente

**inline**
- Elemento ao lado do outro
- Width e heigth não funcionam
- Somente valores horizontais de margin, padding e border

- Exemplos
_block: <p> <div> <section>, todos os heading <h1><h2>...
_inline:<a> <strong> <span> <em>



## margin

Espaço entre os elementos

- margin-top | margin-right | margin-button | margin-left
-values: <length> | <percentagem> | auto

-- shorthand --
margin: 12px 16px 10px 4px
top|right|button|left

margin: 12px 16px 0
top|right-left|button

margin: 12px 16px
top-button|right-left

margin: 12px
top-right-button-left



## padding
Preenchimento interno da caixa

-- padding-top | padding-right | padding-button | padding-left
-values: <length> | <percentagem> | auto

-- shorthand --
padding: 12px 16px 10px 4px
top|right|button|left

padding: 12px 16px 0
top|right-left|button

padding: 12px 16px
top-button|right-left

padding: 12px
top-right-button-left
