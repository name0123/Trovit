angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('AddsCtrl', function($scope, $http) {
  
  $http.get('http://api.trovit.com/v2/homes/ads?country=es&what=barcelona',
	    {headers:{"X-Client-Id":"udlud5coydqmdb7eksx97gz65gfoovsw"}}
  ).then(function(resp) {
    console.log('Success', resp);
    console.log(resp.data);
    $scope.adds = resp.data.ads;
   
    
    
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  }) 
  
})
.controller('AddCtrl', function ($scope, $http){
  //http://rd.trovit.com/country.es/vertical.homes/iuid.14590http-2956a884c5d87b7/id.71j81G7A1dy/what_d.barcelona/type.1/origin.50/section.1/section_type.1/pos.1/fna.1/tracking.i44FAA/page.1/
  
})
;
