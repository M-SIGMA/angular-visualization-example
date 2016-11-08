angular
  .module('common.site-footer')
  .directive('siteFooter', SiteFooterDirective);

function SiteFooterDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/site-footer/site-footer.html',
    controller: 'SiteFooterCtrl'
  };
}
