import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {

  constructor(private http:HttpClient){

  }

  productdata:any[]=[];
    showdata:boolean=false;


  viewdata(){

    this.showdata=true;
    this.http.get<any[]>("http://localhost:3000/products")
    .subscribe(data=>{
      this.productdata=data;
    });

  }

}
