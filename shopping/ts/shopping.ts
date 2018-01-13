/// <reference path="./libs/index.d.ts" />
import { ProductRepository } from "./product-repository";
import { Product } from "./product";

// Định nghĩa thành 1 hằng số,
namespace MDefine
{
	export const ELM_LIST_PRODUCT : string = "#list-product";
	export const ELM_NOTIFICATION : string = "#mnotification";
	export const ELM_CART_BODY : string = "#my-cart-body";
	export const ELM_CART_FOOTER : string = "#my-cart-footer";

}
let productRepository = new ProductRepository();
let products : Product[] = productRepository.getItems();

//console.log(products);

/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/

// Hàm hiển thị danh sách sản phẩm.
function showListProduct()
{
	$(MDefine.ELM_LIST_PRODUCT).html(productRepository.showItemInHTML());
}

// Hàm update sản phẩm
function showNotification(str:string) : void
{
	$(MDefine.ELM_NOTIFICATION).html(str);
}

function showCart()
{
	$(MDefine.ELM_CART_BODY).html("");
	$(MDefine.ELM_CART_FOOTER).html("");
}

// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function(){
	// Hiển thị danh sách các sản phẩm
	showListProduct();

	// Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
	showCart();

	// Update thông báo
	showNotification("Ready to buy product");

})