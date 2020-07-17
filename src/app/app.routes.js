app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
}]);
