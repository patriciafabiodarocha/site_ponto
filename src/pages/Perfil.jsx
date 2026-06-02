import { Link } from 'react-router-dom'
import logoBranca from '../assets/cpe(branco).png'

function Perfil() {
    return (
        <>
        <header>
                <div className="box-topo">
                  <Link to="/">
                    <img src={logoBranca} alt="Logo" />
                  </Link>
                </div>
        </header>
              <div className="box-lateral">
                <div className="container-lateral">
                  <Link to="/inicial">
                    <div className="btn-lateral">Home</div>
                  </Link>
                  <Link to="/perfil">
                  <div className="btn-lateral">Perfil</div>
                  </Link>
                  <div className="btn-lateral">Horário</div>
                  <div className="btn-lateral">Usuários</div>
                </div>
              </div>
                   <main className="conteudo-perfil">
        <h1>Meu perfil</h1>

        <section className="card-perfil">
          <h2>Dados do usuário</h2>

          <p><strong>Nome:</strong> Seu nome aqui</p>
          <p><strong>Email:</strong> Seu e-mail aqui</p>
          <p><strong>Cargo:</strong> Sua função aqui</p>
        </section>
      </main>
        </>
    )
}
export default Perfil