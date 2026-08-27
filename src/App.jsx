import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Redes } from './pages/Redes';
import { Telemetria } from './pages/Telemetria';

export function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand mb-0 h1">C.C.U. Dashboard</span>
        <div>
          <Link className="text-white me-3 text-decoration-none" to="/">Monitoramento de Rede</Link>
          <Link className="text-white text-decoration-none" to="/telemetria">Telemetria de Frota</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Redes />} />
        <Route path="/telemetria" element={<Telemetria />} />
      </Routes>
    </BrowserRouter>
  );
}
