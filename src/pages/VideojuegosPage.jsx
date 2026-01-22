import Titulo from "../components/Titulo"
import Filtro from "../components/Filtro"
import GrillaVideojuegos from "../components/GrillaVideojuegos"
import { useState } from "react"

const lista = [
        {
            nombre : "CSGO",
            imagen : "/IMG/csgo.jpg",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.",
            categoria : "FPS"
        },
        {
            nombre : "DDLC",
            imagen : "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/698780/capsule_616x353.jpg?t=1681943582",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor eros sed semper aliquam. Duis quis tellus libero. Quisque consequat mauris eu molestie vestibulum. Nunc at ligula aliquet, accumsan dui ac, lacinia nulla. Quisque in aliquam nisl. Maecenas faucibus est orci, non facilisis arcu vestibulum ut. Nulla congue dapibus sagittis. Pellentesque et lectus at ante convallis tristique vitae in dolor. Donec varius mauris id enim cursus ultrices. Sed a lobortis quam.",
            categoria : "Horror psicológico"
        }
    ]

function VideojuegosPage() {
    const categorias = ["FPS", "Horror psicológico"]
    const [listaVideojuegos, setListaVideojuegos] = useState(lista)

    // Queremos que la lista pueda cambiar según el filtro seleccionado, por eso creamos la función filtrar
    function filtrar(categoria) {
        if(categoria == "-1"){
            setListaVideojuegos(lista)
        }else{
            const listaVideojuegosModificado = lista.filter(function(vj){
            // la función filter se aplica a cada uno de los elementos de la lista, si el es verdadero el elemento queda en la nueva lista, si es falso se elimina
            return vj.categoria == categoria 
            // si su categoria es igual a la seleccionada, lo dejo pasar, si no lo es sale de la nueva lista
            })
            setListaVideojuegos(listaVideojuegosModificado)
        }   
    }

    return <div className="px-4">
        <Titulo />
        <Filtro categorias={categorias} onFiltro={filtrar}/>
        <hr className="mb-4" />
        <GrillaVideojuegos listaVideojuegos= {listaVideojuegos} />
    </div>
}

export default VideojuegosPage