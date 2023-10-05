
let colores = []

console.log(colores.length);
console.log(colores);

colores.push( "Rojo" )
colores.push( "Negro" )
colores.push( "Verde" )
colores.push( "Blanco" )
colores.push( "Naranja" )

console.log(colores.length);
console.log(colores);

for (let i = 0; i < colores.length; i++) {
    const color = colores[i];
    console.log(color.toUpperCase())
}
