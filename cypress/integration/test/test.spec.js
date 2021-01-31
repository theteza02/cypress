const listNameTest = ['A', 'B', 'C','D','E','F']
describe('templateTest version 1', () => {
    describe('ทดสอบ', () => {

        listNameTest.forEach(levelFirst => {
        context.skip('หมวดย่อยเทสเคส :: ' + levelFirst, () => {
        
            it('เทสย่อย level:: '+levelFirst, () => {
              cy.log('mocha [context:it]')
            })
          
        })
      })
})   



})