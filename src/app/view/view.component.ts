import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private api:ApiService)
  {
    api.viewemployee().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
