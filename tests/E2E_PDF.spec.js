const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage');
const { log } = require('console');
const { NewChatPage } = require('../PageObjectModel/NewChatPage');

test.beforeEach("verify the functionality of user login",async({page})=>{
    const {loginpage,username,password}=setup(page)
    await loginpage.goto()
    await loginpage.validLogin(username,password)
})
test.afterEach("close the browser",async({page})=>{
    await page.waitForTimeout(2000)
    await page.close()
})
const setup=(page)=>{                      // reusuable code
    return {
    username:'harishkummara@fibonalabs.com',
    password:'harish@123',    
    input:'How are these trends influencing global energy policies?',
    title:'Global energy policies?',
    ratingsCount:3,
    checkboxCount:2,
    invalidpassword:'harish',
    homepage:new HomePage(page),
    historyPage:new HistoryPage(page), 
    reportpage:new ReportPage(page),
    loginpage:new LoginPage(page),
    newchatpage:new NewChatPage(page)
}}
///////////////////////////////////////////////////////////////////////////////
// test.describe.configure({mode:'serial'})
test.describe.configure({mode:'parallel'})
test("TC-01_verify the functionality of user login, hover action on the New Chat button, sequential query entry, and generation of chat responses with an overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("TC-02_Verify User Login Functionality and validate Resource dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})
test("TC-03_Verify User Login Functionality and validate Creativity dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})
test("TC-04_Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})
test("TC-05_Verify the functionality of user login and logout",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})
test("TC-06_Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, historyPage,input}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(input)
})
test("TC-07_Verify the functionality of user login and combine the results by selecting N check boxes",async({page})=>{
    const {homepage,historyPage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})
test("TC-08_Verify the functionality of user login and generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test("TC-09_Verify the functionality of user login and generate Report with Selected Contents (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.contentButton()
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test("TC-10_Verify the functionality of user login and generate Report with Selected Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.resourcesButton()
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test("TC-11_Verify the functionality of user login and a popup allowing user to edit the title",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    await reportpage.reportViewclose_()
})
test("TC-12_Verify the functionality of user login and sequential query entry and generation of chat responses with overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("TC-13_Verify the functionality of user login and perform login Page Password Masking Verification",async({page})=>{
    const {loginpage,homepage,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField(invalidpassword)
    const passwordValue=await page.getByLabel(loginpage.password).isVisible()
    await expect(passwordValue).toBeTruthy()
})
test("TC-14_Verify the functionality of user login and validate Login Button State Prior to Input Entry",async({page})=>{
    const {loginpage,homepage,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField(invalidpassword)
    await page.getByRole(loginpage.login).isDisabled()
})
test("TC-15_Verify the functionality of user login and showing Error Message when invalid username and password is entered",async({page})=>{
    const {loginpage,homepage,username,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.userIDTextField(username)
    await loginpage.passwordTextField(invalidpassword)
    await loginpage.termsOfServices()
    await loginpage.loginButton()
    expect(await loginpage.errorMessage()).toEqual('Invalid credentials')
})
test("TC-16_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can download, preview, and close HTML files",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.pdfDocFiles()
    await page.waitForTimeout(3000)
    await newchatpage.popupCloseWindow()
})
test("TC-17_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can navigate through resources using horizontal scroll",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.pdfDocScrol()
})
test("TC-18_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and resources and the ratings for each response",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.userRatings()
})
test("TC-19_Verify the functionality of user login and user can enter his feedback for generated response",async({page})=>{
    const {homepage,input,newchatpage}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.customerFeedback(input)
})
test("TC_20_Verify the functionality of user login, a popup allowing user to edit the title and check its updated  ",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    expect.soft(await page.locator("#reportTitle")).toHaveText(title)
})