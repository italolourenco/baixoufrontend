angular.module("app").service('tokenService', function($http, $window) {

    var self = this;

    this.getToken = function() {
        return $http({
            url: 'http://testedev.baixou.com.br/processo/auth',
            method: "POST",
            data:'email=italolt10@gmail.com',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (data){
                if(data.data.status){
                    $window.localStorage.setItem('token', data.data.token);
                    return data.data.token
                }
                return $window.localStorage.getItem('token');
            })
        }

});
