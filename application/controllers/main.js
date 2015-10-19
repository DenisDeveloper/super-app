export default function ($q, $scope, $timeout, $mdDialog, $mdToast, $animate, RequestFactory) {

    $scope.toggleSearch = false; 
  
    $scope.selected = [];
    
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    $scope.request = RequestFactory.query();

    $scope.setStatus = function(request){
      console.log(request);
      RequestFactory.update({email: request.email }, request);
    };

    $scope.showDialog = function(ev) { 
      $mdDialog.show({
        controller: "DialogController",
        templateUrl: "templates/dialog.tmpl.html", 
        targetEvent: ev,
      })
      .then(function(request) {       
        var item = {
          email: request.email,
          time: request.time,
          status: request.status,
          formData: {
            firstName: request.firstName,
            secondName: request.secondName,
            employeePosition: request.employeePosition,
            company: request.company,
            phone: request.phone
          }  
        };

        $scope.request.data.unshift(item);

        RequestFactory.create(item);
                
      }, function() {
       /*  'You cancelled the dialog.';*/
      });
    };
    
    $scope.getStatus = function () {
      return ['open',  'inWork', 'approved', 'canceled'];
    };
    
    $scope.onpagechange = function(page, limit) {
      var deferred = $q.defer();
      
      $timeout(function () {
        deferred.resolve();
      }, 2000);
      
      return deferred.promise;
    };
    
    $scope.onorderchange = function(order) {
      var deferred = $q.defer();
      
      $timeout(function () {
        deferred.resolve();
      }, 2000);
      
      return deferred.promise;
    };
}