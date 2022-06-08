# Seletores 
  - conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Elementos selector
  - Todos os elementos HTML
    _h1, p
h1 {
  ...
}


* ID selector
  - Um elemento que tenha um atributo 'id'
  - Cada id deverá ser 
    _id="title"
#title {
  ...
}

* Class selector 
  - Os elementos que contenha um atributo 'class'
  - Podemos ter um ou mais classes
    _class="red"
.red {
  ...
}

* Atributos  selector
  - Um elemento que tenha um atibuto 
    _title="titulo"
[title] {
  ...
}
  
* Pseudo-class selector
  - Elementos em um estado específico.
p:hover {

}

* Múltiplos
  - poderá selecionar múltiplos elementos e aplicar uma regra css para eles.
  - usamos um aseparação por vírgulas para isso.
h1, p, a {
  ...
}

# Combinators
  - Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator
  - Identificado por um espaço entre os seletores.
  - Busca um elemento dentro de outro
  
  body article h2 {
    ...
  }

## Child combinator
  -Identificado pelo sinal '>' entre dois seletores
  - Seleciona somente o elemento que é filho direto do pai
  - Elemento depois do filho direto serão desconsiderados
  
  body > ul > li {
    ...
  }

## Adjacent sibling combinator
  - identificado pelo sinal '+' entre dois seletores
  - Seleciona somente o elemento do lado direito que é irmão direto na hieraquia
  
  h1 + p {
    ...
  }

## General sibling combinator
  - Identificado pelo sinal '~' entre dois elementos
  - Seleciona todos elementos irmãos
  h1 ~ p {
    ...
  }

## Dicas
  - Selecionadores muitos especimficos temdem a causar dificuldade no reuso das regras de estilização dos elementos 
  - Muitas vezes, um simples uso de classes, torma o trabalho muito mais eficientes

# Pseudo-classes
  É um tipo de seletor que irá selecionar um elemento que estiver em um estado especifico.

  Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima deke

  :pseudo-classes começam com 2 pontos seguido do nome da pseudo class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes
  - :first-child

    ul li:first-child {
      color: red;
    }  
    
  - :nth-of-type()

    article p:nth-of-type(2) {
      font-size: 18px;
    }

  - :nth-child()

    article p:nth:-child(4) {
      font-weight: bold;
    }

## Ações do usuário
  - hover
    a:hover {
      cor: red;
    }
  - focus
    input:focus {
      border-color: blue;
    }

## Atributos
  - disabled
  <input type="text" disabled>

  - required
  <input type="text" required>


# Pseudo-elements
  - com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

  `::pseudo-element-name`

## Exemplos
  - ::before
    li::before{
      content: " < "
    }

  - ::after
    li::before{
      content: " > "
    }

  - ::first-line
    p::first-line {
      font-weigth: bold;
    }