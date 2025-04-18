

// 5. Singleton pattern
//     blog: https://refactoring.guru/design-patterns/singleton
//     blog + code: https://medium.com/@alessandro.traversi/designing-singleton-patterns-in-typescript-by-examples-8732ab07040d


class Singleton {
    private static instance: Singleton;  
  
    private constructor() {
      // Private constructor to prevent direct instantiation
    }  
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }  
  
    public doSomething(): void {
      console.log("Singleton instance performing an action.");
    }
  }
  
  // Usage:
  const instance1 = Singleton.getInstance();
  instance1.doSomething();
  
  const instance2 = Singleton.getInstance();
  instance2.doSomething();
  
  console.log(instance1 === instance2); // true