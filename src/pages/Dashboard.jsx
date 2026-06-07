import { Link } from 'react-router-dom'
import logoBranca from '../assets/cpe(branco).png'

function Dashboard() {
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
          <Link to="/horario">
            <div className="btn-lateral">Horário</div>
          </Link>
          <Link to="/usuario">
            <div className="btn-lateral">Usuários</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Dashboard
