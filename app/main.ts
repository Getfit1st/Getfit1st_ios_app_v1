import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import { UserService } from "./shared/user/user.service";

/*import firebase = require("nativescript-plugin-firebase");

firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  persist: false,
  storageBucket: 'gs://giftler-f48c4.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      console.log("User info", data.user.uid);
    }
    else {
      console.log("User not logged in ");
    }
  }
}).then(
  function (instance) {
    console.log("firebase.init done");
  },
  function (error) {
    console.log("firebase.init error: " + error);
  }
  );
  */
platformNativeScriptDynamic().bootstrapModule(AppModule);
