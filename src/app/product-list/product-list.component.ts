import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 name:string="IPhone 15";
 price:number=999;
 color:string="Red";

 IphoneProduct={
    name:"IPhone 7",
    price:300,
    color:"Red",
    Discount:9.5,
    itemStock:5
 }


 getDiscountedPrice()
 {
  return this.IphoneProduct.price-(this.IphoneProduct.price * this.IphoneProduct.Discount/100)
 }

}
