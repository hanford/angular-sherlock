### angular-sherlock

[![NPM][angular-sherlock-icon]][angular-sherlock-url]

angular-sherlock is a directive for angular 1.X that wraps [sherlockjs](http://blog.metamorphium.com/Sherlock/)

[Live Demo!](http://jackhanford.com/angular-sherlock)

#### Usage
```js
// include the module in to your app
angular
  .module('app', [
    require('angular-sherlock')
  ])
```  

```html
// index.html
<div ng-app="app">
  <input type="text" start="startDate" end="startDate" ng-model="date">
</div>
```  
The directive takes in two attributes, a `start` and `end`. Once sherlock finds either, it will populate the value binded as an attribute.  

##### start -> Date  
When sherlock finds a `start` date, it will set it to this variable so you can capture it in your controller

##### end -> Date  
When sherlock finds a `end` date, it will set it to this variable so you can capture it in your controller  

I've also included a angular ready version of the library in `./dist/` You'll just need to make sure your index.html looks something like this

```html

<script src="../sherlock.js"></script>
<script src="../angular.js"></script>
<script src="../ngSherlock.js"></script>

```

[angular-sherlock-icon]: https://nodei.co/npm/angular-sherlock.png?downloads=true
[angular-sherlock-url]: https://npmjs.org/package/angular-sherlock
