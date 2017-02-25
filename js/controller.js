var app = angular.module('mitknits')
	.controller('HomeController', function($scope, UserAPIService) {
		$scope.registrationUser = {};
        $scope.headerTitle = 'Welcome to Mitknits where we talk everything wool';
        var URL = "https://morning-castle-91468.herokuapp.com/";


        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;

                    debugger;
                    alert("You have successfully logged into Mitknits");
                }).catch(function(err) {
                    debugger;
                    alert("Oops! Something went wrong!");
                });
            }
        };
	})
	app.controller('AboutUsController', function($scope) {
        $scope.headerTitle = 'About Us';
    })
    app.controller('DesignController', function($scope) {
       $scope.headerTitle = 'MitKnits Designs';
    })
    app.controller('NewsController', function($scope) {
        $scope.headerTitle = 'Mitknits News';
    })
    app.controller('ContactUsController', function($scope) {
        $scope.headerTitle = 'Please feel free to Contact Us';
    });