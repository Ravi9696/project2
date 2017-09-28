/**
 * 
 */
app.controller('BlogPostDetailController',function($scope,$location,BlogPostService,$routeParams){
	var id=$routeParams.id
	$scope.showRejectionTxt=false
	BlogPostService.getBlogPostById(id).then(function(response){
		$scope.blogPost=response.data
		console.log(response.data)
	},function(response){
		console.log(response.status)
		if(response.status==401)
			$location.path('/login')
			
	})
	
	$scope.updateApproval=function(){
		console.log($scope.blogPost)
		BlogPostService.updateApproval($scope.blogPost).then(function(response){
			$location.path('/getallblogs')
		},function(response){
			if(response.data==401)
				$location.path('/login')
			else
			$location.path('/blogpostforapproval/'+id)
		})
	}
    $scope.setValueForRejectionTxt=function(val){
    	$scope.showRejectionTxt=val
    }	
})

