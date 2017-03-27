import {Component} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {FilterPipe} from './filter.pipe';

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
            {{note}}
            <hr />
<!--TEMPLATE DIRECTIVES-->
            <h2 *ngIf="showHeading">Template Directives:</h2>
            <span [ngSwitch]="name1">
              <span *ngSwitchCase="'vish'">Vishesh Thakur (Case matches with name)</span>
              <span *ngSwitchCase="'Dullu'">Vishesh Singh</span>
              <span *ngSwitchDefault>None of the cases match with name</span>
            </span>
            <br />
            <br />
            <span [ngSwitch]="name2">
              <span *ngSwitchCase="'vish'">Vishesh Thakur (Case matches with name)</span>
              <span *ngSwitchCase="'Dullu'">Vishesh Singh</span>
              <span *ngSwitchDefault>None of the cases match with name</span>
            </span>
            <br />
            <h3>List of Colors:</h3>
            <ul>
              <li *ngFor = "let c of color">{{c}}</li>
            </ul>
            <hr />
<!--PIPING AND FILTERING-->
            <h3><strong>Uppercase:</strong> {{fullName | uppercase}}</h3>
            <h3><strong> Lowercase:</strong>  {{fullName | lowercase}}</h3>
            <!--<h3>{{fullName | replace:'Lionel':'LioNel'}}</h3>-->

            <h4>{{birthday | date}}</h4>
            <h4>Short Date: {{birthday | date:'shortDate'}}</h4>
            <h4>Long Date{{birthday | date:'longDate'}}</h4>
            <h4>Short Time: {{birthday | date:'shortTime'}}</h4>

            <h4>Filtering:</h4>
            <label>Search Tasks: </label><input type="text" [(ngModel)]="term"/>
            <ul>
              <li *ngFor="let task of tasks | filter:term">{{task.name}}</li>
            </ul>
            <hr />
            `,

})

export class MyComponent{
  //Variables for components and data binding
  private title: string;
  private imageLink: string;
  private note: string;
  //Variables for Template Directives
  private showHeading: boolean;
  private name1: string;
  private name2: string;
  private color: any;
  //Variables for Piping
  private fullName: string;
  private birthday: Date;
  private tasks: any[];

  constructor(){
    //Variables for components and data binding
    this.title = 'Hello World!';
    this.imageLink = "http://lorempixel.com/400/300";
    this.note;
    //Variables for Template Directives
    this.showHeading = true;
    this.name1 = "vish";
    this.name2 = "whatever";
    this.color = ['Red', 'Blue', 'Yellow', 'Green'];
    //Variables for Piping
    this.fullName = "Lionel Messi";
    this.birthday = new Date(1993, 3, 19);
    this.tasks = [{name:'Wash dishes'},{name:'Paint the wall'},{name:'Cook food'}];
  }

  runClick(){
    console.log("You clicked...");
  }

  typeSmtg(e:any){
    console.log(e.target.value);
  }
}
