var app = angular.module('SumicityFranquia', []);

app.controller('PrincipalController', ['$scope, $http', function ($scope, $http) {
	$scope.checar = function(){
		$http({
			method: 'POST',
			url: 'http://sac.sumicity.net.br/sac/auth.xhtml',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: {'j_idt13:cpf': $scope.cpf, 'j_idt13:senha': $scope.senha}

		});
	}
}]);