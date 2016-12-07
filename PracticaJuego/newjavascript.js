$(document).ready(iniciar);

var nave = $("<img src='nave.png'/>");
var puntos = 0;
var audio = new Audio();


function iniciar() {
    $('#empezar').click(asteroides);
    nave.css("position", "absolute");
    $('#tablero').append(nave);
    audio = document.getElementById('musica');
}

//funcion para añadir propiedades css al meteorito
function propiedades(asteroide, random) {
    asteroide.css({
        "position": "absolute",
        "height": "100px",
        "width": "100px",
        "top": random + "px",
        "left": $("#tablero").width() - asteroide.width()
    });
}

//movimiento de la nave con las teclas (A/W/S/D)
$(document).keydown(function (a) {
    switch (a.which) {
        case 87:
            nave.stop().animate({
                top: '-=30'
            });
            break;
        case 83:
            nave.stop().animate({
                top: '+=30'
            });
            break;
        case 65:
            nave.stop().animate({
                left: '-=30'
            });
            break;
        case 68:
            nave.stop().animate({
                left: '+=30'
            });
            break;
    }
});

//función para generar un intervalo de meteoritos
function asteroides() {
window.setInterval(meteorito, 2000);
    audio.load();
    audio.play();
    
}

//función para generar el random de meteoritos, y controlar la colisión
function meteorito() {
    $.ajax({
        type: "POST",
        url: "randomAsteroide.php",
        dataType: 'json',
        data: {height: $("#tablero").css("height")},
        success: function (respuesta) {
            var asteroide = $("<img src = 'asteroide.png'/>");
            propiedades(asteroide, respuesta.random);
            $("#tablero").append(asteroide);       
            asteroide.animate(
                    {
                        "left": "-10"
                    },
            {duration: 5000,
                step: function (now, fx) {
                    //puntuación
                    $("#puntuacion").html(puntos);
                    //comprobación de la colision del meteorito con la nave
                    if ($(asteroide).hittest($(nave))) {
                       asteroide.remove();
                        $('#escudo').animate({
                            "width": "-=20"
                        },
                        {
                            step: function (now, fx) {
                                //comprobación del escudo
                                if ($("#escudo").width() == 0) {
                                    alert('Has perdido');
                                    clearInterval(window);
                                    nave.stop();
                                    meteorito.stop();
                                    audio.pause();
                                }
                            }
                        });
                    }
                },
                //sumar puntos y eliminar meteorito
                complete: function () {
                    puntos++;
                    asteroide.remove();
                }
            });
        }
    });
}


