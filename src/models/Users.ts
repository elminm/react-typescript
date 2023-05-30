export interface Users {
    id:number;
    name:string;
    username:string;
    email:string;
    address: Address
}
export interface Address {
    street: string;
    city:string;
}
export interface myState {
    loading:boolean;
    users: Users | undefined
    error:"string" | undefined
}
export interface userReducer {
    userReducer : myState
}