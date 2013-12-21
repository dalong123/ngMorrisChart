var myApp = angular.module('myApp', ['ngMorrisChart']);
myApp.controller('defaultController',
    function ($scope) {
        var donutData = function() {
            return [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        }
        // line, area, bar
        var chartOptions = function(hideGrid) {
            var chart = {
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                hideHover: true
            }
            if(hideGrid) {
                chart.axes = false;
                chart.grid = false;            }
            return chart;
        }
        var  data = function() {
            return [
                { y: '2006', a: 100, b: 90 },
                { y: '2007', a: 75,  b: 65 },
                { y: '2008', a: 50,  b: 40 },
                { y: '2009', a: 75,  b: 65 },
                { y: '2010', a: 50,  b: 40 },
                { y: '2011', a: 75,  b: 65 },
                { y: '2012', a: 100, b: 90 }
            ];
        }
        var dataAlt = function(){
            return [
                { y: '2000', a: 50, b: 90 },
                { y: '2001', a: 75,  b: 65 },
                { y: '2002', a: 100,  b: 40 },
                { y: '2003', a: 75,  b: 65 },
                { y: '2004', a: 100,  b: 40 },
                { y: '2005', a: 75,  b: 65 },
                { y: '2006', a: 50, b: 90 }
            ]
        }

        $scope.donutAData = new donutData();
        $scope.donutBData = new donutData();
        $scope.donutBColors = ['blue', 'yellow', 'green'];
        $scope.donutFormatter = function(val, data) {
            return '%' + val;
        }
        $scope.setDonutData = function() {
            $scope.donutAData = [
                {label: "Internet Explorer", value: 8},
                {label: "Chrome", value: 82},
                {label: "Firefox", value: 10}
            ];
        }


        $scope.lineAOptions = new chartOptions(true);
        $scope.lineBOptions = new chartOptions();
        $scope.lineAData = new data();
        $scope.lineBData = new data();

        $scope.areaAOptions = new chartOptions(true);
        $scope.areaBOptions = new chartOptions();
        $scope.areaAData = new data();
        $scope.areaBData = new data();

        $scope.barAOptions = new chartOptions(true);
        $scope.barBOptions = new chartOptions();
        $scope.barAData = new data();
        $scope.barBData = new data();

        $scope.setLineData = function() {
            //$scope.lineData = new dataAlt();
            $scope.lineAOptions.data = new dataAlt();
        }
        $scope.setAreaData = function() {
            //$scope.areaData = new dataAlt();
            $scope.areaAOptions.data = new dataAlt();
        }
        $scope.setBarData = function() {
            //$scope.barData = new dataAlt();
            $scope.barAOptions.data = new dataAlt();
        }

    }
);
