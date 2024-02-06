const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage');
const { log } = require('console');

test.beforeEach("login page",async({browser,page})=>{
    const {loginpage,username,password}=setup(page)
    await loginpage.goto()
    await loginpage.validLogin(username,password)
})
test.afterEach("close the window",async({page})=>{
    await page.waitForTimeout(2000)
    await page.close()
})
// reusuable code
const setup=(page)=>{
    return {
    username:'harishkummara@fibonalabs.com',
    password:'harish@123',    
    input:'How are these trends influencing global energy policies?',
    homepage:new HomePage(page),
    historyPage:new HistoryPage(page), 
    reportpage:new ReportPage(page),
    loginpage:new LoginPage(page)
}}
///////////////////////////////////////////////////////////////////////////////
test("_01_Home Page validation: New Chat, search textfield", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("_02_Three vertical dot: Resource dropdown",async({page})=>{
    const {homepage}=setup(page)    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})
test("_03_Three vertical dot: Creativity: Dropdown",async({page})=>{
    const {homepage}=setup(page)
    const input='How are these trends influencing global energy policies?'    
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})
test("_04_Three vertical dot: History,Report",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})
test("_05_Three vertical dot: logout",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})
test("_06_History : Existing results, Delete the first result ", async({page})=>{
    const {homepage, historyPage}=setup(page)
    const searchInput='How are these trends influencing global energy policies?'
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(searchInput)
})
// test.skip("_07_Combine the results by selecting N check boxes",async({page})=>{
//     const {homepage,historyPage}=setup(page)
//     const checkboxCount=3;
    
//     await homepage.three_vertical_dot_()
//     await homepage.historyPage_()
//     await historyPage.threeverticalDot_historyPage()
//     await historyPage.combinechats_()
//     await historyPage.selectChats_(checkboxCount)
//     await historyPage.selectCombinedChats()
//     await historyPage.closeButton()
// })
// test.skip("_08_Generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
//     const {homepage,historyPage}=setup(page)
//     const checkboxCount=2;
    
//     await homepage.three_vertical_dot_()
//     await homepage.historyPage_()
//     await historyPage.threeverticalDot_historyPage()
//     await historyPage.genaratereport_3VerticalDot_()
//     await historyPage.selectChats_(checkboxCount)
//     await historyPage.genaratereport_colored_()
//     await historyPage.closeButton()
// })
// test.skip("_09_Generate Report with Selected Contents (N Checkboxes)",async({page})=>{
//     const {homepage,historyPage}=setup(page)
//     const checkboxCount=2;
    
//     await homepage.three_vertical_dot_()
//     await homepage.historyPage_()
//     await historyPage.threeverticalDot_historyPage()
//     await historyPage.genaratereport_3VerticalDot_()
//     await historyPage.selectChats_(checkboxCount)
//     await historyPage.contentButton()
//     await historyPage.genaratereport_colored_()
//     await historyPage.closeButton()
// })
// test.skip("_10_Generate Report with Selected Resources (N Checkboxes)",async({page})=>{
//     const {homepage, historyPage}=setup(page)
//     const checkboxCount=2;
    
//     await homepage.three_vertical_dot_()
//     await homepage.historyPage_()
//     await historyPage.threeverticalDot_historyPage()
//     await historyPage.genaratereport_3VerticalDot_()
//     await historyPage.selectChats_(checkboxCount)
//     await historyPage.resourcesButton()
//     await historyPage.genaratereport_colored_()
//     await historyPage.closeButton()
// })
test("_11_Edit Report Title and Verify Reflection on Reports Page",async({page})=>{
    const {homepage,reportpage,input}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(input)
    await reportpage.saveReportTitle()
    await reportpage.reportViewclose_()
})
test("_12_Home Page validation: New Chat, search textfield", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("_13_Login Page Password Masking Verification",async({page})=>{
    const {loginpage,homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField("pradeep")
    const passwordValue=await page.getByLabel(loginpage.password).isVisible()
    expect(passwordValue).toBeTruthy()
})
test("_14_Validate Login Button State Prior to Input Entry",async({page})=>{
    const {loginpage,homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField("pradeep")
    await page.getByRole(loginpage.login).isDisabled()
})
test("_15_Showing Error Message when invalid username and password is entered",async({page})=>{
    const {loginpage,homepage,username}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.userIDTextField(username)
    await loginpage.passwordTextField("pradeep")
    await loginpage.termsOfServices()
    await loginpage.loginButton()
    expect(await loginpage.errorMessage()).toEqual('Invalid credentials')
})

// test("Can download, preview, and close HTML files",async({page})=>{

// })
// test("Can navigate through objects using horizontal scroll",async({page})=>{

// })
// test("Resources are displayed in a relevant order",async({page})=>{

// })
// test("Resources are displayed in a relevant order (Filename, Company name, Quater, Rank,Number of matches, Download options)",async({page})=>{

// })
// test("Each generated chat response summary has like and dislike buttons.Clicking on Like or Dislike results in selection",async({page})=>{
    
// })
// test("User can enter his feedback for generated response",async({page})=>{

// })
//  test("User can Enter multiple queries sequentially",async({page})=>{
// // try this 
//     const ele=page.locator(" ")
//     await ele.waitFor({state: 'visible'})
// })