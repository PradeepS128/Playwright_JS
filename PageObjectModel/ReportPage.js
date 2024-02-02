exports.ReportPage=class ReportPage
{
constructor(page){
this.page=page
this.reportTitleName=".text-left span"
this.editTitleButton =".rounded-full svg"
this.reportTitleAreaBox='//textarea[@id="chat-title"]'
this.save=page.getByText('Save')
this.close=page.getByRole('button', { name: 'Close' })

//New X-path for report page added by Harish
this.reportPageTitle="//p[.='Report']"
this.reportTitleName=".text-left span"
this.createdByYou=".text-left p"
this.questionTitle="p[class='max-w-[16rem] truncate text-lg font-medium text-black sm:max-w-none']"
this.editIcon="svg.w-5"
this.editReportTitle="//label[.='Edit Report Title']"
this.editReportPageTextarea="//textarea[@id='chat-title']"
this.threeVerticalDot="svg.h-6"
this.threeDotsShare="//span[.='Share']"
this.threeDotsDelete="//span[.='Delete']"
this.PopupTitle="//div[@class='justify center flex flex-row items-center px-8 py-6']"
this.PopupText=".px-8 b"
this.PopupCancle=page.getByRole('button', { name: 'Cancel' })
this.PopupDelete=page.getByRole('button', { name: 'Delete' })
this.close=page.getByRole('button', { name: 'Close' })
this.editReportPageSave=page.getByRole('button', { name: 'Save' })
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
