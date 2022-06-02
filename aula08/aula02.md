- <input> Atributos comuns

- autocomplete
- autofocus
- disabled
- readonly
- value
- form
- nome
- required (obrigatório)
- placeholder

--------------------------------

# <input type="password">

    - Colocar uma senha de maneira segura
    - Esconde o que está sendo digitado no campo 
    - O estilo de apresentação do campo, depente do User Agent

    ## Atribudos

    - minlength / maxlength
        * O número mínimo e/ou máximo de caracteres para este campo

    - size
        * O número aceitável de caracteres que este campo deverá conter

    - pattern
        * Expressão regular para validar o que está sendo digitado no campo 
        * Altamente recomendado o uso de um padrão de seguração açta de senhas
        * exemplo: queremos que a senha cntenha caracteres hexadecimais com o limite de no mínimo de4 e no máximo 8 caracteres
            ** pattern="[0-9a-fA-F]{4,8}"

    - placeholder
        * Mostra um exemplo de texto a ser digitado no campo

    - readonly / disabled
        * Atribudos booleano indicando se o campo está habilitado ou não

    - required 
        * O campo será obrigatório

    - inputmode
        * Poderá alterar o uso do telhado em smartphones
        * exemplo: queremos que o cliente só adicione números
            ** inputmode="numeric"

    - autocomplete
        * on: permite a segestão de: new-password ou current-password
        * off: desabilita a opção de autocompletar
        * new-password: o navegador poderá sugerir uma nova senha

-------------------------------------------------

# <input type="email">

    - Espera que o usuário digite uma senha
    - Irá validar se o valor digitado é um email

    # Atribudos

    - placeholder
    - readonly
    - value
    - required 
    - multiple
        * O campo irá receber 1 ou mais emails, separados por vírgulas

    -minlength / maxlength
        * O minimo e/ou máximo de valor que o campo irá conter

    - size
        * Valor numérico indicando quantos caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário

    - pattern
        * Uso de expressão regular para validar o campo
        exemplo: o usuário só poderá colocar email do dominio rocketseat.com.br
            ** pattern=".+@rocketseat\.com\.br"

----------------------------------------------

# <input type="url">

    - Espera que o usuário digite uma url
    - Irá validar se o valor digitado é uma url

    ## Atribudos

    - placeholder
    - readonly / disabled
    - value
    - required
    - minlength/ maxlength
    - size
    - pattern
    - list
        * o id de uma tag <datalist> que eatá no mesmo documento 
        * o <datalist> irá conter uma lista de valores pré definidas a fim de sugerir ao uauário, quais valores estão disponiveis
            ** valores do <datalist> que não foram compativeis com o campo, não serão apresentadas como sugestão

    - spellcheck
        * habilitar a verificação ortográfica para este campo

# <input type="file">

    - usuário poderá escolher 1 ou mais arquivos para enviar no formulário

    # Atribudos

    - value
        * contém o arquivo a ser enviado

    - accept
        * descreve que tipos de arquivos serão aceitos
        * exemplo: .doc, .docx, .pdf, audio/*, image/*, .png

    - files
        * a lista de arquivo ou arquivos

    - multiple
        * permite o envio de múltiplos arquivos

    - Envio de arquivos
        Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"

# <input type="colorl">

    - interface para selecionar color
    - color picker

    # Atributos

        - valur: RGB
            - se inválido, o preto será exibido
        - list
            * o id de uma <datalist> que eatá no mesmo documento
            * <datalist> irá conter uma lista de valores pré definidos

# <input type="checkbox">

    - caixas que podem ser marcadas 
    - selecionar um valor para ser enviado
    - se não selecionado, não será enviado nenhum dado

    # Atribudos 
    - globais
    - value
        * valor que aquele campo contém 
        * se não estiver presente, o padrão é 'on'
    - checked
        * para deixar o campo marcado por padrão

# <input type="hidden">

    - invisivel ao usuário
    - será enviado com o formulário 
    - não receberá foco
    - leitores de tela não percebem esse campo


# <input type="radio">

    - projetado para selecionar uma única opção de um grupo de opções

    * Atribudos 
        - checked 
        - value

# <textarea>

    - mais de uma linha
    - útil para texto grande

    # Atributos
        * id
        * name
        * rows e cols
        * maxlength e minlength
        * wrap
        - outros
            * autocomplete, autofocus, disabled,
            placeholder, readonly, form, required

# <select>

    - controle que fornece um menu de opção 

    <option>

    - contém as opção a serem selecionadas 
    - atributo necessario 
        - value

    - atributos únicos 
        - multiple
            habilida múltiplas opções
        - size
            quando opções visiveis

# < input type="search">

    - para campos de busca
    - é igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent

    # Atributos

    - list/ datalist
    - pattern
    - aria-label

# <input type="number">

    - entrada de números

    # Atributos
        - min/max
        - step

# <input type="range">

    - controle para selecionar um valor numérico
    - slider ou dial control

    # Atributos 

    - min/max
    - step


## ficar de olho em https://caniuse.com
