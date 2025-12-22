import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

export function seoManagerPlugin(): Plugin {
  return {
    name: 'seo-manager',
    configureServer(server) {
      server.middlewares.use('/api/save-seo', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          
          req.on('end', async () => {
            try {
              const { path: pagePath, seoData } = JSON.parse(body);
              
              // Read existing SEO data
              const seoFilePath = path.resolve(process.cwd(), 'src/data/seo-data.json');
              let existingData: Record<string, any> = {};
              
              if (fs.existsSync(seoFilePath)) {
                const fileContent = fs.readFileSync(seoFilePath, 'utf-8');
                existingData = JSON.parse(fileContent);
              }
              
              // Update with new data
              existingData[pagePath] = seoData;
              
              // Write back to file
              fs.writeFileSync(seoFilePath, JSON.stringify(existingData, null, 2));
              
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error('Error saving SEO data:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({ 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
              }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}