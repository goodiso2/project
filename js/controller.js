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
                    alert("You have successfully registered to Angular Todo");
                }).catch(function(err) {
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
        $scope.headerTitle = 'Would you like to talk contact us on below address';
    });