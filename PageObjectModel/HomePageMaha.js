exports.HomePage=class HomePage
{
    constructor(page)
    { 
        this.page=page
        this.threeVerticalDot="(//*[name()='svg'][@class='h-4 w-4 text-app-purple'])[1]"
        this.historyButton="//button[normalize-space()='History']"
        this.logoutIcon="//button[normalize-space()='Logout']"

        //Report page
        this.reportButton="//button[normalize-space()='Reports']"
        this.reportThreeVerticalButton="//body/div[@class='h-full']/div[@class='h-full']/section[@class='mx-auto flex h-full flex-col px-4 pb-4 lg:max-w-5xl lg:px-0']/div[@class='hide-scrollbar relative flex-1 overflow-y-auto']/div[@class='h-full pt-16']/div[1]/div[1]/div[1]/button[1]/div[1]"
        this.reportDeleteButton="//button[@class='hover:bg-medium-purple w-full px-4 py-2 rounded-b-2xl disabled:text-light-gray text-black hover:bg-purple-100 disabled:cursor-not-allowed hover:disabled:bg-gray-100']"
        this.reportCloseButton="//button[normalize-space()='Close']"
        this.reportPopupDelete="//button[normalize-space()='Delete']"
    }


 async three_vertical_dot(){
    await this.page.locator(this.threeVerticalDot).click()   } 


async historyPage(){
    await this.page.locator(this.historyButton).click() }


async logoutOption(){
    await this.page.locator(this.logoutIcon).click() }

async reportPage(){
    await this.page.locator(this.reportButton).click() }

async reportVerticalIcon(){
    await this.page.locator(this.reportThreeVerticalButton).click() }

async reportDelete(){
    await this.page.locator(this.reportDeleteButton).click
}

async reportPopupDeleteButton(){
    await this.page.locator(this.reportPopupDelete).click
}

async reportClose(){
    await this.page.locator(this.reportCloseButton).click
}

}
    




 