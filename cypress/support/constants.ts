import { faker } from "@faker-js/faker";

export const consentCookie = {
  name: "borlabs-cookie",
  value: {
    consents: {
      essential: ["borlabs-cookie", "google-tag-manager"],
      statistics: ["google-analytics", "linkedin-insight-tag"],
      marketing: ["hubspot"],
      "external-media": ["googlemaps", "youtube"],
    },
    domainPath: "mostly.ai/",
    expires: "Fri, 15 Dec 2023 20:28:17 GMT",
    uid: "7j0msr2o-27gw62o4-gfv57d60-0iarli5b",
    version: "1",
  },
};

export const contactForm = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  mobilePhone: faker.phone.number(),
  company: faker.company.name(),
  country: "Lithuania",
  about: "LinkedIn",
  message: faker.lorem.word(),
};
