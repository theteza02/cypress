
import users from '../../fixtures/userLogin/users.json';

describe('TestLogin', function () {

  users.forEach(data => {

    context.skip('test case by user :: ' + data.username, () => {
      

        it('เทสย่อย level:: '+data.username, () => {

          cy.wait('@post').should('have.property', 'status', 201)
          
        })
   
    
  });

  });

  
});