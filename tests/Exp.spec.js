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
////////////////////////

test("Can download, preview, and close HTML files",async({page})=>{
    const {homepage,historyPage,reportpage}=setup(page)
    const checkboxCount=2;
    
    await homepage.three_vertical_dot_()
    await homepage.historyPage_()
    await historyPage.threeverticalDot_historyPage()
    await historyPage.genaratereport_3VerticalDot_()
    await historyPage.selectChats_(checkboxCount)
    await historyPage.contentButton()
    await historyPage.genaratereport_colored_()
    await reportpage.reportViewclose_()
})
