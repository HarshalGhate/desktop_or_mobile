import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobile_or_desk';
  constructor(private deviceService: DeviceDetectorService){this.epicFunction();}
  deviceInfo :any;
  isMobile:any
  isDesktopDevice:any
  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
     this.isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
     this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}
