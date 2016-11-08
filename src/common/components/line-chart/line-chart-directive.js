angular
  .module('common.line-chart')
  .directive('lineChart', LineChartDirective);

function LineChartDirective($parse, $window) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'components/line-chart/line-chart.html',
    controller: 'LineChartCtrl',
    scope: {
      height: '=height',
      width: '=width',
      data: '=data'
    },
    link: function (scope, elem, attrs) {
      var exp = $parse(attrs.data);

      var chartData = exp(scope);
      var padding = 20;
      var pathClass = 'path';
      var xAxisGen; // Generator for x axis
      var yAxisGen; // Generator for y axis
      var xData;
      var yData;
      var lineFun;

      var d3 = getD3Instance();
      var rawSvg = elem.find('svg');
      var svg = d3.select(rawSvg[0]);

      function getD3Instance() {
        return angular.isDefined($window.d3) && $window.d3 !== null ? $window.d3 : null;
      }

      function mutateDataToParseable() {
        // TODO: IMPLEMENT
        // STUB FUNCTION
        // FUNCTION SHOULD TAKE VALUES FROM CHART DATA AND MUTATE THE DATA SO THAT X AND Y DATA FOR GRAPH CAN BE USED
      }

      function setChartParameters() {
        var xScale;
        var yScale;

        xScale = d3.scale
          .linear() // Define graph as having a linear scale
          .domain([chartData[0].xData, chartData[chartData.length - 1].xData]) // Define data set
          .range([padding + 5, rawSvg.attr('width') - padding]); // Define range of data set

        yScale = d3.scale
          .linear() // Define graph as having a linear scale
          .domain([0, d3.max(chartData, function (d) { // Define data set
            return d.yData;
          })])
          .range([rawSvg.attr('height') - padding, 0]); // Define range of data set

        xAxisGen = d3.svg
          .axis() // Define property as an axis
          .scale(xScale) // Apply scaling to axis
          .orient('bottom') // Define axis orientation
          .ticks(chartData.length - 1);

        yAxisGen = d3.svg
          .axis() // Define property as an axis
          .scale(yScale) // Apply scaling to axis
          .orient('left') // Define axis orientation
          .ticks(5);

        lineFun = d3.svg.line()
          .x(function (d) {
            return xScale(d.xData);
          })
          .y(function (d) {
            return yScale(d.yData);
          })
          .interpolate('basis');
      }

      function drawChart() {
        setChartParameters();

        // Draw X Axis
        svg.append('svg:g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,180)')
          .call(xAxisGen);

        // Draw Y Axis
        svg.append('svg:g')
          .attr('class', 'y axis')
          .attr('transform', 'translate(20,0)')
          .call(yAxisGen);

        // Draw Line Path
        svg.append('svg:path')
          .attr({
            d: lineFun(chartData),
            'stroke': 'blue',
            'stroke-width': 2,
            'fill': 'none',
            'class': pathClass
          });
      }

      function redrawChart() {

        setChartParameters();

        // Re-draw X Axis
        svg.selectAll('g.x.axis').call(xAxisGen);

        // Re-draw Y Axis
        svg.selectAll('g.y.axis').call(yAxisGen);

        // Re-draw Line Path
        svg.selectAll('.' + pathClass)
          .attr({
            d: lineFun(chartData)
          });
      }

      scope.$watchCollection(exp, function (newVal, oldVal) {
        chartData = newVal;
        redrawChart();
      });

      mutateDataToParseable();
      drawChart();
    }
  };
}
