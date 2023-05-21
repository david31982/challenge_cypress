class UserFormPage {
    private formSignUp: string;
    private txtEmail: string;
    private txtPassword: string;
    private txtConfimPassword: string;
    private listCurrency: string;
    private listOption: string;
    private btnSubmit: string;
    private btnTerm: string;
    private btnBonus: string;
    private lblMessage: string
    private lblWrongPassword: string
    private lblWrongEmail: string

    
    
    constructor(){
     this.formSignUp = ".page-user-form__wrapper"
     this.txtEmail = "[data-test='input-email']";
     this.txtPassword = "[data-test='input-password']";
     this.txtConfimPassword = "[data-test='input-password_confirmation']";   
     this.listCurrency = ".input__wrapper > .selectric-wrapper > .selectric > .label";        
     this.listOption = "ul";        
     this.btnSubmit = "[data-test='control-submit']";     
     this.btnTerm = "[data-test='input-terms_and_conditions']";  
     this.btnBonus = "[data-test='input-bonus']";  
     this.lblMessage = ".notification__title"; 
     this.lblWrongPassword = "[data-test='error-password_confirmation']"; 
     this.lblWrongEmail = "data-test='error-email']";
    }
  
    public signIn (email: string, password: string, currency: string): void {
      cy.get(this.txtEmail).type(email);
      cy.get(this.btnTerm).check({force: true});
      cy.get(this.txtPassword).type(password);
      cy.get(this.txtConfimPassword).type(password);      
      cy.get(this.listCurrency).click();
      cy.get(this.btnBonus).check({force: true});
      cy.get(this.btnSubmit).click();     
      
  }
  public signErrorPassword(email: string, password: string, wrongPasswd: string, currency: string): void {
    cy.get(this.txtEmail).type(email);
    cy.get(this.btnTerm).check({force: true});
    cy.get(this.txtPassword).type(password);
    cy.get(this.txtConfimPassword).type(wrongPasswd);      
    cy.get(this.listCurrency).click();
    cy.get(this.btnBonus).check({force: true});
    cy.get(this.btnSubmit).click();     
    
}

  public verifyRegistration(message: string): void {
    cy.get(this.lblMessage)     
      .invoke('text').then(text => {
        expect(text.trim()).to.equal(message)
      }) 
}

public verifyMessageError(message: string): void {
    cy.get(this.lblWrongPassword)     
      .invoke('text').then(text => {
        expect(text.trim()).to.equal(message)
      }) 
}

public verifyMessageErrorEmail(message: string): void {
    cy.get(this.lblWrongEmail)     
      .invoke('text').then(text => {
        expect(text.trim()).to.equal(message)
      }) 
}


 
  }
  
  export {UserFormPage}