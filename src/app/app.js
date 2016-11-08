angular
  .module('app', [
    // Angular modules
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngAnimate',

    // Common modules
    'common.site-footer',
    'common.site-header',
    'common.bar-chart',
    'common.histogram-chart',
    'common.line-chart',

    // App specific modules
    'app.home'
  ]);

angular
  .module('app')
  .config(AppConfig)
  .run(AppRun)
  .constant('ngAppSettings', AppSettings());

function AppConfig($compileProvider, $logProvider, ngAppSettings) {
  $logProvider.debugEnabled(ngAppSettings.DEBUG_MODE);
  $compileProvider.debugInfoEnabled(ngAppSettings.DEBUG_MODE);
}


// Handle routing errors and success events
function AppRun() {

}

// Register app settings/variables in AngularJS as constant
function AppSettings() {
  // Import environmental variables if present
  if (angular.isDefined(window.__env)) {
    Object.freeze(window.__env);
    if (angular.isDefined(window.__env.app)) {
      return angular.copy(window.__env.app);
    } else {
      console.error('No environment provided, make sure to include env.js first');
    }
  }
}
