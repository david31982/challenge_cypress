class IndexPage {
    private btnSignUp: string;
    private btnSign: string ;
    private btnSign2: string;
    private lblSlideIndex: string;
    private lblIdUser: string;
    
    
    constructor(){
      this.btnSignUp = "[data-test='nav-reg-head']";
      this.btnSign = "div.button > span";
      this.btnSign2 = "[data-test='nav-login-head']"
      this.lblSlideIndex = ".swiper-slide-visible > .slider-main__img > picture > .slider-main-content"
      this.lblIdUser =".user-avatar__title"
    }
  
    public btnTosignup (): void {
      cy.get(this.btnSignUp).click();
  }

  public verifySlideIndex (): void {
    cy.get(this.lblSlideIndex).should("be.visible")
}


  public btnToSign (): void {
    cy.get(this.btnSign).click();
    cy.get(this.btnSign2).click();
}

public verifyLogin (id: string): void {
  cy.get(this.lblIdUser).should("be.visible").invoke('text').then(text => {
    expect(text.trim()).to.equal(id)
  });

}
    

  }
  
  export {IndexPage}