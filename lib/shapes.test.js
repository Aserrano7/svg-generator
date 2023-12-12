const { Circle, Square, Triangle } = require('./shapes');

test('Circle should render properly', () => {
  const circle = new Circle();
  circle.setColor('red');
  const svg = circle.render();
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="red"');
});

test('Square should render properly', () => {
  const square = new Square();
  square.setColor('blue');
  const svg = square.render();
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="blue"');
});

test('Triangle should render properly', () => {
  const triangle = new Triangle();
  triangle.setColor('green');
  const svg = triangle.render();
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="green"');
});
