import { faker } from "@faker-js/faker";

function createRandomBookmarkedProjects(value) {
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

const user = createRandomBookmarkedProjects();

const createNBookmarkedProjects = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomBookmarkedProjects(index + 1);
  });
  return data;
};

export { user, createRandomBookmarkedProjects, createNBookmarkedProjects };
