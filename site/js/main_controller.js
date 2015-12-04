APP.controller('MainController', function($scope){
	$scope.menu = "WEBAPP";
	$scope.submenu = "TODOS";
	$scope.showMenu = false;

	$scope.openMenu = function (){
		$scope.showMenu = !$scope.showMenu;
	}

	$scope.openSubmenu = function (){
		$scope.showSubmenu = !$scope.showSubmenu;
	}

	$scope.selectMenu = function (m){
		$scope.menu = m;
		$scope.showMenu = false;
	}

	$scope.selectSubmenu = function (m){
		$scope.submenu = m;
		$scope.showSubmenu = false;
	}

});