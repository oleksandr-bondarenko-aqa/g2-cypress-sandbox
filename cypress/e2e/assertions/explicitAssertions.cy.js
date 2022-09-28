it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('.table.table-bordered.assertion-table tr').eq(3).then(field => {
        expect(field).to.have.class('success');
        expect(field).to.have.attr('class');
        expect(field).to.contain('Column content');
        expect(field).to.not.contain('classfwfwf');

        expect(field.attr('class')).to.eq('success'); // ===
        expect(field.attr('class')).to.equal('success'); // ===
        expect(field.attr('class')).to.equals('success'); // === all are the same

        expect(field.attr('class')).to.eql('success'); // ==
        expect(field.attr('class')).to.eqls('success'); // ==

        const obj = {
            key: 'Olex',
            keyObj: {
                key2: '1'
            }
        }

        const obj2 = {
            key: 'Olex',
            keyObj: {
                key2: '1'
            }
        }

        const obj3 = obj;

        // expect(obj).eq(obj2) // fails
        expect(obj).eq(obj3) // succeeds
        expect(obj).eqls(obj2) // succeeds

        cy.get('.table.table-bordered.assertion-table tr th').eq(5).then(cell => {
            expect(cell).to.contain('3');
            expect(parseFloat(cell.text())).to.be.greaterThan(2);
        })
    })
})