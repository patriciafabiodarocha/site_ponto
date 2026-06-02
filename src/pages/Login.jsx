import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/cpe(ponto).png'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  function confirmar() {
    navigate('/inicial')
  }

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="box-central">
        <input
          className="inputInicial"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputInicial"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="btn" style={{ width: '110px', height: '35px' }} onClick={confirmar}>
          Confirmar
        </div>
      </div>
    </div>
  )
}

export default Login
