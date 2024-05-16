import { faker } from "@faker-js/faker";
import { createNProjects } from "./project.js";

function createRandomWorkspaces(value) {
  return {
    id: faker.string.uuid(),
    workspaceName: `My Workspace ${value}`,
    projects: createNProjects(6),
  };
}

const user = createRandomWorkspaces();

const createNWorkspaces = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomWorkspaces(index + 1);
  });
  return data;
};

export { user, createRandomWorkspaces, createNWorkspaces };
