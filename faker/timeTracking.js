import { faker } from "@faker-js/faker";

function createRandomTimeTrackings(value) {
  return {
    trackingId: `Tracking No. ${value}`,
    startTime: faker.date.recent().getTime(),
    endTime: faker.date.recent().getTime(),
    createdBy: faker.person.fullName(),
    date: faker.date.recent(),
  };
}

const data = createRandomTimeTrackings();

const createNTimeTrackings = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomTimeTrackings(index + 1);
  });
  return data;
};

export { data, createRandomTimeTrackings, createNTimeTrackings };
