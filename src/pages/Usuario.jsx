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
                    <li><Link to="/horario" className="btnMenu">Horários</Link></li>
                    <li><Link to="/usuario"className="btnMenu profile">Usuários</Link></li>
                </ul>
       
            </div>
          </nav>
          </div>

        <div id="flex">
        <main className="user">
        <h2>Gerenciamento de Usuários</h2>
        <input type="text" id="pesquisa" placeholder="Pesquisar..." /> <button>Buscar</button>
            <div className="userCaixa">
            <div className="userRibbon">
                <span>Membro</span>
                <span>Cargo</span>
                <span>Usuário</span>
                <span>Excluir</span>
            </div>
            
            <div className="userConteudoHorario">
            <ul id="userLista">
                <li>
            <div className="userPrimeiraLinha">
                <span>Mariana</span>
                <span>Desenvolvedor</span>
                <span>Administrador</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>João</span>
                <span>Desenvolvedor</span>
                <span>Comum</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>Pedro</span>
                <span>Comercial</span>
                <span>Administrador</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>Mariana</span>
                <span>Desenvolvedor</span>
                <span>Administrador</span>
                <button className="btnExcluir">Excluir</button>
            </div>
                </li>
                <li>
            <div className="userPrimeiraLinha">
                <span>Mariana</span>
                <span>Desenvolvedor</span>
                <span>Administrador</span>
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