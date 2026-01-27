import { useEffect, useState } from "react"
import Cabecera from "../components/cabecera"
import Formulario from "../components/Formulario"
import Mensaje from "../components/Mensaje"
import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
    const [mensajeVisible, setMensajeVisible] = useState(false)
    // Por defecto en falso porque quiero que no se vea

    const navigate = useNavigate()

    useEffect(function () { // Función que se ejecuta cuando se termine de renderizar mi página
        const datosLogin = localStorage.getItem("DATOS_LOGIN")
        if (datosLogin != null) {
            const login = JSON.parse(datosLogin)
            if (login.ingreso == true) {
                navigate("/main")
                return
            }
        }
    }, [])


    function login(correo, password) {
        if (correo == "miau" && password == "miau") {
            console.log("Login correcto")
            navigate("/main")

            // Si el login es correcto
            // const datosLogin ={ objeto javascript
            const datosLogin = {
                ingreso: true,
                correo: correo,
                cantidadIntentos: 0
            }
            // El API de localStorage solo almacena texto (strings)
            // Yo quiero almacenar la información del objeto datos_login
            localStorage.setItem("DATOS_LOGIN", JSON.stringify(datosLogin))

        } else {
            setMensajeVisible(true)

            // CantidadIntentos
            const datosLogin = localStorage.getItem("DATOS_LOGIN") /// función que puede devolver un dato o nulo
            if (datosLogin == null) {
                const login = {
                    ingreso: false,
                    cantidadIntentos: 1
                }
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            } else {
                const login = JSON.parse(datosLogin) // convierto el string en objeto nuevamente
                login.cantidadIntentos++
                localStorage.setItem("DATOS_LOGIN", JSON.stringify(login))
            }
        }
    }

    return <div className="flex justify-center">
        <div className="border-2 rounded-lg border-gray-300 shadow-md p-4">
            <Cabecera />
            <Formulario onLogin={login} />
            <Mensaje msg={"Login error"} visible={mensajeVisible} />
            {/* <Link className="mt-10 bg-orange-600 w-full rounded-full px-4 py-2 text-white" to={"/main"}>Accede sin Login</Link> */}
        </div>
    </div>
}

export default LoginPage