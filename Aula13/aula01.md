# DOM  (Document Object Model)
  * É o HTML convertido para um Objeto JavaScript
  * API que representa e interage com o HTML  
  * Estrutura de dados do tipo  árvore, criado poelo browser
  * Propriedades e métodos

# Para que ?
  * JavaScript usa a DOM para se conectar ao HTML
  * Manipular o HTML com o JavaScript
  * Você só programa para WEB porqui existe a DOM 

# Selecionando Elementos
  document.getElementById('title')
    - retorna (element)
  document.getElementsByClassName('photo')
    - retorna (HTMLCollection)
  document.getElementsByTagName('p')
    - retorna (HTMLCollection)
  document.querySelector('div')
    - retorna (element)
  document.querySelectorAll("div")
    - retorna (Nodelist)