import faker from "@faker-js/faker";

export class Company {
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    markerContent(): string {
        return `
        <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h2>Catchphrase: ${this.catchPhrase}</h2>
        </div>
        `
    }
}