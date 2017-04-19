(function() {
    'use strict';

    angular
        .module('node')
        .controller('HeaderController', function(API) {

            const vm = this;
            let data = API.getData(); //This is how we get our Data from the API
            data.then(res => {
                console.log(res);
                vm.data = res.data
            });

            vm.submitForm = function(isValid) {
                if (isValid) {
                    // let user = data.id
                    // user = Date.now();

                    const newItem = Object.assign({}, vm.item);
                    let data = API.saveData(newItem);
                    data.then(res => {
                        let getNew = API.getData(); //this is telling the API to run the updated Data and return that Data
                        getNew.then(res => { //This is displaying the new Data from the API that is sent over
                            console.log("NEW", res);
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

            vm.click = ((id) => {
                console.log(id)
                let data = API.deleteData(id);
                data.then(res => {
                    let getNew = API.getData(); //this is telling the API to run the updated Data and return that Data
                    getNew.then(res => {
                        console.log("NEW", res);
                        vm.data = res.data
                    })
                });

            })

        });
})();
