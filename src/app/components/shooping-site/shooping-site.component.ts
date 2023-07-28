import { Component } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-shooping-site',
  templateUrl: './shooping-site.component.html',
  styleUrls: ['./shooping-site.component.css']
})
export class ShoopingSiteComponent {
  constructor(private data:FakestoreService){ }
  
  public Categories:string[] = [];
  public Products:FakestoreProductContract[] = [];
  public CartItems:FakestoreProductContract[]= [];
  public CartItemsCount:number = 0;
  public isCartVisible:boolean =false;

  public LoadCategories():void {
     this.data.GetCategories().subscribe(data=>this.Categories=data);
  }
  public LoadProducts(url:string, categoryName?:string):void {
    if(categoryName){
        this.data.GetSpecificCategory(categoryName).subscribe(data=>this.Products=data);
    }
      this.data.GetProducts().subscribe(data=>this.Products=data);
  }
  public GetCartItemsCount():void {
      this.CartItemsCount = this.CartItems.length;
  }

  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProducts(`http://fakestoreapi.com/products`);
    this.GetCartItemsCount();
  }
  public CategoryChanged(categoryName:string):void {
      if(categoryName=="all"){
        this.LoadProducts(`http://fakestoreapi.com/products`);
      } else {
        this.LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`, categoryName);
      }
  }

  public AddToCartClick(id:number):void {
      this.data.GetByProductId(id).subscribe(data=>{
        this.CartItems.push(data);
        this.GetCartItemsCount();
        alert(`${data.title} \nAdded to Cart`);
  
      }
      
      );
      
  }
  public ToggleCart():void {
      this.isCartVisible = (this.isCartVisible==false)?true:false;
  }
  public RemoveClick(index:number):void {
      var flag = confirm('Are you sure want to delete?');
      if(flag==true) {
        this.CartItems.splice(index,1);
        this.GetCartItemsCount();
      }
  }

}
