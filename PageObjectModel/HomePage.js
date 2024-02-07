exports.HomePage=class HomePage
{
    constructor(page)
    {   
        this.page= page;
        this.AIIcon='//img[@alt="AI logo"]'
        this.newChat="//span[.='New Chat']"
        this.searchTextField='//textarea[@placeholder="Search..."]'
        this.searchButton='#sendMessage'
        //three vertical dot
        this.three_vertical_dot="button #moreOptions"
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
        this.High="#High"
        this.low="#Low"
        this.Medium="#Medium"
        this.CreativityMedium="//button[.='Creativity: medium']"
        this.CreativityHigh="//button[.='Creativity: high']"
        this.CreativityLow="//button[.='Creativity: low']"
        // history, report, logout
        this.history=page.getByRole('button', { name: 'History' })
        this.report=page.getByRole('button', { name: 'Reports' })
        this.logout="//button[.='Logout']"    
        //close button
        this.closeButton="//button[contains(@class,'bg-option-btn') and contains(@class,'flex')]"
    }

    async newChatHovering(){
        await this.page.locator(this.AIIcon).hover({waitForTimeout:2000})
    }

    async searchTextField_(input){
    await this.page.locator(this.searchTextField).fill(input,{waitForTimeout:3000})
    }

    async searchResults(){
        const input=await this.page.locator(this.searchButton)
        await input.waitFor()
        await input.click()
        await this.page.waitForTimeout(20000)     
    }
    async three_vertical_dot_(){
        await this.page.locator(this.three_vertical_dot).click({waitForTimeout:1000})    }

    async resourceDropdown10_(){
        await this.page.locator(this.resourceDropdown10).hover({waitForTimeout:2000});
        await this.page.locator(this.selectedDropdown10).click()    }

    async resourceDropdown20_(){
        await this.page.locator(this.resourceDropdown10).hover({waitForTimeout:2000});
        await this.page.locator(this.selectedDropdown20).click()   }
  
    async resourceDropdown30_(){
        await this.page.locator(this.resourceDropdown20).hover({waitForTimeout:2000});
        await this.page.locator(this.selectedDropdown30).click()    }

    async resourceDropdown40_(){
        await this.page.locator(this.resourceDropdown30).hover({waitForTimeout:2000});
        await this.page.locator(this.selectedDropdown40).click()     }

    async resourceDropdown50_(){
        await this.page.locator(this.resourceDropdown40).hover({waitForTimeout:2000});
        await this.page.locator(this.selectedDropdown50).click()     }

    async closeButton_(){
        await this.page.locator(this.closeButton).click()    }

     async CreativityHigh_(){
        await this.page.locator(this.CreativityMedium).hover({waitForTimeout:2000})
        await this.page.locator(this.High).click()
     }   
     async CreativityLow_(){
        await this.page.locator(this.CreativityHigh).hover({waitForTimeout:2000})
        await this.page.locator(this.low).click()        
     }   
     async CreativityMedium_(){
        await this.page.locator(this.CreativityLow).hover({waitForTimeout:2000})
        await this.page.locator(this.Medium).click()    
     }   

     async historyPage_(){
        const input=await this.history
        await input.waitFor()
        await input.click()
     }

     async reportPage_(){
        const input=await this.report
        await input.waitFor()
        await input.click()
         }
    async logoutButton_(){
        await this.page.locator(this.logout).click({waitForTimeout:2000})    
    }     
    }