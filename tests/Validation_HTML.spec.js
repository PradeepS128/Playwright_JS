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
////////////////////////////////////////////
test("Validation: Report page title",async({page})=>{
const homepage=new HomePage(page)
const reportpage=new ReportPage(page)
homepage.three_vertical_dot_()
homepage.reportPage_()
expect(await page.locator(reportpage.reportPageTitle)).toHaveText('Report')
//expect(await homepage.genaratereport_colored).toHaveText('Report')
})



