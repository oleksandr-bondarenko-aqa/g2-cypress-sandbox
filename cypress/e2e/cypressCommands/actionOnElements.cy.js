it('action on elements', () => {
    cy.visit('http://localhost:8080/commands/actions');

    cy.get('#email1', {timeout: 1000})
        .type("qwe_qwe")
        .should('have.value', "qwe_qwe");

    cy.get('#email1')
        .clear()
        .type('S{leftArrow}E{leftArrow}{leftArrow}T{rightArrow}T'), {delay: 1000}
        // .type('{selectAll}{backspace}');

    cy.get('textarea[disabled="disabled"]').type('qweqwe', {force:true});

    cy.get('#password1')
        .focus()
        .prev()
        .should('have.attr', 'style')
        .and('eq', 'color: orange;')

    cy.get('#fullName1')
        .click()
        .blur()
        .prev()
        .should('have.attr', 'style')
        .and('eq', 'color: red;');


    // cy.get('#couponCode1')
    //     .type('some text')
    //     .closest('form')
    //     .submit()
    //     .siblings()
    //     .should('contain', 'Your form has been submitted!');
    //
    // cy.get('.action-form')
    //     .find('#couponCode1')
    //     .type('some text')
    //     .closest('form')
    //     .submit()
    //     .siblings()
    //     .should('contain', 'Your form has been submitted!');

    cy.get('div.well')
        .eq(4)
        .should('not.contain', 'Your form has been submitted!')
        .find('#couponCode1')
        .type('some text')
        .closest('form')
        .submit()
        .siblings()
        .should('contain', 'Your form has been submitted!');

    cy.get('#action-canvas').click(125, 125);
    cy.get('#action-canvas').click(15, 15);

    cy.get('.label.label-primary').click({multiple: true});

    cy.get('.btn.btn-lg.btn-primary').click({force: true});

    cy.get('.action-checkboxes [value="checkbox1"]')
        .should('not.be.checked')
        .check()
        .should('be.checked');

    cy.get('.action-checkboxes [value="checkbox2"]')
        .should('not.be.checked')
        .should('be.disabled')
        .check({force: true})
        .should('be.checked')
        .should('be.disabled');
})