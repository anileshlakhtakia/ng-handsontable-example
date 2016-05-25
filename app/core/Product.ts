import { ProductDetails } from './ProductDetails';
export class Product {
    ProductId: number;
    Name: string;
    Description: string;
    Details: Array<ProductDetails>

    constructor() {
        this.Name = "";
        this.Description = "";
    }
}