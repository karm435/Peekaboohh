(function() {
	'use strict';

	angular
	  .module('peekaboohApp')
	  .controller('timeTablesCtrl', ['$state','peekaboohApiService', timeTablesCtrl]);

	function timeTablesCtrl($state,peekaboohApiService) {
		//content
		var vm = this;

		var timetables = peekaboohApiService.getTimeTables();
		console.log(timetables);

		vm.timetables = timetables;
	}
})();