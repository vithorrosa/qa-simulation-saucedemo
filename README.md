# 🧪 QA Simulation — SauceDemo

> Simulação prática da rotina de um QA Júnior testando um e-commerce com testes manuais, evidências, bug report e automação E2E com Cypress.

---

## 📌 Sobre o projeto

Este repositório simula um fluxo real de trabalho de QA em uma aplicação de e-commerce.

O objetivo é praticar atividades comuns na rotina de um QA Júnior, incluindo:

- Planejamento de testes
- Criação de casos de teste
- Execução manual
- Registro de evidências
- Documentação de bug report
- Relatório de execução
- Automação de testes E2E com Cypress
- Versionamento com Git e GitHub

---

## 🌐 Aplicação testada

| Item | Informação |
|---|---|
| Aplicação | SauceDemo |
| URL | https://www.saucedemo.com/ |
| Tipo | E-commerce de demonstração |
| Objetivo | Praticar testes funcionais e automação E2E |

---

## ✅ Funcionalidades testadas

| Funcionalidade | Status |
|---|---|
| Login | Concluído |
| Carrinho | Próximo passo |
| Checkout | Próximo passo |

---

## 🧾 Testes manuais

A funcionalidade de login foi testada manualmente com os seguintes cenários:

| ID | Cenário | Status |
|---|---|---|
| CT-001 | Login com credenciais válidas | Passou |
| CT-002 | Login com usuário bloqueado | Passou |
| CT-003 | Login sem preencher usuário | Passou |
| CT-004 | Login sem preencher senha | Passou |
| CT-005 | Login com senha inválida | Passou |

### 📄 Documentos relacionados

```text
docs/plano-de-teste.md
test-cases/login-test-cases.md
test-cases/login-test-execution.md
docs/relatorio-execucao-login.md
```

---

## 🖼️ Evidências

As evidências da execução manual estão organizadas em:

```text
evidencias/prints/
├── CT-001-login-sucesso.png
├── CT-002-usuario-bloqueado.png
├── CT-003-usuario-obrigatorio.png
├── CT-004-senha-obrigatoria.png
└── CT-005-senha-invalida.png
```

### 🔗 Links das evidências

| Caso de teste | Evidência |
|---|---|
| CT-001 | [Login com sucesso](evidencias/prints/CT-001-login-sucesso.png) |
| CT-002 | [Usuário bloqueado](evidencias/prints/CT-002-usuario-bloqueado.png) |
| CT-003 | [Usuário obrigatório](evidencias/prints/CT-003-usuario-obrigatorio.png) |
| CT-004 | [Senha obrigatória](evidencias/prints/CT-004-senha-obrigatoria.png) |
| CT-005 | [Senha inválida](evidencias/prints/CT-005-senha-invalida.png) |

---

## 🐞 Bug report

Foi criado um modelo de bug report para simular a documentação de defeitos em um fluxo real de QA.

```text
bug-reports/BUG-001-login-usuario-bloqueado.md
```

> Observação: o comportamento do usuário bloqueado foi validado como esperado. O arquivo foi mantido como prática de documentação de bug report.

---

## 🤖 Testes automatizados

Os testes automatizados foram implementados com Cypress.

Arquivo principal:

```text
cypress/e2e/login.cy.js
```

### Cenários automatizados

| ID | Cenário |
|---|---|
| CT-001 | Login com credenciais válidas |
| CT-002 | Login com usuário bloqueado |
| CT-003 | Login sem preencher usuário |
| CT-004 | Login sem preencher senha |
| CT-005 | Login com senha inválida |

---

## 🛠️ Tecnologias e ferramentas

| Ferramenta | Uso |
|---|---|
| Git | Controle de versão |
| GitHub | Versionamento remoto e portfólio |
| Markdown | Documentação |
| JavaScript | Linguagem dos testes automatizados |
| Cypress | Automação E2E |
| Node.js | Ambiente de execução |

---

## 📁 Estrutura do projeto

```text
qa-simulation-saucedemo/
├── bug-reports/
│   └── BUG-001-login-usuario-bloqueado.md
├── cypress/
│   └── e2e/
│       └── login.cy.js
├── docs/
│   ├── plano-de-teste.md
│   └── relatorio-execucao-login.md
├── evidencias/
│   └── prints/
│       ├── CT-001-login-sucesso.png
│       ├── CT-002-usuario-bloqueado.png
│       ├── CT-003-usuario-obrigatorio.png
│       ├── CT-004-senha-obrigatoria.png
│       └── CT-005-senha-invalida.png
├── test-cases/
│   ├── login-test-cases.md
│   └── login-test-execution.md
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/vithorrosa/qa-simulation-saucedemo.git
```

Entre na pasta do projeto:

```bash
cd qa-simulation-saucedemo
```

Instale as dependências:

```bash
npm install
```

Execute os testes automatizados em modo headless:

```bash
npx cypress run
```

Ou abra a interface do Cypress:

```bash
npx cypress open
```

---

## 📊 Status atual

| Entrega | Status |
|---|---|
| Plano de teste | Concluído |
| Casos de teste de login | Concluído |
| Execução manual | Concluído |
| Evidências | Concluído |
| Bug report/modelo | Concluído |
| Relatório de execução | Concluído |
| Automação Cypress de login | Concluído |
| Refatoração inicial dos testes | Concluído |

---

## 🚀 Próximos passos

- Criar casos de teste para carrinho
- Executar testes manuais do carrinho
- Registrar evidências do fluxo de carrinho
- Automatizar testes de carrinho com Cypress
- Criar relatório de execução do carrinho
- Configurar GitHub Pages para apresentação do projeto

---

## 👨‍💻 Autor

**Vithor Rosa**

Projeto desenvolvido como prática de QA Manual e Automação de Testes.
