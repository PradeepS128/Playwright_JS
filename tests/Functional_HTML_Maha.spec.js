const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')

test.beforeEach("login page",async({browser,page})=>{
    const loginpage=new LoginPage(page) //created an object of Loginpage to fetch details
    const username='mahalakshmi.r@fibonalabs.com'
    const password='maha@123'

    await loginpage.goto()
   await loginpage.validLogin(username,password)
})

test.afterEach("close the window",async({page})=>{
    await page.waitForTimeout(2000)
    await page.close()
})

////////////////////////////
test.skip("Home Page validation: New Chat, three vertical dot", async({page})=>{
    const homepage=new HomePage(page)
    homepage.three_vertical_dot()
})

test.skip("Home Page validation: New Chat, historyButtons", async({page})=>{
    const homepage=new HomePage(page)
    homepage.three_vertical_dot()
    homepage.historyPage()

})
test.skip("Home Page validation: New Chat, logoutButton", async({page})=>{
    const homepage=new HomePage(page)
    homepage.three_vertical_dot()
    homepage.logoutOption()

})
test("Home Page validation: New Chat, reportButton", async({page})=>{
    const homepage=new HomePage(page)
    homepage.three_vertical_dot()
    //homepage.historyPage()
    homepage.reportPage()
    homepage.reportVerticalIcon()
    homepage.reportDelete()
    
    homepage.reportPopupDeleteButton()
    await page.waitForTimeout(6000)
   // homepage.reportClose()


})


