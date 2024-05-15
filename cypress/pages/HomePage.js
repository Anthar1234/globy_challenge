/// <reference types="Cypress" />
require("cypress-xpath");
class HomePage {
    navigate() {
      cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
    }
  
    clickCustomenLogin() {
      cy.xpath('//button[text()="Customer Login"]').click();
    }
  
    clickBankManagerLogin() {
        cy.get('button.btn.btn-primary.btn-lg[ng-click="manager()"]').click();
    }
    clickHome(){
        cy.xpath('//button[contains(@class, "btn") and contains(@class, "home")]').click()
    }
  }
  export default HomePage;