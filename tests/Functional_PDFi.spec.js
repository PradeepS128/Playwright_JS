const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage')

test.beforeEach("login page",async({browser,page})=>{
    const loginpage=new LoginPage(page) //created an object of Loginpage to fetch details
    const username='nikhila.vijayakarnan@fibonalabs.com'
    const password='nikhila@123'

    await loginpage.goto()
   await loginpage.validLogin(username,password)
})

test.afterEach("close the window",async({page})=>{
    await page.waitForTimeout(2000)
    await page.close()
})
///////////////////////////////////////////////////////////////////////////////
test.skip("_01_Home Page validation: New Chat, search textfield", async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults() 
})

test.skip("_02_Three vertical dot: Resource dropdown",async({page})=>{
    const homepage=new HomePage(page)
    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})

test.skip("_03_Three vertical dot: Creativity: Dropdown",async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'
    
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})

test.skip("_04_Three vertical dot: History,Report,logout",async({page})=>{
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

test.skip("_05_History : Existing results, Delete the first result ", async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const searchInput='How are these trends influencing global energy policies?'

    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(searchInput)
})

test.skip("_06_Combine the results by selecting N check boxes",async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const checkboxCount=2;
    
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.combinechats_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.selectCombinedChats()
    await historyPage.closeButton()
})

test.skip("_07_Generate Report with Selected Content and Resources (N Checkboxes)",async({page})=>{
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


test.skip("_08_Home Page validation: Submit ratings for chat response", async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page)
    const input='Discuss the role of artificial intelligence in financial market forecasting.'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults()
    await historyPage.giveRatings()
})

test.skip("_09_Home Page validation: Add Comments for chat response", async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page)
    const input='Analyze the effects of the gig economy on traditional employment models.'
    const comments='Good'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchTextField_(input)
    await homepage.searchResults()
    await historyPage.addComments(comments)
})

test.skip("_10_Edit Report Title and Verify Reflection on Reports Page",async({page})=>{
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

test("_11_Three vertical dot: Region",async({page})=>{
    const homepage=new HomePage(page)
    await homepage.three_vertical_dot_()
    await homepage.selectState()
})