describe('bottom_sheet ',()=>{
    it('should load url material.angular.io',()=>{
        cy.visit('https://material.angular.io/',{
            timeout:10000
        })
    })

    it('should run url',()=>{
        cy.url().should('include','material.angular.io');
    })



     it('should load url for test badge',()=>{
        cy.visit('https://material.angular.io/components/bottom-sheet/overview',{
            timeout:10000
        })
    })
    
    it('should click tab example',()=>{
         cy.get('[href="/components/bottom-sheet/examples"]').click();
     
    })

    it('should  click bottom_sheet',()=>{
        cy.get('.docs-example-viewer-body > .ng-star-inserted > .mat-focus-indicator > .mat-button-wrapper').click({
            force: true
          })

          cy.get('[href="https://keep.google.com/"] > .mat-list-item-content > .mat-list-text > :nth-child(1)').click({
            force: true
          })
         
  
    })

   
})