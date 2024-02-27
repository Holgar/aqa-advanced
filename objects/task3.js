const car1 = {
  brand: 'Skoda',
  model: 'Kodiaq',
  year: 2021,
};

const car2 = {
  brand: 'Holda',
  model: 'Civic',
  owner: 'John Doe',
};

const car3 = { ...car1, ...car2 };
console.log(car3);
