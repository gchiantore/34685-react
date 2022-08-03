import "./Error404.css"
const Error404=()=>{
    return(
        <div className="container centrado">
            <h4>Error</h4>
            <h1 className="grande">404</h1>
            <h2>Ups! la pagina que buscas no existe</h2>
            <img src="/assets/images/emoticon-triste.png" className="emoji" alt="Que pena" />
        </div>
    )
}

export default Error404;