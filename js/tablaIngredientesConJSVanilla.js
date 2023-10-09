const tablaContainer = document.getElementById("tablaDeIngredientesContainer")
const laTabla = tablaContainer.children[0]
const elCuerpoDeLaTabla = laTabla.children[0]
const pNoHayIngredientes = tablaContainer.children[1]
const inputColor = document.getElementById("inputColor")

function colocarIngredientes(lista) {    
    elCuerpoDeLaTabla.innerHTML = ""
    if (!lista || lista.length === 0) {
        mostrar(laTabla, false)
        mostrar(pNoHayIngredientes, true)
    } else {
        for (let i = 0; i < lista.length; i++) {
            const ingrediente = lista[i];
            const nuevaFila = document.createElement('tr') // <tr></tr>
    
            const celdaNombre = nuevaCelda(ingrediente.nombre);
            celdaNombre.style.color = ingrediente.color
            const celdaFoto = nuevaCelda(`<img src='img/${ingrediente.foto}' alt='${ingrediente.nombre}' />`);
            const celdaColor = nuevaCelda(ingrediente.color);
            
            nuevaFila.appendChild(celdaNombre)
            nuevaFila.appendChild(celdaFoto)
            nuevaFila.appendChild(celdaColor)
    
            elCuerpoDeLaTabla.appendChild(nuevaFila)
        }
        mostrar(laTabla, true)
        mostrar(pNoHayIngredientes, false)
    }
}

function nuevaCelda(contenido) {
    const td = document.createElement('td') // <td></td>
    td.innerHTML = contenido // <td>...</td>
    return td
}

function mostrar(elemento, flag) {
    elemento.style.display = flag ? "block" : "none"
}

function handlerFiltrarPorColor() {
    const colorLeido = inputColor.value;
    const filtrados = listaDeIngredientesJSON.filter( ing => ing.color.includes(colorLeido) );
    colocarIngredientes(filtrados)
}

colocarIngredientes(listaDeIngredientesJSON)