import {
    TooltipPage,   
    IndexPage, 
    LoginPage,
    
  } from "../page/index";
  
  describe('play an online game', () => {
    let tootipPage: TooltipPage;
    let indexPage: IndexPage;
    let loginPage: LoginPage;
    

    let email: string;
    let passwd: string;
    let idUser: string;
    let optionCurrency: string
    let registrationMessage: string
    let wrongPasswdMessage: string
    let wrongEmailMessage: string

    let ramdom = Math.random() * 7;

    before(() => {
       cy.clearCookies() // Clear cookies for the currrent domain
       tootipPage = new TooltipPage();          
       indexPage = new IndexPage();      
       loginPage = new LoginPage();
       

       email = `david31982@gmail.com`;
       passwd = "Test123*+";              
       idUser = "id 30166710"
       wrongPasswdMessage = "Password must be strictly repeated."
       wrongEmailMessage = "This email has been used for registration already. Please contact customer support."
    
      });

    describe.only('I should to play the fist game', () => {

      it('should to login and play', () => {
        // Test implementation
        
       // To avoid your test case from failing due to uncaught exceptions in Cypress, you can use cy.on/Cypress.on command to listen for the uncaught:exception event. 
       cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });
        cy.visit("/", {failOnStatusCode: false}); 
        cy.wait(6000) 
        indexPage.verifySlideIndex();
        tootipPage.closeTootip();
        indexPage.btnToSign(); 
        loginPage.doLogin(email, passwd);
        cy.wait(6000)
        indexPage.verifyLogin(idUser);

      });
    });

  });