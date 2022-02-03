export class Product {
    id:number;
    productName:string;
    description:string;
    price:number;
    imagepath:string;

    constructor(id:number,
        productName:string,
        description:string='',
        price:number=0,
        imagepath:string="assets/tomjerry.jpg" ,
        )
    {
        this.id=id;
        this.productName=productName;
        this.description=description;
       
        this.price=price;
        this.imagepath=imagepath;
    }

}
