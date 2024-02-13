require('dotenv').config();
const app_url = process.env.PDFI_APP_URL;
export class LoginPage 
{
constructor(page)
{
    this.page=page;
    this.userID='User ID';
    this.password ='Password';
    this.checkbox='//input[@type="checkbox"]';
    this.login='button',{'name':'Login'};
    this.errorMsg="//p[.='Invalid credentials']"

    //validation
    this.userIDText = "//label[.='User ID']";
    this.passwordText = "//label[.='Password']";
}
async goto(){
    await this.page.goto(app_url)
}
async passwordTextField(password){
    await this.page.getByLabel(this.password).fill(password);
}
async userIDTextField(email){
    await this.page.getByLabel(this.userID).fill(email);
}
async termsOfServices(){
    await this.page.locator(this.checkbox).check()
}
async loginButton(){
    await this.page.getByRole(this.login).click()
}
async errorMessage(){
    const input=await this.page.locator(this.errorMsg)
    await input.waitFor()
    const errorMessageText =await input.textContent()
    return errorMessageText;
}
async validLogin(username,password)
{
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel(this.userID).fill(username,{timeout:3000});
    await this.page.getByLabel(this.password).fill(password);
    await this.page.locator(this.checkbox).check()
    await this.page.getByRole(this.login).click()
    await this.page.waitForTimeout(2000)
}

}