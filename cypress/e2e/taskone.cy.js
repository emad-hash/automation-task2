///  < reference types="cypress" /> 

Cypress.Commands.add("loginforTheUser",(username,password) => {

  cy.visit("https://saucedemo.com/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  
  cy.get('[data-test="login-button"]').click();
 });

 Cypress.Commands.add("additems",(number) => {
   for(let i = 0 ; i < number ; i++){
     cy.get(".btn").eq(i).click()
   }
 })
 
describe('template spec', () => {
 it('passes', () => {
   cy.loginforTheUser("standard_user","secret_sauce")
   cy.additems(2);
   cy.get('.shopping_cart_badge').invoke('text').should('include',"2")
   cy.get('.shopping_cart_link').click()
   cy.get('[data-test="checkout"]').click()
   cy.get('[data-test="firstName"]').type('emad')
   cy.get('[data-test="lastName"]').type('hashash')
   cy.get('[data-test="postalCode"]').type("123")
   cy.get('[data-test="continue"]').click()
   cy.get('[data-test="finish"]').click()
   cy.get('.complete-header').invoke('text').should('include','Thank you')
 });
});