# Trabalhando com fontes

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

## Basic Font Properties

- font-family
- font-weight
- font-style
- font-size

## Font Family

- Tipo de fonte de um elemento
- lista de fontes e ordem de priordade
- Inclui *fallback* font

'''css
p{
    font-family: "Time New Roman", Times, serif;
}

- serif
- sans

## Font Weight

- Peso da fonte

'''css
p{
    font-weight: bold;
}

## Font Style
- O estilo da fonte

'''css
p{
    font-style: italic;
}

## Font Size
- O estilo da fonte

'''css
p{
    font-size: 2em;
}

## Web Fonts

- Fones do sistem x fontes da web
- como usar fontes para web? 
    * @font-face
    * @import
    * link

# letter-spacing

- Espaço em caracter

# line-heigth

- Espaços entre as linhas 
- Pode ser com unidade ou sem unidade de medida
- Comuns: 1.5 ou 2

# text-tranform

- Transformação do texto
    * Uppercase
    * Capitalize
    * Lowercase
    * None

# text-decoration

- Aparencia decorativa de um texto
- line: underline|overline|line-through|
    * podemos aplicar mais de um valor
- style: wavy|dotted|double|dashed|solid
- color: <color> values

# text-aling

- Alinhamento de um texto

# text-shadow

- Sombra aplicada a um texto
- Permite múltiplos valores