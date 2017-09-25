angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, ApiService, $ionicSlideBoxDelegate, $ionicLoading) {
	//$scope.homeIsLoaded = false;
	$ionicLoading.show();

	ApiService.getHomeCarousel().then(function(result){
		$scope.slides = result.data;
		setTimeout(function() {
			$ionicSlideBoxDelegate.slide(0);
			$ionicSlideBoxDelegate.update();
			$scope.$apply();
		});	

	  	$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

  	$scope.slideHasChanged = function(index) {

  	}
})

.controller('MenuCtrl', function($scope, ApiService, $ionicLoading) {

})

.controller('UrgentMessagesCtrl', function($scope, ApiService, $ionicLoading, $state) {
	$ionicLoading.show();

	ApiService.getAnnouncements().then(function(result){
		$scope.announcements = result.data;
		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});	

  	$scope.openAnnouncement = function(sid) {
  		$state.go('single-urgent-message', {id: sid})
  	}
})

.controller('SingleUrgentMessageCtrl', function($scope, ApiService, $ionicLoading, $stateParams) {
	$ionicLoading.show();

	ApiService.getAnnouncements().then(function(result){
		
		angular.forEach(result.data, function(obj){
			if($stateParams.id == obj.id) {
				$scope.message = obj;
			}
		});

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});
})

.controller('ContactCtrl', function($scope, ApiService, $ionicLoading, $cordovaGeolocation) {
	$ionicLoading.show();

	ApiService.getContactInfo().then(function(result){
		
		$scope.contacts = result.data;

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

  	// googlemap
  	var options = {timeout: 10000, enableHighAccuracy: true};
  	var latLng = new google.maps.LatLng(22.242265,114.167179);

  	var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

   $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions); 

      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });      

      var infoWindow = new google.maps.InfoWindow({
          content: "Canadian International School of Hong Kong"
      });

      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });   
})

.controller('NewsCtrl', function($scope, ApiService, $ionicLoading, $state) {
  	$scope.openFlashMenu = function(est) { 
  		$state.go(est);
  	}
})

.controller('FlashCtrl', function($scope, ApiService, $ionicLoading, $state) {
	$ionicLoading.show();
	$scope.groups = [];

	ApiService.getAllFlash().then(function(result){ 
		var ctr = 0;

		angular.forEach(result.data, function(obj){
			$scope.groups[ctr] = {
				name: obj.sending_date,
				items: []
			};

			angular.forEach(obj.items, function(iobj){ 
				$scope.groups[ctr].items.push({
					nid : iobj.nid,
					title : iobj.title
				});
			});

			ctr+=1;
		});

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };  	

  	$scope.openFlashMenu = function(est) { console.log(est);
  		$state.go(est);
  	}
})

.controller('WhatsGoingOnCtrl', function($scope, ApiService, $ionicLoading, $state) {
	$ionicLoading.show();

	ApiService.getAllNews().then(function(result){
		$scope.news = result.data;

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

  	$scope.openWhatsGoing = function(enid) {
  		$state.go('news-single', {id : enid});
  	}
})

.controller('SocialMediaCtrl', function($scope, ApiService, $ionicLoading) {
	$ionicLoading.show();

	ApiService.getSocialMedia().then(function(result){
		$scope.socialmedia = result.data.markup;

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

	$scope.exLink = function (link){
	    var url = link.href;
	    window.open(encodeURI(url), '_system', 'location=yes');
	};    	
})

.controller('SchoolInfoCtrl', function($scope, ApiService, $ionicLoading) {
	$ionicLoading.show();
	$scope.groups = [];

	ApiService.getSchoolInfo().then(function(result){ 
		var ctr = 0;

		angular.forEach(result.data, function(obj){
			$scope.groups[ctr] = {
				name: obj.term_name,
				items: []
			};

			angular.forEach(obj.nodes, function(iobj){ 
				$scope.groups[ctr].items.push({
					nid : iobj.nid,
					title : iobj.title,			
					pdf : iobj.pdf		
				});
			});

			ctr+=1;
		});

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }; 

	$scope.exLink = function (link){
	   var ref = window.open(link, '_system', 'location=yes');
	};   
})

.controller('NewsSingleCtrl', function($scope, ApiService, $ionicLoading, $http, AppConfig, $stateParams) {
	$ionicLoading.show();

	$http.get(AppConfig.URL + '/api/node/news/'+$stateParams.id).then(function(result){
		if(result.data) {
			$scope.single = result.data[0];
		}
		else {
			$scope.single = [];
		}

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

	$scope.exLink = function (link){
	    var url = link.href;
	    window.open(encodeURI(url), '_system', 'location=yes');
	};  	
})

.controller('SingleFlashCtrl', function($scope, ApiService, $ionicLoading, $http, AppConfig, $stateParams) {
	$ionicLoading.show();

	$http.get(AppConfig.URL + '/api/node/flash/'+$stateParams.id).then(function(result){ console.log(result);
		if(result.data) {
			$scope.single = result.data[0];
		}
		else {
			$scope.single = [];
		}

		$ionicLoading.hide();
	}).catch(function(error) {
      console.log(error.statusText);
  	});

	$scope.exLink = function (link){ console.log(link);
	    var url = link.href;
	    window.open(encodeURI(url), '_system', 'location=yes');
	};  	
})

.filter('externalLinks', function() {
    return function(text) { 
        //return String(text).replace(/href=/gm, "class=\"ex-link\" href=");
        //return String(text).replace(/href=/gm, "ng-click=\"exLink()\" href=");
        //
        // NOTE:
        // can't use ng-click as it is not in Angular Land as $sce and ng-bind-html
        // ALSO - must do filters in this order 'content | externalLinks | to_trusted'
        //        so this string stays in content
        return String(text).replace(/href=/gm, "onclick=\"angular.element(this).scope().exLink(this);return false\" href=");
   }
 })

 .filter('to_trusted', ['$sce', function($sce){
     return function(text) {
         return $sce.trustAsHtml(text);
     };
 }]);