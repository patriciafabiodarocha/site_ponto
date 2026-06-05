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
              <Link to="/inicial" className="btnMenuMatheus">Inicial</Link>
              <Link to="/registro" className="btnMenuMatheus">Registro</Link>
              <Link to="/login" className="btnMenuMatheus">Login</Link>
              <Link to="/perfil" className="btnMenuMatheus profile">Perfil</Link>
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