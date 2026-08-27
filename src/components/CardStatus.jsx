import { useState } from 'react';

export function CardStatus({ protocolo, ip, statusInicial }) {
  const [status, setStatus] = useState(statusInicial);

  function alternarConexao() {
    if (status === 'UP') {
      setStatus('DOWN');
    } else {
      setStatus('UP');
    }
  }

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{protocolo}</h5>
        <p className="card-text text-muted mb-2">Target: {ip}</p>
        <span className={`badge ${status === 'UP' ? 'bg-success' : 'bg-danger'} mb-3`}>
          {status}
        </span>
        <div>
          <button
            className={`btn btn-sm ${status === 'UP' ? 'btn-outline-danger' : 'btn-outline-success'}`}
            onClick={alternarConexao}
          >
            {status === 'UP' ? 'Simular Queda' : 'Restabelecer'}
          </button>
        </div>
      </div>
    </div>
  );
}
