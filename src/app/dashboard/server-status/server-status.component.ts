import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit , OnDestroy {
  currentStatus: 'offline'|'online'|'unknown'  = 'offline';
  interval?: ReturnType<typeof setInterval>

  constructor(){
  
  }
  
  ngOnInit(): void {
      this.interval=setInterval(()=>{
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

  ngOnDestroy(): void {
    clearInterval(this.interval) 
  }
}
