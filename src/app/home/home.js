angular
  .module('app.home', [
    'ui.router'
  ]);

angular
  .module('app.home')
  .config(HomeConfig);

function HomeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl',
    data: {
      meta: {
        title: 'Angularplate - Home',
        description: 'An Angular example for use of JavaScript visualization technologies (such as D3).',
        keywords: 'Home, AngularJS, Example',
        canonical: 'Home',
        url: '/'
      }
    }
  });
}
