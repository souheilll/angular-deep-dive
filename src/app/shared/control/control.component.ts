import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    // class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  // NOTE!!!
  // using the host object or HostBinding decorator are using to add 
  // a class in this exemple we have control in the host element 
  // if we use it we need to remove the control class from this template 

  // @HostBinding('class') className='control'

   // NOTE!!!
  // we have also a hostListener decorator wich is for listenig to event in this 
  // this component  

  // @HostListener('click')  onClick(){
  //   console.log('clicked')
  // }
private el=inject(ElementRef)
label=input.required<string>()

onClick(){
  console.log(this.el)
}
}
