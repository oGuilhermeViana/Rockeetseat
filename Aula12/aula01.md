# Layouts e evolução
  Layout tem a ver com a maneita que os elementos estão distra

## Normal flow
  Ou Flow Layout é a maneira que os elementos 'block' e 'inline' ficam na página

  <p>Texto block com <strong>inline</strong> dentro </p>

## Tables 
  É a maneira de tabelas onde a tag 'table' recebe um display 'table' fazendo com que os elementos internos como 'td' e 'tr' possam ser usados pata montar uma tabela

  ```html
  <table>
    <tr>
        <td>Hora<td>
        <td>20:00<td>
    </tr>
    <tr>
        <td>Hora<td>
        <td>20:30<td>
    </tr>    
  </table>
  ```

## Tabless
  uso das propriedades `float`, `clear` pata que os elementos possam mudar de posição a tela

  ```html
  <div style="float: left">
    esquerda
  </div>

  <div style="float: right">
    direita
  </div>

  <div style="clear: both">
    esquerda
  </div>
  ```

## Flexbox

  A caixa se torna flex, fazendo com que os elementos internos possam receber melhor

  - Alinhamento
  - Ordenação 
  - Tamanhos flexíveis

# Terminologia
  - Flex Container
    - Flex item
  
  - Nesting
  - Axis
    - main
      - start, end
    - cross
      - start, end
  - Flex sizing
    - flexível
    - altera width/height dos itenns para preenchimento dos espaços flex container

# Propriedade do Flex Container
  - Direção dos itens
    * Flex é uma dimensão (horizoontal e vertical)
    * Podemos mudar a direção com 'flex-direction'
    * valores: row, row-reverse, column, colimn-reverse

  - Multi 
    - flex-wrap
    - cada nova linha, um novo flex container

    ** flex-flow
      - shorthand
      - flex-direction | flex-wrap


  - Alinhamento
    - Principal
      * justify-content
        - alinhamento dos elementos dentro do container
        - Distribuição dos elementos

      ** valores
        - flex-start
        - flex-end
        - center
        - space-around
        - space-between
        - space-evenly

    - Cruzado
      * aling-items
        - Alinhamento dos elementos no eixo cruzado

      ** valores
        - stretch
        - flex-start
        - flex-end
        - center

  - Espaços entre os itens
    - gap 
      * espaços entre os elementos

    - valores
      * unidades de medidas
        ** fixas: px, pt
        ** flexiveis: %, em, rem

# Propriedade para os itens

  - flex-besis
  - flex-grow
    - O crescimento do item dentro do container em relação aos espaços vazios
    
  - flex-shrink
    - O encolher do item dentro do container

  - flex
    - shorthand
    - flex-grow, flex-shrink, flex-basis
    - podem ter 1 ,2 ou 3 valores
  - order