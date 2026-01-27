function Titulo({onLogout}) {
    return <div className="text-4xl">
        <h1 className="text-4xl">Grilla de Videojuegos</h1>
        <button type="button" className="text-xs bg-orange-600 py-2 px-4 rounded-md text-white hover:bg-orange-200 hover:text-gray-700" onClick={function(){
            onLogout()
        }}>Logout</button>
        {/* Aqui lo ejecutas porque lo estás pasando como prop */}
    </div>
}
export default Titulo 