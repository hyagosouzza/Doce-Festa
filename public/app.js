(function () {
    var app = angular.module("app", ["ngMask"]); app.controller("MyCtrl", ["$scope", function ($scope) {
        Papa.parse('csv/marca.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log(results);
                $scope.marcas = results.data;
            }
        });
        Papa.parse('csv/temas.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log(results);
                $scope.temas = results.data;
            }
        });
        Papa.parse('csv/produtos.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log(results);
                $scope.produtos = results.data;
            }
        });
        $scope.maskPhone = ""; $scope.filtrarTag = function (tag) { $scope.tag = tag; }
        $scope.filtrarMarca = function (marca) { $scope.marca = marca; }
        $scope.filtrarProd = function (prod) { $scope.prod = prod; }

    }]); app.directive('menuBar', function () { return { templateUrl: './diretivas/menubar.html' }; }); app.directive('emailModal', function () { return { templateUrl: './diretivas/emailmodal.html' }; }); app.directive('rodape', function () { return { templateUrl: './diretivas/rodape.html' }; });
}());