# Casos de Teste — Login

## CT-001 — Login com credenciais válidas

**Prioridade:** Alta  
**Tipo:** Funcional  
**Pré-condição:** Usuário deve estar na página de login.

### Massa de teste

- Usuário: standard_user
- Senha: secret_sauce

### Passos

1. Acessar a aplicação SauceDemo.
2. Preencher o campo usuário com `standard_user`.
3. Preencher o campo senha com `secret_sauce`.
4. Clicar no botão Login.

### Resultado esperado

O sistema deve autenticar o usuário e redirecionar para a página de produtos.

### Status

Pendente

---

## CT-002 — Login com usuário bloqueado

**Prioridade:** Alta  
**Tipo:** Funcional negativo  
**Pré-condição:** Usuário deve estar na página de login.

### Massa de teste

- Usuário: locked_out_user
- Senha: secret_sauce

### Passos

1. Acessar a aplicação SauceDemo.
2. Preencher o campo usuário com `locked_out_user`.
3. Preencher o campo senha com `secret_sauce`.
4. Clicar no botão Login.

### Resultado esperado

O sistema deve bloquear o acesso e exibir uma mensagem informando que o usuário está bloqueado.

### Status

Pendente

---

## CT-003 — Login sem preencher usuário

**Prioridade:** Média  
**Tipo:** Validação de campo obrigatório  
**Pré-condição:** Usuário deve estar na página de login.

### Massa de teste

- Usuário: vazio
- Senha: secret_sauce

### Passos

1. Acessar a aplicação SauceDemo.
2. Deixar o campo usuário vazio.
3. Preencher o campo senha com `secret_sauce`.
4. Clicar no botão Login.

### Resultado esperado

O sistema deve impedir o login e exibir mensagem informando que o usuário é obrigatório.

### Status

Pendente

---

## CT-004 — Login sem preencher senha

**Prioridade:** Média  
**Tipo:** Validação de campo obrigatório  
**Pré-condição:** Usuário deve estar na página de login.

### Massa de teste

- Usuário: standard_user
- Senha: vazio

### Passos

1. Acessar a aplicação SauceDemo.
2. Preencher o campo usuário com `standard_user`.
3. Deixar o campo senha vazio.
4. Clicar no botão Login.

### Resultado esperado

O sistema deve impedir o login e exibir mensagem informando que a senha é obrigatória.

### Status

Pendente