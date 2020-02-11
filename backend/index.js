const express = require('express');
const App = express();
const path = require('path');
const cors = require('cors');
const puppeteer = require("puppeteer"); 
const port = 4000;

App.use(cors())

App.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
})


App.get('/url', (req, res) => {
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); 
  await page.goto(req.query.site); 

  const pageData = await page.evaluate(() => {
      let sources = [];
    
      document.querySelectorAll(
      'body > script'
    ).forEach(script => {
        if (script.src) {
            sources.push(script.src)
        }
      });
   
      document.querySelectorAll(
      'head > link'
    ).forEach(link => {
        if (link.rel == 'stylesheet') {
            sources.push(link.href)
        }
      });
  
    return {
        sources
    }
  });
  
  await browser.close();
  res.json(pageData.sources)
})();
})



App.listen(port,()=>console.log(`Server on port: ${port}`))