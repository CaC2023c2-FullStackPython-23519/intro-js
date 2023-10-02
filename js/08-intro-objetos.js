// PARADIGMA ORIENTADA A OBJETOS

let nombre = "Carlos"
let edad = 30
let tieneHijos = false

let persona = {
    nombre: "Carlos",
    edad: 30,
    tieneHijos: false,
    saludar: function () {
        console.log(`Hola soy ${this.nombre} y mi edad es de ${this.edad} años`)
    }
}

let persona2 = {
    nombre: "Carlos",
    edad: 30,
    correr: function() {}
}

let elProfeDePython = persona
