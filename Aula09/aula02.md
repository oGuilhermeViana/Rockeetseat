# Variáveis
  * Nomes simbólicos para receber algum valor
  * Atalho de código 
  * Identificadores
  * 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

  O JS é uma linguagem fracamente tipada e dinâmica
  - Variáveis não precisam ter um tipo previamente definido 
  - Podemos mudar o conteúdo da variável

# Scope
  * Escopo determina a visibilidade de algumas variáveis no JS

  ## Block statment
  ``` js 
  // vamos iniciar um bloco
  {
    // aqui dentro é um bloco e posso colocar qualquer código 
  }
  // aqui fechamos o bloco
  ```
  O bloco, também criará um novo escopo. Chemamos de 'block-statment'

  ## var
    O var é global e local

  ## let e const
    const e let são locais e só funcionam no escopo onde foi criada

# Para criar nomes
  * JS é case-sensitive
  * JS aceita a cadeia de caracteres Unicode

  - Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Inicioar com letras
    * Colocar acentos
    * letras maíuscula e munúsculas fazen diferença

  - Não Posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

  - Ideal:
    * Criar nomes que fazem sentido 
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * escrever em inglês