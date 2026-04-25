# Relatório de Execução — Login

## Objetivo

Registrar o resultado da execução manual dos testes da funcionalidade de login da aplicação SauceDemo.

## Ambiente

- Aplicação: SauceDemo
- URL: https://www.saucedemo.com/
- Navegador: Chrome
- Sistema operacional: Windows
- Executor: Vithor Rosa

## Escopo da execução

Foram executados os seguintes cenários:

- CT-001 — Login com credenciais válidas
- CT-002 — Login com usuário bloqueado
- CT-003 — Login sem preencher usuário
- CT-004 — Login sem preencher senha
- CT-005 — Login com senha inválida

## Resultado da execução

| Caso de teste | Cenário | Status | Evidência |
|---|---|---|---|
| CT-001 | Login com credenciais válidas | Passou | `evidencias/prints/CT-001-login-sucesso.png` |
| CT-002 | Login com usuário bloqueado | Passou | `evidencias/prints/CT-002-usuario-bloqueado.png` |
| CT-003 | Login sem preencher usuário | Passou | `evidencias/prints/CT-003-usuario-obrigatorio.png` |
| CT-004 | Login sem preencher senha | Passou | `evidencias/prints/CT-004-senha-obrigatoria.png` |
| CT-005 | Login com senha inválida | Passou | `evidencias/prints/CT-005-senha-invalida.png` |

## Resumo

| Total de casos | Passaram | Falharam | Bloqueados | Não executados |
|---|---:|---:|---:|---:|
| 5 | 5 | 0 | 0 | 0 |

## Bugs encontrados

Nenhum bug foi encontrado durante esta execução.

## Conclusão

A funcionalidade de login foi validada com sucesso nos cenários planejados. Os comportamentos observados estão de acordo com os resultados esperados definidos nos casos de teste.