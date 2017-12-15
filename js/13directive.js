var app = angular.module('app', []);
//弹出层
app.directive('hello', function(){
	return {
		restrict: 'A',	//A：属性，C：class类名 ， E：template
		link: function(){
			alert ('我是属性')
		}
	}
});

app.directive('jike', function(){
	return {
		restrict: 'C',
		link: function(){
			alert ('我是极客')
		}
	}
});