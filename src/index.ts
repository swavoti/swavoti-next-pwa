import fs from 'fs';
import path from 'path';

export const withPWA = (nextConfig: any = {}) => {
  return {
    ...nextConfig,
    webpack: (config: any, options: any) => {
      const { isServer, dir } = options;

      // Copy the service worker file to the public directory.
      const swSrc = path.join(__dirname, 'sw.js');
      const swDest = path.join(dir, 'public', 'sw.js');
      const publicDir = path.join(dir, 'public');

      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.copyFileSync(swSrc, swDest);


      // Inject the service worker registration script into the client-side build.
      if (!isServer) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();
          const registerSwPath = path.resolve(__dirname, 'register-sw.js');
          
          if (entries['main.js'] && !entries['main.js'].includes(registerSwPath)) {
            entries['main.js'].unshift(registerSwPath);
          }
          return entries;
        };
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};
