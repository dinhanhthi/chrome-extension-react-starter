# 🦖 chrome-extension-react-starter

An all-in-one starter for React developers that supports workspace (eslint, prettier, vscode settings,...) and **also a playground mode** for quick review of changes.

💡 If you're looking for a starter using TypeScript only (without React), check [this repository](https://github.com/dinhanhthi/chrome-extension-ts-starter)!

## ✨ Tech specs

You can check all specs in `package.json`.

- **Javascript bundler**: [Webpack](https://webpack.js.org/) (for building the extension), [Vite](https://vitejs.dev/) (for the **playground mode\***).
- **React**: [React core](https://reactjs.org/), [React Router DOM](https://reactrouter.com/en/main).
- **Dev**: [ESLint](https://eslint.org/) (with all necessary plugins), [Prettier](https://prettier.io/).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (with autoprefixer, postcss), [SCSS](https://sass-lang.com/) supported, [shadcn/ui](https://ui.shadcn.com/).
- **Utilities**: [lodash](https://lodash.com/), [webextension-polyfill](https://github.com/mozilla/webextension-polyfill), [classnames](https://github.com/JedWatson/classnames).

**What is the playground mode?** Normally, when you make changes to the source codes, you have to reload the extension on the Extensions Manager page. This is annoying if you are just developing the style of a component. It's better if you can see the changes in real time. This is where the playground mode comes into play. We use Webpack to create our main extension bundle (in the `/dist` folder), and we use Vite for the Playground Mode. Read more in the section _Playground mode_.

## Install extension locally (not via Chrome Webstore)

> **For tester**: Unzip `prod-packages/v0.0.1.zip` into a folder and then follow the next step!

Open the extension manager page of the Chromium-based browser > Enable "**Developer mode**" > "**Load unpackaged**" > Select the extension's build folder (eg. `dist/`) or the unzipped folder.

## Demo how it works

> ⚠️ **Warning**: For the purpose of the demo, the extension is only enabled when you browse `https://www.google.com/`. Change this in the `src/static/manifest.json`!

After the installation, go to `https://www.google.com/` to see a welcome panel is added at the bottom right of the page.

By default it says `Hello I'm Chrome Extension React Starter!`. You can open the popup by clicking the extension icon on the header bar to input with your name. After that, the panel changes to say `Hello <your input>!`

The same input field is presented in the option page of the extension.

You can also go to `http://localhost:5173/` when you work with the playground.

## Installation

> 💡 You can use `npm` if you want.

```bash
# first install
yarn

# (use webpack) dev, package is built to dist/
yarn watch

# (use webpack) build a prod version, package is built to dist-prod/
yarn build
# 💡 I've built a script to automatically archive the dist-prod/ folder
# into a .zip file with the name of the current version
# For example, prod-packages/v0.0.1.zip
# You can use this .zip to upload to the Chrome Webstore!

# (use vite) run playground mode, also in watch mode (no visibale built folder)
yarn playground

# interactive upgrade packages
yarn upgrade-interactive --latest
```

## Playground mode

```bash
yarn playground
```

This mode runs a React app that uses the same components as the main app. Please note that in playground mode we cannot use api `browser` from `webextension-polyfill` nor `chrome` from Chrome API. Therefore we need to use 2 different files with names like `XXXBrowser.*` and `XXXPlayground.*` (for example, `helpersBrowser.ts` and `helpersPlayground`). The former is used in extension and the latter in playground mode.

You can test each component (isolatedly from the main app) by adding it to the `src/react-playground/App.tsx` file.

## Files in `styles/`

- `tailwind.scss`: contains 3 tailwind assets. Note that, in `tailwind.config.js`, I use `important: '.dinhanhthi'` to make tailwind to work . This means that, the tailwind classes will only take effect inside the element that contains the class `dinhanhthi`.
- The `content_script.scss` contains custom styles used only for the content script.
- The `global.scss` contains custom styles used for both extension (contentscript, popup, options) and the playground.
- The `option.scss` contains custom styles used only for the option page.
- The `popup.scss` contains custom styles used only for the popup.

## Tips and notes

1. Change the version in both `package.json` and `manifest.json`. The former is for the version of the package, the latter is for the version of the extension. They are usually the same.
