import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { NgModule } from '@angular/core';
import { isEmpty } from 'rxjs';
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
username : string = 'any';
buttonusedornot : boolean = false;
buttonused(){
  if(this.username.length==0)
  {
    this.buttonusedornot=true;
  }
  else
  {
    this.buttonusedornot=false;
  }
  return this.buttonusedornot
}
onuserclick()
{
  this.username=""
}
ngOnInit(){

}

};