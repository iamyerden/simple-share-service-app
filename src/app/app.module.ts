import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentOneComponent } from './layout/parent-one/parent-one.component';
import { ParentTwoComponent } from './layout/parent-two/parent-two.component';
import { ChildOneComponent } from './layout/parent-one/child-one/child-one.component';
import { ChildTwoComponent } from './layout/parent-one/child-two/child-two.component';
import { ChildThreeComponent } from './layout/parent-two/child-three/child-three.component';
import {LoggingService} from './services/logging.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
