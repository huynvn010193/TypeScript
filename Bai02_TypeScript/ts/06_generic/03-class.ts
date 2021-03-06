// Class định nghĩa 1 sản phẩm nào đó gồm: ID, NAME, PRICE
// Các giá trị ID, NAME, PRICE: có thể linh loạt bị thay đổi.
// ID, NAME, PRICE : string-string-number
// ID, NAME, PRICE : number-string-string
// ID, NAME, PRICE : string-number-boolean

class Product<A,B,C>
{
	id: A;
	name: B; 
	price: C;
	
	constructor(id:A,name:B,price:C)
	{
		this.id = id;
		this.name = name;
		this.price = price;
	}

	showProductInfo()
	{
		console.log(`${this.id} - ${this.name} - ${this.price}`);
	}
}

let product1 = new Product<string,string,number>("ID1","Product",20);
let product2 = new Product<number,string,string>(12,"Product2","20 USD");
let product3 = new Product<string,number,boolean>("12",20,true);

product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();