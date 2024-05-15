/// <reference types="Cypress" />
require("cypress-xpath");
class CustomerDashBoardPage {
  
    clickTransactions() {
        cy.xpath('//button[contains(text(),"Transactions")]').click();
    }
    clickDeposit(){
        cy.xpath('//button[contains(text(),"Deposit")]').click();
    }
    clickWithdrawl(){
        cy.xpath('//button[@class="btn btn-lg tab" and @ng-click="withdrawl()"]').click();
    }
    inputAmount(numero){
        cy.xpath('//input[@type="number"]').type(numero);
    }
    clickDepositButton(){
        cy.xpath('//button[@type="submit" and @class="btn btn-default" and text()="Deposit"]').click();
    }
    inputWithDrawl(numero){
        cy.xpath('//input[@type="number" and @class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" and @ng-model="amount"]').type(numero);
    }
    clickWithDrawlButton(){
        cy.xpath('//button[@type="submit" and @class="btn btn-default" and text()="Withdraw"]').click();
    }
    validateOpenAccount(name){
        cy.get('div').contains('strong', `Welcome ${name}`).should('be.visible');
        cy.get('span[ng-show="noAccount"]').should('be.visible').and('contain.text', 'Please open an account with us.');
    }
    validateCreateAccount(name){
        cy.get('div').contains('strong', `Welcome ${name}`).should('be.visible');
        cy.get('select#accountSelect')
        .should('be.visible')
    }
    clickButtonLogout(){
        cy.xpath('//button[@ng-show="logout"]').click()
    }
    getMensageDepositSuccessful(){
       return cy.xpath('//span[@class="error ng-binding" and @ng-show="message"]')
    }
    

  }
  export default CustomerDashBoardPage;