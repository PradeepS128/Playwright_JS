const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage"); //imported from pom
const { HomePage } = require("../PageObjectModel/HomePage");
const { HistoryPage } = require("../PageObjectModel/HistoryPage");
const { ReportPage } = require("../PageObjectModel/ReportPage");
const exp = require("constants");

test.beforeEach("login page", async ({ browser, page }) => {
  const loginpage = new LoginPage(page); //created an object of Loginpage to fetch details
  const username = "pradeep.kumar@fibonalabs.com";
  const password = "pradeep@123";
  await loginpage.goto();
  await loginpage.validLogin(username, password);
});

test.afterEach("close the window", async ({ page }) => {
  await page.waitForTimeout(2000);
  await page.close();
});
/////////////////////////////////////////////////////////////////////

/*Report-Page */
test("Validation: Report page title", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  expect(await page.locator(reportpage.reportPageTitle)).toHaveText("Report");
  
});

test("Validation: Report page CreatedByYouText", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();

  expect(await page.locator(reportpage.createdByYou).nth(0)).toContainText(
    "Created"
  );
});

test("Validation: Report page Edit Icon", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.editIcon_();

  expect(await page.locator(reportpage.editIcon)).toBeEnabled();
});

test("Validation: Report page EditReportTitle", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.existingReport();
  await reportpage.editIcon_();

  expect(await page.locator(reportpage.editReportTitle)).toHaveText(
    "Edit Report Title"
  );
});

test("Validation: Report page EditTextarea", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.existingReport();
  await reportpage.editIcon_();

  expect(await page.locator(reportpage.editReportPageTextarea)).toBeEditable();
});

test("Validation: Report page CancleButton", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.existingReport();
  await reportpage.editIcon_();

  expect(await reportpage.PopupCancle).toBeEnabled();
});

test("Validation: Report page saveButton", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.existingReport();
  await reportpage.editIcon_();

  expect(await reportpage.save).toBeEnabled();
});

test("Validation: Report page CloseButton", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.existingReport();
  await reportpage.editIcon_();

  expect(await reportpage.close).toBeEnabled();
});

test("Validation: Report page ThreeVerticalDots", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  expect(await page.locator(reportpage.threeVerticalDot).nth(0)).toBeEnabled();
});

test("Validation: Report page shareButton", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  expect(await page.locator(reportpage.threeDotsShare)).toBeDisabled();
});

test("Validation: Report page DeleteButton", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  expect(await page.locator(reportpage.threeDotsDelete)).toBeEnabled();
});

test("Validation: Report page Delete Popup Title", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();

  expect(await page.locator(reportpage.PopupTitle)).toHaveText("Delete");
});

test("Validation: Report page Delete Popup Text Area", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();

  expect(await page.locator(reportpage.PopupText)).toContainText(
    "Are you sure you want to delete"
  );
});

test("Validation: Report page Cancle Button ", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();

  expect(await reportpage.PopupCancle).toBeEnabled();
});

test("Validation: Report page Delete Button ", async ({ page }) => {
  const homepage = new HomePage(page);
  const reportpage = new ReportPage(page);

  await homepage.three_vertical_dot_();
  await homepage.reportPage_();
  await reportpage.three_vertical_dot_();
  await reportpage.three_dot_delete();

  expect(await reportpage.PopupDelete).toBeEnabled();
});
