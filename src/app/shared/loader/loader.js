angular.module('loader', [])
    .directive('loader', function() {
        return {
            restrict : 'E',
            scope : {},
            controller : function($scope, $rootScope) {
                var _rootListeners = [];
                $scope.show = false;
                $scope.msg = 'Chargement...';

                _rootListeners.push(
                    $rootScope.$on('loadingStart', function(evt, data){
                        if(data){
                            if(data.msg !== undefined){
                                $scope.msg = data.msg;
                            }
                        }
                        $scope.show = true;
                    })
                );
                _rootListeners.push(
                    $rootScope.$on('loadingUpdate', function(evt, data){
                        if($scope.show && data && (data.msg !== undefined)){
                            $scope.msg = data.msg;
                        }
                    })
                );
                _rootListeners.push(
                    $rootScope.$on('loadingEnd', function(){
                        $scope.reset();
                    })
                );

                $scope.reset = function(){
                    $scope.show = false;
                    $scope.msg = 'Chargement...';
                };

                $scope.$on('$destroy', function(){
                    _rootListeners.forEach(function(_rl){
                        _rl();
                    });
                });
            },
            templateUrl : 'app/shared/loader/loader.html'
        }
    });
