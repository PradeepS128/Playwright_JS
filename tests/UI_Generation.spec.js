const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage"); //imported from pom
const { HomePage } = require("../PageObjectModel/HomePage");
const { HistoryPage } = require("../PageObjectModel/HistoryPage");
const { ReportPage } = require("../PageObjectModel/ReportPage");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const { NewChatPage } = require("../PageObjectModel/NewChatPage");

test.beforeEach("verify the functionality of user login", async ({ page }) => {
  const { loginpage, username, password } = setup(page);
  await loginpage.goto();
  await loginpage.validLogin(username, password);
});
test.afterEach("close the browser", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});
const setup = (page) => {
  // reusuable code
  return {
    username: username,
    password: password,
    input: "How are these trends influencing global energy policies?",
    input_2:
      "Identify the most significant technological advancements in the automotive industry.",
    title: "Global energy policies?",
    system_text: "You are a coder",
    search_app_input: "Give me a basic python code snippet.",
    search_app_input_2: "Give me a basic javascript code snippet.",
    search_app_title: "Python Snippet",
    ratingsCount: 3,
    checkboxCount: 2,
    invalidpassword: "pradeep",
    homepage: new HomePage(page),
    historyPage: new HistoryPage(page),
    reportpage: new ReportPage(page),
    loginpage: new LoginPage(page),
    newchatpage: new NewChatPage(page),
  };
};

////////////////////////////////////////////
test.describe.configure({ mode: "parallel" });

///////////////////////////Login////////////////////////////////////
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
///////////////////////////Home-Page/////////////////
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

test.skip("Verify User Login Functionality and Ensure system settings side panel is enabled", async ({
    page,
}) => {
    const { homepage } = setup(page);
    expect.soft(page.locator(homepage.system)).toBeEnabled();
});
test.skip("Verify User Login Functionality and Ensure Model heading is present in system settings side panel", async ({
    page,
}) => {
    const {homepage}=setup(page);
    expect.soft(page.locator(homepage.modelHeading)).toHaveText("Model");
    
});
// test.skip("Verify User Login Functionality and Ensure Temperature heading is present in system settings side panel", async ({
//   page,
// }) => {
//   const {homepage}=setup(page);
//   expect.soft(page.locator(homepage.temperatureHeading)).toHaveText("Temperature");
  
// });
// test.skip("Verify User Login Functionality and Ensure Top P heading is present in system settings side panel", async ({
//   page,
// }) => {
//   const {homepage}=setup(page);
//   expect.soft(page.locator(homepage.topPHeading)).toHaveText("Top P");
  
// });
// test.skip("Verify User Login Functionality and Ensure Max Tokens Generated heading is present in system settings side panel", async ({
//   page,
// }) => {
//   const {homepage}=setup(page);
//   expect.soft(page.locator(homepage.maxTokensHeading)).toHaveText("Maximum Tokens Generated");
  
// });
test.skip("Verify User Login Functionality and Ensure Do Sample heading is present in system settings side panel", async ({
  page,
}) => {
  const {homepage}=setup(page);
  expect.soft(page.locator(homepage.doSampleHeading)).toHaveText("Do Sample :");
  
});
test.skip("Verify User Login Functionality and Ensure System heading is present in system settings side panel", async ({
  page,
}) => {
  const {homepage}=setup(page);
  expect.soft(page.locator(homepage.systemHeading)).toHaveText("System");
  
});
test.skip("Verify User Login Functionality and Ensure Do Sample True radio button is checked in system settings side panel", async ({
  page,
}) => {
  const {homepage}=setup(page);
  const isChecked = await page.$eval(homepage.doSampleTrue, element => element.checked);
  expect.soft(isChecked).toBe(true);
  
});
test.skip("Verify User Login Functionality and Ensure Do Sample False radio button is checked in system settings side panel", async ({
  page,
}) => {
  const {homepage}=setup(page);
  const isChecked = await page.$eval(homepage.doSampleFalse, element => element.checked);
  expect.soft(isChecked).toBe(false);
  
});
///////////////////////////History-Page////////////////////////////////////
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
test.skip("Verify User Login Functionality and Ensure system settings button is hoverable in History Page", async ({
    page,
}) => {
    const { homepage, historyPage } = setup(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historyPage.select_first_chat_history();
    expect.soft(page.locator(historyPage.systemSettingsIcon).nth(0)).toBeVisible();
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
test.skip("Verify User Login Functionality and Ensure side panel is enabled in History Page", async ({
  page,
}) => {
  const { homepage, historyPage } = setup(page);
  await homepage.three_vertical_dot_();
  await homepage.historyPage_();
  await historyPage.select_first_chat_history();
  expect.soft(page.locator(historyPage.leftSideBarButton)).toBeEnabled();
});

//////////////////Report-Page///////////////////
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
