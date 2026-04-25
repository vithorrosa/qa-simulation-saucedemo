describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })
// Permite testar cenários com usuário ou senha vazios sem tentar digitar campos inexistentes.
  function preencherLogin(usuario, senha) {
    if (usuario) {
      cy.get('[data-test="username"]').type(usuario)
    }

    if (senha) {
      cy.get('[data-test="password"]').type(senha)
    }

    cy.get('[data-test="login-button"]').click()
  }

  it('CT-001 - Deve realizar login com credenciais válidas', () => {
    preencherLogin('standard_user', 'secret_sauce')

    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('contain.text', 'Products')
  })

  it('CT-002 - Deve bloquear login com usuário bloqueado', () => {
    preencherLogin('locked_out_user', 'secret_sauce')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out.')
  })

  it('CT-003 - Deve exibir erro ao tentar login sem preencher usuário', () => {
    preencherLogin('', 'secret_sauce')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required')
  })

  it('CT-004 - Deve exibir erro ao tentar login sem preencher senha', () => {
    preencherLogin('standard_user', '')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Password is required')
  })

  it('CT-005 - Deve exibir erro ao tentar login com senha inválida', () => {
    preencherLogin('standard_user', 'senha_invalida')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service')
  })
})