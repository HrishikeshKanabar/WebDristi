export interface User {
    uid: string;
    firstName:string;
    lastName: string;
    password:string;
    confirmPassword:string;
    emailVerified: boolean;
    email:string;
    created:Date;
    lastModified:Date;

 }
