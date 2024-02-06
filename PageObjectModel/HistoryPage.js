const { expect } = require("chai")

exports.HistoryPage=class HistoryPage
{
constructor(page)
{
    this.page=page
    this.searchNames='.group'
    this.delete="//span[.='Delete']"
    this.popupDelete="//button[.='Delete']"
    this.close="div #historyCloseBtn"
//  this.close=page.getByRole('button', { name: 'Close' })
    this.ThreeverticalDot="#moreOptions"
    this.combineChats="//p[.='Combine Chats']"
    this.checkedCombineChats= page.getByText('Combine chats')
    this.resultCheckbox='//input[@type="checkbox"]'
    this.genaratereport_3VerticalDot="//p[.='Generate Report']"
    this.genaratereport_colored=page.getByRole('button', { name: 'Generate Report' })
    //vali
    this.Content="//p[.='Content']"
    this.Resources="//p[.='Resources']"
}
async contentButton(){
    await this.page.locator(this.Content).click() }

async resourcesButton(){
    await this.page.locator(this.Resources).click() }


async genaratereport_3VerticalDot_(){
    await this.page.locator(this.genaratereport_3VerticalDot).click()
}

async genaratereport_colored_(){
    await this.genaratereport_colored.click()
    await this.page.waitForTimeout(5000)
}

async combinechats_(){
    await this.page.locator(this.combineChats).click()
}

async selectChats_(count){
    for(let i=0;i<count;++i){
        await this.page.locator(this.resultCheckbox).nth(i).click({waitForTimeout:1000})
    }
}

async selectCombinedChats(){
    await this.checkedCombineChats.click()
}

async threeverticalDot_historyPage(){
    await this.page.locator(this.ThreeverticalDot).click({delay:5000})
}
async closeButton(){
    await this.page.locator(this.close).click()
    await this.page.waitForTimeout(2000)
}

async removeFirstSearchHistoryEntry(searchInput){
    // if a dynamic input matches with existing results then it will delete 
    // const count=await this.page.locator(this.searchNames).count()
    // for(let i=0;i<count;++i)
    // {
    //     if(await this.page.locator(this.searchNames).nth(i).locator('p').textContent()===searchInput)
    //     {
    //         await this.page.locator(this.searchNames).nth(i).locator('svg').click()
    //         break
    //     }
    // }
    const count=await this.page.locator(this.searchNames).count()
    for(let i=0;i<count;++i)
    {
        if(await this.page.locator(this.searchNames).nth(0).locator('p').textContent()===searchInput)
        {
            await this.page.locator(this.searchNames).nth(0).locator('svg').click()
            break
        }
    }
    await this.page.locator(this.delete).click() 
    await this.page.locator(this.popupDelete).click({delay:3000})
    await this.page.locator(this.close).click()
}
}


