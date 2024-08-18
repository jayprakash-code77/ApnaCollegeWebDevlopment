// Classes :- This is the best way to create the object.
class Car {
    constructor(brandName, color) {
        this.brandName = brandName;
        this.color = color
    }
    carInfo() {
        console.log(this.color+" car of "+this.brandName+" brand is created!");
    }
}

let c1 = new Car("BMW","Red");
console.log(c1.brandName);
console.log(c1.color);
c1.carInfo();

