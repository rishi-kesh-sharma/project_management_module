import { faker } from "@faker-js/faker";
import { createNSubTasks } from "./subTasks.js";
import { createNTimeTrackings } from "./timeTracking.js";

function createRandomTasks(value) {
  return {
    id: faker.string.uuid(),
    taskName: `Task ${value}`,
    createdBy: faker.person.fullName(),
    startDate: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Not Started",
      "On Progress",
      "Completed",
    ]),
    dueDate: faker.date.future(),
    subTasks: createNSubTasks(4),
    priority: faker.helpers.arrayElement(["Low", "Normal", "High"]),
    timeTrackings: createNTimeTrackings(20),
  };
}

const user = createRandomTasks();

const createNTasks = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomTasks(index + 1);
  });
  return data;
};

export { user, createRandomTasks, createNTasks };
