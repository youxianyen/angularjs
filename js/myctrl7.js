angular.module('app', [])
.value('realname', 'zhaoliu')
.value('realname', 'wangwu')  //是可以改变的
.constant('http', 'www.baidu.com')
.constant('http', 'www.sohu.com')  //不可以改变，值还是www.baidu.com
.factory('Data', function(){
	return {
		msg: '你好啊',
		setMsg: function(){
			this.msg = 'DAY DAY UP';
		}
	}
})

.service('User', function(){
	this.firstname = '上官';
	this.lastname = '飞燕';
	this.getName = function(){
		return this.firstname + this.lastname;
	}
})
.controller('myctrl7', function($scope, realname, http, Data, User){
	$scope.msg = '订单';
	$scope.realname = realname;
	$scope.http = http;
	//http.post();
	$scope.data = Data;
	Data.setMsg();
	$scope.uname = User.getName();
})
