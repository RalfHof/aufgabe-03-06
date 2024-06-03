const { Builder, By } = require("selenium-webdriver");

let driver;

{
 
  driver = await new Builder().forBrowser("chrome").build();

  // Navigiert zur Webseite
  await driver.get("http://localhost:3000");

  // Überprüft den Titel der Seite
  const title = await driver.getTitle();
  expect(title).toBe("React App");

  
  const button = await driver.findElement(By.tagName("button"));
  const checkboxElement = await driver.findElement(By.id("checkbox"));

  
  const oldClass = await button.getAttribute("class");
  expect(oldClass).toBe("rot");


  await button.click();
  await checkboxElement.click();

  
  const newClass = await button.getAttribute("class");
  expect(newClass).toBe("grau");

  await driver.quit();
}
