describe('badge ',()=>{
    it('should load url material.angular.io',()=>{
        cy.visit('https://material.angular.io/',{
            timeout:10000
        })
    })

    it('should run url',()=>{
        cy.url().should('include','material.angular.io');
    })



     it('should load url for test badge',()=>{
        cy.visit('https://material.angular.io/components/badge/overview',{
            timeout:10000
        })
    })
    
    it('should click tab example',()=>{
         cy.get('[href="/components/badge/examples"]').click();
     
    })

    it('should expect contain = Text with a badge',()=>{
      cy.get(':nth-child(1) > .mat-badge').contains('Text with a badge')
  
 })

  
 it('should expect contain = Text with large badge',()=>{
  cy.get(':nth-child(2) > .mat-badge').contains('Text with large badge')

})

it('should expect contain = Button with a badge on the left',()=>{
  cy.get('.docs-example-viewer-body > .ng-star-inserted > :nth-child(3)').contains('Button with a badge on the left')

})
it('should click Button with a badge on the left',()=>{
  cy.get('.docs-example-viewer-body > .ng-star-inserted > :nth-child(3) > .mat-focus-indicator > .mat-button-wrapper').click({
    force: true
  });

})

it('should expect contain = Button toggles badge visibility',()=>{
  cy.get('.ng-star-inserted > :nth-child(4)').contains('Button toggles badge visibility')

})

it('should click Button Button toggles badge visibility= hide',()=>{
  cy.get(':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click({
    force: true
  });
})

  it('should click Button Button toggles badge visibility= true',()=>{
    cy.get(':nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click({
      force: true
    });

})

it('should expect contain = Icon with a badge',()=>{
  cy.get('.ng-star-inserted > :nth-child(5)').contains('Icon with a badge')

})

it('should expect Icon with a badge=home',()=>{
  cy.get(':nth-child(5) > .mat-icon').contains('home')

})

})