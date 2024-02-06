const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage"); //imported from pom
const { HomePage } = require("../PageObjectModel/HomePage");
const { HistoryPage } = require("../PageObjectModel/HistoryPage");
const { ReportPage } = require("../PageObjectModel/ReportPage");

test.beforeEach("login page", async ({ browser, page }) => {
  const loginpage = new LoginPage(page); //created an object of Loginpage to fetch details
  const username = "nikhila.vijayakarnan@fibonalabs.com";
  const password = "nikhila@123";
  await loginpage.goto();
  await loginpage.validLogin(username, password);
});

test.afterEach("close the window", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});
////////////////////////////////////////////
test.skip("Validation: History share button", async ({ page }) => {
  const homepage = new HomePage(page);
  const historypage = new HistoryPage(page);
  homepage.three_vertical_dot_();
  homepage.historyPage_();
  historypage.history_3VerticalDot_();
  const shareButton = page.locator(historypage.share);
  const isShareButtonDisabled = await shareButton.isDisabled();
  expect(isShareButtonDisabled).toBeTruthy();
});

test("Validation: Created by", async ({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await expect(page.locator(historypage.createdBy)).toContainText("Created by");
});



//////////////////////
test.skip("Validation: History generate report title", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await expect(page.locator(historypage.generateReportTitle)).toContainText("History");
});


test.skip("Validation: History generate report selected chats", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await expect(page.locator(historypage.selectedGenerateReport)).toContainText("Selected chats");
});

test.skip("Validation: History generate report total chats", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await expect(page.locator(historypage.totalChatsGenerateReport)).toContainText("Total chats");
});

test.skip("Validation: History generate report created by", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await expect(page.locator(historypage.createdByGenerateReport)).toContainText("Created by");
});

test.skip("Validation: close generate report",async({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await historypage.closeButtonGenerateReport();
})

test.skip("Validation: No more records in history page", async ({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.genaratereport_colored_();
    await expect(page.locator(historypage.noMoreDataGenerateReport)).toContainText("No more data");
});

///////////////////////////////
test.skip("Validation: History combine chat title",async({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await expect(page.locator(historypage.combineChatsTitle)).toContainText("History");
})


test.skip("Validation: History combine chat selected chats", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await expect(page.locator(historypage.selectedCombinedChats)).toContainText("Selected chats");
});

test.skip("Validation: History combine chat total chats", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await expect(page.locator(historypage.totalChatsCombineChats)).toContainText("Total chats");
});

test.skip("Validation: History combine chat created by", async ({ page }) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await expect(page.locator(historypage.createdByCombineChats)).toContainText("Created by");
});

test.skip("Validation: close combine chat",async({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await historypage.closeButtonCombineChats();
})

test.skip("Validation: No more records in combine chats", async ({page}) => {
    const homepage = new HomePage(page);
    const historypage = new HistoryPage(page);
    await homepage.three_vertical_dot_();
    await homepage.historyPage_();
    await historypage.threeverticalDot_historyPage();
    await historypage.combinechats_();
    await expect(page.locator(historypage.noMoreDataCombineChats)).toContainText("No more data");
});