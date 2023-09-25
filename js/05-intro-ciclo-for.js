// Operador de incremento: cont++
// cont = cont + 1

const NOTA_MAXIMA = 10

let nota = parseInt(prompt("¿Tu nota de examen (entre 1 y 10)?"))
while (nota <= 0 || nota > NOTA_MAXIMA) {
    nota = parseInt(prompt("ERROR. ¿Tu nota de examen (entre 1 y 10)?"))
} 

console.log("La nota fue validada! Es " + nota)


/*
for (let cont = 1; cont <= 100; cont += 5) {
    //console.log(cont + " Hola mundo de los ciclos")
    console.log(`${cont}) Hola mundo de los ciclos`)   
}
*/