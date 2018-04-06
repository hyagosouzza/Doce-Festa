(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDVBEzqjKMUj-3cYynIFmKmqxb9BUcs8Cc",
        authDomain: "doce-e-festa.firebaseapp.com",
        databaseURL: "https://doce-e-festa.firebaseio.com",
        projectId: "doce-e-festa",
        storageBucket: "doce-e-festa.appspot.com",
        messagingSenderId: "497695728329"
    };
    firebase.initializeApp(config);


    var app = angular.module("app", ["ngRoute", "firebase"]);

    app.controller("MyCtrl", ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {

            var db = firebase.firestore();

            $scope.list = [];
            $scope.load = false;
            db.collection("Produtos")
                .onSnapshot(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        const data = doc.data()
                        data.id = doc.id;
                        $scope.list.push(data);
                    });
                    $scope.load = true;
                });

            $scope.mr = [];
            db.collection("Marcas")
                .onSnapshot(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        const data = doc.data()
                        data.id = doc.id;
                        $scope.mr.push(data);
                    });
                });


            $scope.filtrarMarca = function (marca) {
                $scope.marca = marca;
            }

            var refMarca = firebase.database().ref();

            var objMarca = $firebaseArray(refMarca);

        }
    ]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/balas", {
                templateUrl: "./balas.html"
            })
            .when("/chocolates", {
                templateUrl: "./chocolates.html"
            })
            .when("/jujubas", {
                templateUrl: "./jujubas.html"
            })
            .when("/amendoins", {
                templateUrl: "./amendoins.html"
            })
            .when("/add", {
                templateUrl: "./add.html"
            })
            .otherwise({
                templateUrl: "./geral.html"
            });
        $locationProvider.html5Mode(true);
    });

}());