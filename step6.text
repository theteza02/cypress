*** Settings ***
Library           SeleniumLibrary
*** Variables ***
${LOGIN URL}      https://shelf.tbeta.co/YELLOWTOPUP?sub_state=state2
${BROWSER}        Chrome
*** Test Cases ***
1.เปิดแอพdigitalShelf https://shelf.tbeta.co/YELLOWTOPUP?sub_state=state2
    Open Browser     ${LOGIN URL}    ${BROWSER}
2.รอหน้าที่ 1 10 วิ ทดสอบขนาดรูป 
    Sleep    10s
3.กดปุ่ม submit เพื่อไปหน้าต่อไป
    Click Element       //*[@id="buttonSubmit"]
4.รอหน้าที่ 2 5 วิ    
    Sleep    5s
5.กดปุ่ม ปิด modal   
   Click Element        css=.btn-srn > svg
    Sleep    2s
6.คลิก zoomout 10ครั้ง      
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
    Click Element       //*[@id="zoomOut"]
7.รอ 2 วิ เพื่อรอกด zoomIn    
    Sleep    2s
8.คลิก zoomIn 5ครั้ง      
    Click Element       //*[@id="zoomIn"]
    Click Element       //*[@id="zoomIn"]
    Click Element       //*[@id="zoomIn"]
    Click Element       //*[@id="zoomIn"]
    Click Element       //*[@id="zoomIn"]
    Click Element       //*[@id="zoomIn"]
9.รอ 2 วิ เพื่อรอกด checkbox         
    Sleep    2s
10. checkbox ติกถูก
    Click Element        css=.ui-chkbox-box
11.รอ 2 วิ เพื่อรอกด ปุ่มถัดไป
    Sleep    2s
12.คลิกปุ่มถัดไปเปลี่ยนหน้าข้อตกลงการใช้งานโปรแกรม   
    Click Element       //*[@id="buttonSubmit"]
13.รอ 5 วิ เพื่ออยู่ในหน้า ข้อตกลงการใช้งานโปรแกรม  
    Sleep    5s
14.กด checkbox ยอมรับ ข้อตกลง      
     Click Element       //*[@id="checkbox2"]
15.รอ 5 วิ เพื่อรอกด NextPage       
    Sleep    5s
16.กด NextPage เพื่อเข้าสู่หน้าต่อไป
    Click Element       //*[@id="buttonNextPate"]    
17.อยู่ในหน้าแสดงรูป product 10 วิ
    Sleep    10s
18.กด NextPage เพื่อเข้าสู่หน้า กรอกข้อมูล
    Click Element       //*[@id="buttonSubmit"]
19.อยู่ในหน้าแบบฟอร์มกรอกข้อมูล   
    Sleep    5s
20.กรอกข้อมูล 
    Sleep    1s
    Input Text    //input[@name="cardID"]    1-1005-00346-34-5
    Sleep    1s
    Input Text    //input[@name="cusPerAddress"]    2398/307
    Sleep    1s
    Input Text    //input[@name="laserCard"]    rp1-2345678-90
    Sleep    1s
    Input Text    //input[@name="cusPerSubDistrict"]    คลองสาม
    Sleep    1s
    input text    //*[@id="perDistrict"]/div/div/div[2]/input  คลองหลวง
    Sleep    1s
    click Element   //*[contains(text(), "คลองหลวง")]
	Sleep    1s
    Input Text    //input[@name="firstName"]    ที
    Sleep    1s
    Input Text    //input[@name="lastName"]    ทดสอบ
    Sleep    1s
    Input Text    //input[@name="perProvince"]    ปทุมธานี
    Sleep    1s
    Input Text    //input[@name="perPostCode"]    12120

    Sleep    1s
    Click Element   //*[@id="dateOfBirth"]
    Sleep    1s
    click element  //*[contains(text(), "พ.ศ. 2532")]
     Sleep    1s
    click element  //*[contains(text(), "ก.ค.")]
    Sleep    1s
    click element  //tbody[contains(@class, "mat-calendar-body")]/tr[3]/td[3]/div
    Sleep    1s
    Click Element  //div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]
    Sleep    1s
    Click Element  //div[@class="danger ng-star-inserted"]
    Sleep    1s
    Input Text    //input[@name="cusPhoneNumber"]    091-7452806
    Sleep    1s
    click element  //*[@id="occupation"]/div
	Sleep    1s
    Input Text    xpath=(//input)[18]    พนัก
    Sleep    1s
    click element  //*[contains(text(), "พนักงานขนส่งสินค้า, พนักงานส่งเอกสาร")]
    Sleep    1s
    Input Text    xpath=(//input)[19]    การซ่อมอุปกรณ์ขนส่งอื่นๆ (ยกเว้นยานยนต์) - หมวดการผลิต
    Sleep    1s
    click element  //*[contains(text(), "การซ่อมอุปกรณ์ขนส่งอื่นๆ (ยกเว้นยานยนต์) - หมวดการผลิต")]
    Sleep    1s
    Input Text    //input[@name="companyName"]    กรุงเทพ
    Sleep    1s
    Click Element    xpath=(//div[@class="col-lg-6 ng-star-inserted"])[3]
    Sleep    1s
    Input Text    //input[@name="officeAddress"]    110050021/305
    Sleep    1s
    Input Text    //input[@name="income1"]    50000
    Sleep    1s
    Input Text    //input[@name="expend1"]    20000
    Sleep    1s
    Input Text    //input[@name="expend6"]    10000
    Sleep    1s
20.กดปุ่ม kyc     
    Click Element    //button[@class="btn btn-wider btn-primary mt-3 mb-5"]
21.จบการทำงาน 
    Sleep    1s