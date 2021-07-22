export interface UserInterface {
    id: number
}

export interface User extends UserInterface {
    name: string,
    email: string,
    password: number
}