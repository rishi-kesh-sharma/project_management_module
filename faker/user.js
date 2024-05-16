import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    role: faker.helpers.arrayElement(["employee", "admin", "manager"]),
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

const user = createRandomUser();

const createNUsers = (count) => {
  const data = Array.from(Array(count)).map(() => {
    return createRandomUser();
  });
  return data;
};

export { user, createRandomUser, createNUsers };
