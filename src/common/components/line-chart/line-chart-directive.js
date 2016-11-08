angular
  .module('common.line-chart')
  .directive('lineChart', LineChartDirective);

function LineChartDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/line-chart/line-chart.html',
    controller: 'LineChartCtrl',
    scope: {
      height: '=height',
      width: '=width',
      data: '=data'
    }
  };
}
