const {test,expect}=require('@playwright/test');
const exp = require('constants');

// test.beforeEach("login",async({page})=>{
//     await page.goto('http://localhost:5173/login')
//     await page.waitForTimeout(3000);
//     await page.getByLabel('User ID').fill('mahalakshmi.r@fibonalabs.com',{timeout:3000})
//     await page.getByLabel('Password').fill('maha@123')
//     await page.check('//input[@type="checkbox"]')
//     await page.getByRole('button',{'name':'Login'}).click()
//     await page.waitForTimeout(5000);
// })

test.skip("Test Scripts",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    await three_vertical_dot.click() //3 vertical dot 
// To print multiple elements
    await page.locator("//p[.='History']").click()
//    await page.waitForLoadState('networkidle')
    await page.locator(".flex-grow p").first().waitFor()
    const searchTexts=await page.locator(".flex-grow p").allTextContents()
    console.log(searchTexts)
})

test("child window handling",async({browser})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.waitForTimeout(3000);
// child window handle
    const page=await newPage()

    const context=await browser.newContext()
    const [newPage] =Promise.all(
    [
    context.waitForEvent('page'),
    page.locator('//a[@id="opentab"]').click()
    ])

    console.log(newPage.url())
})