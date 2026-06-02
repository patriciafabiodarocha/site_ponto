import { Link } from 'react-router-dom'
import logo from '../assets/cpe(ponto).png'

function Home() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="box-central">
        <Link to="/registro">
          <div className="btn">Registro</div>
        </Link>
        <Link to="/login">
          <div className="btn">Login</div>
        </Link>
      </div>
    </div>
  )
}

export default Home
