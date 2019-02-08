export interface User 
{
    name: string;  //required fiels (minimum 5 characters)
    address: {
        street: string; 
        postcode: string; 
    }
}