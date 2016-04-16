angular.module('app.controllers', [])
  
.controller('tANKERSCtrl', function($scope) {
	
	var items = [
            {
                "productId": 1,
                "imageUrl": "img/image.jpg",
                "productName": "amr water suppliers",
                "itemLocation": "Beeramguda",
                "price": 550,
                "merchantId": 1
            }, 
            {
      "productId": 2,
      "imageUrl": "img/index.jpg",
      "productName": "hmws water suppiers",
      "itemLocation": "Beeramguda",
      "price": 400,
      "merchantId": 1
  },
   {
      "productId": 3,
      "imageUrl": "img/index1.jpg",
      "productName": "Dsnr water suppliers",
      "itemLocation": "Beeramguda",
      "price": 120.0,
      "merchantId": 1
  },
  {
  	 "productId": 4,
      "imageUrl": "img/images1.jpg",
      "productName": "Kothapet water suppliers",
      "itemLocation": "Kothapet",
      "price": 999.0,
      "merchantId": 1

  }
        ];

      
        $scope.tankers = items;
    
        $scope.search = function(items){
        	if($scope.searchText == undefined){
        		return true;
        	}
        	else{
        		if(items.productName.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1 || items.price.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1 ){
        			return true;
        		}
        	}
        	return false;
        }

})

.controller('aMRWATERCtrl', function($scope) {

})
   
.controller('placeForOrderCtrl', function($scope) {

})
         
.controller('loginCtrl', function($scope) {

	

})
   
.controller('pSRWATERCtrl', function($scope) {

})
   
.controller('hMWSWATERCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('orderSuccessCtrl', function($scope) {

})
   
.controller('pageCtrl', function($scope) {

})

 