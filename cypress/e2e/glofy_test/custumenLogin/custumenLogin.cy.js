import HomePage from "../../../pages/HomePage"
import CustomerLoginPage from "../../../pages/CustomerLoginPage"
import CustomerDashBoardPage from "../../../pages/CustomerDashBoardPage"
import CustomerTransactionPage from "../../../pages/CustomerTransactionPage"
import CustomerListTxPage from "../../../pages/CustomerListTxPage" 

const homePage = new HomePage();
const customerLoginPage = new CustomerLoginPage();
const customerDashBoardPage = new CustomerDashBoardPage();
const customerTransactionPage = new CustomerTransactionPage();
const customerListTxPage = new CustomerListTxPage();


describe("Login test ", () =>{
    beforeEach( () => {        
        homePage.navigate();
    })

    it("Logearse Harry Potter", ()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Harry Potter");
        customerLoginPage.clickLogin();
        cy.xpath('//span[contains(@class, "fontBig") and contains(text(), "Harry Potter")]')
        .should('be.visible');
    })
    it("Logearse Albus Dumbledore y deslogearse", ()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Albus Dumbledore");
        customerLoginPage.clickLogin();
        customerDashBoardPage.validateCreateAccount("Albus Dumbledore")
        customerDashBoardPage.clickButtonLogout()
    })
    it("Logearse con Harry Potter, hacer una Deposito de 100 y Validar dicha transacción",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Harry Potter");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickDeposit();
        customerDashBoardPage.inputAmount(100);
        customerDashBoardPage.clickDepositButton();
        customerDashBoardPage.getMensageDepositSuccessful().should("have.text",'Deposit Successful');
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerTransactionPage.ValideTransaction("100", "Credit")

    })

    it("Logearse con Hermoine Granger, hacer una Retiro correctamente y validarlo en la tabla",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Hermoine Granger");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickWithdrawl();
        customerDashBoardPage.inputAmount(500); 
        customerDashBoardPage.clickWithDrawlButton();
        customerDashBoardPage.clickTransactions();
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateTransactionDebit();
        
    })
    it("Logearse con Hermoine Granger, hacer una Deposito correctamente y validarlo en la tabla",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Hermoine Granger");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickWithdrawl();
        customerDashBoardPage.inputAmount(500); 
        customerDashBoardPage.clickWithDrawlButton();
        customerDashBoardPage.clickTransactions();
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateTransactionDebit();
        
    })
    it("Logearse con Hermoine Granger y resetear todas sus transcaciones ",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Hermoine Granger");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickWithdrawl();
        customerDashBoardPage.inputAmount(500); 
        customerDashBoardPage.clickWithDrawlButton();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.clickRest();
        cy.reload();
        
    })

    it("Logearse con Harry Potter, hacer una Deposito > balance a dinero en cuenta",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Harry Potter");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickWithdrawl();
        customerDashBoardPage.inputAmount(100000000); // Mayor al balance 
        customerDashBoardPage.clickWithDrawlButton();
        cy.xpath('//span[@class="error ng-binding" and @ng-show="message"]')
        .should('be.visible')
        .contains('Transaction Failed. You can not withdraw amount more than the balance.');
    })
    it("Logearse con Harry Potter, hacer una Deposito y validar 1 registro transcacion en la tabla",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Harry Potter");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickDeposit();
        customerDashBoardPage.inputAmount(100);
        customerDashBoardPage.clickDepositButton();
        customerDashBoardPage.clickTransactions();
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateTransaction();

    })
    it("Logearse con Neville Longbottom, hacer una Deposito y validar la transcacion sea credito",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Neville Longbottom");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickDeposit();
        customerDashBoardPage.inputAmount(1000);
        customerDashBoardPage.clickDepositButton();
        customerDashBoardPage.clickTransactions();
        cy.reload()
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateTransactionCredit();

    })
    it("Logearse con Hermoine Granger, hacer una Deposito y validar la transcacion sea debito",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Hermoine Granger");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickWithdrawl();
        customerDashBoardPage.inputWithDrawl(100);
        customerDashBoardPage.clickWithDrawlButton();
        customerDashBoardPage.clickTransactions();
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateTransactionDebit();

    })
    it("Logearse con Harry Potter, y validar que no tenga transacciones",()=>{
        homePage.clickCustomenLogin();
        customerLoginPage.clickCustomenLogin("Harry Potter");
        customerLoginPage.clickLogin();
        customerDashBoardPage.clickTransactions();
        cy.reload();
        customerDashBoardPage.clickTransactions();
        customerListTxPage.ValidateHaveNotRegistered();

    })
})
