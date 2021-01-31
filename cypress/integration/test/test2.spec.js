const listNameTest = [
  {UserName:'theteza01'},
  {UserName:'theteza02'},
  {UserName:'theteza03'}
];


describe('templateTest version 2', () => {
    describe('ทดสอบ', () => {

        listNameTest.forEach(levelFirst => {
        context.skip('หมวดย่อยเทสเคส :: ' + levelFirst.UserName, () => {
        
            it('เทสย่อย level:: '+levelFirst, () => {
              cy.log('mocha [context:it]')
            })
          
        })
      })
})   



})