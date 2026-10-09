import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const distDir = path.join(rootDir, 'dist');
const htmlPath = path.join(distDir, 'index.html');
const outputPath = path.join(rootDir, 'standalone.html');

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found! Run npm run build first.');
  process.exit(1);
}

let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Find all css files in dist/assets
const assetsDir = path.join(distDir, 'assets');
const files = fs.readdirSync(assetsDir);

let cssContent = '';
let jsContent = '';

for (const file of files) {
  const filePath = path.join(assetsDir, file);
  if (file.endsWith('.css')) {
    cssContent += fs.readFileSync(filePath, 'utf-8') + '\n';
  } else if (file.endsWith('.js')) {
    jsContent += fs.readFileSync(filePath, 'utf-8') + '\n';
  }
}

// Remove original script & link tags referencing assets/
htmlContent = htmlContent.replace(/<link[^>]*href="[^"]*assets\/[^"]*"[^>]*>/g, '');
htmlContent = htmlContent.replace(/<script[^>]*src="[^"]*assets\/[^"]*"[^>]*><\/script>/g, '');

// Inject CSS into head
const styleTag = `<style>\n${cssContent}\n</style>`;
htmlContent = htmlContent.replace('</head>', `${styleTag}\n</head>`);

// Inject JS into body AFTER root div
const scriptTag = `<script>\n${jsContent}\n</script>`;
htmlContent = htmlContent.replace('</body>', `${scriptTag}\n</body>`);

fs.writeFileSync(outputPath, htmlContent, 'utf-8');
console.log(`Successfully generated standalone.html (${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB)`);
