class TooltipPage {
    private btnClosetooltip: string;


    
  
    constructor() {
      this.btnClosetooltip = ".mfp-close";
    }
  
    public closeTootip (): void {
        cy.get(this.btnClosetooltip).click();
    }
}
  
  export {TooltipPage};