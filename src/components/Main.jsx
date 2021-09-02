import { LITERAL_TYPES } from '@babel/types'
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-secundary">
                <Link to={'/home'} className="navbar-brand">
                    <img src="images/logo.png" alt="Site"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"> 
                    </span>
                </button>

                <div id="menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link button type="button" to={'/'} class="btn btn-dark margin-left">Home  </Link>
                            
                        </li>
                        
                        <li>
                            <Link button type="button" to={'/sobre'} class="btn btn-dark margin-left">Sobre</Link>
                        </li>
                        <li>
                        <Link button type="button" to={'/fotos'} class="btn btn-dark margin-left">Fotos</Link>
                        </li>
                        <Link button type="button" to={'/contato'} class="btn btn-dark margin-left">Contatos</Link>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}


export const Footer = () => {
    return(
        <>
        <footer className="text-center bg-black">

            <p>Felipe Otavio RA11206</p>
        </footer>
        </>
    )
}

export const Banner = props => {
    return (
        <>
            <div id="banner">
             <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100"/>
            </div>
        </>
    )
}

export const Video = props => {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card">
                    <iframe width="100%" height="320" src={`http://youtube.com/embed/${props.video}`}></iframe>
                        <div className="card-body">
                            <h3>{props.titulo}</h3>
                        </div>
                </div>
            </div>
        </>
    )
}