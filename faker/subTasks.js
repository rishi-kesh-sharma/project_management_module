import { faker } from "@faker-js/faker";

function createRandomSubTasks(value) {
  return {
    id: faker.string.uuid(),
    subTaskName: ` Sub Task ${value}`,
    createdBy: faker.person.fullName(),
    startDate: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Not Started",
      "On Progress",
      "Completed",
    ]),
    dueDate: faker.date.future(),
    priority: faker.helpers.arrayElement(["Low", "Normal", "High"]),
    progress: faker.number.int({ max: 100, min: 0 }),
  };
}

const user = createRandomSubTasks();

const createNSubTasks = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomSubTasks(index + 1);
  });
  return data;
};

export { user, createRandomSubTasks, createNSubTasks };
