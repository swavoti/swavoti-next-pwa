# @swavoti/next-pwa

[![npm version](https://badge.fury.io/js/%40swavoti%2Fnext-pwa.svg)](https://badge.fury.io/js/%40swavoti%2Fnext-pwa)

Turn your Next.js application into a high-performance Progressive Web App (PWA) with a single line of code. This library automatically configures a service worker to provide offline capabilities, asset caching, and a native-like experience for your users.

## Features

- **Zero-Configuration PWA:** Simply wrap your Next.js config and get a fully functional PWA.
- **Offline First:** Your application will load from the cache first, making it available even when the user is offline.
- **Advanced Caching Strategies:**
    - **Network-First for Pages:** Ensures users always get the latest content when online, with a fallback to the cache.
    - **Cache-First for Assets:** Images, videos, scripts, and styles are served instantly from the cache for blazingly fast load times.
- **Automatic Service Worker:** The service worker is automatically generated and registered, with no extra setup required.
- **Seamless Integration:** Works with your existing Next.js project without requiring any changes to your application code.

## Installation

Install the library using npm:

```bash
npm install @swavoti/next-pwa
```

## Usage

To enable PWA capabilities in your Next.js project, simply wrap your `next.config.js` with the `withPWA` function.

```javascript
// next.config.js
const { withPWA } = require('@swavoti/next-pwa');

const nextConfig = {
  // Your existing Next.js configuration
};

module.exports = withPWA(nextConfig);
```

**Important Note for Next.js 16+ Users:**

As of Next.js 16, the default build engine is **Turbopack**. This library relies on modifying the `webpack` configuration, so you **must** force Next.js to use `webpack`.

Update the `build` script in your `package.json` like this:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start"
  }
}
```

And that's it! The next time you build your project, `@swavoti/next-pwa` will automatically add a service worker to your application.

## How It Works

This library extends your Next.js build process to do two things:

1.  **Copies the Service Worker:** It copies a pre-configured service worker (`sw.js`) into your project's `public` directory.
2.  **Injects the Registration Script:** It injects a script into your application's client-side bundle to register the service worker in the browser.

The result is a seamless PWA experience with no manual configuration needed.

## License

This library is open-source and free to use.

- You **are permitted** to use this library in your projects, commercial or otherwise.
- You **are encouraged** to modify, edit, or improve the code.
- You can contribute to this package to make it better for everyone.

## Contributing

We welcome contributions from the community! If you have ideas for new features or improvements (like better caching strategies or modern PWA features), feel free to fork the repository and submit a pull request.

**Git Repository:** [https://github.com/swavoti/swavoti-next-pwa]


## Modern PWA Features

### Background Sync
This package now includes boilerplate support for **Background Sync**. This allows your application to defer actions until the user has stable connectivity.

To use it, register a sync tag in your application:
```javascript
navigator.serviceWorker.ready.then((registration) => {
  return registration.sync.register('sync-data');
});
```
The service worker is configured to listen for the `sync-data` tag.
