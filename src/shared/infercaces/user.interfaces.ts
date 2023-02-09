export interface User {
    id: number;
    firstName: string;
    lastName: string;
    logoUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUser extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
}