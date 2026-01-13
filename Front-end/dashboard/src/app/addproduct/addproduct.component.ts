import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private http:HttpClient){

  };

  
  addproduct(form:any){
    const add={
      pid:form.value.pid,
      name:form.value.name,
      price:form.value.price,
      brand:form.value.brand
    };

    this.http.post("http://localhost:3000/products",add)
    .subscribe(()=>alert("Data posted sucessfully"));

    form.reset();

  }

}
