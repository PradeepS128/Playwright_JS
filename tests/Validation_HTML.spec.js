const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage"); //imported from pom
const { HomePage } = require("../PageObjectModel/HomePage");
const { HistoryPage } = require("../PageObjectModel/HistoryPage");
const { ReportPage } = require("../PageObjectModel/ReportPage");

test.beforeEach("login page", async ({ browser, page }) => {
  const loginpage = new LoginPage(page); //created an object of Loginpage to fetch details
  const username = "harishkummara@fibonalabs.com";
  const password = "harish@123";
  await loginpage.goto();
  await loginpage.validLogin(username, password);
});

test.afterEach("close the window", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});
//////////////////////////////////////////// Report-Page ///////
test.describe.configure({mode:'parallel'})
test("Validation_01: Report page title verification",async({page})=>{
const homepage=new HomePage(page)
const reportpage=new ReportPage(page)
homepage.three_vertical_dot_()
await page.waitForTimeout(3000);
homepage.reportPage_()
await page.waitForTimeout(3000);
expect.soft(await page.locator(reportpage.reportPageTitle)).toHaveText('Report')

})

test("Validation_02: Report page CreatedByYouText", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);

    expect.soft(await page.locator(reportpage.createdByYou).nth(0)).toContainText(
      "Created"
    );
  });

  test("Validation_03: Report page Edit Icon Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.first_title_search_results()
    await page.waitForTimeout(3000);
    

    expect.soft(await page.locator(reportpage.editTitleButton)).toBeEnabled();
  });

  test("Validation_04: Report page EditReportTitle", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.first_title_search_results()
    await page.waitForTimeout(3000);
    await reportpage.editTitle();

    expect.soft(await page.locator(reportpage.editReportTitle)).toHaveText(
      "Edit Report Title"
    );
  });

  test("Validation_05: Report page EditTextarea editable", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.first_title_search_results()
    await page.waitForTimeout(3000);
    await reportpage.editTitle();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(reportpage.editReportPageTextarea)).toBeEditable();
  });

  test("Validation_06: Report page CancleButton Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.first_title_search_results()
    await page.waitForTimeout(3000);
    await reportpage.editTitle();
    await page.waitForTimeout(3000);

    expect.soft(await reportpage.PopupCancle).toBeEnabled();
  });

  test("Validation_07: Report page saveButton Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.first_title_search_results()
    await page.waitForTimeout(3000);
    await reportpage.editTitle();
    await page.waitForTimeout(2000);

    expect.soft(await reportpage.save).toBeEnabled();
  });

  test("Validation_08: Report page CloseButton Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
   await reportpage.first_title_search_results()
   await page.waitForTimeout(3000);

     expect.soft(page.locator(reportpage.reportViewclose)).toBeEnabled();
  });

  test("Validation_09: Report page ThreeVerticalDots Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    expect.soft(page.locator(reportpage.threeVerticalDot).nth(0)).toBeEnabled();
  });

  test("Validation_10: Report page shareButton Disabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    expect.soft( page.locator(reportpage.threeDotsShare)).toBeDisabled();
  });

  test("Validation_11: Report page DeleteButton Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    expect.soft( page.locator(reportpage.threeDotsDelete)).toBeEnabled();
  });

  test("Validation_12: Report page Delete Popup Title", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await reportpage.three_dot_delete();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(reportpage.PopupTitle)).toHaveText("Delete");
  });

  test("Validation_13: Report page Delete Popup Text Area", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await reportpage.three_dot_delete();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(reportpage.PopupText)).toContainText(
      "Are you sure you want to delete"
    );
  });

  test("Validation_14: Report page Cancle Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await reportpage.three_dot_delete();
    await page.waitForTimeout(3000);

    expect.soft(await reportpage.PopupCancle).toBeEnabled();
  });

  test("Validation_15: Report page Delete Button Enabled ", async ({ page }) => {
    const homepage = new HomePage(page);
    const reportpage = new ReportPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.reportPage_();
    await page.waitForTimeout(3000);
    await reportpage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await reportpage.three_dot_delete();
    await page.waitForTimeout(3000);

    expect.soft(await reportpage.PopupDelete).toBeEnabled();
  });

///////////////////////////// History-Page ///////////////////////////////////////

//////////////////////////////////////////
  test("Validation_01: History page title verification", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
     expect.soft(page.locator(historypage.historyPageTitle)).toHaveText("History");
});

test("Validation_02: History page Contain Created by Text ", async ({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
     expect.soft(page.locator(historypage.createdByYou).nth(0)).toContainText("Created by");
});

  test("Validation_03: History page Edit Icon is Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.first_title_search_results();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.editTitleIcon)).toBeEnabled();
  });

    test("Validation_04: History page EditReportTitle verification", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);

    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.first_title_search_results()
    await page.waitForTimeout(3000);
    await historypage.editTitle();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.editHistoryTitle)).toHaveText(
      "Edit Title"
    );
  });

  test("Validation_05: History page EditTextarea", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);

    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.first_title_search_results()
    await page.waitForTimeout(3000);
    await historypage.editTitle();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.editHistoryPageTextarea)).toBeEditable();
  });

  test("Validation_06: History page CancleButton enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);

    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.first_title_search_results()
    await page.waitForTimeout(3000);
    await historypage.editTitle();
    await page.waitForTimeout(3000);

    expect.soft(await historypage.PopupCancle).toBeEnabled();
  });

  test("Validation_07: History page saveButton enabled", async ({ page }) => {
    const homepage = new HomePage(page);
   const historypage = new HistoryPage(page);

   await homepage.three_vertical_dot_();
   await homepage.historyPage_();
   await page.waitForTimeout(3000);
   await historypage.first_title_search_results()
   await page.waitForTimeout(3000);
   await historypage.editTitle();
   await page.waitForTimeout(3000);

   expect.soft(await historypage.save).toBeEnabled();
  });

  test("Validation_08: History page bot response shareIcon Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
   const historypage = new HistoryPage(page);

   await homepage.three_vertical_dot_();
   await homepage.historyPage_();
   await historypage.first_title_search_results()
   await page.waitForTimeout(3000);

   expect.soft(page.locator(historypage.botShareIcon)).toBeDisabled();
  });

  test("Validation_09: History page bot response reportIcon Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
   const historypage = new HistoryPage(page);

   await homepage.three_vertical_dot_();
   await homepage.historyPage_();
   await historypage.first_title_search_results()
   await page.waitForTimeout(3000);

   expect.soft(page.locator(historypage.botReportIcon)).toBeDisabled();
  });

  test("Validation_10: History page header threevertical dot button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    homepage.three_vertical_dot_();
    homepage.historyPage_();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.HeaderthreeverticalDot).nth(0)).toBeEnabled();

  });

test("Validation_11: History share button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
   await homepage.three_vertical_dot_();
   await page.waitForTimeout(3000);
   await homepage.historyPage_();
   await page.waitForTimeout(3000);
   await historypage.header_threeverticalDot_();
   await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.threeDotShare)).toBeDisabled();

  });

  test("Validation_12: History Delete button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
   await homepage.three_vertical_dot_();
   await page.waitForTimeout(3000);
   await homepage.historyPage_();
   await page.waitForTimeout(3000);
   await historypage.header_threeverticalDot_();
   await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.threeDotDelete)).toBeEnabled();

  });

    test("Validation_13: History page Delete Popup Title", async ({ page }) => {
        const homepage = new HomePage(page);
        const historypage = new HistoryPage(page);
       await homepage.three_vertical_dot_();
       await page.waitForTimeout(3000);
       await homepage.historyPage_();
       await page.waitForTimeout(3000);
       await historypage.header_threeverticalDot_();
       await page.waitForTimeout(3000);
       await historypage.threedot_delete_button()
       await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.PopupDeleteTitle)).toHaveText("Delete");
  });

  test("Validation_14: History page Delete Popup Text Area ", async ({ page }) => {
    const homepage = new HomePage(page);
        const historypage = new HistoryPage(page);
       await homepage.three_vertical_dot_();
       await page.waitForTimeout(3000);
       await homepage.historyPage_();
       await page.waitForTimeout(3000);
       await historypage.header_threeverticalDot_();
       await page.waitForTimeout(3000);
       await historypage.threedot_delete_button()
       await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.PopupDeleteText)).toContainText(
      "Are you sure you want to delete"
    );
  });

  test("Validation_15: History page Cancle Button Enabled ", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.header_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.threedot_delete_button()
    await page.waitForTimeout(3000);

    expect.soft(await historypage.PopupCancle).toBeEnabled();
  });

  test("Validation_16: History page Delete Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.header_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.threedot_delete_button()
    await page.waitForTimeout(3000);

    expect.soft(await historypage.PopupDelete).toBeEnabled();
  });

  test("Validation_17: History page Combined Chats Button Enabled ", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.combineChats)).toBeEnabled();
  });

  test("Validation_18: History page Generate Report Button Enabled ", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.genaratereport)).toBeEnabled();
  });

  test("Validation_19: History page ContentandResource Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.genaratereport_button();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.contentAndResources)).toBeEnabled();
  });

  test("Validation_20: History page Content Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.genaratereport_button();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.Content)).toBeEnabled();
  });

  test("Validation_21: History page Resource Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.genaratereport_button();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.Resources)).toBeEnabled();
  });

  test("Validation_22: History page Generate Report Page close Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await page.waitForTimeout(3000);
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.genaratereport_button();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.generateReportClose)).toBeEnabled();
  });

  test("Validation_23: History page Combine Chats Page close Button Enabled", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await page.waitForTimeout(3000);
    await homepage.historyPage_();
    await historypage.footer_threeverticalDot_();
    await page.waitForTimeout(3000);
    await historypage.combinechats_button();
    await page.waitForTimeout(3000);

    expect.soft(page.locator(historypage.generateReportClose)).toBeEnabled();
  });

///////////////////////////////// Home-Page  ///////////////////////////

test("Validation_01: Home page Hello Title", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.helloUserNameTitle)).toContainText(
    "Hello"
  );
});

test("Validation_02: Home page Welcome Message Title", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.welcomeMessageTitle)).toHaveText(
    "Feel free to ask me anything"
  );
});

test("Validation_03: Home page Logo Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.AIIcon)).toBeEnabled();
});

test("Validation_04: Home page Search text area editable", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.searchTextField)).toBeEditable();
});

test("Validation_05: Home page Search Button Disabled", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.searchButton)).toBeDisabled();
});

test("Validation_06: Home page Three Verical Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.three_vertical_dot)).toBeEnabled();
});

test("Validation_07: Home page History Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
   expect.soft(homepage.history).toBeEnabled();
});

test("Validation_08: Home page Report Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
  expect.soft(homepage.report).toBeEnabled();
});

test("Validation_09: Home page Resource Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
  expect.soft(page.locator(homepage.resourceDropdown10)).toBeEnabled();
});

test("Validation_10: Home page Creativity Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.CreativityMedium)).toBeEnabled();
});

test("Validation_11: Home page Logout Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.logout)).toBeEnabled();
});

test("Validation_12: Home page Close Button Enabled", async ({ page }) => {
  const homepage = new HomePage(page);

  await homepage.three_vertical_dot_();
  await page.waitForTimeout(3000);
   expect.soft(page.locator(homepage.closeButton)).toBeEnabled();
});

// /////////////////////////// Login Page //////

test("Validation_01: Login Page UserID Text verifying ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);


   expect.soft(page.locator(loginpage.userIDText)).toHaveText("User ID");
});

test("Validation_02: Login Page Password Text verifying ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);

   expect.soft(page.locator(loginpage.passwordText)).toHaveText("Password");
});

test("Validation_03: Login Page User ID filed editable ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);

   expect.soft(page.getByLabel(loginpage.userID)).toBeEditable();
});

test("Validation_04: Login Page Password filed editable ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);

   expect.soft(page.getByLabel(loginpage.password)).toBeEditable();
});

test("Validation_05: Login Page CheckBox to be Disabled ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);

  expect.soft(page.getByLabel(loginpage.checkbox)).toBeDisabled;
});

test("Validation_06: Login Page CheckBox to be checked ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);
  await loginpage.termsOfServices();
  await page.waitForTimeout(2000);
  expect.soft(page.getByLabel(loginpage.checkbox)).toBeTruthy();
});

test("Validation_07: Login Page Login Button Disabled ", async ({ page }) => {
  const homepage = new HomePage(page);
  const loginpage = new LoginPage(page);

  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await page.waitForTimeout(3000);

  expect.soft(page.getByLabel(loginpage.login)).toBeDisabled;
});
