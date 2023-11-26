import { randomUUID } from "node:crypto"

export class Contact {
    readonly id: string;
    fullName: string;
    email: string;
    telephone: string;
    register_date?: string;
    clientId: string;

    constructor() {
        this.id = randomUUID();
        this.register_date = new Date().toISOString();  
    }
}