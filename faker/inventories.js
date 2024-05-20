import { faker } from "@faker-js/faker";

function createRandomInventories() {
  return {
    id: faker.string.uuid(),
    itemName: faker.commerce.product(),
    category: faker.helpers.arrayElement([
      "Software Licenses",
      "Cloud Services",
      "Subscriptions",
      "Digital Assets",
    ]),
    subCategory: faker.helpers.arrayElement([
      "Operating Systems",
      "Cloud Storage",
      "Technical Support Services",
      "Design File",
    ]),
    unitPrice: faker.commerce.price(),
    quantity: faker.number.int(),
    totalPrice: faker.commerce.price(),
  };
}

const inventories = createRandomInventories();

const createNInventories = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomInventories(index + 1);
  });
  return data;
};

export { inventories, createRandomInventories, createNInventories };
