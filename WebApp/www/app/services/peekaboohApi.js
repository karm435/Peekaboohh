(function() {
	'use //strict';

	angular
	  .module('peekaboohApp')
	  .factory('peekaboohApiService', peekaboohApiService);//

	//peekaboohApiService.$inject = ['dependencies'];

	function peekaboohApiService() {
		//content
		function getTeachers(){

		}

		function getTimeTables(){
			return [{
				id:1,
				forClass:'10th Standard',
				numberOfStudents:200
			},
			{
				id:2,
				forClass:'11th Standard',
				numberOfStudents:100
			}]
		}

		function getTimeTableById (id) {
			// body...
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