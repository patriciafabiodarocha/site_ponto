import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logoPreta from '../assets/cpe(ponto).png'
import pesquisar from '../search.js'

function Usuario() {
    useEffect(() => {
        pesquisar();
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
                    <li> <Link to="/perfil" className="btnMenuMatheus profile">Perfil </Link> </li>
                    <li><Link to="/horario" className="btnMenuMatheus">Horários</Link></li>
                    <li><Link to="/usuario"className="btnMenuMatheus">Usuários</Link></li>
                </ul>
       
            </div>
          </nav>
          </div>

        <div id="flex">
        <main className="userMatheus">
        <h2>Gerenciamento de Usuários</h2>
        <input type="text" id="pesquisa" placeholder="Pesquisar..." /> <button>Buscar</button>
            <div className="userCaixaMatheus">
            <div className="userRibbon">
                <span>Membro</span>
                <span>Chegada</span>
                <span>Tempo</span>
                <span>Excluir</span>
            </div>
            
            <div className="userConteudoHorario">
            <ul id="userLista">
                <li>
            <div className="userPrimeiraLinha">
                <span>Mariana <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>João Silva <p>Desenvolvedor</p></span>
                <span className="btnHora">08:00</span>
                <span className="btnHora">2h 30m</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
            </ul>
            </div>
            </div>
        </main>
        </div>
        </header>
        </>
    )
}
export default Usuario