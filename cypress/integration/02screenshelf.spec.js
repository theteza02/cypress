

describe('autocomplete ',()=>{
    it('get url https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/CUSTOMER%20INFORMATION',()=>{
        
        cy.visit('https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/CUSTOMER%20INFORMATION')
    })

    it('should run url /TOPUPEASY/CUSTOMER%20INFORMATION',()=>{
        cy.url().should('include','/TOPUPEASY/CUSTOMER%20INFORMATION');
      })
  
});