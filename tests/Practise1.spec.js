const {test,expect}=require('@playwright/test');

test.beforeEach("login page",async({page})=>{
    await page.goto('http://localhost:5173/login')
    await page.waitForTimeout(3000);
    await page.getByLabel('User ID').fill('mahalakshmi.r@fibonalabs.com',{timeout:3000})
    await page.getByLabel('Password').fill('maha@123')
    await page.check('//input[@type="checkbox"]')
    await page.getByRole('button',{'name':'Login'}).click()
    await page.waitForTimeout(5000);
})

test("Home Page validation", async({page})=>{
    const AI_Icon=page.locator('//img[@alt="AI Icon"]')
    const searchTextField=page.locator('input[placeholder="Search..."]');
    const searchButton=page.locator('//div[@class="relative w-full flex-1"]//button');

    await AI_Icon.hover() //mouse hovering
    expect.soft(await page.locator("//span[.='New Chat']").textContent()).toEqual('New Chat') //text extraction and soft assertion

    // reusuable locators
    await expect(searchTextField).toBeEditable() // textfield validation
    await searchTextField.fill('How are these trends influencing global energy policies?',{waitForTimeout:3000})
    await searchButton.click()
    await page.waitForTimeout(15000)  
})

test("3 vertical dot: Resource dropdown",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const resourceDropdown10=page.locator("//button[.='Resources: 10']");
    const resourceDropdown20=page.locator("//button[.='Resources: 20']");
    const resourceDropdown30=page.locator("//button[.='Resources: 30']");
    const resourceDropdown40=page.locator("//button[.='Resources: 40']");
    const resourceDropdown50=page.locator("//button[.='Resources: 50']");

    await expect(three_vertical_dot).toBeVisible() //assertion
    await three_vertical_dot.click() //3 vertical dot 
    await resourceDropdown10.hover();
    await page.locator("//button[.=10]").click() //Performed click operation
    await resourceDropdown10.hover();
    await page.locator("//button[.=20]").click() //Performed click operation
    await resourceDropdown20.hover();
    await page.locator("//button[.=30]").click() //Performed click operation
    await resourceDropdown30.hover();
    await page.locator("//button[.=40]").click() //Performed click operation
    await resourceDropdown40.hover();
    await page.locator("//button[.=50]").click() //Performed click operation

    await page.locator("//button[contains(@class,'options-button')]").click() // single attribute but ,multiple value
})

test("3 vertical dot: Creativity: Dropdown",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const High=page.locator("(//button[contains(@class,'w-full')])[3]")
    const low=page.locator("(//button[contains(@class,'w-full')])[1]")
    const Medium=page.locator("(//button[contains(@class,'w-full')])[2]")
    const CreativityMedium=page.locator("//button[.='Creativity: medium']")
    const CreativityHigh=page.locator("//button[.='Creativity: high']")
    const CreativityLow=page.locator("//button[.='Creativity: low']")

    await three_vertical_dot.click() //3 vertical dot 
    await CreativityMedium.hover()
    await High.click()

    await CreativityHigh.hover()
    await low.click()    

    await CreativityLow.hover()
    await Medium.click()

    await page.locator("//button[contains(@class,'options-button')]").click() // single attribute but ,multiple value
    const searchTextField=page.locator('input[placeholder="Search..."]');
    const searchButton=page.locator('//div[@class="relative w-full flex-1"]//button');
    // reusuable locators
    await searchTextField.fill('How are these trends influencing global energy policies?')
    await searchButton.click()
    await page.waitForTimeout(15000)  
})

test("3 vertical dot: History,Report,logout",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const history=page.locator("//button[.='History']")
    const report=page.locator("//button[.='Reports']")
    const close=page.locator("//button[.='Close']")
    const logout=page.locator("//button[.='Logout']")

    await three_vertical_dot.click() //3 vertical dot 
    await history.click({waitForTimeout:3000})
    await close.click()
    //report
    await three_vertical_dot.click({waitForTimeout:3000}) //3 vertical dot 
    await report.click()
    await close.click()
    //logout
    await three_vertical_dot.click({waitForTimeout:3000}) //3 vertical dot 
    await logout.click()
})

test("History: Existing results, Delete the first result ", async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const history=page.locator("//button[.='History']")
    const close=page.locator("//button[.='Close']")

    await three_vertical_dot.click()
    await history.click()
    expect(await page.locator(".flex-grow p").first().textContent()).toEqual("How are these trends influencing global energy policies?")
    await page.locator(".rounded-2xl svg").first().click()
    await close.click()    
})

test("Combine the first two results",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const history=page.locator("//button[.='History']")
    const history_3vertical_Dot=page.locator(".shadow-btn-shadow svg")

    await three_vertical_dot.click()
    await history.click()
    await history_3vertical_Dot.click({waitForTimeout:3000}) 
    await page.locator("//p[.='Combine Chats']").click()
    await page.locator('//input[@type="checkbox"]').nth(0).click()
    await page.locator('//input[@type="checkbox"]').nth(1).click()
    await page.getByText('Combine chats').click()
    await page.getByText('Close').click()    
    await page.waitForTimeout(3000)
})

test("Genarate Report by selecting content and resources",async({page})=>{

    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const history=page.locator("//button[.='History']")
    const history_3vertical_Dot=page.locator(".shadow-btn-shadow svg")

    await three_vertical_dot.click()
    await history.click()
    await history_3vertical_Dot.click({waitForTimeout:3000}) 
    await page.getByText("Generate Report").click()
    await page.locator('//input[@type="checkbox"]').nth(0).click()
    await page.locator('//input[@type="checkbox"]').nth(1).click()
    await page.getByText("Generate Report").click()
    await page.getByText('Close').click()
})

test("Reports: Editing a report title and reflecting on a reports page",async({page})=>{
    const three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
    const report=page.locator("//button[.='Reports']")

    await three_vertical_dot.click()
    await report.click()
    await page.locator(".text-left span").first().click()
    await page.locator(".rounded-full svg").click()
    await page.locator('//textarea[@id="chat-title"]').fill("Q1: How are these trends influencing global energy policies?")
    await page.getByText('Save').click()
    expect(await page.locator("//div/div/p[contains(@class,'truncate')]")).toHaveText("Q1: How are these trends influencing global energy policies?",{waitForTimeout:3000})
    await page.getByText('Close').click()
    expect(await page.locator("//div/div/p[contains(@class,'truncate')]")).toHaveText("Q1: How are these trends influencing global energy policies?")
    await page.getByText('Close').click()
})








test("report button",async({page})=>{
   
    await page.locator(" ").fill
    await page.locator(" ").click
    await page.locator(" ").clear
    await page.locator(" ").check

    expect( await page.locator(" ")).


})

test("report button",async({page})=>{
   
    


})
test("report button",async({page})=>{
   
    


})
























// hooks
test.afterEach("close the window",async({page})=>{
    await page.close()
})