

// 4. Prototype pattern
//     blog: https://refactoring.guru/design-patterns/prototype
//     blog + code: https://medium.com/@ibrahimsengun/typescript-prototype-design-pattern-5d73f90b158e



// Interface Prototype
interface IUserPrototype {
    clone(): IUserPrototype;
}

// ConcretePrototype 
class UserProfile implements IUserPrototype {
    private username: string;

    constructor(username: string) {
        this.username = username;
    }

    clone(): UserProfile {
        return new UserProfile(this.username);
    }

    getUsername(): string {
        return this.username;
    }

}

// SubclassPrototype 
class PremiumUserProfile extends UserProfile {
    private subLvl: string;

    constructor(username: string, subLvl: string) {
        super(username);
        this.subLvl = subLvl;
    }

    clone(): PremiumUserProfile {
        return new PremiumUserProfile(this.getUsername(), this.subLvl);
    }

    getSubLvl(): string {
        return this.subLvl;
    }
}

// Client 

const basicUser = new UserProfile("Anuj");
//Basic User: Anuj
console.log("Basic User:", basicUser.getUsername());

const clonedBasicUser = basicUser.clone();
//Cloned Basic User: Anuj
console.log("Cloned Basic User:", clonedBasicUser.getUsername());

const premiumUser = new PremiumUserProfile(clonedBasicUser.getUsername(), "Premium");
//Premium User: Anuj - Premium
console.log("Premium User:", premiumUser.getUsername(), "-", premiumUser.getSubLvl());




