// DEFINICIÓN DE FUNCIONES

function siguiente (n) {
    return n + 1;
}

function doble (unNumero) {
    return unNumero * 2
}

function esVocal(letra) {
    letra = letra.toUpperCase();
    return letra === 'A' || 
           letra === 'E' ||
           letra === 'I' ||
           letra === 'O' ||
           letra === 'U';
}

// PROGRAMA PRINCIPAL

let x = parseInt(prompt("Ingrese un numero")) // 4
let resultado = doble(siguiente(x))
console.log(`Resultado: ${resultado}`)
