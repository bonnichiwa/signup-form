var app = angular.module('formApp', []);

app.directive('optIn', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="main">' +
              '<div ng-transclude></div>' +
              '<form name="acme-form">' + 
              '<input type="text" placeholder="First name"><br>' + 
              '<input type="text" placeholder="Last name"><br>' +
              '<input type="email" placeholder="E-mail"><br>' + 
              '<input type="submit" value="Give us yr infoz!">' + 
              '</form>' +
              '</div>',
    replace: true
  }

});

