import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logoPreta from '../assets/cpe(ponto).png'
import menuAnimation from '../menuAnimation.js'

function Perfil() {
    useEffect(() => {
        menuAnimation();
    }, []);

    return (
        <>
                <header className="header">
                  <div id="flex">
                  <nav className="nav">
                    <div className="logoPrincipal">
                        <Link to="/">
                          <img src={logoPreta} alt="Logo"/>
                        </Link>
                    </div>
        
                    <div className="menu">
                <ul>
                    <li> <Link to="/inicial" className="btnMenu">Inicial</Link> </li>
                    <li> <Link to="/perfil" className="btnMenu profile">Perfil </Link> </li>
                    <li><Link to="/horario" className="btnMenu">Horários</Link></li>
                    <li><Link to="/usuario"className="btnMenu">Usuários</Link></li>
                </ul>
                    </div>
                  </nav>
                  </div>
        
                <div id="flex">
                <main className="usuario">
                    <h2>Perfil do Usuário</h2>
                    <p>Bem-vindo ao seu perfil!</p>
                </main>
                </div>
                </header>
        </>
    )
}
export default Perfil