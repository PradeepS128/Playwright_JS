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
this.reportPageFullTitle="//div[@class='hide-scrollbar relative flex-1 overflow-y-auto']//div[1]//div[1]//a[1]//div[1]"
this.reportTitleName=".text-left span"
this.createdByYou=".text-left p"
this.questionTitle="p[class='max-w-[16rem] truncate text-lg font-medium text-black sm:max-w-none']"
this.editIcon="svg.w-5"
this.editReportTitle="//label[.='Edit Report Title']"
this.editReportPageTextarea="//textarea[@id='chat-title']"
this.threeVerticalDot="(//*[name()='svg'][@class='h-6 w-6 p-1 text-app-purple '])[1]"
this.threeDotsShare="//span[.='Share']"
this.threeDotsDelete="//span[.='Delete']"
this.PopupTitle="//div[@class='justify center flex flex-row items-center px-8 py-6']"
this.PopupText="div[class='min-w-[30rem] max-w-2xl px-8']"
this.PopupCancle=page.getByRole('button', { name: 'Cancel' })
this.PopupDelete=page.getByRole('button', { name: 'Delete' })
this.close=page.getByRole('button', { name: 'Close' })
this.save=page.getByRole('button', { name: 'Save' })
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

async existingReport(){
    await this.page.locator(this.reportPageFullTitle).click()
}

async editIcon_(){
    await this.page.locator(this.editIcon).click()
}

async three_vertical_dot_(){
    await this.page.locator(this.threeVerticalDot).click()    }

    async three_dot_delete(){
        await this.page.locator(this.threeDotsDelete).click()    }

}
