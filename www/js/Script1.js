﻿(function () {
    var app = angular.module('myApp', []);// JavaScript source code
    app.controller('myCtrl', function ($scope){

     
        var tankers = [
            {
                "productId": 1,
                "imageUrl": "/tank 5000 ltr",
                "productName": "Water 5000 ltr",
                "itemLocation": "Beeramguda",
                "price": 120.0,
                "merchantId": 1
            },
  {
      "productId": 2,
      "imageUrl": "/tank 25000 ltr",
      "productName": "Water 25000 ltr",
      "itemLocation": "Beeramguda",
      "price": 1200.0,
      "merchantId": 1
  },
  {
      "productId": 3,
      "imageUrl": "/tank 50000 ltr",
      "productName": "Water 550000 ltr",
      "itemLocation": "Beeramguda",
      "price": 120.0,
      "merchantId": 1
  }
        ];

       
      
        $scope.message = tankers;
    });
        

})();