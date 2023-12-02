

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/"), {
            templateUrl: "anasayfa.html"
        })
        .when("/hakkimizda"), {
            templateUrl: "hakkimizda.html"
        })
        .when("/randevu"), {
            
            templateUrl: "randevu.html",
            controller: "denemeCtrl",
            controller: "randevuCtrl"

        })
        .when("/iletisim"), {
            templateUrl: "iletisim.html"
        })
        .when("/aanasayfa"), {
            templateUrl: "aanasayfa.html"
        })
        .when("/index"), {
            templateUrl: "index.html"
        });
});
app.controller("denemeCtrl", function ($scope, $location, $rootScope) {
    $scope.kullaniciadi = "";
    $scope.sifre = "";
    $rootScope.girisvarmi = false;
    $scope.girisyap = function (kadi, sifre) {
        if (kadi == "root" && sifre == "12345") {
            $rootScope.girisvarmi = true;
            $location.path("/randevu");
        }
        else
            alert("giriþ hatalý");
    }
});
app.controller("randevuCtrl", function ($scope, $location, $rootScope) {
    if ($rootScope.girisvarmi == undefined || $rootScope.girisvarmi == false)
        $location.path("/");

});

