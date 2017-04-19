(function() {
    'use strict';

    angular.module('node', []);
        
})();

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
})
