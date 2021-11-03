$(document).ready(function(){
    //crio o vetor com as imagens
    var vtBanner=["imagens/imagem1.jpg", "imagens/imagem2.jpg", 
    "imagens/imagem3.jpg", "imagens/imagem4.jpg"]

    //quantidade máxima de slides
    var max = vtBanner.length-1; //-1 pq começa de zero o indice
    var i = 0; //indice
    
    //adiciono texto as divis
    $("#btnAnt").text("<");
    $('#btnProx').text('>');
    
    //inicio o banner com o primeiro elemento do meu vetor
    $("#banner").css("background-image", "url(" + vtBanner[i] + ")");

    //adicionar evento aos botões
    $('#btnAnt').click(function(){
        trocarSlide(-1)
    });

    $('#btnProx').click(function(){
        trocarSlide(1)
    });

    function trocarSlide(operacao)
    {
        i+=operacao; //começa com zero, operação com 1, adiciona, operação com -1 subtrai
      
        if(i > max) //verifico os limites do meu vetor
        {
            i=0; //vou para o primeiro slide
        }
        else if(i<0){
            i=max;//vou para o ultimo slide
       }

       $("#banner").css("background-image", "url(" + vtBanner[i] + ")");//troco a imagem do banner

    }
});

