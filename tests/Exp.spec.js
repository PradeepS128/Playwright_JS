const {test,expect}=require('@playwright/test');
const {LoginPage}=require('../PageObjectModel/LoginPage') //imported from pom
const {HomePage}=require('../PageObjectModel/HomePage')
const {HistoryPage}=require('../PageObjectModel/HistoryPage')
const {ReportPage}=require('../PageObjectModel/ReportPage');
const { NewChatPage } = require('../PageObjectModel/NewChatPage');
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
const setup=(page)=>{                      // reusuable code
    return {
    username:'pradeep.kumar@fibonalabs.com',
    password:'pradeep@123',    
    input:'How are these trends influencing global energy policies?',
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

test("abcd",async({page})=>{
    const {homepage,reportpage,title}=setup(page)
    await homepage.three_vertical_dot_()
    await homepage.reportPage_()
    await reportpage.first_title_search_results()
    await reportpage.editTitle()
    await reportpage.updateReportTitle(title)
    await reportpage.saveReportTitle()
    expect.soft(await page.locator("#reportTitle")).toHaveText(title)
    })
