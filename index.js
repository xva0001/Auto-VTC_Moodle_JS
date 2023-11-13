import { config } from 'dotenv';
config()
import { Builder, By } from "selenium-webdriver";

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

const mainF = async ()=>{
    const driver = await new Builder().forBrowser("MicrosoftEdge").build()
    await driver.get("https://moodle2324.vtc.edu.hk/login/index.php")
    const logoinbtn = driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div/div/div/div/div/div/div[1]/div[1]/div[1]/a")).click()
    await delay(2000)
    //userNameInput
    await driver.findElement(By.id("userNameInput")).sendKeys(process.env.VTC_username)
    //passwordInput
    await driver.findElement(By.id("passwordInput")).sendKeys(process.env.VTC_password)
    //submitButton
    await driver.findElement(By.id("submitButton")).click()
    process.exit(0)
}
mainF()