var apiclient = (function (){

    function getFahrenheitToCelsius(num, callback){
        $.get("https://u7s89bik10.execute-api.us-east-1.amazonaws.com/convert?value="+num, function(data){
                callback(data);
            }, 'json');
    }
    return{
        getFahrenheitToCelsius: getFahrenheitToCelsius
    }

})();