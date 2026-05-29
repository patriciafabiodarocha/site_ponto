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
          <div className="btn-lateral">Horário</div>
          <div className="btn-lateral">Usuários</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
