import { Component } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent {
  constructor(private data:FakestoreService){

  }
  public Product:FakestoreProductContract={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  }
  public LoadProduct(id:number):void{
   
   this.data.GetByProductId(id).subscribe(data=>this.Product=data);
  }
  
  ngOnInit(): void {
      this.LoadProduct(1);

  }
  public count:number=1;
  public NextClick():void{
    this.count++;
    this.LoadProduct(this.count);
  }

  public PreviousClick():void{
    this.count--;
    this.LoadProduct(this.count);
  }


}
