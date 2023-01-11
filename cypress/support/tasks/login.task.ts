import { createUser } from "./createUser.task";

export const createUserAndlogin = () => {
  const createdUser = createUser();

  const payload = {
    email: createdUser.email,
    password: createdUser.password,
  };

  cy.request({
    method: "POST",
    url: "/rest/user/login",
    body: payload,
  }).then((response) => {
    const token = response.body.authentication.token;
    expect(response.status).to.eq(200);
    cy.setCookie("token", token);
    window.localStorage.setItem("token", token);
  });
};
