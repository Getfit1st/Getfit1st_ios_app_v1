import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUICalendarModule } from "nativescript-telerik-ui-pro/calendar/angular";

import { AppComponent } from "./app.component";
import { TabbedviewComponent } from "./shared/tabbedview/tabbedview.component";
import { routes, navigatableComponents } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    TabbedviewComponent,
    ...navigatableComponents
    ],

  bootstrap: [AppComponent],

  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptUICalendarModule,
    NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
    
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
