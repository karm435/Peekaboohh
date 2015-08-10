(function() {
    'use strict';

    angular
        .module('peekaboohApp')
        .controller('timeTableDetailsCtrl', ['$stateParams', 'peekaboohApiService', timeTableDetailsCtrl]);

    //timeTableDetailsController.$inject = ['$stateParams'];

    function timeTableDetailsCtrl($stateParams, peekaboohApiService) {
        //content
        var vm = this;
        vm.timeTableId = Number($stateParams.id);

        var timetableData = peekaboohApiService.getTimeTableById(vm.timeTableId);
        if (timetableData) {
            vm.details = timetableData;
            vm.title = timetableData.forClass;
        } else {
            console.error('timetable not found.')
        }

    }
})();
