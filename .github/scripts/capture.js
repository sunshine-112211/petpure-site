const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
(async ()=>{
  const url = 'https://sunshine-112211.github.io/petpure-site/';
  const outDir = path.join(__dirname,'..','artifacts');
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
  const outPath = path.join(outDir,'screenshot.png');
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 900});
  await page.goto(url, {waitUntil: 'networkidle2', timeout: 60000});
  await page.screenshot({path: outPath, fullPage: true});
  console.log('Saved screenshot to', outPath);
  await browser.close();
})();
