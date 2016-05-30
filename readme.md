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

##### start -> Date  
When sherlock finds a `start` date, it will set it to this variable so you can capture it in your controller

##### end -> Date  
When sherlock finds a `end` date, it will set it to this variable so you can capture it in your controller


#### Building
``npm i && npm run build``  
``cd example/``  
``open index.html``


[angular-sherlock-icon]: https://nodei.co/npm/angular-sherlock.png?downloads=true
[angular-sherlock-url]: https://npmjs.org/package/angular-sherlock
