angular.module("app").service('searchService', function($http, $cacheFactory, Offers) {

    var self = this;

    this.getOffers = function(token) {
        return $http.get('http://testedev.baixou.com.br/processo/lista?token=' + token).then(function(data){
            return data.data.ofertas.map(function(oferta){
                return Offers.build(oferta)
            })
        })
    }
    
});