import fs from 'fs';
import path from 'path';

const distDir = 'd:/Vishi Mama/dist';
const assetsDir = path.join(distDir, 'assets');

const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));

if (jsFiles.length === 0 || cssFiles.length === 0) {
  console.error("No JS or CSS files found in dist/assets");
  process.exit(1);
}

const jsContent = fs.readFileSync(path.join(assetsDir, jsFiles[0]), 'utf-8');
const cssContent = fs.readFileSync(path.join(assetsDir, cssFiles[0]), 'utf-8');

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>VS</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vishwanath Sharma | Senior Corporate Financial Consultant & Investment Advisor</title>
    <meta name="description" content="Personal website of Vishwanath Sharma, Senior Corporate Financial Consultant. 25+ years senior banking leadership across IndusInd, Kotak, HDFC, ICICI, YES Bank. Specializing in Debt, Equity, Valuation, TEV, Stressed Assets & Insolvency (IBC)." />
    
    <!-- Google Fonts: Playfair Display + Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
    
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#F5F2EB] text-[#38342F] antialiased selection:bg-[#1C1917] selection:text-[#FFFFFF]">
    <div id="root"></div>

    <script>
${jsContent}
    </script>
  </body>
</html>
`;

fs.writeFileSync('d:/Vishi Mama/standalone.html', htmlContent, 'utf-8');
console.log("Successfully bundled standalone.html with script after #root element!");
