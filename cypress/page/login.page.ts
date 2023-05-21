class LoginPage {
    private txtEmail: string;
    private txtpassword: string ;
    private btnLogin: string;
   // private lblSlideIndex: string;
    
    
    constructor(){
      this.txtEmail = "[data-test='input-username']";      
      this.txtpassword = "[data-test='input-password']"
      this.btnLogin = "[data-test='control-submit']"
      
    }
  
    public doLogin(email: string, password: string): void {
      cy.get(this.txtEmail).type(email);
      cy.get(this.txtpassword).type(password);
      cy.get(this.btnLogin).click({force: true});
  }

  }
  
  export {LoginPage}