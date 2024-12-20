import puppeteer from "puppeteer"
import { exec } from "node:child_process"
import { promisify } from "node:util"

// find path to crhomium
const { stdout: chromiumPath } = await promisify(exec)("which chromium")

const browser = await puppeteer.launch({
  headless: false,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  executablePath: chromiumPath.trim()
});
const page = await browser.newPage()

// go to replit's front page
await page.goto("https://1devis.cool", {
  waitUntil: "networkidle2"
})

