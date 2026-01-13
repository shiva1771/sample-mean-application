import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent {

  constructor(private http:HttpClient){

  }

  id:String='';

  deleteproduct(form:any){

    this.id=form.value.id;
    try{
    this.http.delete(`http://localhost:3000/products/${this.id}`)
    .subscribe({
      next :()=>{
        alert("Deleted Sucessfully");
      },
      error:err=>{
        alert(err);
      }
    })
  }
  catch(err){
    alert("Enter Valid id");
  }
  }

}
