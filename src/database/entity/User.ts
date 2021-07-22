import {UserInterface} from "../../interface/UserInterface";

export interface Customer extends UserInterface {
    name: string,
    email: string,
    password: string
}