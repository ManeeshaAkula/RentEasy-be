import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

export const htmlToPdfFile = async (html: string, outDir: string, fileName: string) => {
  fs.mkdirSync(outDir, { recursive: true });
  const filePath = path.join(outDir, fileName);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
    });
    return filePath;
  } finally {
    await browser.close();
  }
};