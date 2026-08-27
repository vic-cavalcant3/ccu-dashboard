import { useState, useEffect } from 'react';
import { CardStatus } from '../components/CardStatus';

export function Redes() {
  const [listaRedes, setListaRedes] = useState([]);

  useEffect(() => {
    fetch('/dados.json')
      .then(resposta => resposta.json())
      .then(dados => setListaRedes(dados.redes));
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-secondary">Monitoramento de Core</h4>
      <div className="row">
        <div className="col-12 col-md-6">
          {listaRedes.map(rede => (
            <CardStatus
              key={rede.id}
              protocolo={rede.protocolo}
              ip={rede.ip}
              statusInicial={rede.statusInicial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
