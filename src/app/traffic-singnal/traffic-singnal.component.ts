import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-singnal',
  templateUrl: './traffic-singnal.component.html',
  styleUrls: ['./traffic-singnal.component.scss']
})
export class TrafficSingnalComponent {

  total_sides = 4;  // after 1 side is runing make " total_sides = 4 "
//    SIGNAL 1 
  green: number = 0 ;
  yellow: number = 0 ;
  red : number = 0 ;

//    SIGNAL 2 
  side_Two_Green : number = 0 ;
  side_Two_Red : number = 0 ;
  side_Two_Yellow : number = 0 ;

//    SIGNAL 3
  side_Three_Green : number = 0 ;
  side_Three_Red : number = 0 ;
  side_Three_Yellow : number = 0 ;

//    SIGNAL 4
  side_Four_Green : number = 0 ;
  side_Four_Red : number = 0 ;
  side_Four_Yellow : number = 0 ;
  
   isHideNumbers = true ; 
  Over_Time_Out? : any ;

  // Use NgStyle for direct manipulation
  greenLightStyle = { opacity: .3 };
  yellowLightStyle = { opacity: .3 };
  redLightStyle = { opacity: .3 };

constructor() { }


 ngOnInit(): void {
 }

start() {
// for side one 
 
// this.side_Two();
// this.side_Three();
// this.side_Four();


  this.red = 10;
  this.green = 4;
  this.yellow = 2
   
   this.Over_Time_Out  = setInterval(() => {

    
    // if( this.yellow === -1) {

    //   this.green = 4;
    //   this.yellow = 2;
    //   // this.start()
    //   // this.start()

    // }
  if (this.red !== 0   ) {
       this.red--;

        this.greenLightStyle.opacity = .3;
      this.yellowLightStyle.opacity = .3;
      this.redLightStyle.opacity = 1;
  } 
    
  if (this.green !== 0 && this.red === 0 ) { // this for green light ;
     

    this.yellowLightStyle.opacity = .3;
    this.redLightStyle.opacity = .3;
    this.greenLightStyle.opacity = 1;
    
    this.green-- ;


  }
  if( this.green === 0 && this.red === 0  ) { // this for yellow light after green = 0 ;


    this.greenLightStyle.opacity = .3;
    this.redLightStyle.opacity = .3;
    this.yellowLightStyle.opacity = 1;

    this.yellow--;
   
   
    if( this.yellow === 0  ){   // this for yellow light after yellow = 0  stop count down
        // this.Over_Time_Out =  clearInterval(this.Over_Time_Out);
        this.red = 10;
      this.green = 4;
      this.yellow = 2
          // this.Over_Time_Out // here we run signal timing from starting
     
    }

  }
  },1000)
  // this. side_Two();

}
 
  // public side_Two () {

  //   this.side_Two_Green = 3  
  //   this.side_Two_Red = 13 ;
  //   this.side_Two_Yellow =  2 ;
    


  //   let Over_Time_Out : any = setInterval(() => {

  //     if (this.side_Two_Red !== 0) {

  //          this.side_Two_Red--;

  //          this.greenLightStyle.opacity = .3;
  //          this.yellowLightStyle.opacity = .3;
  //          this.redLightStyle.opacity = 1;

  //     } 
        
  //     if (this.side_Two_Green !== 0 && this.side_Two_Red == 0 ) { // this for green light ;
         
  //       this.side_Two_Green-- ;

  //       this.greenLightStyle.opacity = 1;
  //       this.yellowLightStyle.opacity = .3;
  //       this.redLightStyle.opacity = .3 ;
  //     }
  //     if( this.side_Two_Green === 0 && this.side_Two_Red === 0 ) { // this for yellow light after green = 0 ;
    
  //       this.side_Two_Yellow--;

  //         this.greenLightStyle.opacity = .3;
  //         this.yellowLightStyle.opacity = 1;
  //         this.redLightStyle.opacity = .3;
    
  //       if( this.side_Two_Yellow === 0 ){   // this for yellow light after yellow = 0  stop count down
  //         // Over_Time_Out =  clearInterval(Over_Time_Out)
  //          this.side_Two_Red = 96 ;
    
  //       }
  //     }
  //     },1000)
  // // this.side_Three();

  //  }

  //  public side_Three () {

  //   this.side_Three_Green = 3;
  //   this.side_Three_Red = 27 ;
  //   this.side_Three_Yellow  = 2 ;

  //   this.side_Four()

  //   let Over_Time_Out : any = setInterval(() => {

  //     if (this.side_Three_Red !== 0) {
  //       this.side_Three_Red--;

  //       this.greenLightStyle.opacity = .3;
  //       this.yellowLightStyle.opacity = .3;
  //       this.redLightStyle.opacity = 1;

  //     } 
        
  //     if (this.side_Three_Green !== 0 && this.side_Three_Red == 0 ) { // this for green light ;
         
  //       this.side_Three_Green-- ;
        
  //       this.greenLightStyle.opacity = 1;
  //       this.yellowLightStyle.opacity = .3;
  //       this.redLightStyle.opacity = .3 ;
  //     }
  //     if( this.side_Three_Green === 0  ) { // this for yellow light after green = 0 ;
    
  //       this.side_Three_Yellow--;

  //       this.greenLightStyle.opacity = .3;
  //       this.yellowLightStyle.opacity = 1;
  //       this.redLightStyle.opacity = .3;
    
  //       if( this.side_Three_Yellow === 0 ){   // this for yellow light after yellow = 0  stop count down
  //         // Over_Time_Out =  clearInterval(Over_Time_Out)
  //         this.side_Three_Red = 96 ;

  //       }
  //     }
  //     },1000)
  //  }
  
  //  public side_Four(){

  //   this.side_Four_Green  = 3 ;
  //   this.side_Four_Red  = 41 ;
  //   this.side_Four_Yellow  = 2 ;

  //   let Over_Time_Out : any = setInterval(() => {

  //     if (this.side_Four_Red !== 0) {
  //       this.side_Four_Red--
  //     } 
        
  //     if (this.side_Four_Green !== 0 && this.side_Four_Red == 0 ) { // this for green light ;
         
  //       this.side_Four_Green-- ;
  //     }
  //     if( this.side_Four_Green === 0 && this.side_Four_Red === 0  ) { // this for yellow light after green = 0 ;
    
  //       this.side_Four_Yellow--;
    
  //       if( this.side_Four_Yellow === 0 ){   // this for yellow light after yellow = 0  stop count down
  //         // Over_Time_Out =  clearInterval(Over_Time_Out)
  //          this.side_Four_Red  = 96 ;
         

  //       }
  //     }
  //     },1000)
  //     // this.side_Four()

  //  }

}



