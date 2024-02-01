exports.ReportPage=class ReportPage
{
constructor(page){
this.page=page
this.reportTitleName=".text-left span"
this.editTitleButton =".rounded-full svg"
this.reportTitleAreaBox='//textarea[@id="chat-title"]'
this.save=page.getByText('Save')
this.close=page.getByRole('button', { name: 'Close' })
}    

async updateReportTitle(input){
    await this.page.locator(this.reportTitleAreaBox).fill(input)
}

async saveReportTitle(){
    await this.save.click()
}
async closeButton(){
    await this.close.click()
}

async first_title_search_results(){
await this.page.locator(this.reportTitleName).first().click()
}

async editTitle(){
    await this.page.locator(this.editTitleButton).click()
}

}
