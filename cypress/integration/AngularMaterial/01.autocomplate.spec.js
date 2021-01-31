describe('autocomplete ',()=>{
    it('should load url material.angular.io',()=>{
        cy.visit('https://material.angular.io/',{
            timeout:10000
        })
    })

    it('should run url',()=>{
        cy.url().should('include','material.angular.io');
    })



     it('should load url for test autocomplete',()=>{
        cy.visit('https://material.angular.io/components/autocomplete/overview',{
            timeout:10000
        })
       
        cy.request('https://material.angular.io/components/autocomplete/overview').then((response) => {
          expect(response.status).to.eq(200)
        })


    })
    
    it('should click tab example',()=>{
         cy.get('[href="/components/autocomplete/examples"]').click();
     
    })

    it('should click autocomplete #mat-input-0',()=>{
      
        cy.get('#mat-input-0').click({
            force: true
          }).type('two');

          cy.get(' .mat-option-text').click({
            force: true
          });
         
   })


   it('should click autocomplete #mat-input-1',()=>{
      
    cy.get('#mat-input-1').click({
        force: true
      }).type('ig');

      cy.get(' .mat-option-text').click({
        force: true
      });
     
})

 
it('should click autocomplete #mat-input-2',()=>{
      
    cy.get('#mat-input-2').click({
        force: true
      }).type('one');

      cy.get(' .mat-option-text').click({
        force: true
      });
     
})   


it('should click autocomplete #mat-input-3',()=>{
      
    cy.get('#mat-input-3').click({
        force: true
      }).type('Delaware');

      cy.get(' .mat-option-text').click({
        force: true
      });
     
})


it('should click autocomplete #mat-input-4',()=>{
      
    cy.get('#mat-input-4').click({
        force: true
      }).type('f');

      cy.get(' .mat-option-text').click({
        force: true
      });
     
})



it('should click autocomplete #mat-input-5',()=>{
      
    cy.get('#mat-input-5').click({
        force: true
      }).type('One');

      cy.get('app-component-viewer.ng-star-inserted').click({
        force: true
      });
     
})


it('should click autocomplete #mat-input-6',()=>{
      
    cy.get('.example-form > .mat-autocomplete-trigger').click({
        force: true
      }).type('f');

      cy.get(' .mat-option-text').click({
        force: true
      });
     
})

})