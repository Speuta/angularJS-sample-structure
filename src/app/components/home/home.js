app.controller('homeCtrl', function($scope, $rootScope, $translate, $timeout) {
    $scope.currentLang = 'fr';
    $scope.toggleLang = function(){
        $scope.currentLang = ($scope.currentLang === 'fr') ? 'en' : 'fr';
        $translate.use($scope.currentLang);
    };
    $scope.launchLoading = function(){
        $rootScope.$broadcast('loadingStart', {
            msg: 'test loader'
        });
        $timeout(function(){
            $rootScope.$broadcast('loadingEnd');
        }, 3000);
    };
});
