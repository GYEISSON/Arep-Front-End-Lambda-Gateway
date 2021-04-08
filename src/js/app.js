
var app = (function () {

    function convertir() {
        var value  = $("#number").val();
        console.log("hei");
        restConvertir(value);

    }
    function restConvertir(value) {
        apiclient.getFahrenheitToCelsius(value, mostrarPalabra);
    }
    function mostrarPalabra(data){
        var pal = document.getElementById("palabra");
        pal.innerText = data;
    }

    return {
        convertir:convertir,
        restConvertir:restConvertir,
        mostrarPalabra:mostrarPalabra
    }

})();