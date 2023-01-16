import { user } from "@constants";

export const registerUserTask = () => {
  const userData: User = {
    email: user.email,
    password: user.password,
    passwordRepeat: user.password,
    securityQuestion: {
      id: 12,
      question: "Your favorite movie?",
      createdAt: "2023-01-11T10:02:36.121Z",
      updatedAt: "2023-01-11T10:02:36.121Z",
    },
    securityAnswer: user.securityAnswer,
  };

  cy.request({
    method: "POST",
    url: "/api/Users/",
    body: userData,
  }).then((response) => {
    expect(response.status).to.eq(201);
  });

  return userData;
};

export interface User {
  email: string;
  password: string;
  passwordRepeat: string;
  securityQuestion: SecurityQuestion;
  securityAnswer: string;
}

export interface SecurityQuestion {
  id: number;
  question: string;
  createdAt: string;
  updatedAt: string;
}
