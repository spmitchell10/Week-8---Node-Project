(function() {
    'use strict';

    angular
        .module('node')
        .factory('API', function($http) {


            return {
                getData: () => {
                    return $http({
                        method: "GET",
                        url: "http://localhost:8080/people",
                    })
                },
                saveData: (item) => {
                    return $http({
                        method: "POST",
                        data: item,
                        url: "http://localhost:8080/people",
                    })
                },
            }
        })
})();
