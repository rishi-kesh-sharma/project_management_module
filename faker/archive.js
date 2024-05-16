import { faker } from "@faker-js/faker";

function createRandomArchivedProjects(value) {
  return {
    id: faker.string.uuid(),
    projectName: `Project ${value}`,
    createdBy: faker.date.past(),
    startDate: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Not Started",
      "On Progress",
      "Completed",
    ]),
    dueDate: faker.date.future(),
    priority: faker.helpers.arrayElement(["Low", "Normal", "High"]),
  };
}

const user = createRandomArchivedProjects();

const createNArchivedProjects = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomArchivedProjects(index + 1);
  });
  return data;
};

export { user, createRandomArchivedProjects, createNArchivedProjects };
