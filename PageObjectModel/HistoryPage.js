exports.HistoryPage=class HistoryPage
{
constructor(page)
{
    this.page=page
    this.searchNames='.group'
    this.delete="//span[.='Delete']"
    this.popupDelete="//button[.='Delete']"
    this.close="//button[.='Close']"
}

async closeButton(){
    await this.page.locator(this.close).click()
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


