export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.color = null;
        this.size = null;
    }

    setColor(color) {
        this.color = color;
    }

    setSize(size) {
        this.size = size;
    }

    clone() {
        let clone = new Product();
        clone.name = this.name;
        clone.price = this.price;
        clone.color = this.color;
        clone.size = this.size;

        return clone;
    }
}