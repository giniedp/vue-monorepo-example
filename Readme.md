This is a monorepo setup for vue projects using following technologies

- npm
- lerna
- vue
- typescript + webpack (no babel)
- mocha (no jest)
- eslint
- vetur



# Structure

```
/
├── apps/                       # application packages / projects
│   └── hello-app/              # example vue application: depends on @libs/hello-lib
├── libs/                       # library packages / shared code
│   ├── hello-lib/              # exmple vue library, depends on @libs/world-lib
│   ├── world-lib/              # exmple vue library, depends on @libs/ts-lib
│   └── ts-lib/                 # exmple ts library
├── tools/                      # development tools and scripts
│   └── types/                  # custom typescript types
│       └── vue-shims/          # d.ts shims for vue projects
├── .editorconfig               # repo wide file type rules
├── package.json                # package and workspaces configuration
├── lerna.json                  # lerna configuration
└── vetur.config.js             # vetur extension configuration (workspaces config)
```

# Getting started

**TL:DR**

```
npm install
npm run bootstrap
npm run hello-app:build:deep
```


After checking out the projct, run `npm install`. This will install `lerna` in the workspace root and make it available to the `scripts` inside `package.json`.

Take a look at the `scripts` inside `package.json`. Some scripts are simple aliases for `lerna` commands. 

```
npm run bootstrap
```
is an alias for `lerna bootstrap`

```
npm run clean
```
is an alias for `lerna clean`

Some however are shortcuts for more complex `lerna` commands

```
npm run hello-app:build
```
will build the `@apps/hello-app` package, but it requires all dependencies to have been pre-built

```
npm run hello-app:build:deep
```
will build all dependencies of the `@apps/hello-app` package and then the package itself
