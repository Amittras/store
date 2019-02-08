import { Component, OnInit } from '@angular/core';

import { User } from './user.interface'; //imported from new 'ts' file. 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My-App';
  public user: User;  //our model
  ngOnInit()
  {
    this.user={
      name: "", 
      address: {
        street:"", postcode: '411057' //default value
      }
    };
  }

  save(model:User, isValid: boolean)
  {
    //checking if model is valid
    //if valid, call API to save customer. 
    console.log(model, isValid); 
  }
}
