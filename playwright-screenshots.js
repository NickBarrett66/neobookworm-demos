const { chromium } = require("playwright");

(async () => {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: node playwright-screenshots.js "https://example.com/"');
    process.exit(1);
  }

  const widths = [375, 390, 412];
  const labels = ["iphone-se", "iphone-14", "pixel-7"];

  const browser = await chromium.launch();
  try {
    for (let i = 0; i < widths.length; i++) {
      const page = await browser.newPage();
      await page.setViewportSize({ width: widths[i], height: 812 });
      await page.goto(target, { waitUntil: "networkidle" });
      await page.screenshot({
        path: `mobile-${widths[i]}-${labels[i]}.png`,
        fullPage: true,
      });
      await page.close();
    }
  } finally {
    await browser.close();
  }
})();
