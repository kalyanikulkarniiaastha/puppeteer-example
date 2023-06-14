import puppeteer from "puppeteer"


async function data () {

const browser = await puppeteer.launch({headless:false,
  deafaultviewport :null,

});
const page = await browser.newPage()
await page.goto("https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3Drealme")
    
const list =await page.evaluate(async() =>{
  const items= document.querySelectorAll("div[data-id]")
   const list = Array.from(items).map(item =>{
    const productname=item.querySelector('div._4rR01T').innerText
    const description=item.querySelector("div.fMghEO").innerText
    const ratings=item.querySelector("div._3LWZlK").innerText
    
      
      return {productname,description,ratings}

  })
return list
   
})
// return productdata
console.log(list)
  
}

data()