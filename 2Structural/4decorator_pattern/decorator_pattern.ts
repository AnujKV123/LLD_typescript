

// 4. Decorator pattern
//     blog: https://refactoring.guru/design-patterns/decorator
//     blog + code: https://medium.com/@vedantdbhamare/demystifying-the-decorator-design-pattern-in-typescript-with-coffee-brewing-c9d97a508b4e
//     blog + code: https://dev.to/jmalvarez/decorator-pattern-in-typescript-na5


class SimpleCoffee {
    cost() {
        return 5; // Base cost of a simple coffee
    }
    description() {
        return "Simple Coffee";
    }
}

class MilkDecorator {
    constructor(private coffee: SimpleCoffee) {}
    cost() {
        return this.coffee.cost() + 2; // Adding the cost of milk
    }
    description() {
        return `${this.coffee.description()}, Milk`;
    }
}

class SugarDecorator {
    constructor(private coffee: SimpleCoffee) {}
    cost() {
      return this.coffee.cost() + 1; // Adding the cost of sugar
    }
    description() {
      return `${this.coffee.description()}, Sugar`;
    }
}

class CaramelDecorator {
    constructor(private coffee: SimpleCoffee) {}
    cost() {
      return this.coffee.cost() + 3; // Adding the cost of caramel syrup
    }
    description() {
      return `${this.coffee.description()}, Caramel Syrup`;
    }
}

// Create a simple coffee
const coffee = new SimpleCoffee();
console.log(coffee.cost());
console.log(coffee.description());

// Add milk to the coffee
const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.cost());
console.log(coffeeWithMilk.description());

// Add sugar to the coffee with milk
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.cost());
console.log(coffeeWithMilkAndSugar.description());

// Add caramel syrup to the coffee with milk and sugar
const coffeeWithMilkSugarAndCaramel = new CaramelDecorator(coffeeWithMilkAndSugar);
console.log(coffeeWithMilkSugarAndCaramel.cost());
console.log(coffeeWithMilkSugarAndCaramel.description());