import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'offline'|'online'|'unknown'  = 'offline';

  constructor(){
  
  }
  
  ngOnInit(): void {
      setInterval(()=>{
     const rdm=Math.random()
     if(rdm<0.5){
       this.currentStatus='online'
     }
     else if(rdm<0.9){
            this.currentStatus='online'
     }
     else{
               this.currentStatus='unknown'
     }
    },5000)
  }
}
