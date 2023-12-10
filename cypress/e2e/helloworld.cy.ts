/* eslint-disable quotes */
/// <reference types="cypress" />

describe("template spec", () => {
    it("renders", () => {
        cy.visit("localhost:5173");

        cy.get('[data-test="titulo"]').should("be.visible");

        // I want previous two lines to run o a loop of n = 10
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="incremento"]').click();
            cy.get('[data-test="incremento"]').should(
                "have.text",
                `count is ${i + 1}`
            );
        }
    });
});
