# Formulário 

* Para que serve?
- Capturar dados de entrada (input)
- Interação
- Controle

* Pré requisito
- HTML Básico

* Dominar 
- Estilização
- Validação
- Controles customizados
- Javascript

# Form <form>
- Elemento que definirá um formulário
- É um container estilo <section> <footer>

* Atribudos básico
- action 
- method

# Fieldset <fieldset>
- Agrupamento de campos
- mesmo propósito
- semântico
- acessibilidade

* Atribudos
- disable
    -- desabilita todos os elementos internos
    -- não serão enviados ao submeter o formulário
- form
    --o id de um formulário ao qual esse fieldser pertence
    -- não precisa estar dentro do formulário
- name
    nome do grupo

<legend>
- nome do agrupamento
- primeiro elemento do fieldser

<form>
    <fieldset>
        <legend>Contato</legend>
    </fieldset>
</form>

# Label <label>
-associar e identificar uma (ou mais) tag de entrada de dados
- acessibilidade
- você poderá clicar para mudar o foco da entrada de dados

* Atribudos
- for
    -- Para fazer a conexão entre este label e a tag de entrada de dados
    - É feita via id do input
    - Só funciona com o elemento especifico
    - button, input (not hidden), meter, output, progress, select, textarea

# Button <button>
- Representa um botão 
- Usado para enviar formulário
- É estilizado pelo user agent

* Atibutos comuns
- type 
    -- submit
    -- reset
    -- button
- autofocus
- disable
- name
- value
- form

# Datalist <datalist>
- Lista de valores com sugestão a uma tag <input>
- valores sugestivo e não obrigatórios
- Usuário poderão selecionar um dos valores, ou colocar um valor diferente da sugestão

<datalist id="fruits">
    <option>apple<option>
    <option>banana<option>
    <option>mango<option>
    <option>orange<option>
    <option>cherry<option>
</datalist>

* list
- Recebe com valor o id de um <ddatalist> residente no mesmo documento