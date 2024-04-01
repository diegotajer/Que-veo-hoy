$(document).ready(() => { 
  
    $('#vertodas').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#vertodas').css("border", "5px solid black");
        $('.ficha').show();
      })
    
      $('#cartelito-paramount').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitoparamount').css("border", "5px solid black");
        $('.ficha').hide();
        $('.paramount').show();
      })
    
      $('#cartelito-amazon').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitoamazon').css("border", "5px solid black");
        $('.ficha').hide();
        $('.amazon').show();
      })

      $('#cartelito-apple').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitoapple').css("border", "5px solid black");
        $('.ficha').hide();
        $('.appletv').show();
      })

      $('#cartelito-netflix').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitonetflix').css("border", "5px solid black");
        $('.ficha').hide();
        $('.netflix').show();
      })

      $('#cartelito-hbo').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitohbo').css("border", "5px solid black");
        $('.ficha').hide();
        $('.HBO').show();
      })

      $('#cartelito-starplus').on('click', () => {
        $('.fotocartel').css("border","2px solid black");
        $('#fotitostarplus').css("border", "5px solid black");
        $('.ficha').hide();
        $('.starplus').show();
      })


    })