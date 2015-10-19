export default function($scope, $mdDialog){

	$scope.request = {};

	$scope.getStatus = function () {
      return ['open',  'inWork', 'approved', 'canceled'];
    };
	$scope.closeDialog = function() {
		$mdDialog.cancel();
	};
	$scope.save = function(request) {
		$mdDialog.hide(request);
	};  	
}