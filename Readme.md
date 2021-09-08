This is a monorepo setup for vue projects using following technologies

- npm workspaces
- vue
- typescript + webpack (no babel)
- mocha (no jest)
- eslint
- vetur



# Structure

```
/
├── apps/                       # application packages / projects
│   ├── hello-app/              # example application
├── libs/                       # library packages / shared code
│   ├── hello-lib/              # exmple library
│   └── world-lib/              # exmple library
├── tools/                      # development tools and scripts
├── .editorconfig               # repo wide file type rules
├── .eslintrc.js                # repo wide eslint rules
├── tsconfig.base.json          # shared tsconfig rules
├── package.json                # package and workspaces configuration
└── vetur.config.js             # vetur extension configuration (workspaces config)
```

# Why no yarn
You can simply use `yarn` instead of `npm` if you want. Just delete the `package-lock.json` and replace `npm` with `yarn` in all scripts.

# Why no lerna
npm workspaces seems to be sufficient. I might try `lerna` in future to see if it would add any overhead to the configuration or not.

# Why no babel and no jest?
Its less configuration.

This setup uses `path` aliases which are defined in a `tsconfig.json` file. The aliases have to be configured across several tools. The least verbose setup that i could find was the combination of `webpack` + `mocha`. The vue cli will pull webpack configuration from the `vue.config.js` which looks like this

```
const TsconfigPathsPlugin =  require('tsconfig-paths-webpack-plugin');
module.exports = {
  configureWebpack: {
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  },
};
```

Since `mocha` tests are also compiled with webpack, there is no additional configuration step.

`jest` on the other hand would require additional configuration for the path aliases inside the `jest.config.js` [see here](https://huafu.github.io/ts-jest/user/config/#paths-mapping)
