describe('Login - SauceDemo', () => {
    it('CT-001 - Deve realizar login com credenciais válidas', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
        cy.get('[data-test="title"]').should('contain', 'Products')
    })

    it('CT-002 - Deve bloquear login com usuário bloqueado', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry, this user has been locked out.')
    })
})
it('CT-003 - Deve exibir erro ao tentar login sem preencher usuário', () => {
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Username is required')
})
it('CT-004 - Deve exibir erro ao tentar login sem preencher senha', () => {
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="login-button"]').click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Password is required')
})
it('CT-005 - Deve exibir erro ao tentar login com senha inválida', () => {
  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('senha_invalida')
  cy.get('[data-test="login-button"]').click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain.text', 'Username and password do not match any user in this service')
})