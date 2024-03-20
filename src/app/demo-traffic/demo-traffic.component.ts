import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-traffic',
  templateUrl: './demo-traffic.component.html',
  styleUrls: ['./demo-traffic.component.scss']
})
export class DemoTrafficComponent {


  constructor() { };

  ngOnInit(): void {
    
  };
  
   public startTrafficSignal ()  {
    let green : any =document.getElementById("green");
    let red : any =document.getElementById("red");
    let yellow : any =document.getElementById("yellow");

    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },2000);

    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },7000);

    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },12000);
}

 timer=setInterval( () => {
    this.startTrafficSignal();
},3000);
}

