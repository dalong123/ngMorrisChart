#ngMorrisChart

ngMorrisChart is a AngularJS module that exposes MorrisJS as a collection of easy to use directives.

MorrisJS documentation can be found at <http://www.oesmith.co.uk/morris.js/>

A working example of ngMorrisChart can be found at <http://dongood.github.io/ngMorrisChart/default.html>

##Using ngMorrisChart

Add a reference to JQuery, Angular, and MorrisJS (order is important)

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.js"></script>
<link rel="stylesheet" href="http://cdn.oesmith.co.uk/morris-0.4.3.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="http://cdn.oesmith.co.uk/morris-0.4.3.min.js"></script>
```

Add a refernce to ngMorrisChart.js (should occur after Angular)

```html
<script type="text/javascript" src="js/ngMorrisChart.js"></script>
````

##Creating Charts

ngMorrisChart exposes two directives.

###morrisDonut
The morrisDonut directive uses a required *data* and optional *colors* arguements.

**Markup**

```html
<div morris-donut data="donutData" colors="donutColors"></div>
```

**Controller**

```javascript
$scope.donutData = [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
];
$scope.donutColors = ['blue', 'yellow', 'green'];
```

You can update *data* programmaticly and the chart will automatically refresh.

The chart fills it's container and will automatically resize itself should the browser window change.

###morrisChart
The morrisChart directive requires the *type*, *data*, and *options* arguements.

Set *type* to line, area, or bar.

The *options* arguement should be set to a JavaScript object as defined by <http://www.oesmith.co.uk/morris.js/>.

* Do not set the *element* option, this is handled for you automatically by the directive.

The *data* argument must follow the format as shown in the MorrisJS documentation.

**Markup**

```html
<div morris-chart type="line" data="lineData" options="lineOptions"></div>
```

**Controller**

```javascript
$scope.lineData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
];
$scope.lineOptions = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    hideHover: true
}
```

You can update *data* programmaticly and the chart will automatically refresh.

The chart fills it's container and will automatically resize itself should the browser window change.
