describe("Multiple dog listing", function(){
    before(() => {
        cy.exec("npm run seed");
    });
    beforeEach(() => {
        cy.visit("/dogs");
    });
    it("should list dogs correctly", () => {
        cy.url().should("include", "/dogs");
        cy.get(".dogs li").should("have.length", 3);
        cy.get(".dogs li:nth-child(2) .name").should("have.text", "Mesa");
        cy.get(".dogs li:nth-child(2) .profile-picture").should("have.attr", "alt", "Mesa");
        cy.get(".dogs li:nth-child(2) .profile-picture").should("have.attr", "src", "/images/mesa.jpg");
    });
});

describe("Single dog listing", function(){
    before(() => {
        cy.exec("npm run seed");
    });
    beforeEach(() => {
        cy.visit("/dogs");
        cy.get(".dogs li:nth-child(2) a").click();
    });
    it("should list a single dog correctly", () => {
        cy.url().should("include", "/dogs/2");
        cy.get(".dog").should("exist");
        cy.get(".dog .name").should("have.text", "Mesa");
        cy.get(".dog .profile-picture").should("have.attr", "alt", "Mesa");
        cy.get(".dog .profile-picture").should("have.attr", "src", "/images/mesa.jpg");
        cy.get(".dog .bio").should("have.text", "Want to play catch?");
    });
});

describe("Adding a dog", function(){
    before(() => {
        cy.exec("npm run seed");
    });
    beforeEach(() => {
        cy.visit("/dogs");
        cy.get(".add").click();
    });
    it("should submit a dog", () => {
        cy.url().should("include", "/dogs/new");

        cy.get("form").should("exist");
        cy.get("form input[name='name']").should("exist");
        cy.get("form input[name='profile-picture']").should("exist");
        cy.get("form input[name='bio']").should("exist");
        cy.get("form input[type='submit']").should("exist");

        cy.get("form input[name='name']").type("Kiki");
        cy.get("form input[name='profile-picture']").type("images/kiki.jpg");
        cy.get("form input[name='bio']").type("I'm pretty hott stuff, and everyone should know it.");
        cy.get("form input[type='submit']").click();

        cy.url().should("not.include", "/dogs/new");
        cy.url().should("include", "/dogs");

        cy.get(".dogs li:last-child .name").should("have.text", "Kiki");
        cy.get(".dogs li:last-child .profile-picture").should("have.attr", "alt", "Kiki");
        cy.get(".dogs li:last-child .profile-picture").should("have.attr", "src", "/images/kiki.jpg");
    });
});
