(function() {
	'use strict';

	angular
	  .module('peekaboohApp')
	  .controller('timeTablesCtrl', timeTablesCtrl);

	timeTablesCtrl.$inject = ['peekaboohApi'];

	function timeTablesCtrl(peekaboohApi) {
		//content
		var vm = this;

		var timetables = peekaboohApi.getTimeTables();
		console.log(timetables);
	}
})();