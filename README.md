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

This library is provided free of charge and can be used in any project.

The name and code of this library are a trademark of **Swavoti South Africa (Pty) Ltd**.

- You **are permitted** to use this library in your projects, commercial or otherwise.
- You **are not permitted** to modify, distribute, or sublicense the original code.

Only Swavoti South Africa (Pty) Ltd is authorized to maintain and publish updates to this library.
