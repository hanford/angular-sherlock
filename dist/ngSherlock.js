angular
  .module('ngSherlockModule', [])
  .directive('ngSherlock', ngSherlock)

function ngSherlock () {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: false,
    link: link
  }
}

function link (scope, element, attrs, controller) {
  if (attrs.controllerAs !== null) {
    scope = scope[attrs.controllerAs]
  }

  function sherlockNParse (value) {
    var parsed = Sherlock.parse(value)

    if (parsed.startDate) {
      scope[attrs.start] = parsed.startDate 
    }

    if (parsed.endDate) {
      scope[attrs.end] = parsed.endDate
    }
  }

  controller.$parsers.push(sherlockNParse)
}
