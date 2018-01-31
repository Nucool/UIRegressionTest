const puppeteer = require('puppeteer');
const path = require('path');

module.exports = async(config) => {

  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1280,
    height: 800
  });

  // open test target
  await page.goto(config.url);

  // fill out the form
  await page.type(config.ids.username, config.data.username);
  await page.type(config.ids.password, config.data.password);

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/login/login_before.png'
  });

  // submit the form
  await page.$eval(config.ids.form, form => form.submit());

  await page.waitForNavigation();

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/login/login_after.png'
  });
  // You can add evaluation/test logic here

  await browser.close();

};
