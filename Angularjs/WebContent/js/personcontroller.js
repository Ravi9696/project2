/**
 * 
 */
app.controller('PersonController',function($scope,PersonService){
	PersonService.getAllPersons().then(function(response){
		$scope.persons=response.data
		console.log(response.status)
	},function(response){
		console.log(response.status)
	})
})
