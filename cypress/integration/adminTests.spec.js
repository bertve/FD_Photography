
describe('admin tests', () => {

    it('logintest', () => {
        cy.login();
    });


    it('login and map is visible', () => {
        cy.server();

        cy.route({
            method: 'GET',
            url: '/api/pins',
            status: 200,
            response: 'fixtures:pins.json'
        });
        cy.visit('/admin');
        cy.get('[data-cy=email]').type('frederic.dhondt@student.hogent.be');
        cy.get('[data-cy=password]').type('fredjeTheLegend');
        cy.get('[data-cy=loginButton').click();

        cy.get('[data-cy=map]').should('be.visible');
    });

    it('login with admin credentials and map is visible', () => {
        cy.server();


        cy.visit('/admin');
        cy.get('[data-cy=email]').type('frederic.dhondt@student.hogent.be');
        cy.get('[data-cy=password]').type('fredjeTheLegend');
        cy.get('[data-cy=loginButton').click();
        
        cy.get('[data-cy=map]').should('be.visible');
    });

    it('login with random credentials and map is not visible', () => {
        cy.server();

        cy.route({
            method: 'GET',
            url: '/api/pins',
            status: 200,
            response: 'fixtures:pins.json'
        });
        cy.visit('/admin');
        cy.get('[data-cy=email]').type('russianHacker@legal.com');
        cy.get('[data-cy=password]').type('noHacker');
        cy.get('[data-cy=loginButton').click();
        
        cy.get('[data-cy=map]').should('be.not.visible');
    });

});