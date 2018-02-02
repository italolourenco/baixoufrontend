angular.module("app").controller("SearchCtrl", function ($scope, tokenService, searchService, Offers) {

    var self = this;
    self.offers = [];

    function init() 
    {
        tokenService.getToken().then(function (token){       
            searchService.getOffers(token).then(function(offers){
                self.offers = offers;
            })
        });
    }

    init();

});;