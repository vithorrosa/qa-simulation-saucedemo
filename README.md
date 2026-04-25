# QA Simulation — SauceDemo

## Sobre o projeto

Este repositório simula a rotina real de um QA Júnior em um projeto de e-commerce.

O objetivo é praticar atividades de qualidade de software, incluindo planejamento de testes, criação de casos de teste, execução manual, registro de evidências, documentação de bug report e automação de testes E2E com Cypress.

## Aplicação testada

- Aplicação: SauceDemo
- URL: https://www.saucedemo.com/
- Tipo: E-commerce de demonstração

## Funcionalidades testadas

- Login

## Testes manuais

A funcionalidade de login foi testada manualmente com os seguintes cenários:

- CT-001 — Login com credenciais válidas
- CT-002 — Login com usuário bloqueado
- CT-003 — Login sem preencher usuário
- CT-004 — Login sem preencher senha
- CT-005 — Login com senha inválida

Documentos relacionados:

```text
docs/plano-de-teste.md
test-cases/login-test-cases.md
test-cases/login-test-execution.md
docs/relatorio-execucao-login.md
```

## Evidências

As evidências da execução manual estão organizadas em:

```text
evidencias/prints/
├── CT-001-login-sucesso.png
├── CT-002-usuario-bloqueado.png
├── CT-003-usuario-obrigatorio.png
├── CT-004-senha-obrigatoria.png
└── CT-005-senha-invalida.png
```

## Bug report

Foi criado um modelo de bug report para simular a documentação de defeitos em um fluxo real de QA:

```text
bug-reports/BUG-001-login-usuario-bloqueado.md
```

## Testes automatizados

Os testes automatizados foram implementados com Cypress.

Arquivo principal:

```text
cypress/e2e/login.cy.js
```

Cenários automatizados:

- CT-001 — Login com credenciais válidas
- CT-002 — Login com usuário bloqueado
- CT-003 — Login sem preencher usuário
- CT-004 — Login sem preencher senha
- CT-005 — Login com senha inválida

## Tecnologias e ferramentas

- Git
- GitHub
- Markdown
- JavaScript
- Cypress
- Node.js

## Como executar o projeto

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

## Status atual

- Plano de teste criado
- Casos de teste de login documentados
- Execução manual realizada
- Evidências salvas
- Relatório de execução criado
- Bug report/modelo criado
- Testes automatizados de login implementados
- Refatoração inicial dos testes realizada

## Próximos passos

- Criar casos de teste para carrinho
- Executar testes manuais do carrinho
- Registrar evidências do fluxo de carrinho
- Automatizar testes de carrinho com Cypress
- Criar relatório de execução do carrinho

## Autor

Vithor Rosa
