import HomePage from "../../../pages/HomePage"
import BankManagerLoginPage from "../../../pages/BankManagerLoginPage"
import CustomerLoginPage from "../../../pages/CustomerLoginPage"
import BankManagerAddCust from "../../../pages/BankManagerAddCust"
import BankManagerList from "../../../pages/BankManagerList"
import BankManagerOpenAccount from "../../../pages/BankManagerOpenAccount"
import CustomerDashBoardPage from "../../../pages/CustomerDashBoardPage"


const bankManagerLoginPage = new BankManagerLoginPage();
const homePage = new HomePage();
const customerLoginPage = new CustomerLoginPage();
const bankManagerAddCust = new BankManagerAddCust();
const bankManagerList = new BankManagerList();
const bankManagerOpenAccount = new BankManagerOpenAccount();
const customerDashBoardPage = new CustomerDashBoardPage();


describe("Test BankManager", () =>{

    beforeEach( () => {        
        homePage.navigate();
    })

    it("Agregar cliente y validar su registro en tabla",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickAddCustomer();
        bankManagerAddCust.typeFirstName("Anthar");
        bankManagerAddCust.typeLastName("Asskoul")
        bankManagerAddCust.typePostCode("1324");
        bankManagerAddCust.clickAddCustomerButton();
        bankManagerLoginPage.clickCustomers();
        cy.contains('tbody tr', 'Anthar').should('exist');

    })
    it("Agregar cliente y validar que no tiene cuenta creada",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickAddCustomer();
        bankManagerAddCust.typeFirstName("Anthar");
        bankManagerAddCust.typeLastName("Asskoul")
        bankManagerAddCust.typePostCode("1324");
        bankManagerAddCust.clickAddCustomerButton();
        homePage.clickHome();
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Anthar Asskoul");
        customerLoginPage.clickLogin();
        customerDashBoardPage.validateOpenAccount("Anthar Asskoul");
        

    })
    it("Agregar cliente y eliminar registro",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickAddCustomer();
        bankManagerAddCust.typeFirstName("Anthar");
        bankManagerAddCust.typeLastName("Asskoul")
        bankManagerAddCust.typePostCode("1324");
        bankManagerAddCust.clickAddCustomerButton();
        bankManagerLoginPage.clickCustomers();
        bankManagerList.deleteCustomer("Anthar");
        bankManagerList.ValidateDeleteCustomer("Anthar");

    })
    it("Eliminar un cliente ya registrado ej (Harry Potter)",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickCustomers();
        bankManagerList.deleteCustomer("Harry Potter");
        bankManagerList.ValidateDeleteCustomer("Harry Potter");

    })
    it("Eliminar todos los clientes ya registrados",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickCustomers();
        const eliminar = bankManagerList.deleteAllCustomers();
        cy.reload();
        bankManagerList.validateTableIsEmpty();
        

    })
    it("Registrar cliente y Abrir su cuenta",()=>{
        homePage.clickBankManagerLogin();
        bankManagerLoginPage.clickAddCustomer();
        bankManagerAddCust.typeFirstName("Anthar");
        bankManagerAddCust.typeLastName("Asskoul")
        bankManagerAddCust.typePostCode("1324");
        bankManagerAddCust.clickAddCustomerButton();
        bankManagerLoginPage.clickOpenAccount();
        bankManagerOpenAccount.OpenCustomer("Anthar Asskoul")
        bankManagerOpenAccount.OpenCurrency("Dollar")
        bankManagerOpenAccount.clickButton();
        homePage.clickHome();
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Anthar Asskoul");
        customerLoginPage.clickLogin();
        customerDashBoardPage.validateCreateAccount("Anthar Asskoul");

    })

})