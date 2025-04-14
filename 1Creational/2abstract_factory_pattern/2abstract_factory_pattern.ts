


// 2. Abstract Factory pattern
//    blog: https://refactoring.guru/design-patterns/abstract-factory
//    blog + code: https://medium.com/@ibrahimsengun/typescript-abstract-factory-design-pattern-a229f64daea6#:~:text=Let's%20try%20to%20apply%20the,about%20their%20model%20and%20price.


// ************************************************************* product interface - 1

//product interface
interface IElectronic {
    product(): string;
}

//concrete product
class Computer implements IElectronic {

    protected price: number;
    protected model: string;
    constructor() {
        this.price = 0;
        this.model = "unknown";
    }
    product(): string {
        return `product model: ${this.model}\nproduct price: ${this.price}$`
    }
}

//final product A
class Laptop extends Computer {

    constructor() {
        super();
        this.price = 22;
        this.model = "Laptop";
    }
}

//final product B
class Desktop extends Computer {
    constructor() {
        super();
        this.model = "Desktop";
        this.price = 50;
    }
}

//Concrete Factory
class ElectronicFactory {
    public static getProduct(product: string): IElectronic {
        if (product == "Laptop") {
            return new Laptop();
        } else if (product == "Desktop") {
            return new Desktop();
        } else {
            throw new Error('Undefined Product');
        }
    }
}

export {
    IElectronic,
    ElectronicFactory
}

// ***************************************************************** Product Interface - 2

//Product Interface
interface IBeverage {
    product(): string
}
//Concrete Product
class Coffee implements IBeverage {

    protected price: number;
    protected model: string;
    constructor() {
        this.price = 0;
        this.model = "unknown";
    }
    product(): string {
        return `product model: ${this.model}\nproduct price: ${this.price}$`
    }
}

//Final Product A
class HotCoffee extends Coffee {

    constructor() {
        super();
        this.price = 5;
        this.model = "Hot Coffee";
    }
}

//Final Product B
class ColdCoffee extends Coffee {

    constructor() {
        super();
        this.price = 2;
        this.model = "Cold Coffee";
    }
}

//Concrete Factory
class BeverageFactory {
    public static getProduct(product: string): IBeverage {
        if (product == "Hot Coffee") {
            return new HotCoffee();
        } else if (product == "Cold Coffee") {
            return new ColdCoffee();
        } else {
            throw new Error('Undefined Product');
        }
    }
}

export {
    IBeverage,
    BeverageFactory
}

// ***************************************************************** Abstract Factory
// import { IBeverage } from "./beverage_factory";
// import { IElectronic } from "./electronic_factory";
// import { ElectronicFactory } from "./electronic_factory";
// import { BeverageFactory } from "./beverage_factory";

//Abstract Factory
interface ICategory extends IBeverage, IElectronic { }

//Client
class Store {
    static getProduct(product: string): ICategory {
        if (product == "Desktop" || product == "Laptop") {
            return ElectronicFactory.getProduct(product);
        } else if (product == "Hot Coffee" || product == "Cold Coffee") {
            return BeverageFactory.getProduct(product);
        } else {
            throw new Error('Invalid Product');
        }
    }
}

const laptop = Store.getProduct("Laptop");
console.log(laptop.product())

const desktop = Store.getProduct("Desktop");
console.log(desktop.product());

const hotCoffee = Store.getProduct("Hot Coffee");
console.log(hotCoffee.product());

const coldCoffee = Store.getProduct("Cold Coffee");
console.log(coldCoffee.product());

/*
product model: Laptop
product price: 22$

product model: Desktop
product price: 50$

product model: Hot Coffee
product price: 5$

product model: Cold Coffee
product price: 2$
*/