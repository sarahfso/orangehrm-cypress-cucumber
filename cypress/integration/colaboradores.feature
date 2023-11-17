# language: en

Feature: Secção colaboradores
    Background: realizar login
        Given login é realizado com sucesso

    # Scenario: Validar listagem de colaboradores
    #     When acesso o menu de colaboradores
    #     Then colaboradores são listados com sucesso

    # Scenario: Validar erro sistêmico na listagem de colaboradores
    #     When acesso o menu de colaboradores com erro sistêmico genérico
    #     Then mensagem de erro é exibida com sucesso

    Scenario: Validar listagem de colaboradores
        When acesso o menu de colaboradores
        Then colaboradores são listados com sucesso
        
    @Positivo @smokeTest
    Scenario: Validar cadastro de colaborador
        When acesso o menu de colaboradores
        And clico em adicionar colaborador
        And cadastro novo colaborador
        Then cadastro é realizado com sucesso

    @Positivo @smokeTest
    Scenario: Validar busca de colaborador
        When acesso o menu de colaboradores
        And pesquiso colaborador
        Then os resultados da busca são exibidos com sucesso

    @Positivo @smokeTest
    Scenario: Validar exclusão de colaborador
        When acesso o menu de colaboradores
        And pesquiso colaborador
        And clico no botão de excluir
        And confirmo que desejo excluir
        Then o colaborador é excluído com sucesso

    @Negativo
    Scenario Outline: Cadastro sem sucesso: <testDecription>
        When acesso o menu de colaboradores
        And clico em adicionar colaborador
        And tento cadastrar novo colaborador com "<firstname>", "<middlename>" e "<lastname>"
        Then alerta de "<testDescription>" é exibido com sucesso
        Examples:
            | testDecription                           | firstname | middlename | lastname |
            | Não preenchimento de campos obrigatórios |           |            |          |
            | Não preenchimento do campo "First Name"  |           |            | Sainz    |
            | Não preenchimento do campo "Last Name"   | Carlos    |            |          |