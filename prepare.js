const fs = require('fs');
const path = require('path');
const screenshotDir = path.resolve(__dirname, 'screenshots');
const screenshotLoginDir = path.resolve(__dirname, 'screenshots/login');
const screenshotCreateTaskDir = path.resolve(__dirname, 'screenshots/createtask');

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
}
if (!fs.existsSync(screenshotLoginDir)) {
    fs.mkdirSync(screenshotLoginDir);
}
if (!fs.existsSync(screenshotCreateTaskDir)) {
    fs.mkdirSync(screenshotCreateTaskDir);
}
