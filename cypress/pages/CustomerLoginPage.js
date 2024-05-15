/// <reference types="Cypress" />
require("cypress-xpath");
class CustomerLoginPage {
  
    clickCustomenLogin(name) {
        cy.get('select#userSelect').select(name);
    }
    clickLogin(){
        cy.xpath('//button[@class="btn btn-default" and @type="submit" and @ng-show="custId != \'\'"]').click();
    }
    
  
  }
  export default CustomerLoginPage;