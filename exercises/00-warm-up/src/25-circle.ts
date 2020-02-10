export {};

function Circle(radius) {
  this.radius = radius;
  this.area = function(a) {return a=radius*radius*3.14};
  this.perimeter = function(a) {return a=radius*3.14*2};
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
