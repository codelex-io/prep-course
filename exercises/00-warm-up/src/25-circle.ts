export {};

function Circle(radius) {
  this.radius = radius;
  this.area = function() {};
  this.perimeter = function() {};
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
