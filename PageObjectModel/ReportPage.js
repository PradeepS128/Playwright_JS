exports.ReportPage = class ReportPage {
    constructor(page) {
      this.page = page;
      // this.reportTitleName=".text-left span"
      // this.editTitleButton =".rounded-full svg"
      this.reportTitleName = '#reportTitle';
      this.editTitleButton = '#editBtn';
      this.reportTitleAreaBox = '//textarea[@id="chat-title"]';
      this.save = page.getByText('Save');
      this.close = '#reportCloseBtn';
      this.reportViewclose = '#reportViewCloseBtn';
  
      //New X-path for report page added by Harish
      this.reportPageTitle = "//p[.='Report']";
      this.createdByYou = '.text-left p';
      this.questionTitle =
        "p[class='max-w-[16rem] truncate text-lg font-medium text-black sm:max-w-none']";
      // this.editIcon="svg.w-5"
      this.editIcon = '#editBtn';
      this.editReportTitle = "//label[.='Edit Report Title']";
      this.editReportPageTextarea = "//textarea[@id='chat-title']";
      // this.threeVerticalDot="svg.h-6"
      this.threeVerticalDot = '#moreOptions';
      this.threeDotsShare = "//span[.='Share']";
      this.threeDotsDelete = "//span[.='Delete']";
      // this.PopupTitle="//div[@class='justify center flex flex-row items-center px-8 py-6']"
      // this.PopupText=".px-8 b"
      this.PopupTitle = '#modalHeader';
      this.PopupText = '#modalBody';
      this.PopupCancle = page.getByRole('button', { name: 'Cancel' });
      this.PopupDelete = '#DeleteBtn';
      // this.PopupDelete = page.getByRole('button', { name: 'Delete' });
      this.editReportPageSave = page.getByRole('button', { name: 'Save' });
    }
  
    async updateReportTitle(input) {
      await this.page.locator(this.reportTitleAreaBox).fill(input);
    }
    async saveReportTitle() {
      await this.save.click({ waitForTimeout: 2000 });
    }
    async reportCloseButton_() {
      await this.page.locator(this.close).click();
    }
    async reportViewclose_() {
      await this.page.locator(this.reportViewclose).click();
    }
  
    async first_title_search_results() {
      await this.page.locator(this.reportTitleName).first().click();
    }
    async editTitle() {
      await this.page.locator(this.editTitleButton).click({ waitForTimeout: 2000 });
    }
  
    //harish
    async three_vertical_dot_() {
      await this.page.locator(this.threeVerticalDot).nth(0).click();
    }
    async three_dot_delete() {
      await this.page.locator(this.threeDotsDelete).click();
      // await this.page.locator(this.PopupDelete).click({ delay: 3000 });
    }
    async pop_up_delete() {
      await this.page.$('#DeleteBtn');
    }
  };