import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    _id: faker.string.uuid(),
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
  const users = Array.from(Array(count)).map(() => {
    return createRandomUser();
  });
  return users;
};

export { user, createRandomUser, createNUsers };
