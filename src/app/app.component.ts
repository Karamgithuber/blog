import { Component } from '@angular/core';
// import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  // imports: [NgbCollapseModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog2';
  Displayval:any="";
  Counter=0;
  show=true;
  shows=false;
  color="red";
  users=['karam','fazal','hashir','hadi']
  
  user=[
    {Name:'karam',email:'karam@g.com',acounts:['facebook','utube','twitter']},
    {Name:'karam12',email:'karam@g112.com',acounts:['facebook','utube','twitter']},
    {Name:'karam34',email:'karam@g34.com',acounts:['facebook','utube','twitter']},
    {Name:'karam45',email:'karam@g45.com',acounts:['facebook','utube','twitter']},
    {Name:'karam111113',email:'karam@g123.com',acounts:['facebook','utube','twitter']}
  ]
  getData(name:any){
    console.info(name);
    console.error('no error');
    this.Displayval=name
  }
  counter(type:any){
   type==="add" ?this.Counter++:this.Counter--
  }
  counter1(){
    this.Counter--
  }
  counter2(){
    this.Counter=0;
  }
}
