

// 3. Builder pattern
//     blog: https://refactoring.guru/design-patterns/builder
//     blog + code: https://medium.com/kristiyan-velkov/design-pattern-builder-typescript-examples-c2202beb5fa7
//     blog + code: https://medium.com/@filipdimitrijeski7/builder-pattern-in-typescript-a7787d180dfc

// Product (House)
class House {
    public walls: string;
    public roof: string;
    public windows: number;
    public doors: number;
  
    constructor() {
      this.walls = '';
      this.roof = '';
      this.windows = 0;
      this.doors = 0;
    }
  
    public displayInfo() {
      console.log(`
        House Specifications:
        Walls: ${this.walls}
        Roof: ${this.roof}
        Windows: ${this.windows}
        Doors: ${this.doors}
      `);
    }
  }
  
  // Abstract Builder
  interface HouseBuilder {
    buildWalls(): void;
    buildRoof(): void;
    buildWindows(): void;
    buildDoors(): void;
    getHouse(): House;
  }
  
  // Concrete Builder 1: SimpleHouseBuilder
  class SimpleHouseBuilder implements HouseBuilder {
    private house: House;
  
    constructor() {
      this.house = new House();
    }
  
    buildWalls() {
      this.house.walls = 'Brick';
    }
  
    buildRoof() {
      this.house.roof = 'Flat';
    }
  
    buildWindows() {
      this.house.windows = 4;
    }
  
    buildDoors() {
      this.house.doors = 2;
    }
  
    getHouse() {
      return this.house;
    }
  }
  
  // Concrete Builder 2: FancyHouseBuilder
  class FancyHouseBuilder implements HouseBuilder {
    private house: House;
  
    constructor() {
      this.house = new House();
    }
  
    buildWalls() {
      this.house.walls = 'Marble';
    }
  
    buildRoof() {
      this.house.roof = 'Sloped';
    }
  
    buildWindows() {
      this.house.windows = 10;
    }
  
    buildDoors() {
      this.house.doors = 4;
    }
  
    getHouse() {
      return this.house;
    }
  }
  
  // Director
  class Contractor {
    private houseBuilder: HouseBuilder;
  
    constructor(houseBuilder: HouseBuilder) {
      this.houseBuilder = houseBuilder;
    }
  
    constructHouse() {
      this.houseBuilder.buildWalls();
      this.houseBuilder.buildRoof();
      this.houseBuilder.buildWindows();
      this.houseBuilder.buildDoors();
    }
  
    getHouse() {
      return this.houseBuilder.getHouse();
    }
  }
  
  // Client code
  const simpleHouseBuilder = new SimpleHouseBuilder();
  const contractor1 = new Contractor(simpleHouseBuilder);
  contractor1.constructHouse();
  const simpleHouse = contractor1.getHouse();
  simpleHouse.displayInfo();
  
  const fancyHouseBuilder = new FancyHouseBuilder();
  const contractor2 = new Contractor(fancyHouseBuilder);
  contractor2.constructHouse();
  const fancyHouse = contractor2.getHouse();
  fancyHouse.displayInfo();

