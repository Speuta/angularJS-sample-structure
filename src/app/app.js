var app = angular.module("sample-project",
    [
        'ngRoute',
        'pascalprecht.translate',
        'angularTranslateApp',
        'ngOnload',
        'ngDraggable',
        'settings',
        'loader',
    ]
);

app.run(function ($rootScope) {
    $rootScope.config = configData;
    document.title = $rootScope.config.title;
});

var initInjector = angular.injector(["ng"]);
var $http = initInjector.get("$http");
var configData;
var DOMLoaded = false;
$http.get('config.js').then(function(data){
    eval(data.data);
    configData = config;
    config = undefined;
    _manualBootstrap();
});

window.addEventListener("DOMContentLoaded", function(){
    DOMLoaded = true;
    _manualBootstrap();
});

function _manualBootstrap(){
    var isBootstrapped = angular.element(document).injector();
    if(DOMLoaded && configData && (!isBootstrapped)){
        angular.bootstrap(document, ['sample-project']);
    }
}
