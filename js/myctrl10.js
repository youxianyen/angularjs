//ng-bind, {{}}, ng-model, ng-show/hide, ng-if
//ng-checked, ng-src, ng-href, ng-class, ng-selected, ng-submit, 
angular.module('app', [])

.controller('UserCtrl', function($scope){ //
	$scope.user = {
		isShowImg: true,
		showicon: true,
		icon: 'img/logo.jpg',
		uname: 'ruizhou',
		pwd: '',
		zw: '2',
		sex: '0',
		aihao: '[1, 3]'
	};

	$scope.isChecked = function(n){
        var isok = false;
        for (var i = 0;i < $scope.user.aihao.length;i++)
        {
        	if (n == $scope.user.aihao[i]) {
        		isok = true;
        		break;
        	}
        }
        return isok;
	}
	
	$scope.register = function(u){
        console.log(u);
	}
})
