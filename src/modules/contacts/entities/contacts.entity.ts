import { randomUUID } from "node:crypto"

export class Contact {
    readonly id: string;
    name: string;
    email: string;
    phone: string;
    register_date: string;
    client_id?: string;

    constructor() {
        this.id = randomUUID();
    }
}