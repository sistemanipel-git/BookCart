/// <reference types="cypress" />
export function RegisterAPI() {
  cy.request({
    method: "POST",
    url: "https://bookcart.azurewebsites.net/api/User",
    body: {
      firstName: "Zzzz",
      lastName: "Zzzz",
      username: "Zzzz",
      password: "aA1234567",
      confirmPassword: "aA1234567",
      gender: "Male",
    },
  }).then((response) => {
    cy.log(response);
    cy.log(response.body);
    cy.log(response.status);
  });
}
