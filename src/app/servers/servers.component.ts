import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewserver:boolean=false
  createserver:string='Nothing was created'
  servername:string='henry'
  constructor() { 
  setTimeout(
    ()=>{this.allownewserver=true;
    },2000
  )
  }
  

  ngOnInit() {
  }
  onCreateServer(){
    this.createserver='New server created' + this.servername;
  }
  onUpdateServerName(event:Event){
   this.servername=(<HTMLInputElement>event.target).value;
  }
}
1208160036429854