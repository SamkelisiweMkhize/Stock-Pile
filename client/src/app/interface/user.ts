export interface User {
    _id?: string;
    username?: string;
    email: string;
    password?: string;
}


export interface UserRequest {
    message: string;
    user: User
}