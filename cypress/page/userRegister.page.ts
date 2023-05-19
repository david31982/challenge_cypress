class UserRegisterPage {
    private lbEmail: string;
    private lbPasswd: string;
    private btnSubmitLogin: string;
  
    constructor() {
      this.lbEmail = "#email";
      this.lbPasswd = "#passwd";
      this.btnSubmitLogin = "#SubmitLogin";
    }
  
    public signIn (email: string, passwd: string): void {
        cy.get(this.lbEmail).type(email);
        cy.get(this.lbPasswd).type(passwd);
        cy.get(this.btnSubmitLogin).click();
    }
}
  
  export {UserRegisterPage};