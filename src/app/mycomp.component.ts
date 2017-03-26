import {Component} from '@angular/core';

@Component({
  selector: 'mycomp',
  template: `<h1>My custom component </h1>
<!--INTERPOLATION BINDING-->
            <h2>{{title}}</h2>
<!--ATTRIBUTE BINDING-->
            <img [src]="imageLink" />
            <br>
<!--BINDING FROM VIEW TO COMPONENT-->
            <button (click)="runClick()">Click</button><br /><br />
<!--TWO WAY DATA BINDING-->
            <label>TWO WAY DATA-BINDING: </label>
            <input type="text" [(ngModel)]="note" (keyup.enter)="typeSmtg($event)">
            {{note}}`
})

export class MyComponent{
  private title: string;
  private imageLink: string;
  private note: string;

  constructor(){
    this.title = 'Hello World!';
    this.imageLink = "http://lorempixel.com/400/300";
    this.note;
  }

  runClick(){
    console.log("You clicked...");
  }

  typeSmtg(e){
    console.log(e.target.value);
  }
}
