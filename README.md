# Cypress + Cucumber
 
Projeto de exemplo para realização de testes e2e utilizando o Cypress + Cucumber. Você pode visualizar os reports gerados em integração contínua [aqui](https://sarahfso.github.io/orangehrm-cypress-cucumber).
 
## Ferramentas utilizadas:
- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Cucumber](https://cucumber.io/ "Cucumber")
 
## Tutorial, Instalação e execução
 
### Executar este projeto em sua máquina
 
* Em um terminal, dentro da pasta do projeto, execute o seguinte comando:
 
**Instalar as dependências:**  
```
npm i
```
 
### Tutorial para iniciar um novo projeto utilizando esta estrutura
 
* Dentro da pasta específica para o projeto:
```
npm init -y
```
* Instalar a última versão do cypress e cypress-cucumber-preprocessor:
```
npm i cypress -D
npm i cypress-cucumber-preprocessor -D
```
* Somente para o report:  
```
npm i multiple-cucumber-html-reporter -D
``` 
* Em um terminal execute o comando abaixo para abrir o cypress:
```
cypress open 
```
 
### Trick
 
* Você pode abrir o projeto utilizando o `npx`:
```
npx cypress open
```
 
### Reports
Você pode visualizar os reports gerados [aqui](https://sarahfso.github.io/orangehrm-cypress-cucumber).
