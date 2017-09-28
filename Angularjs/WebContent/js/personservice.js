app.factory('PersonService',function($http){
	var personService={};
	
	personService.getAllPersons=function(){
	return	$http.get("http://localhost:8080/backendcruddemo/getallpersons")
	/*
	 *   [404, HTML] - response
	 *   [500 , HTML]
	 *   [200, [JSON objects]
	 */
	}
	
	
	return personService;
})
