
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
    
}

const fromDollarToYan= function(valueInDollar) {
    
    let valueInYan = valueInDollar * 156.5;
    
    return valueInYan;
    
}
const fromYanToPound = function(valueInYan) {
    
    let valueInPound = valueInYan * 0.87;
    
    return valueInPound;
    
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = {sum , fromEuroToDollar,fromDollarToYan,fromYanToPound}