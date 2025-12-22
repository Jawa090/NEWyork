const fs = require('fs');
const path = require('path');

// Load redirects from JSON file and localStorage simulation
const loadRedirects = () => {
  const redirectsPath = path.join(__dirname, '../src/data/redirects.json');
  let redirects = [];
  
  if (fs.existsSync(redirectsPath)) {
    const fileContent = fs.readFileSync(redirectsPath, 'utf-8');
    redirects = JSON.parse(fileContent);
  }
  
  return redirects.filter(redirect => redirect.isActive);
};

// Generate Netlify _redirects file
const generateNetlifyRedirects = (redirects) => {
  const redirectsContent = redirects.map(redirect => {
    return `${redirect.fromUrl} ${redirect.toUrl} ${redirect.type}`;
  }).join('\n');
  
  const filePath = path.join(__dirname, '../public/_redirects');
  fs.writeFileSync(filePath, redirectsContent);
  console.log(`Generated ${redirects.length} redirects for Netlify`);
};

// Generate Apache .htaccess file
const generateApacheRedirects = (redirects) => {
  const htaccessContent = [
    'RewriteEngine On',
    '',
    ...redirects.map(redirect => {
      const status = redirect.type === '301' ? 'R=301' : 'R=302';
      return `RewriteRule ^${redirect.fromUrl.replace(/^\//, '').replace(/\/$/, '')}/?$ ${redirect.toUrl} [${status},L]`;
    })
  ].join('\n');
  
  const filePath = path.join(__dirname, '../public/.htaccess');
  fs.writeFileSync(filePath, htaccessContent);
  console.log(`Generated ${redirects.length} redirects for Apache`);
};

// Generate Nginx redirects
const generateNginxRedirects = (redirects) => {
  const nginxContent = redirects.map(redirect => {
    const status = redirect.type === '301' ? '301' : '302';
    return `rewrite ^${redirect.fromUrl}$ ${redirect.toUrl} ${status};`;
  }).join('\n');
  
  const filePath = path.join(__dirname, '../public/nginx-redirects.conf');
  fs.writeFileSync(filePath, nginxContent);
  console.log(`Generated ${redirects.length} redirects for Nginx`);
};

// Main function
const main = () => {
  console.log('Generating redirect files...');
  
  const redirects = loadRedirects();
  
  if (redirects.length === 0) {
    console.log('No active redirects found.');
    return;
  }
  
  // Generate for different server types
  generateNetlifyRedirects(redirects);
  generateApacheRedirects(redirects);
  generateNginxRedirects(redirects);
  
  console.log('Redirect files generated successfully!');
};

main();