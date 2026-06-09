import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import logoPreta from '../assets/cpe(ponto).png'
import menuAnimation from '../menuAnimation.js'

function Dashboard() {
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
                    <li><Link to="/inicial" className="btnMenu profile">Inicial</Link> </li>
                    <li><Link to="/perfil" className="btnMenu">Perfil </Link> </li>
                    <li><Link to="/horario" className="btnMenu">Horários</Link></li>
                    <li><Link to="/usuario"className="btnMenu">Usuários</Link></li>
                </ul>
     
            </div>
          </nav>
          </div>

        <div id="flex">
        <main className="inicial">
            <div className="caixaInicial">
            <div className="ribbon">
                <h2>Get Started!</h2>
            </div>

            <div className="conteudoInicial">
            <div className="secaoInicial">
              <b>Como alterar seu ponto</b>
            <p>Para registrar ou alterar seu ponto, acesse a aba <b>Horário</b> no menu principal.</p>
            <ol>
            <li>Selecione o dia desejado.</li>
            <li>Localize o horário que deseja modificar.</li>
            <li>Insira o novo horário de entrada, saída ou intervalo.</li>
            <li>Clique em <b>Salvar</b> para confirmar a alteração.</li>
            </ol>
            <p>Após salvar, as informações serão atualizadas no sistema e ficarão disponíveis para consulta. Em caso de dúvidas ou inconsistências nos registros, entre em contato com o administrador responsável.</p>
            </div>

            <div className="secaoInicial">
            <b>Como alterar um registro</b>
            <ol>
            <li>Acesse a página <b>Horário</b>.</li>
            <li>Escolha a data que deseja editar.</li>
            <li>Atualize os horários necessários.</li>
            <li>Clique em <b>Salvar Alterações</b>.</li>
            </ol>
            <p>⚠️ Verifique os horários antes de salvar. Alterações incorretas podem afetar o controle de frequência.</p>
            <p>Caso encontre algum problema, procure o responsável pelo sistema.</p>
            </div>
            </div>
            </div>
        </main>
        </div>
        </header>
    </>
  )
}

export default Dashboard
