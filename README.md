# Projeto Front-end – Visualização de Pedidos

Este projeto é a interface web para visualização e manipulação de pedidos a partir de um arquivo CSV.

Desenvolvido com:

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Fetch API

---

# 📁 Estrutura do Projeto

```powershell
frontend/
│
├── data/
│ └── pedidos.csv
│
├── js/
│ ├── model.js
│ ├── view.js
│ └── controller.js
│
└── index.html
```

---

# ⚠️ IMPORTANTE

Este projeto utiliza `fetch()` para leitura do arquivo CSV.

Por questões de segurança do navegador (CORS policy), o arquivo **não pode ser aberto com duplo clique (file://frontend)**.

É necessário executar um servidor local simples.

# Clonar o repositório

```bash

```

# ▶️ Como Executar

## ✅ Opção mais simples (recomendada)

Se você possui Python instalado:

Dentro da pasta do projeto, execute:

```bash
python -m http.server 5500
```
Depois acesse no navegador:

```bash
http://localhost:5500/frontend
```
## Alternativa (VS Code)

Se estiver usando VS Code:

Instale a extensão Live Server

Clique com botão direito no index.html

Selecione Open with Live Server

## Funcionalidades

Leitura dinâmica do CSV

Parsing manual dos dados

Normalização de valores numéricos

Cálculo automático do total

Estrutura modular (Model / View / Controller)

Separação de responsabilidades

Código organizado para fácil manutenção

# Autor
Desenvolvido como parte de avaliação técnica para vaga de Analista de TI por Weverton Guimarães.