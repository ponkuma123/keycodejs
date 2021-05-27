import { isFormattedError } from '@angular/compiler';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  count=1;

  // keyPressNumbers(event) {
  //   console.log(event.which)
  //   var charCode = (event.which) ? event.which : event.keyCode;
  //   console.log(event.keycode)
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     console.log("false");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // keyPressAlpha(event) {

  //   var inp = String.fromCharCode(event.keyCode);

  //   if (/[a-zA-Z]/.test(inp)) {
  //     return true;

  //   } else {
  //     event.preventDefault();
  //     console.log("false");   
  //     return false;
      
  //   }
  // }
  // keyPressAlphanumeric(event)
  // {
  //   var inp = String.fromCharCode(event.keyCode);

  //   if (/[a-zA-Z0-9]/.test(inp)) {
  //     return true;
  //   } else {
  //     event.preventDefault();
  //     console.log("false");
  //     return false;
      
  //   }
  // }
  gstvaliad(event)
  {
    
    var inp = String.fromCharCode(event.keyCode);
    
    if ((/[a-zA-Z]/.test(inp)) && (this.count<=2 || this.count>8) ) {

      this.count++
      console.log(this.count<=2)
      console.log(this.count>8)
      console.log(this.count)
      return true;
    }
    else if((event.keyCode < 48 || event.keyCode > 57) && (this.count>2 && this.count<=8))
    {
      if(this.count<=2)
      {
        return false;
      }
      this.count++
      console.log(this.count)
      return true;
      
    }
    else {
      event.preventDefault();
      //console.log("false");
      return false;

    }
  }

}
