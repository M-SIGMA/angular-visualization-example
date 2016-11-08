angular
  .module('app.home')
  .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope) {
  var d3 = getD3Instance();

  function getD3Instance() {
    return angular.isDefined($window.d3) && $window.d3 !== null ? $window.d3 : null;
  }

  $scope.barChartData = d3.csv('/data/Home_Office_Air_Travel_Data_2011.csv');
  $scope.histogramChartData = d3.csv('/data/2015-04-23-March-spend-over-500-v1.csv');
  $scope.barChartData = d3.csv('/data/energy_generation_wc_140114.csv');
}
