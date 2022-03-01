import faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    markerContent(): string {
        return `
        <div>
        <h1>User Name: ${this.name}</h1>
        </div>
        `;
    }
}