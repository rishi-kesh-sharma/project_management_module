import { faker } from "@faker-js/faker";

function createRandomEquipments(value) {
  return {
    id: faker.string.uuid(),
    equipmentName: `Equipment ${value}`,
    category: faker.helpers.arrayElement([
      "Software Licenses",
      "Cloud Services",
      "Subscriptions",
      "Digital Assets",
    ]),
    // subCategory: faker.helpers.arrayElement([
    //   "Operating Systems",
    //   "Cloud Storage",
    //   "Technical Support Services",
    //   "Design File",
    // ]),
    unitPrice: faker.commerce.price(),
    quantity: faker.number.int({
      min: 0,
      max: 100,
    }),
    totalPrice: faker.commerce.price(),
    status: faker.helpers.arrayElement(["Spare", "In-use", "Maintenance"]),
  };
}

const equipments = createRandomEquipments();

const createNEquipments = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomEquipments(index + 1);
  });
  return data;
};

export { equipments, createRandomEquipments, createNEquipments };
