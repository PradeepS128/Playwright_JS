exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.AIIcon = '//img[@alt="AI logo"]';
    this.newChat = "//span[.='New Chat']";
    this.searchTextField = '//textarea[@placeholder="Search..."]';
    this.searchButton = "#sendMessage";
    this.title = "#editIcon";
    this.save = "//button[.='Save']";
    this.updateTitle = "#chat-title";
    //three vertical dot
    this.three_vertical_dot = "#chatMenu";

    //region
    this.region = "//button[.='Region']";
    this.center = "#centerName";
    this.closeRegion = "#close";
    this.clearAll = "#clearAll";
    this.state = "#stateName";
    // history, report, logout
    this.history = page.getByRole("button", { name: "History" });
    this.report = page.getByRole("button", { name: "Reports" });
    this.logout = "//button[.='Logout']";
    //close button
    this.closeButton =
      "//button[contains(@class,'bg-option-btn') and contains(@class,'flex')]";
    //validation
    this.welcomeMessageTitle = "#welcomeMessage";
    this.helloUserNameTitle = "#userName";
    //validation-Nikhila
    this.selectRegionText = "//label[text()='Select Region']";
    this.modelHeading = '#modelHeading';
    this.temperatureHeading = '#temperature'
    this.topPHeading = '#topP'
    this.maxTokensHeading = '#maximumTokensGenerated'
    this.doSampleHeading = '#doSample'
    this.systemHeading = '#systemHeading'
    this.doSampleTrue = '#doSampleTrue'
    this.doSampleFalse = '#doSampleFalse'
    this.sidePanel = '#toggleSidePanel'
    this.resourceTitle = "//span[.='Resource Limit']";
    this.creativityTitle = "//span[.='Creativity']";

    //creativity-Nikhila
    this.CreativityLow = '#creativity1'
    this.CreativityMedium = '#creativity2'
    this.CreativityHigh = '#creativity3'

    //resource-Nikhila
    this.resourceDropdown10 = "#resourceLimit1";
    this.resourceDropdown20 = "#resourceLimit2";
    this.resourceDropdown30 = "#resourceLimit3";

    //sidebar-generation
    this.leftSideBarButton = "#leftArrow";
    this.rightSideBarButton = "#rightArrow";
    this.systemTextBox = '//textarea[@placeholder="doSampleTrue"]';
    this.system = "#system";

  }

  async newChatHovering() {
    await this.page.locator(this.AIIcon).hover({ waitForTimeout: 2000 });
  }

  async searchTextField_(input) {
    await this.page
      .locator(this.searchTextField)
      .fill(input, { waitForTimeout: 3000 });
  }

  async searchResults() {
    const input = await this.page.locator(this.searchButton);
    await input.waitFor();
    await input.click();
    await this.page.waitForTimeout(20000);
  }
  async three_vertical_dot_() {
    await this.page
      .locator(this.three_vertical_dot)
      .click({ waitForTimeout: 1000 });
  }

  async resourceDropdown10_() {
    await this.page.locator(this.resourceDropdown10).click({ waitForTimeout: 2000 });
  }
  async resourceDropdown20_() {
    await this.page.locator(this.resourceDropdown20).click({ waitForTimeout: 2000 });
  }
  async resourceDropdown30_() {
    await this.page.locator(this.resourceDropdown30).click({ waitForTimeout: 2000 });
  }
  async closeButton_() {
    await this.page.locator(this.closeButton).click();
  }

  async CreativityLow_() {
    await this.page.locator(this.CreativityLow).click({ waitForTimeout: 2000 })
  }
  async CreativityMedium_() {
    await this.page.locator(this.CreativityMedium).click({ waitForTimeout: 2000 })
  }
  async CreativityHigh_() {
    await this.page.locator(this.CreativityHigh).click({ waitForTimeout: 2000 })
  }
  async historyPage_() {
    const input = await this.history;
    await input.waitFor();
    await input.click();
  }
  async reportPage_() {
    const input = await this.report;
    await input.waitFor();
    await input.click();
  }
  async logoutButton_() {
    await this.page.locator(this.logout).click({ waitForTimeout: 2000 });
  }

  async clickRegionButton_() {
    await this.page.locator(this.region).click();
  }
  async closeRegion_() {
    await this.page.locator(this.closeRegion).click();
  }

  async multiSelectState_() {
    await this.page.locator(this.state).nth(0).click();
    await this.page.locator(this.state).nth(15).click();
    await this.page.locator(this.state).nth(3).click();
    await this.page.locator(this.state).nth(24).click();
    await this.page.locator(this.center).click();
  }

  async clearAllRegionSelection_() {
    await this.page.locator(this.clearAll).click();
  }

  async editChatTitle(title) {
    await this.page.locator(this.title).click({ waitForTimeout: 2000 });
    await this.page
      .locator(this.updateTitle)
      .fill(title, { waitForTimeout: 3000 });
    await this.page.locator(this.save).click({ waitForTimeout: 2000 });
  }

  async selectLeftSideBar_() {
    await this.page.locator(this.leftSideBarButton).click();
  }

  async selectRightSideBar_() {
    await this.page.locator(this.rightSideBarButton).click();
  }

  async systemSettings_(input) {
    const labelSelector = `label:text("${"False"}")`;
    const labelElement = await this.page.$(labelSelector);
    await this.page.locator(this.system).click();
    await this.page.locator(this.system).fill(input);
    await labelElement.click();
    await this.page.evaluate(() => {
      let temperature_slider = document.querySelector("#temperature");
      let topP_slider = document.querySelector("#topP");
      let maxTokensGen_slider = document.querySelector(
        "#maximumTokensGenerated"
      );
      temperature_slider.value = 0.5; // Set the value of the slider to 0.5
      temperature_slider.dispatchEvent(new Event("input", { bubbles: true }));
      topP_slider.value = 0.19;
      topP_slider.dispatchEvent(new Event("input", { bubbles: true }));
      maxTokensGen_slider.value = 360;
      maxTokensGen_slider.dispatchEvent(new Event("input", { bubbles: true }));
      
    });
  }
  async selectRegion_() {
    await this.page.locator(this.center).click();
  }
};
