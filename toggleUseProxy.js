const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, './config/config.js');
const newValue = process.argv[2]; // 'true' or 'false'

if (newValue !== 'true' && newValue !== 'false') {
  console.error('Usage: node toggleUseProxy.js true|false');
  process.exit(1);
}

fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Failed to read config.js:', err);
    return;
  }

  const regex = /(USE_PROXY:\s*).*,?/;

  if (!regex.test(data)) {
    console.error('USE_PROXY setting line not found or unexpected format.');
    return;
  }

  const replacement = `${newValue},`;
  const newData = data.replace(regex, `$1${replacement}`);

  fs.writeFile(configPath, newData, 'utf8', err => {
    if (err) {
      console.error('Failed to write config.js:', err);
    } else {
      console.log(`Successfully updated USE_PROXY to ${newValue}`);
    }
  });
});
