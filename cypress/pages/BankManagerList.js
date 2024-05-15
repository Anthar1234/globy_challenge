/// <reference types="Cypress" />
require("cypress-xpath");
class BankManagerList{
    deleteCustomer(name){
        cy.contains('tbody tr', name).within(() => {
            cy.contains('button', 'Delete').click();
          });
    }
    deleteAllCustomers(){
        const nombresEliminados = [];
    
        // Busca y elimina cada fila de la tabla
        cy.get('tbody tr').each(($fila) => {
            const nombre = $fila.find('td').eq(0).text(); // Obtén el nombre de la primera celda de la fila
            nombresEliminados.push(nombre); // Agrega el nombre a la lista de nombres eliminados
            $fila.find('button:contains("Delete")').click(); // Encuentra el botón "Delete" dentro de la fila y haz clic en él
          });
    
        return nombresEliminados; // Retorna la lista de nombres eliminados
        }
    ValidateDeleteCustomer(nombre){
        cy.get('tbody').contains('tr', nombre).should('not.exist');
    }
    validateTableIsEmpty() {
        cy.get('div[style="height:250px;"] table tbody').should('not.contain', 'tr');
      }   

}
export default BankManagerList;
