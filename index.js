class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class Shape {
  constructor(position) {
    this.position = position;
  }

  addToPlane(x, y) {
    this.position = new Point(x, y)
  }

  move(x, y) {
    this.position = new Point(x, y)
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  area() {
    return (Math.PI * this.radius ^ 2)
  }
  circumference() {
    return (2 * Math.PI * this.radius)
  }

  diameter() {
    return 2 * this.radius
  }
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Polygon extends Shape {
  constructor(sides) {
    super()
    this.sides = sides
  }

  perimeter() {
    return this.sides.map(side => {
      return side.length
    }).reduce((sum, value) => sum + value, 0)
  }

  numberOfSides() {
    return this.sides.length
  }
}

class Quadrilateral extends Polygon {
  constructor(sideA, sideB, sideC, sideD) {
    super()
    this.sides = [new Side(sideA), new Side(sideB), new Side(sideC), new Side(sideD)]
  }
}

class Triangle extends Polygon {
  constructor(sideA, sideB, sideC) {
    super()
    this.sides = [new Side(sideA), new Side(sideB), new Side(sideC)]
  }
}

class Rectangle extends Quadrilateral {
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
    this.sides = [new Side(width), new Side(width), new Side(height), new Side(height)]
  }

  area() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(length) {
    super()
    this.length = length
    this.width = length
    this.height = length
    this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]

  }

  listProperties() {}
}
