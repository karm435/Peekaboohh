angular.module("peekaboohApp", ["ionic", "angular-cache", "ngCordova"])

.run(function($ionicPlatform, CacheFactory) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
        CacheFactory("timetablesCache", {
            storageMode: 'localStorage',
            maxAge: 10000,
            deleteOnExpire: "aggressive"
        });

        CacheFactory("staticCache", {
            storageMode: 'localStorage'
        });

    });
})


.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            abstract: true,
            url: "/home",
            templateUrl: "app/home/home.html"
        })
        .state('home.attendance', {
            url: "/attendance",
            views: {
                "tab-myAttendance": {
                    templateUrl: "app/home/attendance.html"
                }
            }
        })

    .state('home.mytimetable', {
        url: "/timetable",
        views: {
            "tab-myTimetable": {
                templateUrl: "app/home/time-table.html"
            }
        }
    })

    .state('home.mysettings', {
        url: "/settings",
        views: {
            "tab-mySettings": {
                templateUrl: "app/home/settings.html"
            }
        }
    })

    .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'app/layout/menu-layout.html'
    })

    .state('app.students', {
        url: "/students",
        views: {
            "mainContent": {
                templateUrl: "app/students/students.html"
            }
        }
    })

    .state('app.teachers', {
        url: "/teachers",
        views: {
            "mainContent": {
                templateUrl: "app/teachers/teachers.html"
            }
        }
    })

    .state('app.timetables', {
        url: "/timetables",
        views: {
            "mainContent": {
                templateUrl: "app/timetables/timetables.html"
            }
        }
    })

    .state('app.timetablesdetail', {
        url: "/timetables/:id",
        views: {
            "mainContent": {
                templateUrl: "app/timetables/timetables-detail.html"
            }
        }
    })


    $urlRouterProvider.otherwise('/app/teachers');

});
