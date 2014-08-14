angular.module('ionicApp.services', ['ngResource'])
/**
* A simple example service that returns some data.
*/
.factory('SessionsInfo', ['$resource', function($resource) {
	// Might use a resource here that returns a JSON array
	return $resource('sessions/:sessionId.json', {}, {
		query: {method:'GET', params:{sessionId:'sessions'}, isArray:true}
	});
	// return {
		// all: function() {
		// return sessions;
	// },
		// get: function(sessionId) {
			// // Simple index lookup
			// return sessions[sessionId];
		// }
	// }
});
