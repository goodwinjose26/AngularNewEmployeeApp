import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  empcode=""
  name=""
  designation=""
  salary=""
  cmpname=""
  mobno=""
  username=""
  password=""

  constructor(private api:ApiService) {}

  addemployee=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"cmpname":this.cmpname,"mobno":this.mobno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("added")
          this.cmpname="",this.designation="",this.empcode="",this.mobno="",this.password="",this.username="",this.salary="",this.name=""
        }
        else
        {
          alert("error")
        }
      }
    )
  }

}
