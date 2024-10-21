const { faker } = require('@faker-js/faker');

describe('User flow', () => {
const username = faker.person.firstName();
const password = '123qwe123';
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });
    it('should be executed the standard flow', () => {
        cy.get('#signin2').click();
        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(password);
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();


        cy.get('#login2').click();
        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#nameofuser').should('be.visible');

        cy.contains('.hrefch', 'Samsung galaxy s6').click();
        cy.contains('.btn', 'Add to cart').click();
        cy.get('#cartur').click();
        cy.contains('td', 'Samsung galaxy s6').should('be.visible')
    });
});