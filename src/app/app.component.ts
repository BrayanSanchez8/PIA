import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseauthService } from './services/firebaseauth.service';
//import { NotificationsService } from './services/notifications.service';

import { Plugins, StatusBarStyle } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  admin = false;

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar,
    private firebaseauthService: FirebaseauthService,
    //private notificationsService: NotificationsService
    ) {
    this.initializeApp();
  }

  initializeApp() {

      this.platform.ready().then(() => {

        // SplashScreen.hide();
        // StatusBar.setBackgroundColor({color: '#ffffff'});
        // StatusBar.setStyle({
        //   style: StatusBarStyle.Light
        // });

        // this.statusBar.styleDefault();
        // this.splashScreen.hide();
        this.getUid();
      });
  }


  getUid() {
      this.firebaseauthService.stateAuth().subscribe( res => {
            if (res !== null) {
                if (res.uid === 'aGbcYC0X9xfi9i6bEMNMJitwTK03')  {
                    this.admin = true;
                } else {
                   this.admin = false;
                }
            } else {
              this.admin = false;
            }
      });
  }
}

