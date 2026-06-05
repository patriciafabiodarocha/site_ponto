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
                <header className="headerMatheus">
                  <div id="flex">
                  <nav className="navMatheus">
                    <div className="logoMatheus">
                        <Link to="/">
                          <img src={logoPreta} alt="Logo"/>
                        </Link>
                    </div>
        
                    <div className="menuMatheus">
                <ul>
                     <li> <Link to="/inicial" className="btnMenuMatheus">Inicial</Link> </li>
                     <li> <Link to="/registro" className="btnMenuMatheus">Registro</Link> </li>
                     <li> <Link to="/login" className="btnMenuMatheus">Login</Link> </li>
                    <li>
                        <Link to="/perfil" className="btnMenuMatheus profile">Perfil +</Link>
                <ul>
                  <li><Link to="/horario">Horários</Link></li>
                  <li><Link to="/usuario">Usuários</Link></li>
                </ul>
              </li>
              </ul>
                    </div>
                  </nav>
                  </div>
        
                <div id="flex">
                <main className="usuarioMatheus">
                    <h2>Perfil do Usuário</h2>
                    <p>Bem-vindo ao seu perfil!</p>
                </main>
                </div>
                </header>
        </>
    )
}
export default Perfil