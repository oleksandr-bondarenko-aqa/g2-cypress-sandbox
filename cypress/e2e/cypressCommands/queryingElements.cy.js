it('querying elements', () => {
    cy.visit('http://localhost:8080/commands/querying');

    cy.get('#query-btn').should('contain', 'Button');

    cy.get('.query-list').contains('banana').should('have.class', 'third');

    cy.contains('bananas').should('have.class', 'third');

    cy.contains('li', 'bananas').should('have.class', 'third');

    cy.get('li:contains("bananas")').should('have.class', 'third');

    cy.get('.query-form').within(() => {
        cy.get('#inputEmail').should('exist');
        cy.get('#inputPassword').should('exist');

        cy.get('.btn.btn-default').should('not.exist');
    })

    cy.root().should('contain', 'apples')
})

it('commands to find elements', function () {
    cy.visit('http://localhost:8080/commands/traversal');

    cy.get('ol.traversal-breadcrumb.breadcrumb').children('.active');

    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');

    cy.contains('John')
        .should('contain', 'John')
        .closest('table')
        .should('have.class', 'table');

    cy.get('.pagination.traversal-pagination')
        .find('a')
        .contains('4');

    cy.get('.traversal-ul')
        .contains('apples')
        .next()
        .should('contain', 'oranges')
        .next()
        .should('contain', 'bananas');

    cy.get('.traversal-next-all')
        .contains('apples')
        .nextAll()
        .should('have.length', '4');

    cy.get('.traversal-disabled button[type="button"]')
        .not('[disabled="disabled"]')
        .should('be.enabled');

    cy.get('.nav.nav-pills.traversal-pills li.active')
        .siblings()
        .should('have.length', 2);
});