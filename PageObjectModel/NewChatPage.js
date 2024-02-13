exports.NewChatPage=class NewChatPage
{
constructor(page){
this.page=page
this.htmlDoc="div #htmlResource"
this.pdfIDoc="div #pdfIResources"
this.popupClose="div #closeBtn"
this.ratings='#ratingIcon'
this.commentBoxIcon="#commentsIcon"
this.commentBoxTextarea="#chat-title"
this.YesButton="#tickIconBtn"
}
async htmlDocFiles(){
    await this.page.locator(this.htmlDoc).nth(0).click()
    await this.page.waitForTimeout(3000)
}
async pdfIDocFiles(){
    await this.page.locator(this.pdfIDoc).nth(0).click()
    await this.page.waitForTimeout(3000)
}
async popupCloseWindow(){
    await this.page.locator(this.popupClose).click()
}
async htmlDocScrol(){
    const elementHandle=await this.page.locator(this.htmlDoc).last()
    await elementHandle.scrollIntoViewIfNeeded()
}
async pdfIDocScrol(){
    const elementHandle=await this.page.locator(this.pdfIDoc).last()
    await elementHandle.scrollIntoViewIfNeeded()
}
async userRatings(){
        await this.page.locator(this.ratings).nth(2).click()
        await this.page.waitForTimeout(2000)
}
async customerFeedback(input){
    await this.page.locator(this.commentBoxIcon).click()
    await this.page.locator(this.commentBoxTextarea).fill(input)
    await this.page.waitForTimeout(3000)
    await this.page.locator(this.YesButton).click()
}
}