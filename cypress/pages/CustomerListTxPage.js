/// <reference types="Cypress" />
require("cypress-xpath");
class CustomerListTxPage {
    ValidateTransaction(){
        cy.get('table.table tbody tr').should('exist');
    }

    ValidateHaveNotRegistered(){
        cy.get('table.table tbody tr').should('not.exist');
    }

    ValidateTransactionCredit(){
        cy.get('table.table').should('be.visible')
        cy.get('tbody tr:last').as('ultimaFila')
        cy.get('@ultimaFila').within(() => {
        cy.get('td:nth-child(3)').should('contain', 'Credit')
        })
    }

    ValidateTransactionDebit(){
        cy.get('table.table').should('be.visible')
        cy.get('tbody tr:last').as('ultimaFila')
        cy.get('@ultimaFila').within(() => {
        cy.get('td:nth-child(3)').should('contain', 'Debit')
        })
    }
      

    clickRest(){
        cy.xpath("//button[@ng-show='showDate']").click();
    }
}
export default CustomerListTxPage;