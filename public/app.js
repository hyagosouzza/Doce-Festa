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

    var app = angular.module("app", ["firebase", "ngMask"]);

    app.controller("MyCtrl", ["$scope", "$firebaseArray",
        function ($scope, $firebaseArray) {

            $scope.maskPhone = "";

            var db = firebase.firestore();
            $scope.produtos = [];
            $scope.load = false;
            db.collection("Produtos")
                .onSnapshot(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        const dataProduto = doc.data()
                        dataProduto.id = doc.id;
                        $scope.produtos.push(dataProduto);
                    });
                    $scope.load = true;
                });

            $scope.marcas = [];
            db.collection("Marcas")
                .onSnapshot(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        const dataMarca = doc.data()
                        dataMarca.id = doc.id;
                        $scope.marcas.push(dataMarca);
                    });
                });

            $scope.temas = [];
            db.collection("Temas")
                .onSnapshot(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        const dataTema = doc.data()
                        dataTema.id = doc.id;
                        $scope.temas.push(dataTema);
                    });
                });

            $scope.filtrarTag = function (tag) {
                $scope.tag = tag;
            }


            $scope.filtrarMarca = function (marca) {
                $scope.marca = marca;
            }

            $scope.filtrarProd = function (prod) {
                $scope.prod = prod;
            }

            var refMarca = firebase.database().ref();

            var objMarca = $firebaseArray(refMarca);

        }
    ]);

    app.directive('menuBar', function () {
        return {
            templateUrl: './diretivas/menubar.html'
        };
    });
    app.directive('emailModal', function () {
        return {
            templateUrl: './diretivas/emailmodal.html'
        };
    });
    app.directive('rodape', function () {
        return {
            templateUrl: './diretivas/rodape.html'
        };
    });

}());