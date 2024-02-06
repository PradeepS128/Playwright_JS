exports.LoginPage=class LoginPage 
{
constructor(page)
{
    this.page=page;
    this.userID='User ID';
    this.password ='Password';
    this.checkbox='//input[@type="checkbox"]';
    this.login='button',{'name':'Login'};
}
async passwordTextField(password){
    await this.page.getByLabel(this.password).fill(password);
}

async goto(){
    await this.page.goto('http://localhost:5174/login')
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