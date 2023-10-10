const {createApp} = Vue;

const appTablaDeIngredientes = createApp({
    data() {
        return {
            listaDeIngredientes: listaDeIngredientesJSON,
            colorIngresado: ""
        }
    },
    methods: {
        handlerFiltrarPorColor(color) {
            this.listaDeIngredientes = listaDeIngredientesJSON.filter(ing => ing.color.includes(this.colorIngresado))
        }
    }
})

appTablaDeIngredientes.mount("#app");