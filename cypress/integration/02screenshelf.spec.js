


describe('autocomplete ',()=>{
    it('get url https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/CUSTOMER%20INFORMATION',()=>{
        
        cy.visit('https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/CUSTOMER%20INFORMATION',{
            timeout:5000000
        }).then(() => console.timeEnd('loading'))
       
    })

    it('should run url /TOPUPEASY/CUSTOMER%20INFORMATION',()=>{
        cy.wait(1000);
        cy.url().should('include','/TOPUPEASY/CUSTOMER%20INFORMATION');
        cy.wait(1000);
        cy.reload(true)
      })

      it('should input',()=>{
        cy.wait(1000);
       cy.get('#citizenID > .form-control').type('1100500346345');
       cy.get('#perAddress').type('58-162');
       cy.get('#laserNumber > .form-control').type('RP1234567890');
       cy.get('#cusPerSubDistrict').type('คลองสาม');
       cy.get('#perDistrict > .ng-select-container > .ng-value-container > .ng-input > input').type('คลองหลวง');
       cy.get('#perProvince').type('ปทุมธานี');
       cy.get('#perPostCode').type('12120');
       
       
      })
