import {
    TooltipPage,   
    IndexPage, 
    UserFormPage,
  } from "../page/index";
  
  describe('User Registration', () => {
    let tootipPage: TooltipPage;
    let indexPage: IndexPage;
    let userFormPage: UserFormPage;

    let email: string;
    let passwd: string;
    let wrongPasswd: string;
    let optionCurrency: string
    let registrationMessage: string
    let wrongPasswdMessage: string
    let wrongEmailMessage: string

    let ramdom = Math.random() * 7;

    before(() => {
       cy.clearCookies() // Clear cookies for the currrent domain
       tootipPage = new TooltipPage();          
       indexPage = new IndexPage();
       userFormPage = new UserFormPage();
       

       email = `test${ramdom}@gmail.com`;
       passwd = "Test123*+";
       wrongPasswd = "test123*+"
       optionCurrency = "ILS"
       registrationMessage = "Congratulations!"
       wrongPasswdMessage = "Password must be strictly repeated."
       wrongEmailMessage = "This email has been used for registration already. Please contact customer support."
    
      });

    describe('Successful user registration', () => {
      it('should register a new user successfully', () => {
        // Test implementation
        
       // To avoid your test case from failing due to uncaught exceptions in Cypress, you can use cy.on/Cypress.on command to listen for the uncaught:exception event. 
       cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });
  cy.visit("/", {failOnStatusCode: false});   
  tootipPage.closeTootip();
  indexPage.btnTosignup();
  userFormPage.signIn(email, passwd, optionCurrency);  
  userFormPage.verifyRegistration(registrationMessage);  

      });
    });

    
  
    describe('Failed registration due to mismatched passwords', () => {
      it('should display an error message when passwords do not match', () => {
        
       // To avoid your test case from failing due to uncaught exceptions in Cypress, you can use cy.on/Cypress.on command to listen for the uncaught:exception event. 
       cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });
        cy.visit("/", {failOnStatusCode: false}); 
        cy.wait(8000)
        tootipPage.closeTootip();
        indexPage.btnTosignup();
        userFormPage.signErrorPassword(email, passwd, wrongPasswd, optionCurrency);
        userFormPage.verifyMessageError(wrongPasswdMessage);  
        

      });
    });
  
    describe('Failed registration due to duplicate username', () => {
      it('should display an error message when email is already in use', () => {
         
       // To avoid your test case from failing due to uncaught exceptions in Cypress, you can use cy.on/Cypress.on command to listen for the uncaught:exception event. 
       cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });
        cy.visit("/", {failOnStatusCode: false}); 
        cy.wait(8000)
        tootipPage.closeTootip();
        indexPage.btnTosignup();
        email = "david31982@gmail.com"
        userFormPage.signIn(email, passwd, optionCurrency);
        cy.wait(80000)
        userFormPage.verifyMessageErrorEmail(wrongEmailMessage);   
        
      });
    });
  });