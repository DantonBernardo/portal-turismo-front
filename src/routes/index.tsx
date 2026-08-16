import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'

const routeTitles: Record<string, string> = {
  '/': 'Início',
  '/login': 'Login',
  '/explorar': 'Explorar',
  '/mapa': 'Mapa',
  '/conta': 'Minha Conta',
}

function PageTitle() {
  const location = useLocation()

  useEffect(() => {
    const label = routeTitles[location.pathname] ?? 'Página'
    document.title = `${label} • Portal do Turismo - Guarapuava`
  }, [location.pathname])

  return null
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/explorar" element={<Explorar />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/conta" element={<Conta />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
