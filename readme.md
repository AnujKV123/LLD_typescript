# TypeScript + Design Patterns Overview

## ⚙️ TypeScript Setup

To set up a TypeScript project from scratch:

1. Initialize npm project:
   ```bash
   npm init -y

2. Install TypeScript:
    ```bash
    npm install typescript --save-dev

3. Create tsconfig.json:
    ```bash
    npx tsc --init

4. Your project structure may look like:
    ```bash
    /src
    └── index.ts
    tsconfig.json
    Compile with:

5. Compile with:
    ```bash
    npx tsc

6. To run TypeScript with Node.js, install ts-node: 
    ```bash
    npm install ts-node

# 🎨 Design Patterns in TypeScript
Design Patterns are typical solutions to common software design problems. They help make code more flexible, maintainable, and scalable.

## 🔧 Creational Design Patterns

### 🏭 Factory Pattern
Provides a method for creating objects without specifying their exact class.
Used when the client shouldn't need to know the exact class of the object.

### 🧰 Abstract Factory Pattern
Produces families of related or dependent objects without specifying their concrete classes.
Useful when systems need to be independent of how their objects are created.

### 🧱 Builder Pattern
Separates object construction from its representation.
Ideal for constructing complex objects step-by-step.

### 🧬 Prototype Pattern
Clones existing objects instead of creating new instances.
Useful when object creation is costly and similar objects are needed.

### 🕴️ Singleton Pattern
Ensures a class has only one instance and provides a global access point to it.
Ideal for config managers, logging services, etc.

## 🏗️ Structural Design Patterns

### 🔌 Adapter Pattern
Allows incompatible interfaces to work together.
Useful when integrating new components into existing codebases.

### 🌉 Bridge Pattern
Separates abstraction from implementation so both can evolve independently.
Good for decoupling layers in large applications.

### 🌳 Composite Pattern
Composes objects into tree structures to represent part-whole hierarchies.
Makes individual and group operations uniform.

### 🎨 Decorator Pattern
Adds responsibilities to objects dynamically without modifying their code.
Great for adding features to UI elements or enhancing behavior.

### 🎭 Facade Pattern
Provides a simplified interface to a complex subsystem.
Ideal for encapsulating APIs or legacy systems.

### 🪶 Flyweight Pattern
Reduces memory usage by sharing common object data.
Best for large-scale systems with many similar objects (e.g., game sprites).

### 🕵️‍♂️ Proxy Pattern
Acts as a placeholder for another object to control access.
Useful for lazy loading, access control, and logging.

## 🧠 Behavioral Design Patterns

### 🔁 Iterator Pattern
Provides a way to access elements of a collection sequentially.
Useful for abstracting collection traversal logic.

### 👀 Observer Pattern
Defines a one-to-many dependency where objects are notified of state changes.
Great for implementing event systems or data binding.

### 🧠 Strategy Pattern
Allows selecting algorithms at runtime.
Perfect for interchangeable logic like sorting, payment processing, etc.

### 🕹️ Command Pattern
Encapsulates a request as an object.
Used for queuing tasks, undo/redo operations, etc.

### 🌀 State Pattern
Allows an object to alter its behavior when its internal state changes.
Often used in state machines and UI systems.

### 📝 Template Method Pattern
Defines the skeleton of an algorithm, deferring steps to subclasses.
Useful for enforcing a workflow while allowing customization.

### 🧾 Visitor Pattern
Allows adding new operations to object structures without modifying them.
Works well with hierarchies like ASTs and document processing.

### 🧭 Mediator Pattern
Centralizes complex communications between objects.
Reduces tight coupling and simplifies object collaboration.

### 🧳 Memento Pattern
Captures and restores an object’s internal state without violating encapsulation.
Handy for implementing undo features.

### 🔗 Chain of Responsibility Pattern
Passes a request along a chain of handlers until one processes it.
Promotes decoupled and flexible request processing.


###
> Built with ❤️ to help you explore TypeScript and master essential software design patterns.  If you find this content helpful, please consider starring ⭐ the repository — your support means a lot! 🙏