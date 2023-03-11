// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

let;

beforeEach(() => {
  cats = []; // initialize the cats array before each test case
});

it('appends a cat to the end of the cats array', () => {
  cats.push('Garfield');
  expect(cats[cats.length - 1]).toBe('Garfield');
});
