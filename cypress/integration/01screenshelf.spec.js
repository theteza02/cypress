describe('autocomplete ',()=>{
   
    it('get url https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/SPLASH%20PAGE',()=>{
        cy.wait(5000);
        cy.visit('https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/SPLASH%20PAGE',{
            timeout:10000
        })
    })

    it('should run url shelf.c1-beta-tiscogroup.com',()=>{
        cy.url().should('include','shelf.c1-beta-tiscogroup.com');
    })

    it(' click ปุ่มตกลงหน้า spash page',()=>{
     cy.wait(3000)
        cy.get('#buttonSubmit').dblclick({ force: true }).then(()=>{
           
        });
        cy.wait(1000);
        cy.get(' .circle').click({ force: true })
    })
    it('check disble buttonSubmit ถ้ายังไม่ scroll ต้อง disble',()=>{
        cy.get('#buttonSubmit').should('be.disabled')
        
       })

 
       it('เลื่อน scrollTo page pdf',()=>{
     
        cy.wait(1000);
        cy.get('#viewerContainer').scrollTo('0%', '100%')
     
   
    })
    it('เช็ค ปุ่ม ถ้ายังไม่ติกต้อง disble ไว้ ',()=>{
     
        cy.wait(5000);
            
        cy.get('#buttonSubmit').should('be.disabled')
     
   
    })
    it('ติก checkbox และ ต้องไม่ visible',()=>{
     
        cy.wait(5000);
            
        cy.get('.ui-chkbox-icon').click({ force: true })
     
   
    })




    it('เช็ค ปุ่ม ถ้า ติก checkbox ต้อง enable ไว้ ',()=>{
     
        cy.wait(5000);
            
        cy.get('#buttonSubmit').should('not.to.be.disabled')
     
   
    })


    it('click ปุ่มตกลงหน้า PDf ',()=>{
     
        cy.wait(5000);
        cy.get('#buttonSubmit').dblclick({ force: true })
      
        cy.visit('https://shelf.c1-beta-tiscogroup.com/TOPUPEASY/CUSTOMER%20INFORMATION',{
            timeout:10000
        })
       
        
    })

  
});