import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DepartmentdisplayComponent } from './departmentdisplay/departmentdisplay.component';
import { AdddeptComponent } from './departmentdisplay/adddept/adddept.component';
import { routing } from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentdisplayComponent,
    AdddeptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     routing,
      NgbModule,
       NgbPaginationModule,
        NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

















// @NgModule({
//   ...
//   imports: [NgbModule, ...],
//   ...
// })
// export class YourAppModule {
// }
