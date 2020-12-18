/*global cy*/
describe('User App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="username"]')
    const emailInput =() => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"')
    const submitBtn = () => cy.get('button[id="submitBtn"]')
    const checkboxInput = () => cy.get('input[type="checkbox"]')
    

    it('Do elements exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        submitBtn().should('exist')
        checkboxInput().should('exist')
        
     })

     describe('Does everything work can it be typed in or check and submited', () => {
         it('Can name be typed in',() => {
             nameInput()
                .should('have.value', '')
                .type('Chase')
                .should('have.value', 'Chase')
         })
         it('Can email be typed in', () => {
             emailInput()
                .should('have.value', '')
                .type('blah@email.com')
                .should('have.value', 'blah@email.com')
         })
         it('Can a password be type', () => {
             passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
         })
         it('terms box is checkable and working',() => {
            checkboxInput()
                .check()
                .should('be.checked')
         })
         it('Does submit button submit',() => {
            nameInput().type('Chase')
            emailInput().type('blah@email.com')
            passwordInput().type('password')
            checkboxInput().check()
            submitBtn().click()
         })
         it('Does a submit an Form exist',() => {
            nameInput().type('Chase')
            emailInput().type('blah@email.com')
            passwordInput().type('password')
            checkboxInput().should('not.be.checked')
            checkboxInput().check().should('be.checked')
            submitBtn().click()
            checkboxInput().uncheck().should('not.be.checked')
            cy.contains(/Chase/).should('not.exist')
            cy.contains(/blah@email.com/).should('exist')
            cy.contains(/password/).should('exist')
            
             
         })
         
         it('Do errors work', () => {
             
             nameInput().type('C')
             emailInput().type('blah')
             passwordInput().type('pa')
             checkboxInput().should('not.be.checked')
             checkboxInput().check().should('be.checked')
             
            
             
         })


     })

     


})