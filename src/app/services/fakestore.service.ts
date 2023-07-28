import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { FakestoreProductContract } from "../contracts/FakestoreProductContract";
import { FakestoreComponent } from "projects/shopping/src/app/components/fakestore/fakestore.component";


@Injectable({
    providedIn: 'root'
})
export class FakestoreService{
       [x: string]: any;
       constructor(private http:HttpClient){

       }

       public GetProducts():Observable<FakestoreProductContract[]>{
        return this.http.get<FakestoreProductContract[]>("http://fakestoreapi.com/products");
       }

       public GetCategories():Observable<string[]>{
        return this.http.get<string[]>("http://fakestoreapi.com/products/categories")
       }

       public GetSpecificCategory(categoryName:string):Observable<FakestoreProductContract[]>{
         return this.http.get<FakestoreProductContract[]>(`http://fakestoreapi.com/products/category/${categoryName}`)
       }
       public  GetByProductId(id:number):Observable<FakestoreProductContract>{
         return this.http.get<FakestoreProductContract>(`http://fakestoreapi.com/products/${id}`);
       }

       public LoadSpecificCategory(categoryName:string):Observable<null>{
        return this.http.get<null>(`http://fakestoreapi.com/products/category/${categoryName}`);
       }
}