import { faker } from "@faker-js/faker";

function createRandomBudgets(value) {
  return {
    id: faker.string.uuid(),
    taskName: ` Task ${value}`,
    totalBudget: faker.number.int(),
    lastUsed: faker.date.past(),
    budgetSpent: faker.number.int(),
  };
}

const user = createRandomBudgets();

const createNBudgets = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomBudgets(index + 1);
  });
  return data;
};

export { user, createRandomBudgets, createNBudgets };
