/**
 * 
 */
app.controller('JobController',function($scope,$location,JobService){
$scope.showJobDetails=false;
$scope.saveJob=function(){
JobService.saveJob($scope.job).then(function(response){
console.log(response.data)
alert("added job details success")
$location.path('/listofjobs')
},function(response){
$scope.error=response.data;
console.log(response.status)
if(response.status==401)
$location.path('/savejob')
})
}
$scope.getJobById=function(id){
console.log("Job Id Is " +id);
$scope.showJobDetails=true
JobService.getJobById(id).then(function(response){
$scope.job=response.data
},function(response){
console.log(response.data)
if(response.status==401)
$location.path('/login')
})
}
function listOfJobs(){
	JobService.listOfJobs().then(function(response){
	
	
	$scope.jobs=response.data
	console.log("...............")
	},function(response){
	console.log(response.status)
	if(response.status==401)
	$location.path('/login')
	})
	}
$scope.getJobDetails=function(id)
{
	$scope.showJObDetails(id).then(function(response)
{
		$scope.job=response.data
		},function(response){
			 console.log(reponse.data)
			 $location.path('/login')
		})	
}
	listOfJobs()
	})



