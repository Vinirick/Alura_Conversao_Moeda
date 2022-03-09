function ConverterReal() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    
    var valorEmReal = valorEmDolarNumerico * 5
    console.log(valorEmReal)
    var elementoValorConvertido =
    document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro(){
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    
    var valorEmReal = valorEmDolarNumerico * 0.92
    console.log(valorEmReal)
    var elementoValorConvertido =
    document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em euro é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}