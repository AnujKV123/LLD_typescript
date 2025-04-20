

// 2. Bridge pattern
//     blog: https://refactoring.guru/design-patterns/bridge
//     blog + code: https://medium.com/@ibrahimsengun/typescript-bridge-design-pattern-85d6131410d9


// Implementor Interface
interface IUserImplementor {
    getUser(id: number): string;
    saveUser(id: number, name: string): void;
}

// Concrete Implementor
class MySQLImplementor implements IUserImplementor {
    getUser(id: number): string {
        return `MySQL: User with ID ${id}`;
    }

    saveUser(id: number, name: string): void {
        console.log(`MySQL: Saving User - ID: ${id}, Name: ${name}`);
    }
}

// Concrete Implementor
class MongoDBImplementor implements IUserImplementor {
    getUser(id: number): string {
        return `MongoDB: User with ID ${id}`;
    }

    saveUser(id: number, name: string): void {
        console.log(`MongoDB: Saving User - ID: ${id}, Name: ${name}`);
    }
}

// Abstraction Interface
interface IUserAbstraction {
    getUserInfo(id: number): string;
    saveUserInfo(id: number, name: string): void;
}

// Refined Abstraction
class BasicUser implements IUserAbstraction {
    private implementor: IUserImplementor
    constructor(implementor: IUserImplementor) {
        this.implementor = implementor
    }

    getUserInfo(id: number): string {
        return this.implementor.getUser(id);
    }

    saveUserInfo(id: number, name: string): void {
        this.implementor.saveUser(id, name);
    }
}

// Refined Abstraction
class PremiumUser implements IUserAbstraction {
    private implementor: IUserImplementor
    constructor(implementor: IUserImplementor) {
        this.implementor = implementor
    }

    getUserInfo(id: number): string {
        return `Premium ${this.implementor.getUser(id)}`;
    }

    saveUserInfo(id: number, name: string): void {
        console.log(`Premium user: Saving User - ID: ${id}, Name: ${name}`);
        this.implementor.saveUser(id, name);
    }
}

// Client

const mysqlImplementor = new MySQLImplementor();
const basicUserMySQL = new BasicUser(mysqlImplementor);

// MySQL: User with ID 1
console.log(basicUserMySQL.getUserInfo(1));

// MySQL: Saving User - ID: 2, Name: Anuj Verma
basicUserMySQL.saveUserInfo(2, 'Anuj Verma');


const mongoImplementor = new MongoDBImplementor();
const premiumUserMongoDB = new PremiumUser(mongoImplementor);

// Premium MongoDB: User with ID 3
console.log(premiumUserMongoDB.getUserInfo(3));

// Premium user: Saving User - ID: 4, Name: james bond
premiumUserMongoDB.saveUserInfo(4, 'james bond');