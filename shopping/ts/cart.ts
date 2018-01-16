import { CartItem } from "./cart-item";
import { Product } from "./product";

export class Cart 
{
	private cartItems: CartItem[] = []

	// Phương thức them sản phẩm
	public addProduct(product: Product, quantity:number = 1):void{
		// tạo 1 đối tượng cartItem mới 
		let cartItem = new CartItem(product,quantity);
		let position : number = this.getProductPosition(product);
		// Thêm đối tượng đó vào mảng cartItems đã có sẵng
		if(position > -1)
		{
			// Nếu đã tồn tại thì cập nhật lại số lượng của nó
			this.cartItems[position].quantity += quantity;
		}
		else
		{
			// Nếu chưa tồn tại thì thêm vô,
			this.cartItems[this.cartItems.length] = cartItem;
		}
		console.log(this.cartItems);
	}

	// Phương thức dùng để kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa ?
	// => Nhận 1 sản và xem sản phẩm chỉ số bao nhiêu trong mảng cartItems
	private getProductPosition(product: Product):number{
		let total :number = this.cartItems.length;
		for(let i : number = 0; i < total ; i++)
		{
			let idcheck : number = Number(this.cartItems[i].product.id);
			if(idcheck == product.id)
			{
				return i;
			}
		}
		return -1;
	}

	public updateProduct(product: Product, quantity:number = 1):void{

	}

	removeProduct(product:Product):void{

	}

	public isEmpty() : boolean
	{
		return true;
	}

	public getTotalQuantity ():number
	{
		return 10;
	}
	
	public getTotalPrice (): number
	{
		return 20;
	}

	public showCartBodyInHTML () :string
	{
		return "123";
	}

	public showCartFooterInHTML () :string
	{
		return "123";
	}
}
