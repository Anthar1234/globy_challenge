/// <reference types="Cypress" />
require("cypress-xpath");
class CustomerTransactionPage {

    ValideTransaction(amount, transaction) {
        cy.get('tr').contains('td', transaction).parent('tr').within(() => {   
        cy.contains('td', amount).should('exist') 
        })
    }
 
}
  export default CustomerTransactionPage;