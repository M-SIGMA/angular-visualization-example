angular
  .module('common.histogram-chart')
  .directive('histogramChart', HistogramChartDirective);

function HistogramChartDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/histogram-chart/histogram-chart.html',
    controller: 'HistogramChartCtrl',
    scope: {
      height: '=height',
      width: '=width',
      data: '=data'
    },
  };
}
