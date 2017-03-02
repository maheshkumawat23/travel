/* created IIFE function to avoid collison */
(function () {
    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$ionicModal', '$state', '$ionicPopup','getDeviceInfo'];

    function loginController($scope, $ionicModal, state, $ionicPopup,getDeviceInfo) {

/*******************************************************************************************************************/
        var vm = this;
        vm.login = login;
        vm.changeData = changeData;
        vm.adminLogin = adminLogin;
        vm.checked = true;
        vm.locationNames = ["Abhilash","CMC","Global Axis","GRTP","ITPB", 
         "L Center", "Manyata","Mangnum Blr NSTP","Pioneer","PSN","SJM","Think campus","Vydehi"];
        vm.vendorNames = [];
		vm.vehicleNames = ["Bus","Cab"];
        vm.data = {};
        vm.canteenData = [{
	"Abhilash": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"CMC": {
		"location": [
		]
	},
	"Global Axis": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"GRTP": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"ITPB": {
		"location": [{
			"Cab": "Cab"}]
	},
	"L Center": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Manyata": {
		"location": [{
			"Cab": "Cab"}]
	},
	"Mangnum Blr NSTP": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Pioneer": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"PSN": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"SJM": {
		"location": [{
			"Cab": "Cab"}
            
           ]
	},
	"Think campus": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	},
	"Vydehi": {
		"location": [{
			"Bus":"Bus"
		}, {
			"Cab":"Cab"
		}]
	}
}];

/********************************************************************************************************************/

        /* login function to check user credentials */
        function changeData(){
            console.log(vm.selectedLocationName);
             //console.log(Object.keys(vm.canteenData[0].Dhara.location[0]));
            switch(vm.selectedLocationName){
                case "Abhilash":
                    vm.vendorNames =[];
                     for(var i=0;i<vm.canteenData[0].Abhilash.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].Abhilash.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "CMC" :
                     vm.vendorNames =[];
                     for(var i=0;i<vm.canteenData[0].CMC.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].CMC.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Global Axis":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Global Axis'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Global Axis'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "ITPB":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0].ITPB.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].ITPB.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "GRTP":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0].GRTP.location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0].GRTP.location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "L Center":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['L Center'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['L Center'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Manyata":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Manyata'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Manyata'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
				case "Mangnum Blr NSTP":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Mangnum Blr NSTP'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Mangnum Blr NSTP'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Pioneer":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Pioneer'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Pioneer'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "PSN":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['PSN'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['PSN'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "SJM":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['SJM'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['SJM'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Think campus":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Think campus'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Think campus'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                case "Vydehi":
                    vm.vendorNames=[];
                    for(var i=0;i<vm.canteenData[0]['Vydehi'].location.length;i++){
                        vm.vendorNames.push(Object.keys(vm.canteenData[0]['Vydehi'].location[i]));
                    }
                    console.log(vm.vendorNames.length);
                    break;
                
            default :
                vm.vendorNames = [];

            }
           // console.log(Object.keys(vm.canteenData[0]).length);
            
           // console.log(vm.canteenData[0].Abhilash.location);
        }
        function login() {
            console.log(this.username + "," + this.selectedLocationName + "," + this.selectedVehicleType);
            var username = vm.username;
            var selectedLocationName = vm.selectedLocationName;
            var selectedVehicleType = vm.selectedVehicleType;
            
            if (username === undefined || selectedLocationName === undefined || selectedVehicleType === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });
            }
            else {
                localStorage.setItem("username", username);
                localStorage.setItem("location", selectedLocationName);
                localStorage.setItem("vehicle", selectedVehicleType);
                state.go('home');
            }

        }
        function adminLogin() {
           // console.log(vm.adminUserName + "," + vm.adminPassword);
            if (vm.adminUserName === undefined || vm.adminPassword === undefined) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Warning',
                    template: 'Please fill all the field'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });

            }
            else {
				var getOnlineStatusService = getDeviceInfo.deviceInfo();
				//alert(getOnlineStatusService.connectionStatus);
				if(vm.adminUserName == "admin" && vm.adminPassword =="Tcs@1234")
                state.go('admin');
			    else
				{
					var alertPopup = $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Please check your credentials'
                });

                alertPopup.then(function (res) {
                    console.log('Thank you for submitting your respone in warning popup');
                });
				}
            }
        }

        $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            //alert('hello');
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        // Execute action on hide modal
        $scope.$on('modal.hidden', function () {
            // Execute action
        });

        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });

    }
})();
/*app.controller('loginController', function($scope,$ionicModal,$state){
    $scope.locationNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.vendorNames = ["location1","location2","location3","location4","location5","location6","location7","location8"];
    $scope.data ={};
    console.log($scope.data.username);
    $scope.login = function() {
         localStorage.setItem("username",$scope.data.username);
        localStorage.setItem("location",$scope.data.selectedLocationName);
        localStorage.setItem("vendor",$scope.data.selectedVendorName);
        
            $state.go('home');
    };
    $scope.adminLogin = function() {
        $state.go('admin');
    }

    $ionicModal.fromTemplateUrl('app/login/adminlogin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        //alert('hello');
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });

});*/