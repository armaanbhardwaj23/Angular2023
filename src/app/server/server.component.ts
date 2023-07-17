import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    
})
export class ServerComponent{
    server_id:number=87
    server_status:string='active'
    getServerStatus(){
       return this.server_status;
}

     
}