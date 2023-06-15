import puppeteer from "puppeteer"


async function data () {

    const browser = await puppeteer.launch({headless:false,
    deafaultviewport :null,

    });
    const page = await browser.newPage()
    await page.goto('https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3Drealme&page=1')
    let i=0
    var e =await page.waitForSelector('#container > div > div._36fx1h._6t1WkM._3HqJxg > div > div:nth-child(2) > div:nth-child(26) > div > div > nav > a._1LKTO3')
    while(e){
        console.log(i)
        await page.click('#container > div > div._36fx1h._6t1WkM._3HqJxg > div > div:nth-child(2) > div:nth-child(26) > div > div > nav > a._1LKTO3',{dealy:5000})
        i++;
      }
    
 console.log(page)
 }
  data()