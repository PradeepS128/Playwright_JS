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
    system_text:'You are a coder',
    search_app_input:'Give me a basic python code snippet.',
    search_app_input_2:'Give me a basic javascript code snippet.',
    search_app_title:'Python Snippet',
    ratingsCount:3,
    checkboxCount:2,
    invalidpassword:'pradeep',
    homepage:new HomePage(page),
    historyPage:new HistoryPage(page), 
    reportpage:new ReportPage(page),
    loginpage:new LoginPage(page),
    newchatpage:new NewChatPage(page)
}}
////////////////////////////////////////////////////////////////////////////////
// test.skip.describe.configure({mode:'serial'})
test.describe.configure({mode:'parallel'})

////////////Login////////////
test.skip("TC-01_Verify the functionality of user login and logout",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})
//////////////////////Home page//////////////
test.skip("TC-02_verify the functionality of user login, hover action on the New Chat button, sequential query entry, and generation of chat responses with an overall summary", async({page})=>{
    const {homepage,input}=setup(page)
    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})
test.skip("TC-03_Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})

test("TC-04_Verify the functionality of user login and validate the side bar button functionality", async({page})=>{
    const {homepage,system_text}=setup(page)
    // await homepage.selectLeftSideBar_()
    await homepage.systemSettings_(system_text)
    await homepage.selectRightSideBar_()
})
test("TC-05_Verify the functionality of user login and validate the system settings", async({page})=>{
    const {homepage,system_text,search_app_input}=setup(page)
    // await homepage.selectLeftSideBar_()
    await homepage.systemSettings_(system_text)
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults() 
})
test.skip("TC-06_Verify the functionality of user login and search for a query in the search field.", async({page})=>{
    const {homepage,search_app_input}=setup(page)
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults() 
})
test.skip("TC-07_Verify the functionality of user login, search for a query in the search field and edit the title.", async({page})=>{
    const {homepage,search_app_input,search_app_title}=setup(page)
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults()
    await homepage.editChatTitle(search_app_title)
})
test.skip("TC-08_Verify the functionality of user login and search for a subsequent query in the search field.", async({page})=>{
    const {homepage,search_app_input,search_app_input_2}=setup(page)
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults() 
    await homepage.searchTextField_(search_app_input_2)
    await homepage.searchResults() 
})

//////////////////////////History///////////////
test.skip("TC-09_Verify the functionality of user login and navigate to history page",async({page})=>{
    const {homepage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
})
test.skip("TC-10_Verify the functionality of user login, navigate to history page and search for a query.", async({page})=>{
    const {homepage,historyPage,search_app_input}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.select_first_chat_history()
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults()
})
test.skip("TC-11_Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, historyPage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.header_threeverticalDot_()
    await historyPage.threedot_delete_button()
})
test.skip("TC-12_Verify the functionality of user login, navigate to history page and search for subsequent query.", async({page})=>{
    const {homepage,historyPage,search_app_input,search_app_input_2}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.select_first_chat_history()
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults()
    await homepage.searchTextField_(search_app_input_2)
    await homepage.searchResults()
})
test.skip("TC-13_Verify the functionality of user login,navigate to history,modify the system settings and search for a query.", async({page})=>{
    const {homepage,historyPage,system_text,search_app_input,search_app_input_2}=setup(page)
    await homepage.searchTextField_(search_app_input)
    await homepage.searchResults() 
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.select_first_chat_history()
    await homepage.selectLeftSideBar_()
    await homepage.systemSettings_(system_text)
    await homepage.searchTextField_(search_app_input_2)
    await homepage.searchResults()
})
test.skip("TC-14_Verify the functionality of user login and combine the results by selecting N check boxes",async({page})=>{
    const {homepage,historyPage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})
test.skip("TC-15_Verify the functionality of user login and generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
    const {homepage,historyPage,reportpage,checkboxCount}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
test.skip("TC-16_Verify the functionality of user login, navigate to history page and edit the title.",async({page})=>{
    const {homepage,historyPage,search_app_title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.select_first_chat_history()
    await historyPage.editChatHistoryTitle(search_app_title)
})

////////////////////Report//////////////////////

test.skip("TC-17_Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.reportCloseButton_()
})
test.skip("TC-18_Verify the functionality of user login and a popup allowing user to edit the title",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    await reportpage.reportViewclose_()
})
test.skip("TC-19_Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.reportViewclose_()
})
test.skip("TC-20_Verify User Login Functionality and validate History and Report Button in Three Vertical Dots",async({page})=>{
    const {homepage,historyPage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
})
test.skip("TC-21_Verify the functionality of user login and delete First Result in Existing Results", async({page})=>{
    const {homepage, reportpage}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.three_vertical_dot_()
    await reportpage.three_dot_delete()
})