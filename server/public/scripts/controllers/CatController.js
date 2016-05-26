myApp.controller('CatController', ['$scope', '$http', function ($scope, $http) {

  var key = 'a13d573be80f54aaa3c5bfdfdf8bc460';
  var secret = '53d857e7ec5c210629b03750a5383d2d';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function () {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(
      function (response) {
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        $scope.photos = $scope.animal.media.photos.photo;
        $scope.photos.forEach(function (photo, i) {
          $scope.photos[i].size = photo.$t.substr(photo.$t.length - 5, 1);
        });
      }
    );
  };

  $scope.getRandomPet();

}]);
