angular.module('app', [])
.controller('myctrl6', function($scope){
	$scope.msg = '';
	$scope.user = {uname: '', pwd: ''};
	$scope.errormsg = '';
	$scope.reverse = function(){
		return $scope.msg.split("").reverse().join("");
	}
	$scope.login = function(){
		console.log($scope.user)
		if ($scope.user.uname == 'admin' && $scope.user.pwd == '123') {
			alert ('登录成功！')
		}else{
			$scope.errormsg = '用户名或密码错误';
		}

	}
})
