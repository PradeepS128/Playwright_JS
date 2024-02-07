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
    username:'pradeep.kumar@fibonalabs.com',
    password:'pradeep@123',    
    input:'How are these trends influencing global energy policies?',
    ratingsCount:3,
    homepage:new HomePage(page),
    historyPage:new HistoryPage(page), 
    reportpage:new ReportPage(page),
    loginpage:new LoginPage(page),
    newchatpage:new NewChatPage(page)
}}
///////////////////////////////////////////////////////////////////////////////
// test.describe.configure({mode:'serial'})
test.describe.configure({mode:'parallel'})
test("verify the functionality of user login, hover action on the New Chat button, sequential query entry, and generation of chat responses with an overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("Verify User Login Functionality and validate Resource dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})
test("Verify User Login Functionality and validate Creativity dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)
    const input='How are these trends influencing global energy policies?'    
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})
test("Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})
test("Verify the functionality of user login and logout",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})
test("Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, historyPage}=setup(page)
    const searchInput='How are these trends influencing global energy policies?'
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(searchInput)
})
test("Verify the functionality of user login and combine the results by selecting N check boxes",async({page})=>{
    const {homepage,historyPage}=setup(page)
    const checkboxCount=3;
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})
test("Verify the functionality of user login and generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage}=setup(page)
    const checkboxCount=2;
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.genaratereport_colored_()
    await historyPage.closeButton()
})
test("Verify the functionality of user login and generate Report with Selected Contents (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    const checkboxCount=2;
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.contentButton()
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test("Verify the functionality of user login and generate Report with Selected Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    const checkboxCount=2;
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.resourcesButton()
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test("Verify the functionality of user login and a popup allowing user to edit the title",async({page})=>{
    const {homepage,reportpage,input}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(input)
    await reportpage.saveReportTitle()
    await reportpage.reportViewclose_()
})
test("Verify the functionality of user login and sequential query entry and generation of chat responses with overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("Verify the functionality of user login and perform login Page Password Masking Verification",async({page})=>{
    const {loginpage,homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField("pradeep")
    const passwordValue=await page.getByLabel(loginpage.password).isVisible()
    await expect(passwordValue).toBeTruthy()
})
test("Verify the functionality of user login and validate Login Button State Prior to Input Entry",async({page})=>{
    const {loginpage,homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField("pradeep")
    await page.getByRole(loginpage.login).isDisabled()
})
test("Verify the functionality of user login and showing Error Message when invalid username and password is entered",async({page})=>{
    const {loginpage,homepage,username}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.userIDTextField(username)
    await loginpage.passwordTextField("pradeep")
    await loginpage.termsOfServices()
    await loginpage.loginButton()
    expect(await loginpage.errorMessage()).toEqual('Invalid credentials')
})
test("Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can download, preview, and close HTML files",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.htmlDocFiles()
    await page.waitForTimeout(3000)
    await newchatpage.popupCloseWindow()
})
test("Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can navigate through resources using horizontal scroll",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.htmlDocScrol()
})
test("Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and resources and the ratings for each response",async({page})=>{
    const {homepage,newchatpage,input,ratingsCount}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.userRatings(ratingsCount)
})
test("Verify the functionality of user login and user can enter his feedback for generated response",async({page})=>{
    const {homepage,input,newchatpage}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.customerFeedback(input)
})
// test("Verify the functionality of user login and user can enter multiple queries sequentially",async({page})=>{
// // try this 
//     const ele=page.locator(" ")
//     await ele.waitFor({state: 'visible'})
// })