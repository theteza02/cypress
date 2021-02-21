import { readFileSync, writeFileSync } from "fs";
import { parse } from "papaparse";

try {
  const csvFile = readFileSync("./cypress/fixtures/testData.csv", "utf8");
  const csvResults = parse(csvFile, {
    header: true,
    complete: csvData => csvData.data
  }).data;
  writeFileSync(
    "./cypress/fixtures/testDataFromCSV.json",
    JSON.stringify(csvResults, null, 4),
    "utf-8"
  );
} catch (e) {
  throw Error(e);
}

describe('autocomplete ',()=>{
   

    it('get url https://shelf.c1-beta-tiscogroup.com',()=>{
        cy.wait(1000);
        cy.visit('https://shelf.c1-beta-tiscogroup.com',{
            timeout:10000
        })
        cy.get('#buttonSubmit').click({force:true});
        cy.wait(1000);
        cy.get('.btn-srn > svg').click({force:true});
        cy.wait(1000);
        cy.get('#viewerContainer').scrollTo('0%', '100%',{force:true})
        cy.wait(1000);
        cy.get('.ui-chkbox-icon').click({ force: true })
        cy.wait(1000);
        cy.get('#buttonSubmit').click({ force: true })
        cy.wait(1000);
        cy.get('.checkbox-custom').click({ force: true })
        cy.wait(1000);
        cy.get('#buttonNextPate').click({ force: true })
        cy.wait(1000);
        cy.get(' #buttonSubmit').click({ force: true })
        cy.wait(1000);
        cy.get('#citizenID > .form-control').click({ force: true }).clear({ force: true }).type('1100500346345',{ force: true })
        cy.get(' #perAddress').click({ force: true }).clear({ force: true }).type('58/162',{ force: true })
        cy.get(' #laserNumber > .form-control').click({ force: true }).clear({ force: true }).type('RP1-2345678-90',{ force: true })
        cy.get(' #name').click({ force: true }).clear({ force: true }).type('ทดสอบชื่อ',{ force: true })
        cy.get(' #surname').click({ force: true }).clear({ force: true }).type('ทดสอบนามสกุล',{ force: true })

  

        cy.get("#cusPerSubDistrict").clear({ force: true }).type('คลองสาม',{ force: true },'{enter}')
   

        
        cy.get('#ngb-typeahead-0-1')
        .contains('คลองสาม')
        .click({ force: true });

      

        cy.get("#perDistrict > .ng-select-container > .ng-value-container > .ng-input > input") .clear({ force: true }).type('คลองหลวง',{force:true})
         .then((selects) => {
            let select = selects[0];
            cy.wrap(select) 
               .click()
               .get("ng-dropdown-panel") 
               .get(".ng-option")
               .contains('คลองหลวง')
               .then((item) => {
                  cy.wrap(item).click(); 

               });
         });

         cy.get("#perProvince").clear({ force: true }).type('ปทุมธานี',{ force: true },'{enter}')
         cy.get("#perPostCode").clear({ force: true }).type('12120',{ force: true },'{enter}')
         cy.get("#dateOfBirth").clear({ force: true }).type('11/07/1989{enter}',{ force: true },'{enter}').click({ force: true })
         cy.get(" #cusPhoneNumber > .form-control").clear({ force: true }).type('917452806',{ force: true },'{enter}')
         cy.get(" #dateOfBirth").focused({ force: true })

         cy.get("#occupation > .ng-select-container > .ng-value-container > .ng-input > input") .clear({ force: true }).type('พนักงานบริษัทเอกชน (ประจำ)',{force:true})
         .then((selects) => {
            let select = selects[0];
            cy.wrap(select) 
               .click()
               .get("ng-dropdown-panel") 
               .get(".ng-option")
               .contains('พนักงานบริษัทเอกชน (ประจำ)')
               .then((item) => {
                  cy.wrap(item).click(); 

               });
         });

         cy.get("#cusBusinessType  > .ng-select-container > .ng-value-container > .ng-input > input") .clear({ force: true }).type('ธนาคารพาณิชย์ไทย (รวมกิจการวิเทศธนกิจ) - หมวดกิจกรรมทางการเงินและการประกันภัย',{force:true})
         .then((selects) => {
            let select = selects[0];
            cy.wrap(select) 
               .click()
               .get("ng-dropdown-panel") 
               .get(".ng-option")
               .contains('ธนาคารพาณิชย์ไทย (รวมกิจการวิเทศธนกิจ) - หมวดกิจกรรมทางการเงินและการประกันภัย')
               .then((item) => {
                  cy.wrap(item).click(); 

               });
         });


         cy.get("#companyName").clear({ force: true }).type('Tisco IT',{ force: true },'{enter}')
         cy.get("#officeAddress").clear({ force: true }).type('ธนาคารtisco สำนักงานใหญ่ ',{ force: true },'{enter}')
       
         cy.get('.ui-chkbox-box').click({ force: true })
         cy.get('.btn').click({ force: true })

         cy.get(':nth-child(2) > .ng-untouched > .ui-radiobutton > .ui-radiobutton-box > .ui-radiobutton-icon').click({ force: true })

         cy.get('#ekycbtn').click({ force: true })
        
    })

   

    
});