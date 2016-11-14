
angular.module("blankSlate").service("mainServ", function($http){
this.loginUser = function(user){
  return $http({
    method: "POST",
    url: "/login",
    data: user
  }).then(function(response){
    return response.data;
  })
};
this.getCurrentUser = function(user){
return $http({
  method: "GET",
  url: "/current"
}).then(function(response){
  return response.data;

});

};
this.getColors = function(){
  return $http({
    method: "GET",
    url: "/colors"
  }).then(function(response){
    return response.data;
  });
};
this.addPage = function(page){
  return $http({
    method: "POST",
    url: "/colors",
    data: page
  }).then(function(response){
    return response;
  });
};

//
this.deletePage = function(pageToDelete){
  return $http({
    method: "DELETE",
    url: "/colors/" + pageToDelete.key
  }).then(function(response){
    return response;
  });

};

this.changeThePage = function(pageToChange){
  return $http({
    method: "PUT",
    url: "/colors/"+pageToChange.key,
    data: pageToChange
  }).then(function(response){
    return response;
  })
}
//


});
