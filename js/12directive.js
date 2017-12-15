var app = angular.module('app', []);
app.directive('hello', function(){
	return {
		restrict: 'E',
		replace: true,  //替换到我们自定义的HTML标签
		template: '<div>Hello Angularjs</div>'
	}
});