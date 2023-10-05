class Persona {

    constructor(unNombre) {
        this.nombre = unNombre
        this.edad = 0
    }

    saludar() {
        console.log(`Hola soy ${this.nombre.toUpperCase()} y tengo ${this.edad} años.`)
    }
}