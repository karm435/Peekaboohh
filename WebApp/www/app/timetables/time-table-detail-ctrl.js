(function() {
	'use strict';

	angular
	  .module('peekaboohApp')
	  .controller('timeTableDetailsCtrl', ['$stateParams', timeTableDetailsCtrl]);

	//timeTableDetailsController.$inject = ['$stateParams'];

	function timeTableDetailsCtrl($stateParams) {
		//content
		var vm = this;
		console.log($stateParams);
	}
})();