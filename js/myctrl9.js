angular.module('app', [])

.controller('AddressCtrl', function($scope){ //
	$scope.list = [
        {id: 1, address: '莲花小区14栋2层'},
        {id: 2, address: '建安小区14栋2层'},
        {id: 3, address: '北京鸟巢好远的'},
        {id: 4, address: '兴华路22号'},
	]
	
})
