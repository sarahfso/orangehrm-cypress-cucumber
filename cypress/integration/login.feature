# language: en

Feature: Login no site da OrangeRh

    @Positivo @smokeTest
    Scenario: Login com sucesso
        Given acesso a pagina de login
        When realizo o login com dados válidos
        Then login é realizado com sucesso


    @Negativo
    Scenario Outline: Login sem sucesso: <testDecription>
        Given acesso a pagina de login
        When realizo login com "<login>" e "<senha>"
        Then alerta de dados incorretos é exibido
        Examples:
            | testDecription  | login | senha |
            | Senha incorreta | Admin | 123   |
            | Login incorreto | 123   | 123   |

    @Negativo
    Scenario Outline: Login sem sucesso: <testDecription>
        Given acesso a pagina de login
        When realizo login com "<login>" e "<senha>"
        Then alerta de "<testDecription>" é exibido com sucesso
        Examples:
            | testDecription                | login | senha |
            | não preenchimento do username |       | 123   |
            | não preenchimento da senha    | 123   |       |
