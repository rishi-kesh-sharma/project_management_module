import { faker } from "@faker-js/faker";

function createRandomHumanResource() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    fullName: faker.person.fullName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    role: faker.helpers.arrayElement([
      "frontend",
      "backend",
      "QA",
      "Project Manager",
    ]),
    allocatedEffort: faker.number.int(),
    startDate: faker.date.past(),
    endDate: faker.date.future(),
  };
}

const humanResource = createRandomHumanResource();

const createNHumanResources = (count) => {
  const data = Array.from(Array(count)).map(() => {
    return createRandomHumanResource();
  });
  return data;
};

export { humanResource, createRandomHumanResource, createNHumanResources };
