import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logoPreta from '../assets/cpe(ponto).png'
import menuAnimation from '../menuAnimation.js'

function Horario() {
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
                    <li> <Link to="/perfil" className="btnMenu">Perfil </Link> </li>
                    <li><Link to="/horario" className="btnMenu profile">Horários</Link></li>
                    <li><Link to="/usuario"className="btnMenu">Usuários</Link></li>
                </ul>
     
            </div>
          </nav>
          </div>

        <div id="flex">
        <main className="horario">
            <div className="caixaHorario">
            <div className="ribbon">
                <span>Membro</span>
                <span>Chegada</span>
                <span>Tempo</span>
                <span>Excluir</span>
            </div>

            <div className="conteudoHorario">
            <div className="primeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>

            <div className="primeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>

            <div className="primeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>

            <div className="primeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>

            <div className="primeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
            </div>
            </div>
        </main>
        </div>
        </header>
        </>
    )
}
export default Horario