const EDAD_LEGAL = 18;
let anioDeNacimiento;
let edad;
let anioActual = 2023;

// Entrada
anioDeNacimiento = parseInt(prompt("¿En qué año naciste?"));
//anioDeNacimiento = parseInt(anioDeNacimiento)

// Proceso
edad = anioActual - anioDeNacimiento;

// Salida
console.log("Tu edad es " + edad + " ó " + (edad-1) + " años")

// Pasa o no pasa a un casino

if (edad >= EDAD_LEGAL) {
    console.log("Pasa")
} else {
    console.log("No pasa")
}


if (horaDelDia >= 0 && horaDelDia <= 11) {
    // Tomo café
}
else if (esLaTarde) {
    // Tomo mate
}
else {
    // Tomo agua
}

if (condition) {
    if (condition) {
        if (condition) {
            
        } else {
            
        }
    } else {
        
    }
} else {
    
}


switch (numeroMarcadoEnTelefono) {
    case 1:
        // Ventas
        break;
    case 2:
        // RRHH
    default:
        // ERROR
        break;
}