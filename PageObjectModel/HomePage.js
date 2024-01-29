class HomePage
{
    constructor(page)
    {   
        this.page= page;
        this.AIIcon=page.locator('//img[@alt="AI Icon"]')
        this.newChat=page.locator("//span[.='New Chat']")
        this.searchTextField=page.locator('input[placeholder="Search..."]');
        this.searchButton=page.locator('//div[@class="relative w-full flex-1"]//button');
        //three vertical dot
        this.three_vertical_dot=page.locator("//button[contains(@class,'options-button')]")
        this.resourceDropdown10=page.locator("//button[.='Resources: 10']");
        this.resourceDropdown20=page.locator("//button[.='Resources: 20']");
        this.resourceDropdown30=page.locator("//button[.='Resources: 30']");
        this.resourceDropdown40=page.locator("//button[.='Resources: 40']");
        this.resourceDropdown50=page.locator("//button[.='Resources: 50']");
        // selected resource button
        this.selectedDropdown10=page.locator("//button[.=10]")
        this.selectedDropdown20=page.locator("//button[.=20]")
        this.selectedDropdown30=page.locator("//button[.=30]")
        this.selectedDropdown40=page.locator("//button[.=40]")
        this.selectedDropdown50=page.locator("//button[.=50]")
        // creativity
        this.High=page.locator("(//button[contains(@class,'w-full')])[3]")
        this.low=page.locator("(//button[contains(@class,'w-full')])[1]")
        this.Medium=page.locator("(//button[contains(@class,'w-full')])[2]")
        this.CreativityMedium=page.locator("//button[.='Creativity: medium']")
        this.CreativityHigh=page.locator("//button[.='Creativity: high']")
        this.CreativityLow=page.locator("//button[.='Creativity: low']")

        //close button
        this.closeButton=page.locator("//button[contains(@class,'options-button')]")
    }

    async newChatHovering(){
        await this.AIIcon.hover()
//        expect.soft(await this.newChat.textContent()).toEqual('New Chat') //text extraction and soft assertion
    }
    async searchResults(input){
//        await expect(this.searchTextField).toBeEditable() // textfield validation
        await this.searchTextField.fill(input,{waitForTimeout:3000})
        await this.searchButton.click()
        await this.page.waitForTimeout(15000)     
    }
    async three_vertical_dot_(){
        await this.three_vertical_dot.click({waitForTimeout:3000})    }

    async resourceDropdown10_(){
        await this.resourceDropdown10.hover();
        await this.selectedDropdown10.click()    }

    async resourceDropdown20_(){
        await this.resourceDropdown10.hover();
        await this.selectedDropdown10.click()   }
  
    async resourceDropdown30_(){
        await this.resourceDropdown20.hover();
        await this.selectedDropdown30.click()    }

    async resourceDropdown40_(){
        await this.resourceDropdown30.hover();
        await this.selectedDropdown40.click()     }

    async resourceDropdown50_(){
        await this.resourceDropdown40.hover();
        await this.selectedDropdown50.click()     }

    async closeButton_(){
        await this.closeButton.click()    }

     async CreativityHigh_(){
        await this.CreativityMedium.hover()
        await this.High.click()
     }   
     async CreativityLow_(){
        await this.CreativityHigh.hover()
        await this.low.click()        
     }   
     async CreativityMedium_(){
        await this.CreativityLow.hover()
        await this.Medium.click()    
     }   

    }
module.exports={HomePage}