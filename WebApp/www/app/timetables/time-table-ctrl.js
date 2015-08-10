(function() {
    'use strict';

    angular
        .module('peekaboohApp')
        .controller('timeTablesCtrl', ['$state', '$scope', 'peekaboohApiService', timeTablesCtrl]);

    function timeTablesCtrl($state, $scope, peekaboohApiService) {
        //content
        var vm = this;

        vm.loadList = function(forceRefresh) {
            peekaboohApiService.getTimeTables(forceRefresh).then(function(data) {
                vm.timetables = data;
            }).finally(function() {
                $scope.$broadcast("scroll.refreshComplete");
            });
            //console.log(timetables);
        };

        vm.loadList(false);

    }
})();
