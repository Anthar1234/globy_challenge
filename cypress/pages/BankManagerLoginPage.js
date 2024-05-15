/// <reference types="Cypress" />
require("cypress-xpath");
class BankManagerLoginPage {
  
    clickAddCustomer() {
        cy.xpath('//button[@ng-click="addCust()"]').click();
    }
    clickOpenAccount(){
        cy.get('button.btn.btn-lg.tab[ng-click="openAccount()"]').click();
    }
    clickCustomers(){
        cy.get('button.btn.btn-lg.tab[ng-click="showCust()"]').click();
    }


  }
  export default BankManagerLoginPage;