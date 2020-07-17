angular.module('ngOnload', [])
    .directive('ngOnload', function() {
        return {
            restrict: "A",
            scope: {
                callback: "&ngOnload"
            },
            link: function(scope, element) {
                element.on("load", function(event){
                    scope.callback({ event: event })
                });
            }
        };
    });