class LoginPage 
{

constructor(page)
{
    this.page=page;
    this.userID=page.getByLabel('User ID');
    this.password =page.getByLabel('Password');
    this.checkbox=page.locator('//input[@type="checkbox"]');
    this.login=page.getByRole('button',{'name':'Login'});
}

async goto(){
    await this.page.goto('http://localhost:5174/login')
}

async validLogin(username,password)
{
    await this.page.waitForTimeout(3000);
    await this.userID.fill(username,{timeout:3000})
    await this.password.fill(password)
    await this.checkbox.check()
    await this.login.click({waitForTimeout:5000})
}
}

module.exports={LoginPage}
