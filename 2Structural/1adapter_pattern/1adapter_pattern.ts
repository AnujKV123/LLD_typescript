

// 1. Adapter pattern
//     blog: https://refactoring.guru/design-patterns/adapter
//     blog + code: https://medium.com/@ibrahimsengun/typescr   ipt-adapter-design-pattern-0baa9ed9b0fb
//     blog + code: https://dev.to/jmalvarez/adapter-pattern-in-typescript-2ffl



// Adaptee 
class APIData {
    fetchData(): any {
        return {
            data: {
                name: 'Anuj',
                age: 24,
                social: {
                    email: 'anuj@meta.com'
                },
            },
        };
    }
}

// Target
interface JustifiedData {
    name: string;
    age: number;
    email: string;
}

// Adapter
class Conventer implements JustifiedData {
    private apiData: APIData;

    constructor(apiData: APIData) {
        this.apiData = apiData;
    }

    get name(): string {
        return this.apiData.fetchData().data.name;
    }

    get age(): number {
        return this.apiData.fetchData().data.age;
    }

    get email(): string {
        return this.apiData.fetchData().data.social.email;
    }
}

// Client 
function displayData(data: JustifiedData) {
    console.log("Name: " + data.name);
    console.log("Age: " + data.age);
    console.log("Email: " + data.email);
}

const apiData = new APIData();
const adaptedData = new Conventer(apiData);
displayData(adaptedData); 

/*
Name: Anuj
Age: 24
Email: anuj@meta.com
*/