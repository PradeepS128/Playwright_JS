exports.HomePage=class HomePage
{
    constructor(page)
    {   
        this.page= page;
        this.AIIcon='//img[@alt="articul8"]'
        this.newChat="//span[.='New Chat']"
        this.searchTextField='input[placeholder="Search..."]'
        this.searchButton='//div[@class="relative w-full flex-1"]//button'
        //three vertical dot
        this.three_vertical_dot="//button[contains(@class,'options-button')]"
        this.resourceDropdown10="//button[.='Resources: 10']"
        this.resourceDropdown20="//button[.='Resources: 20']"
        this.resourceDropdown30="//button[.='Resources: 30']"
        this.resourceDropdown40="//button[.='Resources: 40']"
        this.resourceDropdown50="//button[.='Resources: 50']"
        // selected resource button
        this.selectedDropdown10="//button[.=10]"
        this.selectedDropdown20="//button[.=20]"
        this.selectedDropdown30="//button[.=30]"
        this.selectedDropdown40="//button[.=40]"
        this.selectedDropdown50="//button[.=50]"
        // creativity
        this.High="(//button[contains(@class,'w-full')])[3]"
        this.low="(//button[contains(@class,'w-full')])[1]"
        this.Medium="(//button[contains(@class,'w-full')])[2]"
        this.CreativityMedium="//button[.='Creativity: medium']"
        this.CreativityHigh="//button[.='Creativity: high']"
        this.CreativityLow="//button[.='Creativity: low']"
        // history, report, logout
        this.history="//button[.='History']"
        this.report="//button[.='Reports']"
        this.logout="//button[.='Logout']"    
        // close button inside history ot report button
        this.close="//button[.='Close']"
        //close button
        this.closeButton="//button[contains(@class,'options-button')]"
    }

    async newChatHovering(){
        await this.page.locator(this.AIIcon).hover()
//        expect.soft(await this.page.locator(this.newChat).textContent()).toEqual('New Chat') //text extraction and soft assertion
    }
    async searchResults(input){
//      await expect(this.searchTextField).toBeEditable() // textfield validation
        await this.page.locator(this.searchTextField).fill(input,{waitForTimeout:3000})
        await this.page.locator(this.searchButton).click()
        await this.page.waitForTimeout(15000)     
    }
    async three_vertical_dot_(){
        await this.page.locator(this.three_vertical_dot).click({waitForTimeout:3000})    }

    async resourceDropdown10_(){
        await this.page.locator(this.resourceDropdown10).hover({waitForTimeout:1000});
        await this.page.locator(this.selectedDropdown10).click()    }

    async resourceDropdown20_(){
        await this.page.locator(this.resourceDropdown10).hover({waitForTimeout:1000});
        await this.page.locator(this.selectedDropdown20).click()   }
  
    async resourceDropdown30_(){
        await this.page.locator(this.resourceDropdown20).hover({waitForTimeout:1000});
        await this.page.locator(this.selectedDropdown30).click()    }

    async resourceDropdown40_(){
        await this.page.locator(this.resourceDropdown30).hover({waitForTimeout:1000});
        await this.page.locator(this.selectedDropdown40).click()     }

    async resourceDropdown50_(){
        await this.page.locator(this.resourceDropdown40).hover({waitForTimeout:1000});
        await this.page.locator(this.selectedDropdown50).click()     }

    async closeButton_(){
        await this.page.locator(this.closeButton).click()    }

     async CreativityHigh_(){
        await this.page.locator(this.CreativityMedium).hover({waitForTimeout:1000})
        await this.page.locator(this.High).click()
     }   
     async CreativityLow_(){
        await this.page.locator(this.CreativityHigh).hover({waitForTimeout:1000})
        await this.page.locator(this.low).click()        
     }   
     async CreativityMedium_(){
        await this.page.locator(this.CreativityLow).hover({waitForTimeout:1000})
        await this.page.locator(this.Medium).click()    
     }   

     async historyPage_(){
        await this.page.locator(this.history).click({waitForTimeout:3000})
//        await this.page.locator(this.close).click()    
     }

     async reportPage_(){
        await this.page.locator(this.report).click()
//        await this.page.locator(this.close).click()    
         }
    async logoutButton_(){
        await this.page.locator(this.logout).click()    
    }     

    }

