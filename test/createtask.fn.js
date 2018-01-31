const puppeteer = require('puppeteer');
const path = require('path');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
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
  //await page.click(config.ids.male);
  //await page.select('#telCountryInput', 'my-value')
  await page.type(config.ids.username, config.data.username);
  await page.type(config.ids.password, config.data.password);

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/createtask/createtask_login_before.png'
  });

  // submit the form
  await page.$eval(config.ids.form, form => form.submit());

  await page.waitForNavigation();

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/createtask/createtask_login_after.png'
  });

  // open test target
  await page.goto(config.urlCreateTask, {waitUntil: 'load'});
  //await sleep(10000);
  // fill out the form create task
  await page.type(config.ids.informerName, config.data.informerName);
  await page.type(config.ids.informerTel, config.data.informerTel);
  await page.select(config.ids.insId, config.data.insId);
  await page.type(config.ids.carRegis, config.data.carRegis);

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/createtask/createtask_fillform_before.png'
  });

  // submit the form creat task
  await page.click(config.ids.btnSave);

  await sleep(2000);

  // save screenshot
  await page.screenshot({
    path: path.resolve("screenshots") + '/createtask/createtask_fillform_after.png'
  });
  // You can add evaluation/test logic here

  await browser.close();

};
