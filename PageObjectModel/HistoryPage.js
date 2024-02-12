const { expect } = require("chai")

exports.HistoryPage=class HistoryPage
{
constructor(page)
{
    this.page=page
    this.historyPageTitle="//p[.='History']"
    this.historyTitleName='#historyItemTitle'
    this.createdByYou="#historyItemCreatedBy"
    this.editTitleIcon="#editIcon"
    this.editHistoryTitle="//label[.='Edit Title']"
    this.editHistoryPageTextarea="//textarea[@id='chat-title']"
    this.PopupCancle=page.getByRole('button', { name: 'Cancel' })
    this.save=page.getByRole('button', { name: 'Save' })
    this.botShareIcon="#shareIcon"
    this.botReportIcon="#reportIcon"
    this.threeDotShare="//span[.='Share']"
    this.threeDotDelete="//span[.='Delete']"
    this.PopupDeleteTitle="#modalHeader"
    this.PopupDeleteText="#modalBody"
    this.PopupCancle=page.getByRole('button', { name: 'Cancel' })
    this.PopupDelete=page.getByRole('button', { name: 'Delete' })

    this.popupDelete="//button[.='Delete']"
    this.close="#historyCloseBtn"
//  this.close=page.getByRole('button', { name: 'Close' })
    this.HeaderthreeverticalDot="#moreOptions"
    this.FooterthreeverticalDot="#historyMenu"
    this.combineChats="//p[.='Combine Chats']"
    this.genaratereport="//p[.='Generate Report']"
    this.resultCheckbox='//input[@type="checkbox"]'
    this.selectedChats="#selectedChatText"
    this.totalChats="#totalChat"

    
  
    this.contentAndResources="//p[.='Content and Resources']"
    this.Content="//p[.='Content']"
    this.Resources="//p[.='Resources']"
    this.generateReportClose="#closeBtn"
    this.combineChatsClose="#closeBtn"

    this.ratings="#ratingIcon"
    this.commentsIcon="#commentsIcon"
    this.commentsTextField="#chat-title"
    this.submitComments="#tickIconBtn"
    this.closeComments="#closeIconBtn"
    
    
    
    this.noMoreRecords= "#noData"
}
async contentButton(){
    await this.page.locator(this.Content).click() }

async resourcesButton(){
    await this.page.locator(this.Resources).click() }


async genaratereport_button(){
    await this.page.locator(this.genaratereport).click()
}

async combinechats_button(){
    await this.page.locator(this.combineChats).click()
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

async footer_threeverticalDot_(){
    await this.page.locator(this.FooterthreeverticalDot).click({delay:5000})
}

async header_threeverticalDot_(){
    await this.page.locator(this.HeaderthreeverticalDot).nth(0).click({delay:5000})
}
async closeButton(){
    await this.page.locator(this.close).click()
    await this.page.waitForTimeout(2000)
}
async first_title_search_results(){
    await this.page.locator(this.historyTitleName).nth(0).click()
}

async threedot_delete_button(){
    await this.page.locator(this.threeDotDelete).click()
}

async editTitle(){
    await this.page.locator(this.editTitleIcon).click()
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


