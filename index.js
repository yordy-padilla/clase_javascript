alert('Hola')

//consumir api
const obtener_personaje = async () => {
    try{
        const resp = await fetch("https://rickandmortyapi.com/api/character")
        const data = await resp.json()
        const results= data.results
        console.log(results)  
    }catch(error){
        console.log(error)
    }
}

obtener_personaje()
