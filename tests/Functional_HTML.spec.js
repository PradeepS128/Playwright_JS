const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {historyPage, HistoryPage}=require('../PageObjectModel/HistoryPage')

test.beforeEach("login page",async({browser,page})=>{
    const loginpage=new LoginPage(page) //created an object of Loginpage to fetch details
    const username='pradeep.kumar@fibonalabs.com'
    const password='pradeep@123'

    await loginpage.goto()
    await loginpage.validLogin(username,password)
})

test.afterEach("close the window",async({page})=>{
    await page.close()
})
///////////////////////////////////////////////////////////////////////////////

test("Home Page validation: New Chat, search textfield", async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'

    await homepage.newChatHovering() // mouse hovering
    await homepage.searchResults(input) 
})

test("3 vertical dot: Resource dropdown",async({page})=>{
    const homepage=new HomePage(page)
    
    await homepage.three_vertical_dot_()
    await homepage.resourceDropdown10_()
    await homepage.resourceDropdown20_()
    await homepage.resourceDropdown30_()
    await homepage.resourceDropdown40_()
    await homepage.resourceDropdown50_()
    await homepage.closeButton_()
})

test("3 vertical dot: Creativity: Dropdown",async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'
    
    await homepage.three_vertical_dot_()
    await homepage.CreativityHigh_()
    await homepage.CreativityLow_()
    await homepage.CreativityMedium_()
    await homepage.closeButton_()
})

test("3 vertical dot: History,Report,logout",async({page})=>{
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

test("History : Existing results, Delete the first result ", async({page})=>{
    const homepage=new HomePage(page)
    const historyPage=new HistoryPage(page) 
    const searchInput='How are these trends influencing global energy policies?'

    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.removeFirstSearchHistoryEntry(searchInput)
})

// test("Combine the first two results",async({page})=>{
//     const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
//     const history=page.locator("//p[.='History']")
//     const history_3vertical_Dot=page.locator(".shadow-btn-shadow svg")

//     await three_vertical_dot.click()
//     await history.click()
//     await history_3vertical_Dot.click({waitForTimeout:3000}) 
//     await page.locator("//p[.='Combine Chats']").click()
//     await page.locator('//input[@type="checkbox"]').nth(0).click()
//     await page.locator('//input[@type="checkbox"]').nth(1).click()
//     await page.getByText('Combine chats').click()
//     await page.getByText('Close').click()    
//     await page.waitForTimeout(3000)
// })

// test("Genarate Report by selecting content and resources",async({page})=>{
//     const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
//     const history=page.locator("//p[.='History']")
//     const history_3vertical_Dot=page.locator(".shadow-btn-shadow svg")

//     await three_vertical_dot.click()
//     await history.click()
//     await history_3vertical_Dot.click({waitForTimeout:3000}) 
//     await page.getByText("Generate Report").click()
//     await page.locator('//input[@type="checkbox"]').nth(0).click()
//     await page.locator('//input[@type="checkbox"]').nth(1).click()
//     await page.getByText("Generate Report").click()
//     await page.getByText('Close').click()
// })

// test("Reports: Editing a report title and reflecting on a reports page",async({page})=>{
//     const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
//     const report=page.locator("//p[.='Reports']")

//     await three_vertical_dot.click()
//     await report.click()
//     await page.locator(".text-left span").first().click()
//     await page.locator(".rounded-full svg").click()
//     await page.locator('//textarea[@id="chat-title"]').fill("Q1: How are these trends influencing global energy policies?")
//     await page.getByText('Save').click()
//     await page.getByText('Close').click()
//     await page.getByText('Close').click()
// })
