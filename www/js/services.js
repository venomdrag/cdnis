angular.module('starter.services', [])

.constant('AppConfig', {
   URL : 'http://sing.thinkugli.com/cdnis',
   PORT : 80,
   API : 'http://sing.thinkugli.com/cdnis/cdnis/'
})

.factory('ApiService', function(AppConfig, $http, $q) {
	var announcements = [];
	var schoolinfo = [];
	var contactinfo = [];
	var socialmedia = [];
	var flash = [];

	return {
		getHomeCarousel : function() {
			return $http.get(AppConfig.API + 'carousel'); 
		},
		getAnnouncements : function() {
			announcements = $http.get(AppConfig.API + 'announcement'); 
			return announcements;
		},
		getPreloadedAnnouncements() {
			return announcements;
		},
		getSchoolInfo : function() {
			schoolinfo = $http.get(AppConfig.API + 'school_info'); 
			return schoolinfo;
		},
		getPreloadedSchoolInfo() {
			return schoolinfo; 
		},
		getContactInfo() {
			contactinfo = $http.get(AppConfig.URL + '/api/contact/all'); 
			return contactinfo;
		},
		getSocialMedia() {
			socialmedia = $http.get(AppConfig.API + 'social_media'); 
			return socialmedia;
		},
		getAllNews() {
			return $http.get(AppConfig.URL + '/api/news/all'); 
		},
		getAllFlash() {
			flash = $http.get(AppConfig.API + 'news_flash'); 
			return flash;			
		}
	}
});