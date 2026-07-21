// Capture a full-page screenshot of a running web app for visual checks.
//
//   node scripts/screenshot.mjs [url] [outfile]
//   pnpm screenshot                       # http://localhost:5173 -> screenshot.png
//   pnpm screenshot http://localhost:5173 /tmp/home.png
//
// The dev stack must be up (pnpm dev). Playwright + Chromium are dev deps.
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5173';
const outfile = process.argv[3] ?? 'screenshot.png';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outfile, fullPage: true });
  console.log(`Saved ${outfile} from ${url}`);
} finally {
  await browser.close();
}
