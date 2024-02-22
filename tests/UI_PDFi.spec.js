const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage"); //imported from pom
const { HomePage } = require("../PageObjectModel/HomePage");
const { HistoryPage } = require("../PageObjectModel/HistoryPage");
const { ReportPage } = require("../PageObjectModel/ReportPage");
const { NewChatPage } = require("../PageObjectModel/NewChatPage");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

test.beforeEach("login page", async ({ browser, page }) => {
  const { loginpage, username, password } = setup(page);
  await loginpage.goto();
  await loginpage.validLogin(username, password);
});
test.afterEach("close the window", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});
const setup = (page) => {
  // reusuable code
  return {
    username: username,
    password: password,
    homepage: new HomePage(page),
    historyPage: new HistoryPage(page),
    reportpage: new ReportPage(page),
    loginpage: new LoginPage(page),
    newchatpage: new NewChatPage(page),
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
test.describe.configure({ mode: "parallel" });
test.skip("Verify the functionality of user login and verify the title of the report page.", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  homepage.three_vertical_dot_();
  homepage.reportPage_();
  expect.soft(page.locator(reportpage.reportPageTitle)).toHaveText("Report");
});

test.skip("Verify User Login Functionality and Validate CreatedByYou text on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  expect
    .soft(page.locator(reportpage.createdByYou).nth(0))
    .toContainText("Created");
});

test.skip("Verify User Login Functionality and Ensure Edit Icon is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  expect.soft(page.locator(reportpage.editTitleButton)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Edit_Report_Title is Displayed on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  await reportpage.editTitle();
  expect
    .soft(page.locator(reportpage.editReportTitle))
    .toHaveText("Edit Report Title");
});

test.skip("Verify User Login Functionality and Ensure Text Area is Editable on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  await reportpage.editTitle();
  expect.soft(page.locator(reportpage.editReportPageTextarea)).toBeEditable();
});

test.skip("Verify User Login Functionality and Ensure Cancel Button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  await reportpage.editTitle();
  expect.soft(await reportpage.PopupCancle).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Save Button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  await reportpage.editTitle();
  expect.soft(await reportpage.save).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure close Button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.first_title_search_results();
  expect.soft(page.locator(reportpage.reportViewclose)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure three vertical Button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  expect.soft(page.locator(reportpage.threeVerticalDot).nth(0)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Delete Button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  expect.soft(page.locator(reportpage.threeDotsDelete)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Delete Title is Displayed on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();
  expect.soft(page.locator(reportpage.PopupTitle)).toHaveText("Delete");
});

test.skip(" Verify User Login Functionality and Ensure Text Area is Enabled on Delete Popup on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();
  expect
    .soft(page.locator(reportpage.PopupText))
    .toContainText("Are you sure you want to delete");
});

test.skip(" Verify User Login Functionality and Ensure cancel button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();
  expect.soft(await reportpage.PopupCancle).toBeEnabled();
});

test.skip(" Verify User Login Functionality and Ensure delete button is Enabled on Report Page", async ({
  page,
}) => {
  const { homepage, reportpage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();
  expect.soft(page.locator(reportpage.PopupDelete)).toBeEnabled();
});

//////////////////////History Page////////////////////////

test.skip("Verify User Login Functionality and Ensure History Page Title is Displayed on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  expect.soft(page.locator(historyPage.historyPageTitle)).toHaveText("History");
});

test.skip("Verify User Login Functionality and Validate CreatedByYou text on history Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  expect
    .soft(page.locator(historyPage.createdByYou).nth(0))
    .toContainText("Created by");
});

test.skip("Verify User Login Functionality and ensure Edit Icon is Enabled on history Page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  expect.soft(page.locator(historyPage.editTitleIcon)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Edit Report Title is Displayed on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  await historyPage.editTitle();
  expect
    .soft(page.locator(historyPage.editHistoryTitle))
    .toHaveText("Edit Title");
});

test.skip("Verify User Login Functionality and Ensure Edit Text Area is Displayed on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  await historyPage.editTitle();
  expect.soft(page.locator(historyPage.editHistoryPageTextarea)).toBeEditable();
});

test.skip("Verify User Login Functionality and Ensure Cancel Button is  enabled on History page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  await historyPage.editTitle();
  expect.soft(await historyPage.PopupCancle).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure save Button is enabled on History page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  await historyPage.editTitle();
  expect.soft(await historyPage.save).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Three Vertical Dot Button is Enabled in Header on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  homepage.three_vertical_dot_();
  homepage.historyPage_();
  expect
    .soft(page.locator(historyPage.HeaderthreeverticalDot).nth(0))
    .toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Delete button is Enabled on history page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.header_threeverticalDot_();
  expect.soft(page.locator(historyPage.threeDotDelete)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure delete Popup Title is displayed on history page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.header_threeverticalDot_();
  await historyPage.threedot_delete_button();
  expect.soft(page.locator(historyPage.PopupDeleteTitle)).toHaveText("Delete");
});

test.skip("Verify User Login Functionality and Ensure delete Popup warning Title is displayed on history page  ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.header_threeverticalDot_();
  await historyPage.threedot_delete_button();
  expect
    .soft(page.locator(historyPage.PopupDeleteText))
    .toContainText("Are you sure you want to delete");
});

test.skip("Verify User Login Functionality and Ensure Cancel Button is Enabled on a Popup in History Page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.header_threeverticalDot_();
  await historyPage.threedot_delete_button();
  expect.soft(await historyPage.PopupCancle).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure delete Button is Enabled on a Popup in History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.header_threeverticalDot_();
  await historyPage.threedot_delete_button();
  expect.soft(await historyPage.PopupDelete).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure combine chats Button is enabled on History Page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  expect.soft(page.locator(historyPage.combineChats)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure genarate report button is enabled on History Page  ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  expect.soft(page.locator(historyPage.genaratereport)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure ContentandResource Button is enabled on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  await historyPage.genaratereport_button();
  expect.soft(page.locator(historyPage.contentAndResources)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Content Button is Enabled on History page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  await historyPage.genaratereport_button();
  expect.soft(page.locator(historyPage.Content)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Resource Button is Enabled on History page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  await historyPage.genaratereport_button();
  expect.soft(page.locator(historyPage.Resources)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure close Button(genarete page) is Enabled on History page ", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  await historyPage.genaratereport_button();
  expect.soft(page.locator(historyPage.generateReportClose)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure Combine_Chats_Page Close Button is Enabled on History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.footer_threeverticalDot_();
  await historyPage.combinechats_();
  expect.soft(page.locator(historyPage.generateReportClose)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure share button is disabled in History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  expect.soft(page.locator(historyPage.botShareIcon)).toBeDisabled();
});
test.skip("Verify User Login Functionality and Ensure report icon button is disabled in History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  expect.soft(page.locator(historyPage.botReportIcon)).toBeDisabled();
});
///////////////////////////////// Home-Page  ///////////////////////////
test.skip("Verify User Login Functionality and Ensure Hello_Title is Displayed on Home Page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.helloUserNameTitle)).toContainText("Hello");
});

test.skip("Verify User Login Functionality and Ensure Welcome_Message Title is Displayed on Home Page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect
    .soft(page.locator(homepage.welcomeMessageTitle))
    .toHaveText("Feel free to ask me anything");
});

test.skip("Verify User Login Functionality and Ensure Home Page Logo Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.AIIcon)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Search Text Area is Editable", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.searchTextField)).toBeEditable();
});

test.skip("Verify User Login Functionality and Ensure Home Page Search Button is Disabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.searchButton)).toBeDisabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Three Vertical Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.three_vertical_dot)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page History Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(homepage.history).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Report Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(homepage.report).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Resource Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(page.locator(homepage.resourceDropdown10)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Creativity Button is Enabled ", async ({
  page,
}) => {
  const homepage = new HomePage(page);
  await homepage.three_vertical_dot_();
  expect.soft(page.locator(homepage.CreativityMedium)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Logout Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(page.locator(homepage.logout)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Home Page Close Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(page.locator(homepage.closeButton)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Region Button is Enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  expect.soft(page.locator(homepage.region)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Select Region Text is present on Region popup page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.clickRegionButton_();
  expect
    .soft(page.locator(homepage.selectRegionText))
    .toContainText("Select Region");
});

test.skip("Verify User Login Functionality and Ensure Clear All button is enabled in Region popup page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.clickRegionButton_();
  expect.soft(page.locator(homepage.clearAll)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure Close button is enabled in Region popup page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.clickRegionButton_();
  expect.soft(page.locator(homepage.closeRegion)).toBeEnabled();
});

test.skip("Verify User Login Functionality and Ensure State Selection is enabled in Region popup page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.clickRegionButton_();
  const buttons = await page.$$(homepage.state);
  const buttonCount = buttons.length;
  for (let i = 0; i < buttonCount; i++) {
    expect.soft(page.locator(homepage.state).nth(i)).toBeEnabled();
  }
});

test.skip("Verify User Login Functionality and Ensure Center Selection is enabled in Region popup page", async ({
  page,
}) => {
  const { homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.clickRegionButton_();
  expect.soft(page.locator(homepage.center)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure side panel is enabled", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.sidePanel)).toBeEnabled();
});
test("Verify User Login Functionality and Ensure resource title is present", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.resourceTitle)).toHaveText('Resource Limit');
});
test("Verify User Login Functionality and Ensure creativity title is present", async ({
  page,
}) => {
  const { homepage } = setup(page);
  expect.soft(page.locator(homepage.creativityTitle)).toHaveText('Creativity');
});
///////// Login Page //////
test.skip("Verify User Login Functionality and Ensure Login Page UserID Text Verification ", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.locator(loginpage.userIDText)).toHaveText("User ID");
});

test.skip("Verify User Login Functionality and Ensure Login Page Password Text Verification ", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.locator(loginpage.passwordText)).toHaveText("Password");
});

test.skip("Verify User Login Functionality and Ensure Login Page User ID Field is Editable ", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.getByLabel(loginpage.userID)).toBeEditable();
});

test.skip("Verify User Login Functionality and Ensure Login Page Password Field is Editable ", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.getByLabel(loginpage.password)).toBeEditable();
});

test.skip("Verify User Login Functionality and Ensure Login Page Checkbox is Disabled ", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.getByLabel(loginpage.checkbox)).toBeDisabled;
});

test.skip("Verify User Login Functionality and Ensure Login Page Checkbox is Checked", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  await loginpage.termsOfServices();
  expect.soft(page.getByLabel(loginpage.checkbox)).toBeTruthy();
});
test.skip("Verify User Login Functionality and Ensure Login Page Login Button is Disabled", async ({
  page,
}) => {
  const { loginpage, homepage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.logoutButton_();
  expect.soft(page.getByLabel(loginpage.login)).toBeDisabled;
});
