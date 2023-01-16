import { registerUserTask } from "@pom";

export const createUserAndLoginTask = () => {
  const registeredUser = registerUserTask();

  const payload = {
    email: registeredUser.email,
    password: registeredUser.password,
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
