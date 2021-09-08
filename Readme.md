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
│   └── hello-app/              # example application
├── libs/                       # library packages / shared code
│   ├── hello-lib/              # exmple library
│   └── world-lib/              # exmple library
├── tools/                      # development tools and scripts
├── .editorconfig               # repo wide file type rules
├── tsconfig.base.json          # shared tsconfig rules
├── package.json                # package and workspaces configuration
└── vetur.config.js             # vetur extension configuration (workspaces config)
```
