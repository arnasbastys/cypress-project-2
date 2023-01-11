import { faker } from "@faker-js/faker";

export const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  mobilePhone: faker.phone.number(),
  company: faker.company.name(),
  country: "Lithuania",
  securityAnswer: "Batman",
  message: faker.lorem.word(),
  password: faker.internet.password(),
};
