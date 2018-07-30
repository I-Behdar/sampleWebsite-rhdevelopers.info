$(function() {
    
    $('#child').css('background', 'rgba(255, 255, 255, 0)');

    $('.js--sticky-nav').waypoint(function(direction) {

        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '10%'
    });


    $(".flip").flip({
        trigger: 'hover'
    });   
    
    $('input, #city').change(function(){
        
        let total, totalP, totalF, totalW, totalT, totalC, priceP, priceF, priceW, priceT, priceC, quantP, quantF, quantW, quantT, quantC;
        
        $('input').each(function(){
            priceP = parseInt($('#pricePaint').val());
            priceF = parseInt($('#priceFloor').val());
            priceW = parseInt($('#priceWindows').val());
            priceT = parseInt($('#priceTiles').val());
            priceC = parseInt($('#priceCabinets').val());
            
            quantP =  parseInt($('#paint').val());
            quantF =  parseInt($('#floor').val());
            quantW =  parseInt($('#windows').val());
            quantT =  parseInt($('#tiles').val());
            quantC =  parseInt($('#cabinets').val());
    
            total = (quantP * priceP) + (quantF * priceF) + (quantW * priceW) + (quantT * priceT) + (quantC * priceC);
        })
        
        $('.result').empty().append(`Total Cost = &euro; ${total}`);
        
         const id = $(this).children(":selected").attr("id");

            switch (id) {
              case "city-m": {
                    priceP = 100;
                    priceF = 120;
                    priceW = 140;
                    priceT = 110;
                    priceC = 160;
                    break;
              }
              case "city-o": {
                    priceP = 150;
                    priceF = 170;
                    priceW = 190;
                    priceT = 160;
                    priceC = 220;
                    break;
              }
              case "city-b": {
                    priceP = 200;
                    priceF = 220;
                    priceW = 250;
                    priceT = 210;
                    priceC = 260;
                    break;
              }
             case "city-clear": {
                    priceP = 0;
                    priceF = 0;
                    priceW = 0;
                    priceT = 0;
                    priceC = 0;
                    break;
              }
            }
        
            $("#pricePaint").val(priceP);
            $("#priceFloor").val(priceF);
            $("#priceWindows").val(priceW);
            $("#priceTiles").val(priceT);
            $("#priceCabinets").val(priceC);
//        
    })
    
    $('#submitClear').on('click', function(){
        $('.quantClear').val('0');
        $('.result').replaceWith('<li class="result">Total Cost = &euro; 0</li>');
    })
});