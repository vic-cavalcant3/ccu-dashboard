import { useState, useEffect } from 'react';
import '../telemetria.css';

export function Telemetria() {
  const [frota, setFrota] = useState([]);

  useEffect(() => {
    fetch('/dados.json')
      .then(resposta => resposta.json())
      .then(dados => setFrota(dados.veiculos));
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="text-secondary mb-4">Monitoramento de Frota em Campo</h4>

      <div className="row">
        {frota.map((veiculo) => (
          <div key={veiculo.id} className="col-12 col-xl-6 mb-4">
            <div className="card shadow-lg border-0 h-100">
              <div className="cenario">
                <div className="sol"></div>
                <div className="nuvens"></div>
                <div className="arvores">🌲🌳🌲🌳🌲🌳</div>

                <div
                  className="estrada"
                  style={{ animationDuration: veiculo.tempoAnimacao }}
                ></div>

                <div className="veiculo">🚓</div>
              </div>

              <div className="card-body bg-light">
                <h5 className="card-title text-primary">Viatura {veiculo.id}</h5>
                <p className="card-text text-muted mb-0">{veiculo.descricao}</p>
                <small className="text-muted fw-bold">
                  Velocidade (Update Rate): {veiculo.tempoAnimacao}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
