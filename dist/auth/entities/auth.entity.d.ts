export declare enum UserRole {
    ADMIN = "Admin",
    SELLER = "Seller",
    STOREMAN = "Storeman",
    ACCOUNTANT = "Accountant"
}
export declare class User {
    id: number;
    fName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: UserRole;
    address: string;
    profileImage: string;
    createdAt: Date;
    updatedAt: Date;
}
