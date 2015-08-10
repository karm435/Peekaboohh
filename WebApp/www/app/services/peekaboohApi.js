(function() {
    'use //strict';

    angular
        .module('peekaboohApp')
        .service('peekaboohApiService', ['$http', '$q', '$ionicLoading', 'CacheFactory', peekaboohApiService]); //

    //peekaboohApiService.$inject = ['dependencies'];

    function peekaboohApiService($http, $q, $ionicLoading, CacheFactory) {
        var self = this;

        self.timetableCache = CacheFactory.get('timetablesCache');

        self.timetableCache.setOptions({
            onExpire: function(key, value) {
                getTimeTables()
                    .then(function() {
                        console.log("Cache will be refreshed automatically");
                    }, function() {
                        console.log("Error getting data, put the cache data back to cache.");
                        self.timetableCache.put(key, value);
                    });
            }
        });

        // self.timeTableData = [{
        // 		id:1,
        // 		forClass:'10th Standard',
        // 		teacherName: 'Karmjit',
        // 		numberOfStudents:200
        // 	},
        // 	{
        // 		id:2,
        // 		forClass:'11th Standard',
        // 		teacherName: 'Parson',
        // 		numberOfStudents:100
        // 	}];


        function getTeachers() {
            //TODO : fetch data from  couch api
            var deferred = $q.defer();

            $ionicLoading.show({
                template: 'Loading....'
            })

            $http.get('url')
                .success(function(data, status) {
                    $ionicLoading.hide();
                    deferred.resolve(data);

                })
                .error(function() {
                    $ionicLoading.hide();
                    deferred.reject();
                });

            return deferred.promise;
        }

        function getTimeTables(forceRefresh) {
            if (typeof forceRefresh === "undefined") {
                forceRefresh = false;
            }

            var deferred = $q.defer(),
                cacheKey = "timetable",
                data = null;

            if (!forceRefresh) {
                data = self.timetableCache.get(cacheKey);
            }

            $ionicLoading.show({
                template: 'Loading....'
            });

            if (data) {
                deferred.resolve(data);
            } else {
                $http.get('url')
                    .success(function(data, status) {
                        $ionicLoading.hide();
                        deferred.resolve(data);

                    })
                    .error(function() {
                        $ionicLoading.hide();
                        deferred.reject();
                    });

            }
            return deferred.promise;
        }

        function getTimeTableById(id) {
            //TODO : fetch data from  couch api
            return _.find(self.timeTableData, {
                'id': id
            });
        }

        function getStudents() {
            // body...
        }

        return {
            getStudents: getStudents,
            getTeachers: getTeachers,
            getTimeTables: getTimeTables,
            getTimeTableById: getTimeTableById
        }
    }
})();
