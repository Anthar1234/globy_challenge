/// <reference types="Cypress" />
require("cypress-xpath");

class BankManagerOpenAccount {

    OpenCustomer(nombre){
        cy.get('select#userSelect').contains(nombre).then(option => {
            cy.get('select#userSelect').select(option.val());
          });
    }
    OpenCurrency(currency){
        cy.get('select#currency').contains(currency).then(option => {
            cy.get('select#currency').select(option.val());
          });
    }
    clickButton(){
        cy.xpath("//button[@type='submit']").click()
    }
}
export default BankManagerOpenAccount;

