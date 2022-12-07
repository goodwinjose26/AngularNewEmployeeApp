import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    ViewComponent,
    SearchComponent
    //ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



