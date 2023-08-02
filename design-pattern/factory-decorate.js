// Product interface
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
}

// Concrete products
export class Shirt extends Product {
  constructor(name, price) {
    super(name, price);
  }
}

class Pants extends Product {
  constructor(name, price) {
    super(name, price);
  }
}

// Factory
export class ProductFactory {
  createProduct(type, name, price) {
    switch (type) {
      case "shirt":
        return new Shirt(name, price);
      case "pants":
        return new Pants(name, price);
      default:
        throw new Error("Invalid product type");
    }
  }
}

class ProductDecorator extends Product {
  constructor(product) {
    super(product.name, product.price);
    this.product = product;
  }

  getInfo() {
    this.product.getInfo();
  }
}

// Concrete decorators
export class DiscountedProduct extends ProductDecorator {
  constructor(product, discountPercentage) {
    super(product);
    this.discountPercentage = discountPercentage;
  }

  getInfo() {
    super.getInfo();
    const discountedPrice =
      this.price - (this.price * this.discountPercentage) / 100;
    console.log(`Discounted Price: $${discountedPrice}`);
  }
}

export class FreeShippingProduct extends ProductDecorator {
  constructor(product) {
    super(product);
  }

  getInfo() {
    super.getInfo();
    console.log("Free Shipping Available");
  }
}
