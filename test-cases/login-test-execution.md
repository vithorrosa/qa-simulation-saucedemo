# Execução de Testes — Login

## Informações da execução

**Projeto:** SauceDemo  
**Funcionalidade:** Login  
**Executor:** Vithor Rosa  
**Data:** 2026-04-24  
**Ambiente:** Web  
**Navegador:** Chrome  
**Sistema operacional:** Windows  

---

## Resumo da execução

| Total de casos | Passaram | Falharam | Bloqueados | Não executados |
|---|---:|---:|---:|---:|
| 5 | 5 | 0 | 0 | 0 |

---

## Execução dos casos

### CT-001 — Login com credenciais válidas

**Status:** Passou  
**Resultado obtido:** O sistema autenticou o usuário e redirecionou para a página de produtos.  
**Evidência:** evidencias/prints/CT-001-login-sucesso.png  

---

### CT-002 — Login com usuário bloqueado

**Status:** Passou  
**Resultado obtido:** O sistema exibiu mensagem informando que o usuário está bloqueado e não permitiu o acesso.  
**Evidência:** evidencias/prints/CT-002-login-bloqueado.png  

---

### CT-003 — Login sem preencher usuário

**Status:** Passou  
**Resultado obtido:** O sistema exibiu corretamente a mensagem de campo obrigatório para usuário.  
**Evidência:** evidencias/prints/CT-003-login-usuario-obrigatorio.png  

---

### CT-004 — Login sem preencher senha

**Status:** Passou  
**Resultado obtido:** O sistema exibiu corretamente a mensagem de campo obrigatório para senha.  
**Evidência:** evidencias/prints/CT-004-login-senha-obrigatoria.png  

---

### CT-005 — Login com senha inválida

**Status:** Passou  
**Resultado obtido:** O sistema exibiu corretamente a mensagem de credenciais inválidas.  
**Evidência:** evidencias/prints/CT-005-login-senha-invalida.png  
