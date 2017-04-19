(function() {
    'use strict';

    angular
        .module('node')
        .controller('HeaderController', function(API) {

            const vm = this;
            let data = API.getData();
            data.then(res=>{
                console.log(res);
                vm.data = res.data
            });
            
            vm.submitForm = function(isValid) {
                if (isValid) {
                    // let user = data.id
                    // user = Date.now();

                    const newItem = Object.assign({},vm.item);
                    let data = API.saveData(newItem);
                    data.then(res=>{
                        alert("TET");
                        let getNew = API.getData();
                        getNew.then(res=>{
                            console.log("NEW",res);
                            vm.data = res.data
                        })
                    });
                    vm.item = {};
                    swal(
                        "Good job!",
                        "You Added an Item!",
                        "success");
                } else {
                    swal(
                        'Oops...',
                        'Something went wrong!',
                        'error');
                }

            }

        });
})();
