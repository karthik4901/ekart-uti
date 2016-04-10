angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.tANKERS', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/tANKERS.html',
        controller: 'tANKERSCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aMRWATER'
      2) Using $state.go programatically:
        $state.go('tabsController.aMRWATER');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.aMRWATER', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/aMRWATER.html',
        controller: 'aMRWATERCtrl'
      },
      'tab2': {
        templateUrl: 'templates/aMRWATER.html',
        controller: 'aMRWATERCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.placeForOrder'
      2) Using $state.go programatically:
        $state.go('tabsController.placeForOrder');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.placeForOrder', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/placeForOrder.html',
        controller: 'placeForOrderCtrl'
      },
      'tab2': {
        templateUrl: 'templates/placeForOrder.html',
        controller: 'placeForOrderCtrl'
      },
      'tab3': {
        templateUrl: 'templates/placeForOrder.html',
        controller: 'placeForOrderCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.pSRWATER', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/pSRWATER.html',
        controller: 'pSRWATERCtrl'
      }
    }
  })

  .state('tabsController.hMWSWATER', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/hMWSWATER.html',
        controller: 'hMWSWATERCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.orderSuccess'
      2) Using $state.go programatically:
        $state.go('tabsController.orderSuccess');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
      /page1/tab3/page10
  */
  .state('tabsController.orderSuccess', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/orderSuccess.html',
        controller: 'orderSuccessCtrl'
      },
      'tab2': {
        templateUrl: 'templates/orderSuccess.html',
        controller: 'orderSuccessCtrl'
      },
      'tab3': {
        templateUrl: 'templates/orderSuccess.html',
        controller: 'orderSuccessCtrl'
      }
    }
  })

  .state('page', {
    url: '/page12',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});