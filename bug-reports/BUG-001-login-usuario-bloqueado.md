# BUG-001 — Usuário bloqueado não deve acessar o sistema

## Resumo

Ao tentar realizar login com um usuário bloqueado, o sistema deve impedir o acesso e exibir uma mensagem de erro clara.

## Ambiente

- Aplicação: SauceDemo
- URL: https://www.saucedemo.com/
- Navegador: Chrome
- Sistema operacional: Windows
- Data da execução: 2026-04-24

## Pré-condição

Usuário deve estar na página de login da aplicação.

## Massa de teste

- Usuário: locked_out_user
- Senha: secret_sauce

## Passos para reproduzir

1. Acessar a aplicação SauceDemo.
2. Preencher o campo Username com `locked_out_user`.
3. Preencher o campo Password com `secret_sauce`.
4. Clicar no botão Login.

## Resultado esperado

O sistema deve bloquear o acesso do usuário e exibir mensagem informando que o usuário está bloqueado.

## Resultado obtido

O sistema exibiu mensagem informando que o usuário está bloqueado.

## Evidência

- `evidencias/prints/CT-002-usuario-bloqueado.png`

## Severidade

Média

## Prioridade

Alta

## Status

Comportamento esperado validado. Não é bug real nesta execução.

## Observação

Este arquivo foi criado como simulação de bug report para prática de documentação QA.