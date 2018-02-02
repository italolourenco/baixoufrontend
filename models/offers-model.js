angular.module("app").factory('Offers', function() {

    function Offers(imagem, titulo, preco, nparcela, vparcela)
    {
        this.imagem = imagem;
        this.titulo = titulo;
        this.preco = preco;
        this.nparcela = nparcela;
        this.vparcela = vparcela;

    }

    Offers.build = function(data) 
    {
        return new Offers(
            data.imagem,
            data.titulo,
            data.preco,
            data.nparcela,
            data.vparcela
        )
    }

    return Offers;

});
