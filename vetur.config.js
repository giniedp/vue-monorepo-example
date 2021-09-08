// https://vuejs.github.io/vetur/guide/setup.html#advanced

module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    'apps/hello-app',
    'libs/hello-lib',
    'libs/world-lib'
  ]
}
