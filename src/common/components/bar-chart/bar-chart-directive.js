angular
  .module('common.bar-chart')
  .directive('barChart', BarChartDirective);

function BarChartDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/bar-chart/bar-chart.html',
    controller: 'BarChartCtrl',
    scope: {
      height: '=height',
      width: '=width',
      data: '=data'
    }
  };
}
