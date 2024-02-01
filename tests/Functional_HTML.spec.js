const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage')

test.beforeEach("login page",async({browser,page})=>{
    const loginpage=new LoginPage(page) //created an object of Loginpage to fetch details
    const username='pradeep.kumar@fibonalabs.com'
    const password='pradeep@123'

    await loginpage.goto()
   await loginpage.validLogin(username,password)
})

test.afterEach("close the window",async({page})=>{
    await page.waitForTimeout(2000)
    await page.close()
})
///////////////////////////////////////////////////////////////////////////////
test("@Smoke_01_Home Page validation: New Chat, search textfield", async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})

test("_02_Three vertical dot: Resource dropdown",async({page})=>{
    const homepage=new HomePage(page)
    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})

test("_03_Three vertical dot: Creativity: Dropdown",async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'
    
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})

test("_04_Three vertical dot: History,Report,logout",async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 

    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await historyPage.closeButton()
    await homepage.three_vertical_dot_()
    await homepage.logoutButton_()
})

test("_05_History : Existing results, Delete the first result ", async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const searchInput='How are these trends influencing global energy policies?'

    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(searchInput)
})

test("_06_Combine the results by selecting N check boxes",async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const checkboxCount=3;
    
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})
test("_07_Generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const checkboxCount=2;
    
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.genaratereport_colored_()
    await historyPage.closeButton()
})

test("_08_Edit Report Title and Verify Reflection on Reports Page",async({page})=>{
    const homepage=new HomePage(page)
    const reportpage=new ReportPage(page) 
    const input="Q1: How are these trends influencing global energy policies?"

    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(input)
    await reportpage.saveReportTitle()
    await reportpage.closeButton()
    await reportpage.closeButton()
})

test("_09_Home Page validation: New Chat, search textfield", async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})

