angular
  .module('common.site-header')
  .directive('siteHeader', SiteHeaderDirective);

function SiteHeaderDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/site-header/site-header.html',
    controller: 'SiteHeaderCtrl'
  };
}
