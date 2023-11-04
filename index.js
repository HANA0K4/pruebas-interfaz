const { Browser, Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOptions = new chrome.Options();
        //chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        await delay(2000);
        // 1. En el campo Textarea agregue el siguiente texto: anita lava la tina.
        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys('anita lava la tina');
        await delay(2000);

        // 2. En el campo Dropdown (select) seleccione la opción Three.
        const dropdown = await driver.findElement(By.css('select[name="my-select"]'));
        await dropdown.sendKeys('Three');
        await delay(2000);

        // 3. En el campo Color picker seleccione el color con la siguiente configuración: R: 32 G: 167 B: 34
        const colorPicker = await driver.findElement(By.css('input[name="my-colors"]'));
        const colorHex = '#20A722';
        await colorPicker.sendKeys(colorHex);
        await delay(2000);

        // 4. En el campo Datepicker seleccione la fecha: 16 de agosto de 1970.
        const datePicker = await driver.findElement(By.css('input[name="my-date"]'));
        await datePicker.sendKeys('08-16-1970');
        await delay(2000);

        // 5. Chequee el campo Default checkbox.
        const checkbox = await driver.findElement(By.id("my-check-2"));
        await checkbox.click();
        await delay(2000);

        // 6. Presione el botón submit.
        const submitButton = await driver.findElement(By.css('button[type="submit"]'));
        await submitButton.click();
        await delay(2000);

        // 7. Capture el titulo Form submitted y muestrelo en consola.
        const formSubmittedTitle = await driver.findElement(By.css('h1'));
        const titleText = await formSubmittedTitle.getText();
        console.log(titleText);
        await delay(2000);

        // 8. Capture el mensaje Received y muestrelo en consola.
        const receivedMessage = await driver.findElement(By.id('message'));
        const messageText = await receivedMessage.getText();
        console.log(messageText);
    } catch (error) {
        console.error(error);
    } finally {
        if (driver) {
            //await driver.quit();
        }
    }
}

start();