import { faker } from "@faker-js/faker";
import { createNTasks } from "./task.js";

function createRandomProjects(value) {
  return {
    id: faker.string.uuid(),
    projectName: `Project ${value}`,
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
    tasks: createNTasks(4),
    description: faker.lorem.words({ min: 20, max: 500 }),
  };
}

const user = createRandomProjects();

const createNProjects = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomProjects(index + 1);
  });
  return data;
};

export { user, createRandomProjects, createNProjects };
