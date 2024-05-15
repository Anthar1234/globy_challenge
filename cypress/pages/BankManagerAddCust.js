/// <reference types="Cypress" />
require("cypress-xpath");
class BankManagerAddCust {
    typeFirstName(name){
        cy.get('input[ng-model="fName"]').type(name);
    }
    typeLastName(lastname){
        cy.get('input[ng-model="lName"]').type(lastname);
    }
    typePostCode(postcode){
        cy.get('input[ng-model="postCd"]').type(postcode);
    }
    clickAddCustomerButton(){
        cy.get('button.btn.btn-default[type="submit"]').click();
    }

}
export default BankManagerAddCust;