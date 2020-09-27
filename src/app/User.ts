export class User{
    id : any;
    name : string;
    username : string;
    email: string;
    address: Address;
    phone : string;
    website: string;
    company: Commpany
}
export class Address{
    street: string;
    suite : string;
    city : string;
    zipcode : string;
    geo : Geo;
}
export class Geo{
    lat : string;
    lng : string;
}
export class Commpany{
    name : string;
    catchPhrase: string;
    bs:string;
}

