
async function traerInfoDePais(elPais) {
    //const respuesta = await fetch(`https://restcountries.com/v3.1/name/${elPais}`);
    const respuesta = await fetch(`https://restcountries.com/v3.1/all`);
    const respuestaJSON = await respuesta.json()
    console.log(respuestaJSON);
}

traerInfoDePais("Argentina");
console.log("Yendo a buscar noticias en la API de Google Ads")