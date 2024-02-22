const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage');
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
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
const setup=(page)=>{  // reusuable code
    return {
    username: username,
    password: password,    
    input:'How are these trends influencing global energy policies?',
    input_2:'Identify the most significant technological advancements in the automotive industry.',
    title:'Global energy policies?',
    ratingsCount:3,
    checkboxCount:2,
    invalidpassword:'pradeep',
    homepage:new HomePage(page),
    historyPage:new HistoryPage(page), 
    reportpage:new ReportPage(page),
    loginpage:new LoginPage(page),
    newchatpage:new NewChatPage(page)
}}
///////////////////////////////////////////////////////////////////////////////
// test.skip.describe.configure({mode:'serial'})
test.describe.configure({mode:'parallel'})
test.skip("TC-01_verify the functionality of user login, hover action on the New Chat button, sequential query entry, and generation of chat responses with an overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test("TC-02_Verify User Login Functionality and validate Resource dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)    
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
})
test.skip("TC-03_Verify User Login Functionality and validate Creativity dropdown in Three Vertical Dots",async({page})=>{
    const {homepage}=setup(page)
    await homepage.CreativityHigh_()
    await homepage.CreativityMedium_()
    await homepage.CreativityLow_()
})

test.skip("TC-04_Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})
test.skip("TC-05_Verify the functionality of user login and logout",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})
test.skip("TC-06_Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, historyPage,input}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(input)
})
test.skip("TC-07_Verify the functionality of user login and combine the results by selecting N check boxes",async({page})=>{
    const {homepage,historyPage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})
test.skip("TC-08_Verify the functionality of user login and generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test.skip("TC-09_Verify the functionality of user login and generate Report with Selected Contents (N Checkboxes)",async({page})=>{
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
test.skip("TC-10_Verify the functionality of user login and generate Report with Selected Resources (N Checkboxes)",async({page})=>{
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
test.skip("TC-11_Verify the functionality of user login and a popup allowing user to edit the title",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    await reportpage.reportViewclose_()
})
test.skip("TC-12_Verify the functionality of user login and sequential query entry and generation of chat responses with overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test.skip("TC-13_Verify the functionality of user login and perform login Page Password Masking Verification",async({page})=>{
    const {loginpage,homepage,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField(invalidpassword)
    const passwordValue=await page.getByLabel(loginpage.password).isVisible()
    await expect(passwordValue).toBeTruthy()
})
test.skip("TC-14_Verify the functionality of user login and validate Login Button State Prior to Input Entry",async({page})=>{
    const {loginpage,homepage,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.passwordTextField(invalidpassword)
    await page.getByRole(loginpage.login).isDisabled()
})
test.skip("TC-15_Verify the functionality of user login and showing Error Message when invalid username and password is entered",async({page})=>{
    const {loginpage,homepage,username,invalidpassword}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
    await loginpage.userIDTextField(username)
    await loginpage.passwordTextField(invalidpassword)
    await loginpage.termsOfServices()
    await loginpage.loginButton()
    expect(await loginpage.errorMessage()).toEqual('Invalid credentials')
})
test.skip("TC-16_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can download, preview, and close HTML files",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.pdfIDocFiles()
    await page.waitForTimeout(3000)
    await newchatpage.popupCloseWindow()
})
test.skip("TC-17_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and Can navigate through resources using horizontal scroll",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.pdfIDocScrol()
})
test.skip("TC-18_Verify the functionality of user login, sequential query entry, generation of chat responses with overall summary and resources and the ratings for each response",async({page})=>{
    const {homepage,newchatpage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.userRatings()
})
test.skip("TC-19_Verify the functionality of user login and user can enter his feedback for generated response",async({page})=>{
    const {homepage,input,newchatpage}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await newchatpage.customerFeedback(input)
})
test.skip("TC_20_Verify the functionality of user login, a popup allowing user to edit the title and check its updated  ",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    expect.soft(await page.locator("#reportTitle")).toHaveText(title)
})
test.skip("@smoke _Verify the functionality of user login and user can enter multiple queries sequentially",async({page})=>{
    const {homepage,input}=setup(page)
 })

test.skip("TC-22_Verify User Login Functionality, validate Region button in Three Vertical Dots, perform center selection and sequential query entry",async({page})=>{
    const {homepage, input}=setup(page)    
    await homepage.three_vertical_dot_()
    await homepage.clickRegionButton_()
    await homepage.selectRegion_()
    await homepage.closeRegion_()
    await homepage.searchTextField_(input)
    await homepage.searchResults()
})

test.skip("TC-23_Verify User Login Functionality, validate Region button in Three Vertical Dots, perform multiple state selection and clear all selection",async({page})=>{
    const {homepage}=setup(page)    
    await homepage.three_vertical_dot_()
    await homepage.clickRegionButton_()
    await homepage.multiSelectState_()
    await homepage.clearAllRegionSelection_()
    await homepage.closeRegion_()
})

test.skip("TC-24_Verify User Login Functionality, perform multiple query entry",async({page})=>{
    const {homepage, input, input_2}=setup(page)
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
    await homepage.searchTextField_(input_2)
    await homepage.searchResults() 
})

test.skip("TC-25_Verify User Login Functionality and edit chat title",async({page})=>{
    const {homepage, input, title}=setup(page)
    await homepage.searchTextField_(input)
    await homepage.searchResults()
    await homepage.editChatTitle(title)
    expect.soft(await page.locator("#reportTitle")).toHaveText(title)
})

test.skip("TC-26_Verify User Login Functionality, enter a query from chat history",async({page})=>{
    const {homepage, historyPage, input_2}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.select_first_chat_history()
    await homepage.searchTextField_(input_2)
    await homepage.searchResults()
})

