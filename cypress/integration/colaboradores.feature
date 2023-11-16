# language: en

Feature: Seção colaboradores
    Background: realizar login
        Given login e realizado com sucesso

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
        Then os resultados da busca sao exibidos com sucesso

    @Positivo @smokeTest
    Scenario: Validar exclusao de colaborador
        When acesso o menu de colaboradores
        And pesquiso colaborador
        And clico no botao de excluir
        And confirmo que desejo excluir
        Then o colaborador é excluido com sucesso