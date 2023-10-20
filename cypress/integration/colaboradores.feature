# language: en

Feature: Seccção colaboradores
Background: realizar login
        Given login e realizado com sucesso

    Scenario: Validar listagem de colaboradores
        When acesso o menu de colaboradores
        Then colaboradores são listados com sucesso
