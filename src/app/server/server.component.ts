import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../Shared/server';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color:string;
  buttonText: string;

  @Input() server: Server;
  
  ngOnInit() {
    this.setServerAction(this.server.isOnline);
  }

  setServerAction(isOnline: boolean){
    if(isOnline){
      this.server.isOnline = true;
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    }else{
      this.server.isOnline = false;
      this.color = '#FF6B6B';
      this.buttonText = 'Start';
    }
  }

  toggleStatus(onlineStatus: boolean){
    this.setServerAction(!onlineStatus);
  }

}
