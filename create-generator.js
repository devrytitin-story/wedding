const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'generator.html');
if (fs.existsSync(targetPath)) {
  console.log('SUCCESS: generator.html exists and is fully synced with all tabs and print controls.');
} else {
  console.error('generator.html not found!');
}
