const ingredientes = [
    {
        "_id": 1,
        "nombre": "Harina de trigo",
        "foto": "ing_1.jpg",
        "color": "blanco"
    },
    {
        "_id": 2,
        "nombre": "Azúcar",
        "foto": "ing_2.jpg",
        "color": "blanco"
    },
    {
        "_id": 3,
        "nombre": "Huevos",
        "foto": "ing_3.jpg",
        "color": "blanco"
    },
    {
        "_id": 4,
        "nombre": "Leche",
        "foto": "ing_4.jpg",
        "color": "blanco"
    },
    {
        "_id": 5,
        "nombre": "Sal",
        "foto": "ing_5.jpg",
        "color": "blanco"
    },
    {
        "_id": 6,
        "nombre": "Levadura",
        "foto": "ing_6.jpg",
        "color": "gris"
    },
    {
        "_id": 7,
        "nombre": "Aceite de oliva",
        "foto": "ing_7.jpg",
        "color": "amarillo"
    },
    {
        "_id": 8,
        "nombre": "Tomate",
        "foto": "ing_8.jpg",
        "color": "rojo"
    },
    {
        "_id": 9,
        "nombre": "Cebolla",
        "foto": "ing_9.jpg",
        "color": "#9370DB"
    },
    {
        "_id": 10,
        "nombre": "Pimiento rojo",
        "foto": "ing_10.jpg",
        "color": "#FF4500"
    },
    {
        "_id": 11,
        "nombre": "Pimiento verde",
        "foto": "ing_11.jpg",
        "color": "#008000"
    },
    {
        "_id": 12,
        "nombre": "Pimiento amarillo",
        "foto": "ing_12.jpg",
        "color": "#FFFF00"
    },
    {
        "_id": 13,
        "nombre": "Ajo",
        "foto": "ing_13.jpg",
        "color": "#00008B"
    },
    {
        "_id": 14,
        "nombre": "Pasta",
        "foto": "ing_14.jpg",
        "color": "#FFE4B5"
    },
    {
        "_id": 15,
        "nombre": "Carne molida",
        "foto": "ing_15.jpg",
        "color": "#A52A2A"
    },
    {
        "_id": 16,
        "nombre": "Pollo",
        "foto": "ing_16.jpg",
        "color": "#FF5733"
    },
    {
        "_id": 17,
        "nombre": "Queso cheddar",
        "foto": "ing_17.jpg",
        "color": "#FFA500"
    },
    {
        "_id": 18,
        "nombre": "Queso parmesano",
        "foto": "ing_18.jpg",
        "color": "#F5DEB3"
    },
    {
        "_id": 19,
        "nombre": "Jamón",
        "foto": "ing_19.jpg",
        "color": "#FFB6C1"
    },
    {
        "_id": 20,
        "nombre": "Pan",
        "foto": "ing_20.jpg",
        "color": "#D2B48C"
    }
];


// Filtrar ingredientes por color

// IMPERATIVO
ingredientesBlancos = []
for (let i = 0; i < ingredientes.length; i++) {
    const ingrediente = ingredientes[i];
    if (ingrediente.color === "blanco") {
        ingredientesBlancos.push( ingrediente )
    }
}
console.log(ingredientesBlancos)

// DECLARATIVO
function esBlanco(ing) {
    return ing.color === "blanco"
}

ingredientesBlancos = ingredientes.filter( ing => ing.color === "blanco" );
console.log(ingredientesBlancos)

function siguiente (x) {
    return x + 1
}

