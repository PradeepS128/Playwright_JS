const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')

test.beforeEach("login page",async({page})=>{
    const loginpage=new LoginPage(page) //created an object of Loginpage to fetch details
    const username='pradeep.kumar@fibonalabs.com'
    const password='pradeep@123'

    loginpage.goto()
    loginpage.validLogin(username,password)
})

test("Home Page validation: New Chat, search textfield", async({page})=>{
    const homepage=new HomePage(page)
    const input='How are these trends influencing global energy policies?'

    homepage.newChatHovering() // mouse hovering
    homepage.searchResults(input) 
})

// test("3 vertical dot: Resource dropdown",async({page})=>{
//     const homepage=new HomePage()
    
//     homepage.three_vertical_dot_()
//     homepage.resourceDropdown10_()
//     homepage.resourceDropdown20_()
//     homepage.resourceDropdown30_()
//     homepage.resourceDropdown40_()
//     homepage.resourceDropdown50_()
//     homepage.closeButton_()
// })

// test("3 vertical dot: Creativity: Dropdown",async({page})=>{
//     const homepage=new HomePage()
//     const input='How are these trends influencing global energy policies?'
    
//     homepage.three_vertical_dot_()
//     homepage.CreativityMedium_()
//     homepage.CreativityHigh_()
//     homepage.CreativityLow_()
//     homepage.closeButton_()
//     homepage.searchResults(input) 
// })

// test("3 vertical dot: History,Report,logout",async({page})=>{
    
//     const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
//     const history=page.locator("//p[.='History']")
//     const report=page.locator("//p[.='Reports']")
//     const close=page.locator("//button[.='Close']")
//     const logout=page.locator("//button[.='Logout']")

//     await three_vertical_dot.click() //3 vertical dot 
//     await history.click({waitForTimeout:3000})
//     await close.click()
//     //report
//     await three_vertical_dot.click({waitForTimeout:3000}) //3 vertical dot 
//     await report.click()
//     await close.click()
//     //logout
//     await three_vertical_dot.click({waitForTimeout:3000}) //3 vertical dot 
//     await logout.click()
// })

// test("History : Existing results, Delete the first result ", async({page})=>{
//     const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
//     const history=page.locator("//p[.='History']")
//     const close=page.locator("//button[.='Close']")

//     const searchNames=page.locator('.group')
//     const searchInput='How are these trends influencing global energy policies?'

//     await three_vertical_dot.click({waitForTimeout:3000})
//     await history.click()
//     expect(await page.locator(".flex-grow p").first().textContent()).toEqual(searchInput)
// // if a dynamic input matches with existing results then it will delete 
//     const count=await searchNames.count()
//     for(let i=0;i<count;++i)
//     {
//         if(await searchNames.nth(i).locator('p').textContent()===searchInput)
//         {
//             await searchNames.nth(i).locator('svg').click()
//             break
//         }
//     }
//     await page.getByText('Delete').click() 
// //    expect.soft(await page.locator('.flex-1 b')).textContent().toEqual(searchInput)
//     await page.locator("//button[.='Delete']").click({delay:3000})
//     await close.click()    
// })

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

// hooks
test.afterEach("close the window",async({page})=>{
    await page.close()
})