(function() {
	'use //strict';

	angular
	  .module('peekaboohApp')
	  .service('peekaboohApiService', peekaboohApiService);//

	//peekaboohApiService.$inject = ['dependencies'];

	function peekaboohApiService() {
		var self = this;
		self.timeTableData = [{
				id:1,
				forClass:'10th Standard',
				numberOfStudents:200
			},
			{
				id:2,
				forClass:'11th Standard',
				numberOfStudents:100
			}];

		
		function getTeachers(){

		}

		function getTimeTables(){
			return self.timeTableData; 
		}

		function getTimeTableById (id) {
			return _.find(self.timeTableData, {'id': id});
		}

		function getStudents () {
			// body...
		}

		return {
			getStudents : getStudents,
			getTeachers : getTeachers,
			getTimeTables: getTimeTables,
			getTimeTableById: getTimeTableById
		}
	}
})();