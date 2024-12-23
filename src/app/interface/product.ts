export interface Product {
    id?:number,
    name:string,
    description: string,
    price: number,
    stock: number
}

export interface EnviarProducto{
    name:string,
    description: string,
    price: number,
    stock: number
}




export interface RespProducto {
    id:  string;
    msg: Msg;
}

export interface Msg {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
}
