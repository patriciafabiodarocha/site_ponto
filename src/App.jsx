import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Perfil from './pages/Perfil.jsx'
import Horario from './pages/Horario.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/inicial" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/horario" element={<Horario />} />
    </Routes>
  )
}

export default App
