// PARADIGMA ORIENTADO A OBJETOS

let persona = {
    nombre: "Carlos",
    anioDeNacimiento: 1993,
    perra: {
        nombre: "Lara",
        edad: 5
    },
    tieneHijos: false,
    saludar: function () {
        console.log(`Hola soy ${this.nombre.toUpperCase()} y tengo ${this.edad()} años. Tengo una perra que se llama ${this.perra.nombre}`)
    },
    edad: function() {
        return 2023 - this.anioDeNacimiento
    }
}

let persona2 = {
    nombre: "Carlos",
    tieneHijos: false,
    colorDeOjos: "Verde",
    saludar: function () {
        console.log(`Hola soy ${this.nombre.toUpperCase()} y tengo ${this.edad()} años. Tengo una perra que se llama ${this.perra.nombre}`)
    },
}

let elProfeDePython = persona;