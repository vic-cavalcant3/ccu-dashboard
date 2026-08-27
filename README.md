# 🛰️ C.C.U. Dashboard – Centro de Controle Unificado

Aplicação SPA em React para monitoramento de infraestrutura de rede (BGP/OSPF) e telemetria de viaturas de campo em tempo real, simulando um ambiente corporativo de operações.

---

## 📚 Objetivo do Projeto

Projeto desenvolvido como laboratório prático da disciplina de Fundamentos de Tecnologias Front-end (FFE), com foco em componentização, gerenciamento de estado, roteamento SPA e consumo assíncrono de dados via Fetch API.

## 🗺️ Funcionalidades

* **Monitoramento de Rede:** cards reativos exibindo status de protocolos (OSPF, BGP, Satélite BGAN), com simulação de queda/restabelecimento de conexão
* **Telemetria de Frota:** visualização animada (efeito parallax) da movimentação de viaturas, com velocidade controlada dinamicamente por dado externo
* **Navegação SPA:** troca de telas sem reload via React Router
* **Dados dinâmicos:** carregamento assíncrono via `fetch` de um JSON simulando uma API real

## 🛠️ Tecnologias Utilizadas

* React 18
* Vite
* Bootstrap 5
* React Router DOM

## 🌐 Como Rodar o Projeto

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## 🎓 Contexto Acadêmico

Laboratório 3 da disciplina FFE — Curso Técnico em ADS, SENAI.

## 🚀 Status do Projeto

🟢 Finalizado
