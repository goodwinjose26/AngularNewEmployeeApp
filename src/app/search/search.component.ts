import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService,private router:Router) {}
  empcode=""
  sdata:any=[]
readValue=()=>
{
  let data =
  {
    "empcode":this.empcode
  }
  console.log(data)
  this.api.readValue(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
         alert("no data")
      }
      else {

        this.sdata=response

      }
    }
  )
}

deleteBtnClick=(id:any)=>
{
  let data:any={
    "id":id
  }
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>
      {
        console.log(generated)
        if(generated.status == "success")
        {
          alert("Employee Deleted")
          this.router.navigate(["/view"])
        }
        else{
          alert("error")
        }
      }
    )
    
     
         
}


}
